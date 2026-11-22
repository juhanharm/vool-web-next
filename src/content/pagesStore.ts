/**
 * Pages as edited in the site editor (/admin). One JSON file per page in ./pages-json.
 * These files are the source of truth. (pages.ts, knowledge.ts, products2.ts and commercial.ts are the
 * original seed; `npx tsx scripts/seed_pages.ts` would overwrite the JSON from them.)
 */
const files = import.meta.glob<any>('./pages-json/*.json', { eager: true, import: 'default' });
// Table rows are stored as { cells: [...] } because the editor cannot edit lists of lists.
const unwrap = (v: any): any =>
  Array.isArray(v) ? v.map(unwrap)
  : v && typeof v === 'object'
    ? (Array.isArray(v.cells) && Object.keys(v).length === 1 ? v.cells : Object.fromEntries(Object.entries(v).filter(([, x]) => x !== null && x !== '').map(([k, x]) => [k, unwrap(x)])))
    : v;
export const pages: Record<string, any> = Object.fromEntries(
  Object.values(files).filter((p) => p?.path && Array.isArray(p.sections)).map((p) => [p.path.endsWith('/') ? p.path : p.path + '/', unwrap(p)]),
);
