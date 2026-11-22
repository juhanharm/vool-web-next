/** Imported content (blog, use cases, legal/FAQ pages) and helpers shared by pages. */
import type { Lang } from './ui';

export interface Imported {
  kind: 'blog' | 'usecase' | 'generic';
  title: string; seoTitle: string; description: string;
  date: string; readTime: string; image: string; body: string;
  lang: Lang; path: string; slug: string;
}

const files = import.meta.glob<Imported>('./imported/*/*.json', { eager: true, import: 'default' });
export const imported: Imported[] = Object.values(files);

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
  jaan: 1, veebr: 2, märts: 3, apr_: 4, mai: 5, juuni: 6, juuli: 7, aug_: 8, sept: 9, okt: 10, dets: 12,
  tammi: 1, helmi: 2, maalis: 3, huhti: 4, touko: 5, kesä: 6, heinä: 7, elo: 8, syys: 9, loka: 10, marras: 11, joulu: 12,
  saus: 1, vas: 2, kov: 3, bal: 4, geg: 5, birž: 6, liep: 7, rugp: 8, rugs: 9, spal: 10, lapkr: 11, gruod: 12,
};

/** Best-effort sort key from the original, localised date text ("May 2, 2024", "2. mai 2024", "2024 m. gegužės 2 d."). */
export function dateKey(d: string): number {
  const year = Number(d.match(/(20\d\d)/)?.[1] ?? 0);
  const lower = d.toLowerCase();
  let month = 0;
  for (const [k, v] of Object.entries(MONTHS)) if (lower.includes(k.replace('_', ''))) { month = v; }
  const day = Number(lower.replace(/20\d\d/, '').match(/(\d{1,2})/)?.[1] ?? 0);
  return year * 10000 + month * 100 + day;
}

export const posts = (lang: Lang) =>
  imported.filter((p) => p.kind === 'blog' && p.lang === lang).sort((a, b) => dateKey(b.date) - dateKey(a.date));

/** Blog index URL per language = the parent folder of that language's posts (original URL kept). */
export function blogIndex(lang: Lang): string | null {
  const p = posts(lang)[0];
  return p ? p.path.replace(/[^/]+\/$/, '') : null;
}

export const legal = (lang: Lang) => imported.filter((p) => p.kind === 'generic' && p.lang === lang);
