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
