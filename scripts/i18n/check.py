#!/usr/bin/env python3
"""Checks a language's translated chunks against the English source chunks.  Usage: python3 scripts/i18n/check.py <lang>"""
import json, glob, os, re, sys
lang = sys.argv[1]; bad = 0
for f in sorted(glob.glob('src/content/i18n/work/src/chunk_*.json')):
    src = json.load(open(f)); t = f.replace('/work/src/', f'/work/{lang}/')
    if not os.path.exists(t): print('MISSING', t); bad += 1; continue
    try: tr = json.load(open(t))
    except Exception as e: print('INVALID JSON', t, e); bad += 1; continue
    if not isinstance(tr, list) or len(tr) != len(src): print('LENGTH', t, len(tr) if isinstance(tr, list) else type(tr), 'expected', len(src)); bad += 1; continue
    for i, (a, b) in enumerate(zip(src, tr)):
        if not isinstance(b, str) or not b.strip(): print('EMPTY', t, i); bad += 1
        elif sorted(re.findall(r'</?[a-z]+', a)) != sorted(re.findall(r'</?[a-z]+', b)): print('HTML TAGS DIFFER', t, i, a[:60]); bad += 1
        elif re.findall(r'href="[^"]*"', a) != re.findall(r'href="[^"]*"', b): print('LINK CHANGED', t, i); bad += 1
        elif sorted(re.findall(r'\d+', a)) != sorted(re.findall(r'\d+', b)) and len(re.findall(r'\d+', a)) > 0: print('note: numbers differ', t, i, '|', a[:70], '|', b[:70])
u = f'src/content/i18n/work/{lang}/ui.json'
if os.path.exists('src/content/i18n/work/src/ui.json'):
    want = set(json.load(open('src/content/i18n/work/src/ui.json')))
    if not os.path.exists(u): print('MISSING', u); bad += 1
    elif set(json.load(open(u))) != want: print('UI KEYS DIFFER', u); bad += 1
print('OK' if not bad else f'{bad} problem(s)')
sys.exit(1 if bad else 0)
