/**
 * Pages as edited in the site editor (/admin): one JSON file per page in ./pages-json (the source of truth).
 * Translations: ./i18n/strings.json is the list of English source strings and ./i18n/<lang>.json holds the same
 * list translated. A page gets a /<lang>/… version when every one of its strings has a translation.
 */
import source from './i18n/strings.json';
const files = import.meta.glob<any>('./pages-json/*.json', { eager: true, import: 'default' });
const langFiles = import.meta.glob<any>('./i18n/??.json', { eager: true, import: 'default' });

// Table rows are stored as { cells: [...] } because the editor cannot edit lists of lists.
const unwrap = (v: any): any =>
  Array.isArray(v) ? v.map(unwrap)
  : v && typeof v === 'object'
    ? (Array.isArray(v.cells) && Object.keys(v).length === 1 ? v.cells : Object.fromEntries(Object.entries(v).filter(([, x]) => x !== null && x !== '').map(([k, x]) => [k, unwrap(x)])))
    : v;
export const pages: Record<string, any> = Object.fromEntries(
  Object.values(files).filter((p) => p?.path && Array.isArray(p.sections)).map((p) => [p.path.endsWith('/') ? p.path : p.path + '/', unwrap(p)]),
);

// ---- translations
export const dict: Record<string, Map<string, string>> = {};
export const uiStrings: Record<string, Record<string, string>> = {};
for (const [file, data] of Object.entries(langFiles)) {
  const lang = file.match(/([a-z]{2})\.json$/)![1];
  dict[lang] = new Map((source as string[]).map((s, i) => [s, data.strings?.[i]] as [string, string]).filter(([, v]) => v));
  uiStrings[lang] = data.ui ?? {};
}
export const tr = (lang: string, s: string) => dict[lang]?.get(s) ?? s;

const SKIP = new Set(['href', 'image', 'src', 'type', 'form', 'name', 'id', 'path', 'lang', 'cols', 'locale', 'file', 'alternates', 'variant']);
const isText = (v: string) => /[A-Za-z]{2}/.test(v) && !/^(\/|https?:|#)/.test(v);
function translate(v: any, lang: string, key: string | null, miss: string[]): any {
  if (typeof v === 'string') { if (key && SKIP.has(key) || !isText(v)) return v; const t = dict[lang].get(v); if (!t) miss.push(v); return t ?? v; }
  if (Array.isArray(v)) return v.map((x) => translate(x, lang, key, miss));
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === 'options' && Array.isArray(x)
    ? x.map((o: string) => { const t = dict[lang].get(o); if (!t) miss.push(o); return { value: o, label: t ?? o }; })
    : translate(x, lang, k, miss)]));
  return v;
}
/** Pages that already exist in a language under their own address. */
const OWN: Record<string, Record<string, string>> = {
  et: { '/apartment-buildings/': '/et/kortermajad/', '/knowledge/general-meeting/': '/et/uldkoosolek/' },
  lt: { '/daei/': '/lt/daei/' },
};
const english = Object.entries(pages).filter(([, p]) => (p.lang ?? 'en') === 'en');
const made: Record<string, Record<string, string>> = {}; // lang -> english path -> localized path
for (const lang of Object.keys(dict)) {
  made[lang] = { ...(OWN[lang] ?? {}) };
  for (const [path, page] of english) {
    if (made[lang][path]) continue;
    const miss: string[] = [];
    const copy = translate(page, lang, null, miss);
    if (miss.length) continue;
    const to = `/${lang}${path}`;
    made[lang][path] = to;
    pages[to] = { ...copy, lang, path: to, translatedFrom: path };
  }
}
/** Address of an English page in another language (the English address when there is no translation). */
export const localize = (lang: string, href: string): string => {
  if (lang === 'en' || !href.startsWith('/')) return href;
  const [p, rest = ''] = href.split(/(?=[#?])/);
  return made[lang]?.[p] ? made[lang][p] + rest : href;
};
const relink = (v: any, lang: string): any =>
  Array.isArray(v) ? v.map((x) => relink(x, lang))
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === 'href' && typeof x === 'string' ? localize(lang, x) : relink(x, lang)]))
  : v;
for (const [path, page] of Object.entries(pages)) {
  const from = page.translatedFrom ?? ((page.lang ?? 'en') === 'en' ? path : null);
  if (page.translatedFrom) page.sections = relink(page.sections, page.lang);
  if (from) {
    const alt: Record<string, string> = { ...(pages[from]?.alternates ?? {}), en: from };
    for (const l of Object.keys(made)) if (made[l][from]) alt[l] = made[l][from];
    if (Object.keys(alt).length > 1) page.alternates = { ...alt };
  }
}
export const hasHome = (lang: string) => lang === 'en' || !!pages[`/${lang}/`];
