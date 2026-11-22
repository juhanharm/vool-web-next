// Builds VOOL product datasheets (A4 PDF) in the same layout as the released Charger 22k3x datasheet.
// Run: node scripts/datasheets/build.mjs   (needs Playwright + Chrome)
import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
const logo = readFileSync('public/logo.svg', 'utf8').replace(/fill="[^"]*"/g, 'fill="#eb4e20"').replace('<svg', '<svg class="logo"');
const DATE = '23.11.2026';
const sheets = JSON.parse(readFileSync('scripts/datasheets/data.json', 'utf8'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const sup = (s) => esc(s).replace(/\^(\d)/g, '<sup>$1</sup>');
const table = (t) => `<h2>${esc(t.title)}</h2><table>${t.head ? `<tr class="head"><th></th>${t.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr>` : ''}${t.rows.map((r) => `<tr><th>${sup(r[0])}</th>${r.slice(1).map((v) => `<td>${[].concat(v).map(sup).join('<br>')}</td>`).join('')}</tr>`).join('')}</table>`;
const page = (s) => `<!doctype html><meta charset="utf-8"><style>
@page { size: A4; margin: 14mm 16mm 16mm; }
body { font: 9pt/1.35 Carlito, Calibri, 'Liberation Sans', Arial, sans-serif; color: #222; margin: 0; }
.logo { position: absolute; right: 0; top: 0; height: 9mm; width: auto; }
header { position: relative; padding-top: 14mm; margin-bottom: 12mm; }
header b { font-size: 11pt; } header .date { font-size: 8pt; margin-top: 3mm; }
h1 { font-size: 15pt; margin: 12mm 0 0 16mm; }
h2 { font-size: 9pt; font-weight: 400; letter-spacing: .04em; margin: 9mm 0 3mm; text-transform: uppercase; break-after: avoid; }
table { width: 100%; border-collapse: collapse; break-inside: auto; }
tr { break-inside: avoid; }
th, td { border-bottom: .4pt solid #999; padding: 1.2mm 0; vertical-align: middle; font-weight: 400; }
th { text-align: left; width: 34%; } td { text-align: right; }
tr.head th { text-align: right; font-weight: 700; border-bottom: .8pt solid #222; } tr.head th:first-child { text-align: left; }
.notes { margin-top: 7mm; font-size: 8pt; } .notes p { margin: 1mm 0; }
footer { margin-top: 8mm; font-size: 7.5pt; color: #666; }
sup { font-size: 6pt; }
</style><header>${logo}<b>Product Datasheet</b><div class="date">${DATE}</div><h1>${esc(s.name)}</h1></header>
${s.tables.map(table).join('')}
<div class="notes">${(s.notes || []).map((n) => `<p>${sup(n)}</p>`).join('')}</div>
<footer>MultiCharge OÜ · Veerenni 38, 10138 Tallinn, Estonia · www.vool.com · info@vool.com. Specifications may change without notice.</footer>`;
mkdirSync('public/downloads/datasheets', { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
for (const s of sheets) {
  await p.setContent(page(s), { waitUntil: 'load' });
  await p.pdf({ path: `public/downloads/datasheets/${s.file}`, format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log(s.file);
}
await b.close();
