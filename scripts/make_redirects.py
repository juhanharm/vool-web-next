"""Write public/_redirects: merged pages (301) plus temporary redirects (302) for old
localized pages that are not translated yet, so no old URL ends in a 404.

Usage: python3 scripts/make_redirects.py <snapshot>/site   (run after `npm run build`)
"""
import sys, re, os
from pathlib import Path
from urllib.parse import quote
SITE = Path(sys.argv[1]) / 'www.vool.com'
ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
src = (ROOT / 'src/content/pages.ts').read_text(encoding='utf-8')
block = re.search(r"export const redirects[^{]*\{(.*?)\};", src, re.S).group(1)
lines = [f"{a} {b} 301" for a, b in re.findall(r"'([^']+)': '([^']+)'", block)]
done = {l.split()[0] for l in lines}

def target(path: str) -> str:
    parts = path.strip('/').split('/')
    lang = parts[0] if parts[0] in ('et', 'lt', 'fi', 'sv', 'no') else ''
    p = path.lower()
    if lang == 'no': return '/'
    rules = [(r'laadija|ikrovikl|latauslait|laddare|charger', '/products/vool-charger/'), (r'lmc', '/products/vool-lmc/'),
             (r'portaal|portal', '/products/vool-portal/'), (r'app|äpp|sovellus|programel', '/products/vool-app/'),
             (r'avalik|public|vieš|julkinen|publik', '/solutions/public-charging/'),
             (r'kortermaj|butas|apartment|kerrostalo|lägenhet|kommerts|commercial|kaupallinen|parkimis|stovejimo', '/solutions/apartment-blocks/'),
             (r'eramaj|home|koti|hem|namams', '/solutions/ev-charger-for-home/'),
             (r'autopar|fleet|parko|kalusto', '/solutions/electrical-fleet-owners/'),
             (r'edasim|perpardav|reseller|asentaja|jälleenmyy|återförsälj', '/resources/resellers/'),
             (r'kust-osta|kur-|where-to-buy|mista-ostaa', '/where-to-buy/'),
             (r'kontakt|contact|yhteys', '/resources/contact/'), (r'manuals|juhend|kasutusjuh', '/resources/product-manuals/'),
             (r'help|abi|tuki|pagalb', '/resources/help-center/'), (r'lugu|story|tarina|istorij|meist|apie|about|game', '/about-us/our-story-new/')]
    for rx, t in rules:
        if re.search(rx, p): return t
    return f'/{lang}/' if lang else '/'

for f in sorted(SITE.rglob('index.html')):
    path = '/' + '/'.join(f.relative_to(SITE).parts[:-1]) + '/'
    path = path.replace('//', '/')
    if (DIST / path.strip('/') / 'index.html').exists() or path in done or '@' in path: continue
    t = target(path)
    if t != path: lines.append(f"{quote(path)} {t} 302"); done.add(path)
(ROOT / 'public/_redirects').write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(len(lines), 'redirects')
