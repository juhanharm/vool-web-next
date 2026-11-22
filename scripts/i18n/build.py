#!/usr/bin/env python3
"""Writes src/content/i18n/<lang>.json from the batch files in this folder (batch_*.py).
Each language is 14 segments of 10 strings, in the order of src/content/i18n/strings.json. None = same as English."""
import json, glob, runpy
src = json.load(open('src/content/i18n/strings.json'))
for f in sorted(glob.glob('scripts/i18n/batch_*.py')):
    for lang, d in runpy.run_path(f)['L'].items():
        segs = d['s']
        assert len(segs) == (len(src) + 9) // 10, (lang, len(segs))
        for i, s in enumerate(segs): assert len(s) == min(10, len(src) - i * 10), (lang, 'segment', i, len(s))
        flat = [x if x is not None else src[i] for i, x in enumerate(sum(segs, []))]
        json.dump({'ui': d['ui'], 'strings': flat}, open(f'src/content/i18n/{lang}.json', 'w'), ensure_ascii=False, indent=0)
        print(lang, len(flat))
