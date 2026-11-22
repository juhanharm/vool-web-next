/**
 * AFIR / ISO 15118, new products (ISO 15118 charger, LMC S, Commercial Pole) and software pages.
 * Product facts: VOOL product planning (autumn 2026) and decisions by VOOL management.
 * Regulation: Commission Delegated Regulation (EU) 2025/656 amending AFIR (EU) 2023/1804.
 */
import { company } from './ui';
const contact = { label: 'Get a quote', href: '/get-a-quote/' };
const buy = { label: 'Where to buy', href: '/where-to-buy/' };

export const productPages: Record<string, any> = {
  '/afir/': {
    title: 'AFIR and ISO 15118-20: what changes on 1 January 2027 | VOOL',
    description: 'From 1 January 2027 newly installed AC charging points in the EU must support ISO 15118-20. The new VOOL Charger does, and existing VOOL chargers can be upgraded.',
    image: '/img/charger-pole.webp',
    sections: [
      { type: 'hero', dark: true, eyebrow: 'AFIR · ISO 15118-20', title: 'Chargers installed from 1 January 2027 need ISO 15118-20. VOOL is ready.',
        lead: 'The new VOOL Charger supports ISO 15118-2, ISO 15118-20 and Plug & Charge. It ships from mid-December 2026. Chargers you already have can be upgraded.',
        image: '/img/charger-pole.webp', alt: 'VOOL charger on a pole', cta: [contact, buy],
        facts: ['ISO 15118-2 and -20', 'Plug & Charge', 'V2G by firmware update, Q1 2027'] },
      { type: 'prose', title: 'What the rules say', points: [
        '<strong>Since 8 January 2026:</strong> newly installed or renovated publicly accessible AC charging points must support EN ISO 15118-2.',
        '<strong>From 1 January 2027:</strong> newly installed or renovated AC (Mode 3) charging points must support EN ISO 15118-20. This covers public and private charging points.',
        '<strong>Existing chargers stay as they are.</strong> The rule applies to new installations and renovations, not to chargers installed before the deadline.',
        '<strong>Public charging points</strong> must also offer ad hoc payment without a contract and show the price before charging starts. For AC, a QR code payment page is enough.',
      ], paragraphs: ['The rules come from the EU’s Alternative Fuels Infrastructure Regulation (AFIR) and its delegated regulation (EU) 2025/656. The Commission is still publishing guidance on the details, so check the current text before a tender.'],
        sources: [
          { label: 'Delegated Regulation (EU) 2025/656', href: 'https://eur-lex.europa.eu/eli/reg_del/2025/656/oj/eng' },
          { label: 'AFIR (EU) 2023/1804', href: 'https://eur-lex.europa.eu/eli/reg/2023/1804' },
          { label: 'European Alternative Fuels Observatory', href: 'https://alternative-fuels-observatory.ec.europa.eu/general-information/news/european-commission-publishes-delegated-acts-afir-open-consultation' } ] },
      { type: 'cards', soft: true, title: 'The new VOOL Charger', cols: 3, items: [
        { title: 'ISO 15118-2 and -20', text: 'Both versions from the first day, so the charger meets the 2026 and the 2027 requirements.' },
        { title: 'Plug & Charge', text: 'The car identifies itself when it is plugged in. No app or card needed to start.' },
        { title: 'V2G later, without new hardware', text: 'Bidirectional charging arrives as a firmware update in the first quarter of 2027.' },
        { title: 'Same charger otherwise', text: 'Up to 22 kW, 6.5 m cable, load management with VOOL LMC and a 5-year warranty.', href: '/products/vool-charger/', more: 'VOOL Charger' },
        { title: 'Available from mid-December 2026', text: 'Production has switched to the ISO 15118 charger. Ask your reseller about delivery dates.', href: '/where-to-buy/', more: 'Where to buy' },
        { title: 'Developed in-house', text: 'The ISO 15118 software is VOOL’s own, built by the team that makes the charger.' },
      ] },
      { type: 'split', image: '/img/charger-two.webp', alt: 'Two VOOL chargers on a wall', title: 'Already have VOOL chargers? Upgrade the controller.',
        text: 'Current VOOL chargers do not support ISO 15118, and they do not have to: they were installed before the deadline. If you want Plug & Charge or V2G, the charge controller can be swapped for the new one. The casing, cabling and cable stay.',
        points: ['The swap takes a few minutes and the tool ships with the controller', 'Price will be announced in December 2026'], cta: [contact] },
      { type: 'cards', soft: true, title: 'Public and semi-public sites', cols: 2, items: [
        { title: 'VOOL Commercial Pole', text: 'Two 22 kW charging points with a display, QR code payment and an optional MID meter.', href: '/products/commercial-pole/', more: 'Commercial Pole' },
        { title: 'Billing and payments', text: 'Ad hoc payment, pricing and payouts are handled by the VOOL platform.', href: '/software/billing-and-payments/', more: 'How it works' },
      ] },
      { type: 'faq', title: 'Questions', items: [
        { q: 'Can I still install the current VOOL charger in December 2026?', a: 'Yes. The ISO 15118-20 requirement applies to charging points installed or renovated from 1 January 2027.' },
        { q: 'Do I have to replace chargers that are already installed?', a: 'No. Chargers installed before the deadline can stay. An upgrade is your choice.' },
        { q: 'Does the rule apply to a private home?', a: 'From 1 January 2027 it covers newly installed private AC charging points too.' },
        { q: 'What is Plug & Charge?', a: 'The car and the charger identify each other over the charging cable, so charging and billing start without an app or a card.' },
        { q: 'When does V2G work?', a: 'The new charger gets bidirectional charging by firmware update in the first quarter of 2027. Your car and your grid operator’s rules also have to allow it.' },
      ] },
      { type: 'cta', title: 'Planning installations for 2027?', lead: 'Tell us what you are building. We will confirm what you need to comply.', buttons: [contact, buy] },
    ],
  },

  '/products/vool-lmc-s/': {
    title: 'VOOL LMC S – load management for homes and small sites',
    description: 'Load management for up to four chargers. Reads the meter’s P1 port or current clamps and is set up over Bluetooth in the VOOL App. From January 2027.',
    image: '/img/lmc-cabinet.webp',
    sections: [
      { type: 'hero', eyebrow: 'New · VOOL LMC S', title: 'Load management for the house, sized for the house',
        lead: 'The LMC S protects the main fuse and lets the car use whatever the home leaves free. For sites with up to four chargers. Available from January 2027.',
        image: '/img/lmc-cabinet.webp', alt: 'Load management controller in an electrical cabinet', cta: [buy, { label: 'Compare with LMC Pro', href: '#compare' }],
        facts: ['Up to 4 chargers', 'P1 port or current clamps', 'Set up over Bluetooth'] },
      { type: 'cards', soft: true, title: 'What you get', cols: 3, items: [
        { title: 'Full charging power when the house is quiet', text: 'The charger slows down when the stove and heating are on, and speeds up when they are off.' },
        { title: 'Works without internet', text: 'Load management runs locally between the LMC S and the chargers.' },
        { title: 'Quick to install', text: 'Connect to the meter’s P1 port, or use the current clamps included in the box. Chargers connect over CAN.' },
      ] },
      { type: 'steps', title: 'Setup', items: [
        { title: 'Mount', text: 'In the electrical cabinet, next to the main fuse or the meter.' },
        { title: 'Measure', text: 'Plug into the P1 port or clip the clamps on the incoming cables. The arrows point in the direction of energy flow.' },
        { title: 'Commission', text: 'Open the VOOL App and set it up over Bluetooth. No Wi-Fi hotspot needed.' },
      ] },
      { type: 'table', soft: true, title: 'LMC S or LMC Pro?', head: ['', 'LMC S', 'LMC Pro'], rows: [
        ['Best for', 'Houses and small sites', 'Apartment buildings, offices, car parks'],
        ['Chargers', 'Up to 4', '100+'],
        ['Measurement', 'P1 port or current clamps', 'Current clamps'],
        ['Several fuse levels', 'No', 'Yes'],
        ['Setup', 'Bluetooth, VOOL App', 'VOOL App'],
        ['Availability', 'From January 2027', 'Available now'],
      ] },
      { type: 'cta', title: 'Need load management before January?', lead: 'Order the LMC Pro. It does everything the LMC S does, and more.', buttons: [{ label: 'VOOL LMC Pro', href: '/products/vool-lmc/' }, buy] },
    ],
  },

  '/products/commercial-pole/': {
    title: 'VOOL Commercial Pole – two 22 kW charging points with MID metering',
    description: 'A public charging pole with two 22 kW charging points, display, QR code payment, RFID and an optional MID meter.',
    sections: [
      { type: 'hero', dark: true, eyebrow: 'New · VOOL Commercial Pole', title: 'Public charging in one pole: two charging points, payment and a certified meter',
        lead: 'For shops, offices, car parks and other sites where drivers pay for charging. Two independent 22 kW charging points with a display, QR code payment and an optional MID meter.',
        cta: [contact, { label: 'Billing and payments', href: '/software/billing-and-payments/' }],
        facts: ['2 × 22 kW', 'MID meter option', 'Display + QR payment'] },
      { type: 'cards', title: 'Built for sites where charging is billed', cols: 3, items: [
        { title: 'Pay without an app', text: 'The driver scans the QR code on the display, sees the price and pays. Regular users start with an RFID card.' },
        { title: 'Metering you can invoice from', text: 'The MID version has a certified meter for each charging point, for billing by the kWh.' },
        { title: 'Shares the connection', text: 'Works with VOOL LMC Pro or LMC S, or with another system over OCPP or Modbus.' },
        { title: 'Made for outdoors', text: 'IK10 impact protection and IP54, on a 1.5 m aluminium pole.' },
        { title: 'Always connected', text: 'Built-in mobile connectivity, so no network cable has to reach the car park.' },
        { title: 'Software included', text: 'Pricing, payments, payouts and reports run on the VOOL platform. No fixed fee.', href: '/software/', more: 'VOOL software' },
      ] },
      { type: 'specs', soft: true, title: 'Specifications', rows: [
        ['Charging points', '2, independent, up to 22 kW each'],
        ['Connectors', 'Type 2 sockets'],
        ['Metering', 'Integrated; MID-certified meter as an option'],
        ['User interface', 'Display with QR code, RFID/NFC reader'],
        ['Load management', 'VOOL LMC Pro or LMC S; OCPP or Modbus'],
        ['Connectivity', 'Mobile network'],
        ['Protection', 'IK10, IP54'],
        ['Pole', 'Aluminium, 1.5 m'],
      ], note: 'Specifications can change before deliveries start. Ask us for the current datasheet.' },
      { type: 'cards', title: 'Related', cols: 2, items: [
        { title: 'AFIR and public charging', text: 'What public AC charging points must offer: ad hoc payment, price before charging, ISO 15118.', href: '/afir/', more: 'AFIR explained' },
        { title: 'Public charging with VOOL', text: 'Set your price, appear on the maps drivers use and get paid for every session.', href: '/solutions/public-charging/', more: 'Public charging' },
      ] },
      { type: 'cta', title: 'Planning a public or semi-public site?', lead: 'Send us the location, the number of parking spaces and your grid connection. We reply with a proposal and delivery times.', buttons: [contact] },
    ],
  },

  '/software/': {
    title: 'VOOL software – app, portal, billing and roaming',
    description: 'What the VOOL platform does: smart charging, load management, users and access, pricing, billing, payouts, public charging and roaming.',
    image: '/img/portal-laptop.webp',
    sections: [
      { type: 'hero', eyebrow: 'Software', title: 'The charger is half of it. The software does the rest.',
        lead: 'One platform for drivers, site owners and installers. Most of it is free. You pay only when VOOL collects money for you.',
        image: '/img/portal-laptop.webp', alt: 'VOOL Portal and App', cta: [{ label: 'Open VOOL Portal', href: 'https://app.vool.com' }, { label: 'Billing and payments', href: '/software/billing-and-payments/' }] },
      { type: 'cards', soft: true, eyebrow: 'For drivers', title: 'VOOL App', cols: 3, items: [
        { title: 'Smart charging', text: 'Charges in the cheapest hours, following Nord Pool prices.' },
        { title: 'Schedules', text: 'Recurring charging times that match your week.' },
        { title: 'Costs and history', text: 'Energy and cost for every session.' },
        { title: 'Public charging', text: 'Find VOOL public chargers, see the price and pay in the app.' },
        { title: 'Setup for installers', text: 'Commission chargers and LMCs over Bluetooth and hand the site to the owner.' },
        { title: 'Free', text: 'For iPhone and Android.', href: '/products/vool-app/', more: 'VOOL App' },
      ] },
      { type: 'cards', eyebrow: 'For site owners · included', title: 'VOOL Portal', cols: 3, items: [
        { title: 'Sites and devices', text: 'Live status, sessions and energy for every charger and LMC.' },
        { title: 'Users and access groups', text: 'Decide who may charge where, with roles for managers.' },
        { title: 'RFID cards', text: 'Give residents, employees or drivers a card to start charging.' },
        { title: 'Pricing rules', text: 'Different prices for different groups: residents, staff, guests.' },
        { title: 'Scheduled reports', text: 'Consumption and cost reports sent to you automatically.' },
        { title: 'Any OCPP charger', text: 'Add chargers from other makers over OCPP 1.6 or 2.0.' },
      ] },
      { type: 'cards', soft: true, eyebrow: 'For sites that charge money · revenue share', title: 'Billing, public charging and roaming', cols: 3, items: [
        { title: 'Managed billing', text: 'VOOL charges the drivers, issues the invoices and pays you.', href: '/software/billing-and-payments/', more: 'How it works' },
        { title: 'Public charging', text: 'Your charger appears on Google Maps, Waze, Apple Maps and other maps, with ad hoc payment.', href: '/solutions/public-charging/', more: 'Public charging' },
        { title: 'Roaming', text: 'Through Hubject, drivers can use the charging apps and cards of other providers at your public chargers. We are adding providers now.' },
      ] },
      { type: 'cards', eyebrow: 'Connectivity and integrations', title: 'Works with what you have', cols: 3, items: [
        { title: 'Load management', text: 'Dynamic load management and automatic phase switching with VOOL LMC.', href: '/products/vool-lmc/', more: 'VOOL LMC' },
        { title: 'Modbus TCP', text: 'Read values and set limits from a building or energy management system.' },
        { title: 'OCPP and OCPI', text: 'Connect chargers to another back end, or connect partner platforms to VOOL.' },
        { title: '4G connectivity', text: 'Built into chargers and LMCs. From 1 January 2027: €2.50 per month or €24 per year per device, VAT included. New chargers get 30 days free.' },
        { title: 'ISO 15118', text: 'Plug & Charge with the new VOOL Charger, V2G by firmware update in Q1 2027.', href: '/afir/', more: 'AFIR and ISO 15118' },
        { title: 'DAEI in Lithuania', text: 'Get paid for the electricity you charge.', href: '/daei/', more: 'DAEI' },
        { title: 'Solar and vehicle data', text: 'Charging on your own solar power and reading the car’s battery level. Returning at the end of 2026.' },
        { title: 'All integrations', text: 'Protocols, typical setups and technical limits.', href: '/integrations/', more: 'Integrations' },
      ] },
      { type: 'cta', title: 'See it with your own site', buttons: [contact, { label: 'Log in', href: 'https://app.vool.com' }] },
    ],
  },

  '/software/billing-and-payments/': {
    title: 'Billing and payments for EV charging | VOOL',
    description: 'VOOL charges the drivers, issues invoices and pays the site owner every month. No fixed fee and no fee per connector.',
    image: '/img/portal-screen.webp',
    sections: [
      { type: 'hero', eyebrow: 'Billing and payments', title: 'Drivers pay. You get paid. VOOL does the paperwork.',
        lead: 'For apartment associations, offices and public sites that want charging paid by the people who charge. No fixed fee and no fee per connector.',
        image: '/img/portal-screen.webp', alt: 'Billing in the VOOL Portal', cta: [contact, { label: 'Open VOOL Portal', href: 'https://app.vool.com' }] },
      { type: 'steps', soft: true, title: 'How the money moves', items: [
        { title: 'You set the price', text: 'Per kWh, with different prices for different groups if you want.' },
        { title: 'The driver charges and pays', text: 'By card in the VOOL App, or by scanning a QR code at a public charger.' },
        { title: 'VOOL invoices the driver', text: 'Every session gets an invoice. You do not issue anything.' },
        { title: 'You are paid monthly', text: 'VOOL transfers what the drivers paid, less its fee, with a statement.' },
      ] },
      { type: 'table', title: 'What it costs', lead: 'You pay only when VOOL collects money for you.',
        head: ['Service', 'What it covers', 'VOOL fee'], rows: [
          ['Portal, users, RFID, pricing rules, reports', 'Managing your own chargers', 'Free'],
          ['Managed billing', 'VOOL bills your residents or employees and pays you', '8% of billed sessions'],
          ['Public charging', 'Ad hoc payment, listing on maps, payouts', '8% of billed sessions'],
          ['Roaming', 'Drivers using other providers’ apps and cards', '12% of billed sessions'],
          ['4G connectivity (from 1 January 2027)', 'Mobile data for a charger or LMC', '€2.50 / month or €24 / year per device, incl. VAT'],
        ], note: 'No fixed monthly fee and no fee per connector.' },
      { type: 'cards', soft: true, title: 'Who uses it', cols: 3, items: [
        { title: 'Apartment associations', text: 'Each resident pays for their own charging. Owners without an electric car pay nothing, and the board issues no invoices.', href: '/solutions/apartment-blocks/', more: 'Apartments & offices' },
        { title: 'Offices and fleets', text: 'Employees pay for private charging, company cars are reported separately.', href: '/solutions/electrical-fleet-owners/', more: 'Fleets' },
        { title: 'Public sites', text: 'Visitors pay without an app or a contract, as AFIR requires.', href: '/solutions/public-charging/', more: 'Public charging' },
      ] },
      { type: 'faq', title: 'Questions', items: [
        { q: 'Do I need a payment terminal?', a: 'No. Drivers pay in the VOOL App or through a QR code payment page.' },
        { q: 'Can residents and guests have different prices?', a: 'Yes. Pricing rules are set per access group.' },
        { q: 'What do I need to enter?', a: 'Your electricity cost and the price you want to charge. The Portal shows what you receive per kWh after fees.' },
        { q: 'Who handles VAT and invoices to drivers?', a: 'VOOL issues the invoices to drivers. Ask us how VAT applies to your organisation.' },
        { q: 'Can I manage billing myself instead?', a: 'Yes. The Portal’s reports show consumption per user, and you can invoice from those yourself at no cost.' },
      ] },
      { type: 'cta', title: 'Want to see what your site would earn?', lead: 'Send us the number of chargers and your electricity price.', buttons: [contact] },
    ],
  },
};
