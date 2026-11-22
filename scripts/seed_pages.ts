import { pages } from '../src/content/pages';
import { writeFileSync, mkdirSync } from 'fs';
const wrap = (v: any): any => Array.isArray(v) ? v.map((x) => Array.isArray(x) ? { cells: x.map(String) } : wrap(x))
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => [k, wrap(x)])) : v;
mkdirSync('src/content/pages-json', { recursive: true });
for (const [path, page] of Object.entries(pages)) {
  const name = path.replace(/^\/|\/$/g, '').replace(/\//g, '__') || 'home';
  writeFileSync(`src/content/pages-json/${name}.json`, JSON.stringify({ path, ...wrap(page) }, null, 2) + '\n');
}
console.log(Object.keys(pages).length, 'pages');
