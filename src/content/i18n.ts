/** Menu and interface texts per language, built from the English menu and the translation files. */
import { nav, ui, type Lang, type NavItem } from './ui';
import { tr, localize, uiStrings, dict } from './pagesStore';

export function navFor(lang: Lang): NavItem[] {
  if (lang === 'en' || !dict[lang]) return nav[lang] ?? nav.en!;
  return nav.en!.map((n) => ({
    label: tr(lang, n.label), href: n.href && localize(lang, n.href),
    children: n.children?.map((c) => ({ label: tr(lang, c.label), href: localize(lang, c.href), note: c.note && tr(lang, c.note) })),
  }));
}
export function uiFor(lang: Lang) {
  return { ...ui.en!, quote: 'Get a quote', skip: 'Skip to content', ...(ui[lang] ?? {}), ...(uiStrings[lang] ?? {}) } as Record<string, string>;
}
