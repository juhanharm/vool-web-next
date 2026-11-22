# vool-web-next

Prototype of the new www.vool.com: a static [Astro](https://astro.build) site with content in Git, hosted on Cloudflare Pages. No database or server to maintain.

## What's in the prototype

| Page | EN | ET | LT |
|---|---|---|---|
| Homepage | `/` | `/et/` | `/lt/` |
| Apartment buildings + KIK grant | `/apartment-buildings/` | `/et/kortermajad/` | – |
| DAEI waitlist (Lithuania) | `/daei/` | – | `/lt/daei/` |

- Page text lives in `src/content/*.ts`, one object per language, so new copy and translations are edits to these files.
- Shared building blocks are in `src/components/` (hero, steps, FAQ, lead form) and `src/layouts/Base.astro` (header, language switcher, footer).
- Forms post to `functions/api/lead.ts` (Cloudflare Pages Function), which creates a lead in Odoo (`crm.lead`) and can also post to a webhook. Apartment leads are tagged for info@vool.com and ken.sarapuu@vool.com; DAEI sign-ups for info@vool.com.
- `robots.txt` blocks search engines while this is a prototype.
- Product images are placeholders (drawn illustration). Brand font TWK Everett is replaced with Poppins until web licensing is confirmed.

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

## Next steps for the full migration

- Export all live Wagtail pages (≈466, incl. ≈240 blog posts) via the Wagtail API into Markdown content collections.
- Keep existing URLs or add redirects (`public/_redirects`) to protect SEO.
- Add product pages, legal pages, blog, FI/SV languages and real product photography.
