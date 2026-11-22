/**
 * Cloudflare Pages Function: POST /api/lead
 *
 * Receives the apartment-building enquiry and DAEI waitlist forms and creates a lead
 * in VOOL's Odoo (crm.lead) via JSON-RPC. Optionally also posts the lead to a webhook
 * (e.g. Slack or a Notion automation).
 *
 * Environment variables (set in Cloudflare Pages → Settings → Environment variables):
 *   ODOO_URL        e.g. https://avalahee-vool-odoo-16.odoo.com
 *   ODOO_DB         Odoo database name
 *   ODOO_USER_ID    numeric uid of the API user
 *   ODOO_API_KEY    API key of that user (secret)
 *   LEAD_WEBHOOK    optional URL that receives the lead as JSON
 */

type PagesFunction<E> = (ctx: { request: Request; env: E }) => Promise<Response>;

interface Env {
  ODOO_URL?: string;
  ODOO_DB?: string;
  ODOO_USER_ID?: string;
  ODOO_API_KEY?: string;
  LEAD_WEBHOOK?: string;
}

type FormKind = 'apartment' | 'daei' | 'contact' | 'reseller' | 'quote' | 'guide';

const ROUTING: Record<FormKind, { notify: string[]; tag: string; title: (d: Record<string, string>) => string }> = {
  apartment: {
    notify: ['info@vool.com', 'ken.sarapuu@vool.com'],
    tag: 'KIK / Apartment building',
    title: (d) => `Apartment building: ${d.association || d.name || d.email} (${d.city || '?'})`,
  },
  daei: {
    notify: ['info@vool.com'],
    tag: 'DAEI waitlist',
    title: (d) => `DAEI waitlist: ${d.name || d.email}`,
  },
  contact: {
    notify: ['info@vool.com'],
    tag: 'Website contact form',
    title: (d) => `Website: ${d.topic || 'enquiry'} – ${d.company || d.name || d.email}`,
  },
  quote: {
    notify: ['info@vool.com'],
    tag: 'Quote request',
    title: (d) => `Quote: ${d.you_are || 'site'} – ${d.organisation || d.name || d.email} (${d.city || d.country || '?'})`,
  },
  guide: {
    notify: ['info@vool.com'],
    tag: 'Guide download',
    title: (d) => `Guide download: ${d.organisation || d.email}`,
  },
  reseller: {
    notify: ['info@vool.com'],
    tag: 'Partner application',
    title: (d) => `New partner: ${d.company || d.name} (${d.country || '?'})`,
  },
};

const REQUIRED: Record<FormKind, string[]> = {
  apartment: ['association', 'address', 'city', 'name', 'email', 'consent'],
  daei: ['email', 'charger_brand', 'consent'],
  contact: ['name', 'email', 'message', 'consent'],
  reseller: ['company', 'country', 'name', 'email', 'consent'],
  quote: ['you_are', 'country', 'name', 'email', 'consent'],
  guide: ['email', 'consent'],
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const fd = await request.formData();
  const data: Record<string, string> = {};
  for (const [k, v] of fd.entries()) data[k] = String(v).slice(0, 2000).trim();

  // Honeypot: bots fill the hidden field. Pretend success.
  if (data.company_website) return json({ ok: true });

  const kind = data.form as FormKind;
  if (!(kind in ROUTING)) return json({ ok: false, error: 'unknown form' }, 400);
  const missing = REQUIRED[kind].filter((f) => !data[f]);
  if (missing.length) return json({ ok: false, error: 'missing', fields: missing }, 422);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) return json({ ok: false, error: 'email' }, 422);

  const base = ROUTING[kind];
  // Apartment, property-manager and developer quotes also go to the apartment-buildings sales manager.
  const toKen = kind === 'quote' && /Apartment|Property|Developer/i.test(data.you_are || '');
  const route = { ...base, notify: toKen ? [...base.notify, 'ken.sarapuu@vool.com'] : base.notify };
  const description = Object.entries(data)
    .filter(([k]) => !['form', 'company_website', 'consent'].includes(k))
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  const lead = {
    name: route.title(data),
    contact_name: data.name || '',
    partner_name: data.association || data.company || '',
    email_from: data.email,
    phone: data.phone || '',
    street: data.address || '',
    city: data.city || '',
    description: `${route.tag}\nNotify: ${route.notify.join(', ')}\n\n${description}`,
    type: 'lead',
  };

  const results: Record<string, unknown> = {};

  if (env.ODOO_URL && env.ODOO_DB && env.ODOO_USER_ID && env.ODOO_API_KEY) {
    const res = await fetch(`${env.ODOO_URL}/jsonrpc`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: {
          service: 'object',
          method: 'execute_kw',
          args: [env.ODOO_DB, Number(env.ODOO_USER_ID), env.ODOO_API_KEY, 'crm.lead', 'create', [lead]],
        },
      }),
    });
    const out = (await res.json()) as { result?: number; error?: unknown };
    if (out.error) return json({ ok: false, error: 'odoo' }, 502);
    results.odooLeadId = out.result;
  }

  if (env.LEAD_WEBHOOK) {
    await fetch(env.LEAD_WEBHOOK, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ kind, notify: route.notify, lead, raw: data }),
    });
    results.webhook = true;
  }

  // Plain HTML form posts (no JavaScript) are redirected back with a flag.
  if (!(request.headers.get('accept') || '').includes('application/json')) {
    const back = new URL(request.headers.get('referer') || '/', request.url);
    back.searchParams.set('sent', '1');
    return Response.redirect(back.toString(), 303);
  }
  return json({ ok: true, ...results });
};
