# vool-web-next

Prototype of the new www.vool.com: a static [Astro](https://astro.build) site with content in Git, hosted on Cloudflare Pages. No database or server to maintain.

## What's in it

172 pages: all English pages rewritten, the KIK and DAEI pages, and the blog, use cases, FAQ and legal pages moved as they are from the old site (EN, ET, LT, FI). See `SITEMAP.md` for the page list and `BRIEF.md` for the brief this is built to.

- English page copy: `src/content/pages.ts` (one list of sections per page, rendered by `src/components/Sections.astro`).
- KIK and DAEI pages: `src/content/apartments.ts`, `src/content/daei.ts`.
- Imported content: `src/content/imported/` and `public/media/`, produced by `scripts/import_site.py` from the snapshot in `juhanharm/vool-website-backup`. Original URLs are kept.
- Partner list: `src/content/partners.json` (from the old where-to-buy page).
- Redirects: `public/_redirects`, produced by `scripts/make_redirects.py`.
- Forms post to `functions/api/lead.ts`, which creates a lead in Odoo (`crm.lead`).
- Fonts and photos are the ones the current site uses (TWK Everett, Poppins).
- `robots.txt` blocks search engines until launch.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Deploy (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect this GitHub repo.
2. Build command `npm run build`, output directory `dist`. The `functions/` folder is picked up automatically.
3. Environment variables for the form: `ODOO_URL`, `ODOO_DB`, `ODOO_USER_ID`, `ODOO_API_KEY` (secret), optional `LEAD_WEBHOOK`.
4. Review on the `*.pages.dev` preview URL; switch `www.vool.com` only when the full site is migrated.

## Next steps

- Translate the core pages to ET, LT, FI, SV and add PL, DE, PT.
- Confirm the facts flagged in the hand-over (chargers per LMC, LMC S date, savings claim).
- Add new product photos; connect Odoo for the forms; set the reseller shop address.
- Launch checklist: redirects test, analytics, cookie notice, remove the robots block.

## Editing the site without code (`/admin`)

The site has an editor at `/admin/` ([Sveltia CMS](https://github.com/sveltia/sveltia-cms)). It saves changes as commits to this repository; the host rebuilds the site after each save.

- **Pages**: every page is a JSON file in `src/content/pages-json/`. In the editor a page is a list of sections (banner, cards, table, questions, form …) that can be edited, reordered, added and removed.
- **Blog and articles**: one list per language (`src/content/imported/<lang>/`). For a new post fill in the title, date, cover image and text. The web address is created from the title.
- **Images** uploaded in the editor go to `public/media/uploads/`.
- **Sign in**: with a GitHub account that can write to this repository ("Sign in with token" works without extra setup; a fine-grained token with *Contents: read and write* on this repository is enough).
- **Not in the editor**: the menu and footer (`src/content/ui.ts`), the KIK and DAEI pages (`src/content/apartments.ts`, `daei.ts`) and the where-to-buy list (`partners.json`).

After adding a new kind of section or field in code, run `python3 scripts/make_editor_config.py`.

Analytics: set `PUBLIC_PLAUSIBLE_DOMAIN` (for example `vool.com`) at build time to load Plausible. Form submissions are sent as the event `Lead` with the form name.

## Translations

The site has 15 languages (`src/content/ui.ts` → `langNames`). English pages are the source.

- `src/content/i18n/strings.json` is the ordered list of English strings; `src/content/i18n/<lang>.json` holds the same list translated.
- A page gets a `/<lang>/…` version automatically once **every** string on it has a translation; until then links in that language point to the English page. The menu, footer, language switcher and `hreflang` tags follow automatically.
- Translations are written in `scripts/i18n/batch_*.py` (14 segments of 10 strings per language) and compiled with `python3 scripts/i18n/build.py`.
- To translate more pages: add their strings to `strings.json` (append only, never reorder), add the translations, rebuild.

## Form submissions

`functions/api/lead.ts` receives every form. Set these in Cloudflare Pages → Settings → Variables and Secrets:

- `SLACK_WEBHOOK_URL` (secret): a Slack incoming-webhook address. Each submission is posted to that channel. This is the only one required.
- `ODOO_URL`, `ODOO_DB`, `ODOO_USER_ID`, `ODOO_API_KEY`: optional; when set, a CRM lead is also created in Odoo.
- `LEAD_WEBHOOK`: optional extra JSON webhook.

With none set, the form shows its error message instead of a false "thank you".
