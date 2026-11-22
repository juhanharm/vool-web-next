export type Lang = 'en' | 'et' | 'lt';

export const langNames: Record<Lang, string> = { en: 'EN', et: 'ET', lt: 'LT' };

/** Shared navigation and footer strings per language. */
export const ui = {
  en: {
    nav: [
      { label: 'Products', href: '/#products' },
      { label: 'Apartment buildings', href: '/apartment-buildings/' },
      { label: 'DAEI (Lithuania)', href: '/daei/' },
      { label: 'Where to buy', href: '/#buy' },
    ],
    login: 'Log in',
    reseller: 'Reseller login',
    footer: {
      tagline: 'Smart EV charging, designed and made in Estonia.',
      company: 'MultiCharge OÜ · Veerenni 38, 10138 Tallinn, Estonia',
      links: [
        { label: 'Help Center', href: 'https://help.vool.com' },
        { label: 'VOOL Portal', href: 'https://app.vool.com' },
        { label: 'Privacy policy', href: '/privacy-policy/' },
      ],
    },
  },
  et: {
    nav: [
      { label: 'Tooted', href: '/et/#products' },
      { label: 'Kortermajad', href: '/et/kortermajad/' },
      { label: 'Kust osta', href: '/et/#buy' },
    ],
    login: 'Logi sisse',
    reseller: 'Edasimüüja login',
    footer: {
      tagline: 'Nutikas elektriauto laadimine, arendatud ja toodetud Eestis.',
      company: 'MultiCharge OÜ · Veerenni 38, 10138 Tallinn',
      links: [
        { label: 'Abikeskus', href: 'https://help.vool.com' },
        { label: 'VOOL portaal', href: 'https://app.vool.com' },
        { label: 'Privaatsuspoliitika', href: '/et/cookie-policy/' },
      ],
    },
  },
  lt: {
    nav: [
      { label: 'Produktai', href: '/lt/#products' },
      { label: 'DAEI', href: '/lt/daei/' },
      { label: 'Kur įsigyti', href: '/lt/#buy' },
    ],
    login: 'Prisijungti',
    reseller: 'Partnerių prisijungimas',
    footer: {
      tagline: 'Išmanus elektromobilių įkrovimas, sukurtas ir pagamintas Estijoje.',
      company: 'MultiCharge OÜ · Veerenni 38, 10138 Talinas, Estija',
      links: [
        { label: 'Pagalbos centras', href: 'https://help.vool.com' },
        { label: 'VOOL portalas', href: 'https://app.vool.com' },
        { label: 'Privatumo politika', href: '/lt/privacy-policy/' },
      ],
    },
  },
} as const;

/** Reseller shop in Odoo (planned). */
export const RESELLER_URL = 'https://shop.vool.com/';
