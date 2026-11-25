#!/usr/bin/env python3
"""Writes src/content/i18n/<lang>.json from the batch files in this folder (batch_*.py).
Each language is 14 segments of 10 strings, in the order of src/content/i18n/strings.json. None = same as English."""
import json, glob, runpy
src = json.load(open('src/content/i18n/strings.json'))
for f in sorted(glob.glob('scripts/i18n/batch_*.py')):
    for lang, d in runpy.run_path(f)['L'].items():
        segs = d['s']
        assert len(segs) == 14 and all(len(s) == 10 for s in segs), lang
        flat = [x if x is not None else src[i] for i, x in enumerate(sum(segs, []))]
        chunks = sorted(c for c in glob.glob('src/content/i18n/work/src/chunk_*.json') if not c.endswith('chunk_00.json'))
        done = [c.replace('/work/src/', f'/work/{lang}/') for c in chunks]
        import os
        if all(os.path.exists(c) for c in done):
            for c, d0 in zip(chunks, done):
                a, b = json.load(open(c)), json.load(open(d0)); assert len(a) == len(b), (lang, d0); flat += b
        for i, v in json.load(open('scripts/i18n/overrides.json')).get(lang, {}).items():
            if int(i) < len(flat): flat[int(i)] = v  # later wording changes, see overrides.json
        json.dump({'ui': d['ui'], 'strings': flat}, open(f'src/content/i18n/{lang}.json', 'w'), ensure_ascii=False, indent=0)
        print(lang, len(flat))

# Languages added later have no batch file: everything comes from work/<lang>/chunk_00..NN.json and ui.json.
import os
done_langs = {l for f in glob.glob('scripts/i18n/batch_*.py') for l in runpy.run_path(f)['L']}
for d in sorted(glob.glob('src/content/i18n/work/*/')):
    lang = d.rstrip('/').split('/')[-1]
    if lang == 'src' or lang in done_langs: continue
    chunks = sorted(glob.glob('src/content/i18n/work/src/chunk_*.json'))
    mine = [c.replace('/work/src/', f'/work/{lang}/') for c in chunks]
    if not all(os.path.exists(c) for c in mine) or not os.path.exists(d + 'ui.json'): print(lang, 'incomplete, skipped'); continue
    flat = []
    for c, m in zip(chunks, mine):
        a, b = json.load(open(c)), json.load(open(m)); assert len(a) == len(b), (lang, m); flat += b
    assert len(flat) == len(src), (lang, len(flat))
    json.dump({'ui': json.load(open(d + 'ui.json')), 'strings': flat}, open(f'src/content/i18n/{lang}.json', 'w'), ensure_ascii=False, indent=0)
    print(lang, len(flat))
