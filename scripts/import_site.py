"""Import content from the static snapshot of the old Wagtail site, as it is:
blog posts, use cases, text pages (legal, FAQ) and the where-to-buy partner list.

Usage: python3 scripts/import_site.py <snapshot>/site
Writes src/content/imported/<lang>/*.json, src/content/partners.json and copies
images to public/media/. Original URLs are kept in each item's "path".
"""
import sys, re, json, html, shutil, hashlib
from pathlib import Path
from urllib.parse import unquote

SNAP = Path(sys.argv[1])
SITE = SNAP / 'www.vool.com'
MEDIA_HOST = 'vool-web.fra1.digitaloceanspaces.com'
OUT = Path(__file__).resolve().parent.parent
BLOG = OUT / 'src' / 'content' / 'imported'
MEDIA_OUT = OUT / 'public' / 'media'
LANGS = ['et', 'lt', 'fi', 'sv']
missing = set()

def local_media(url: str) -> str:
    """Copy a media file from the snapshot into public/media and return its new URL."""
    m = re.search(re.escape(MEDIA_HOST) + r'/(.+?)(?:[?#].*)?$', url)
    if not m:
        return url
    rel = unquote(m.group(1))
    src = SNAP / MEDIA_HOST / rel
    if not src.exists():
        cands = list((SNAP / MEDIA_HOST).glob(rel.replace('[', '[[]') + '*')) if (SNAP / MEDIA_HOST).exists() else []
        if cands: src = cands[0]
    name = Path(rel).name
    if src.exists():
        MEDIA_OUT.mkdir(parents=True, exist_ok=True)
        dst = MEDIA_OUT / name
        if not dst.exists(): shutil.copyfile(src, dst)
        return '/media/' + name
    missing.add(url)
    return url  # keep the original URL so the image still shows

def cf_email(m):
    h = m.group(1); k = int(h[:2], 16)
    addr = ''.join(chr(int(h[i:i+2], 16) ^ k) for i in range(2, len(h), 2))
    return f'<a href="mailto:{addr}">{addr}</a>'

def clean_body(body: str, page_dir: Path) -> str:
    body = re.sub(r'<script.*?</script>|<svg.*?</svg>', '', body, flags=re.S)
    body = re.sub(r'<a[^>]*data-cfemail="([0-9a-f]+)"[^>]*>.*?</a>', cf_email, body, flags=re.S)
    def cf_href(m):
        h = m.group(1); k = int(h[:2], 16)
        return 'href="mailto:' + ''.join(chr(int(h[i:i+2], 16) ^ k) for i in range(2, len(h), 2)) + '"'
    body = re.sub(r'href="[^"]*/cdn-cgi/l/email-protection#([0-9a-f]+)"', cf_href, body)
    body = re.sub(r'href="[^"]*/cdn-cgi/l/email-protection"', 'href="mailto:info@vool.com"', body)
    # accordions -> <details>
    body = re.sub(r'<div class="accordion[^"]*">\s*<div class="flex accordion-title">\s*<h5[^>]*>(.*?)</h5>.*?</div>\s*</div>(.*?)</div>(?=\s*(?:<div class="accordion|</div>|<p|<h|$))',
                  lambda m: f'<details><summary>{m.group(1).strip()}</summary>{m.group(2)}</details>', body, flags=re.S)
    body = re.sub(r'\s(data-block-key|loading|decoding)="[^"]*"', '', body)
    body = re.sub(r'class="[^"]*"', '', body)
    body = re.sub(r'(src|href)="(https?://' + re.escape(MEDIA_HOST) + r'[^"]*)"',
                  lambda m: f'{m.group(1)}="{local_media(m.group(2))}"', body)
    body = re.sub(r"url\('(https?://" + re.escape(MEDIA_HOST) + r"[^']*)'\)",
                  lambda m: f"url('{local_media(m.group(1))}')", body)
    body = re.sub(r'\ssrcset="[^"]*"', '', body)
    # internal links back to absolute site paths
    def fix(m):
        href = m.group(1)
        if re.match(r'^(https?:|mailto:|tel:|#|/)', href): return m.group(0)
        target = (page_dir / href).resolve()
        try: rel = target.relative_to(SITE.resolve())
        except ValueError: return m.group(0)
        p = '/' + str(rel).replace('index.html', '')
        return f'href="{p}"'
    body = re.sub(r'href="([^"]*)"', fix, body)
    return re.sub(r'\n\s*\n+', '\n', body).strip()

def parse(path: Path):
    s = path.read_text(encoding='utf-8', errors='replace')
    kind = None
    for marker, k in (('id="blog-post"', 'blog'), ('id="usecase"', 'usecase')):
        i = s.find(marker)
        if i >= 0: kind = k; break
    if kind is None:
        g = s.find('id="generic"')
        if g < 0: return None
        i = s.find('<!-- Body stream -->', g)
        if i < 0: return None
        i = s.find('<div', i); kind = 'generic'
    start = s.find('>', i) + 1
    # body ends where the main flex column closes: take up to the footer
    end = s.find('<footer', start)
    chunk = s[start:end if end > 0 else len(s)]
    # balance divs: stop when depth goes below zero
    depth, pos, stop = 0, 0, len(chunk)
    for m in re.finditer(r'<(/?)div\b', chunk):
        depth += -1 if m.group(1) else 1
        if depth < 0: stop = m.start(); break
    body = chunk[:stop]
    title = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    meta = re.search(r'</h1>\s*<p[^>]*>(.*?)</p>', s, re.S)
    date = read = ''
    if meta:
        t = re.sub(r'\s+', ' ', meta.group(1))
        r = re.search(r'<i[^>]*>(.*?)</i>', t)
        read = html.unescape(r.group(1).strip()) if r else ''
        date = html.unescape(re.sub(r'<i.*', '', t).strip())
    hero = re.search(r"background-image: url\('([^']+)'\)", s)
    og = re.search(r'<meta property="og:image" content="([^"]+)"', s)
    desc = re.search(r'<meta property="og:description" content="([^"]*)"', s)
    seo = re.search(r'<title>(.*?)</title>', s, re.S)
    return {
        'kind': kind,
        'title': html.unescape(re.sub(r'\s+', ' ', title.group(1)).strip()) if title else '',
        'seoTitle': html.unescape(seo.group(1).strip()) if seo else '',
        'description': html.unescape(desc.group(1)) if desc else '',
        'date': date, 'readTime': read,
        'image': local_media(hero.group(1)) if hero else (local_media(og.group(1)) if og else ''),
        'body': clean_body(body, path.parent),
    }

count = {}
for f in sorted(SITE.rglob('index.html')):
    rel = f.relative_to(SITE)
    post = parse(f)
    if not post or not post['title']: continue
    parts = rel.parts[:-1]
    lang = parts[0] if parts and parts[0] in LANGS else 'en'
    post['lang'] = lang
    post['path'] = '/' + '/'.join(parts) + '/'      # original URL, kept
    post['slug'] = parts[-1]
    if not parts: continue
    d = BLOG / lang; d.mkdir(parents=True, exist_ok=True)
    name = re.sub(r'[^A-Za-z0-9._-]', '_', parts[-1])[:80] + '-' + hashlib.md5(post['path'].encode()).hexdigest()[:6]
    (d / f'{name}.json').write_text(json.dumps(post, ensure_ascii=False, indent=1), encoding='utf-8')
    count[lang] = count.get(lang, 0) + 1
print('items', count, 'missing media', len(missing))
for m in sorted(missing)[:5]: print('  missing', m)

# ---- where to buy: partner list ----
w = SITE / 'where-to-buy' / 'index.html'
if w.exists():
    t = w.read_text(encoding='utf-8')
    block = t[t.find('id="partners-all"'):]
    block = block[:block.find('id="partners-wholesaler"')] if 'id="partners-wholesaler"' in block else block
    countries = []
    for cm in re.finditer(r'<h5[^>]*>(.*?)</h5>(.*?)(?=<h5|$)', block, re.S):
        partners = []
        for li in re.finditer(r'<li id="partners-all-partner-\d+"([^>]*)>', cm.group(2)):
            a = dict(re.findall(r'data-([a-z]+)="([^"]*)"', li.group(1)))
            partners.append({'name': html.unescape(a.get('name', '')), 'website': a.get('website', ''),
                             'phone': a.get('phone', ''), 'email': a.get('email', ''),
                             'installer': a.get('installer') == 'True', 'wholesaler': a.get('wholesaler') == 'True'})
        if partners: countries.append({'country': html.unescape(cm.group(1).strip()), 'partners': partners})
    (OUT / 'src' / 'content' / 'partners.json').write_text(json.dumps(countries, ensure_ascii=False, indent=1), encoding='utf-8')
    print('partner countries', len(countries), 'partners', sum(len(c['partners']) for c in countries))
