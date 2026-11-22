export type Lang = 'en' | 'et' | 'lt' | 'fi' | 'sv';
export const langNames: Record<Lang, string> = { en: 'EN', et: 'ET', lt: 'LT', fi: 'FI', sv: 'SV' };
/** Languages planned next (pages not translated yet): pl, de, pt. */

export interface NavItem { label: string; href?: string; children?: { label: string; href: string; note?: string }[] }

export const homeOf = (l: Lang) => (l === 'en' ? '/' : `/${l}/`);

export const RESELLER_URL = 'https://shop.vool.com/';
export const nav: Record<Lang, NavItem[]> = {
  en: [
    { label: 'Products', children: [
      { label: 'VOOL Charger', href: '/products/vool-charger/', note: '22 kW smart charger' },
      { label: 'VOOL LMC Pro', href: '/products/vool-lmc/', note: 'Load management for buildings' },
      { label: 'VOOL LMC S', href: '/products/vool-lmc-s/', note: 'New: for homes and small sites' },
      { label: 'VOOL Commercial Pole', href: '/products/commercial-pole/', note: 'New: 2 × 22 kW with MID' },
      { label: 'VOOL App', href: '/products/vool-app/', note: 'Smart charging on your phone' },
      { label: 'VOOL Portal', href: '/products/vool-portal/', note: 'Manage sites, users and billing' },
      { label: 'Software features', href: '/software/', note: 'Everything the platform does' },
      { label: 'Billing and payments', href: '/software/billing-and-payments/', note: 'How drivers pay and you get paid' },
      { label: 'Integrations', href: '/integrations/', note: 'OCPP, Modbus, OCPI, roaming' },
      { label: 'Accessories', href: '/products/accessories/', note: 'Poles, panels and parts' },
    ] },
    { label: 'Solutions', children: [
      { label: 'Get a quote', href: '/get-a-quote/' },
      { label: 'Apartment buildings', href: '/solutions/apartment-blocks/' },
      { label: 'Offices and workplaces', href: '/solutions/workplace/' },
      { label: 'Developers and designers', href: '/solutions/developers/' },
      { label: 'KIK grant (Estonia)', href: '/apartment-buildings/' },
      { label: 'Guide: the general meeting', href: '/knowledge/general-meeting/' },
      { label: 'Homes', href: '/solutions/ev-charger-for-home/' },
      { label: 'Fleets', href: '/solutions/electrical-fleet-owners/' },
      { label: 'Public charging', href: '/solutions/public-charging/' },
      { label: 'DAEI income (Lithuania)', href: '/daei/' },
    ] },
    { label: 'Why VOOL', children: [
      { label: 'Case studies', href: '/case-studies/', note: 'Real sites with numbers' },
      { label: 'Live demo', href: '/live-demo/', note: 'Load management simulator' },
      { label: 'Compare', href: '/compare/', note: 'VOOL vs ordinary load balancing' },
      { label: 'AFIR and ISO 15118', href: '/afir/', note: 'What changes on 1 January 2027' },
    ] },
    { label: 'Find an installer', href: '/where-to-buy/' },
    { label: 'For installers', children: [
      { label: 'Become a partner', href: '/resources/resellers/', note: 'Sell and install VOOL' },
      { label: 'Wholesalers', href: '/where-to-buy/?type=wholesaler', note: 'Where to order stock' },
      { label: 'Manuals and guides', href: '/resources/product-manuals/', note: 'Installation guides in nine languages' },
      { label: 'Integrations', href: '/integrations/', note: 'OCPP, Modbus, OCPI' },
      { label: 'Tender specification text', href: '/solutions/developers/#spec' },
      { label: 'Asset bank', href: '/partners/asset-bank/', note: 'Logo, photos, brochures' },
      { label: 'Reseller login', href: RESELLER_URL, note: 'Stock, prices and orders' },
    ] },
    { label: 'Support', children: [
      { label: 'Help Center', href: '/resources/help-center/' },
      { label: 'Warranty and support', href: '/support/warranty/' },
      { label: 'Product manuals', href: '/resources/product-manuals/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Blog', href: '/resources/blog/' },
      { label: 'Contact', href: '/resources/contact/' },
      { label: 'About VOOL', href: '/about-us/our-story-new/' },
    ] },
  ],
  et: [
    { label: 'Kortermajad ja KIK toetus', href: '/et/kortermajad/' },
    { label: 'Üldkoosoleku juhend', href: '/et/uldkoosolek/' },
    { label: 'Tooted', href: '/products/vool-charger/' },
    { label: 'Kust osta', href: '/where-to-buy/' },
  ],
  lt: [
    { label: 'DAEI', href: '/lt/daei/' },
    { label: 'Produktai', href: '/products/vool-charger/' },
    { label: 'Kur įsigyti', href: '/where-to-buy/' },
  ],
  fi: [
    { label: 'Tuotteet', href: '/products/vool-charger/' },
    { label: 'Jälleenmyyjät', href: '/where-to-buy/' },
  ],
  sv: [
    { label: 'Produkter', href: '/products/vool-charger/' },
    { label: 'Återförsäljare', href: '/where-to-buy/' },
  ],
};

export const ui: Record<Lang, { login: string; reseller: string; blog: string; tagline: string; legal: string; readMore: string; allPosts: string }> = {
  en: { login: 'Log in', reseller: 'Reseller login', blog: 'Blog', tagline: 'Smart EV charging, designed and made in Estonia.', legal: 'Terms', readMore: 'Read more', allPosts: 'All articles' },
  et: { login: 'Logi sisse', reseller: 'Edasimüüja login', blog: 'Blogi', tagline: 'Nutikas elektriauto laadimine, arendatud ja toodetud Eestis.', legal: 'Tingimused', readMore: 'Loe edasi', allPosts: 'Kõik artiklid' },
  lt: { login: 'Prisijungti', reseller: 'Partnerių prisijungimas', blog: 'Tinklaraštis', tagline: 'Išmanus elektromobilių įkrovimas, sukurtas ir pagamintas Estijoje.', legal: 'Sąlygos', readMore: 'Skaityti', allPosts: 'Visi straipsniai' },
  fi: { login: 'Kirjaudu', reseller: 'Jälleenmyyjän kirjautuminen', blog: 'Blogi', tagline: 'Älykästä sähköauton latausta, suunniteltu ja valmistettu Virossa.', legal: 'Ehdot', readMore: 'Lue lisää', allPosts: 'Kaikki artikkelit' },
  sv: { login: 'Logga in', reseller: 'Återförsäljarinloggning', blog: 'Blogg', tagline: 'Smart elbilsladdning, utvecklad och tillverkad i Estland.', legal: 'Villkor', readMore: 'Läs mer', allPosts: 'Alla artiklar' },
};

export const company = {
  name: 'MultiCharge OÜ', reg: '14627725', address: 'Veerenni 38, 10138 Tallinn, Estonia',
  phone: '+372 5656 7172', email: 'info@vool.com',
  linkedin: 'https://linkedin.com/company/wearevool', instagram: 'https://instagram.com/vool.hq',
  appStore: 'https://apps.apple.com/us/app/vool-smart-ev-charging/id1669222009',
  playStore: 'https://play.google.com/store/apps/details?id=com.vool.app',
  help: 'https://support.vool.com/en/',
};

/** Reseller shop in Odoo (planned – address to be confirmed). */
