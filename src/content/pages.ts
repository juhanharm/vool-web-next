/**
 * English pages of www.vool.com, as data. Each page is a list of sections rendered by
 * src/components/Sections.astro. Product facts come from the current vool.com (Nov 2026).
 * URLs are the same as on the current site so search rankings are kept.
 */
import { company, RESELLER_URL } from './ui';
import { morePages, nightEn, costLabels, demoLabels } from './knowledge';
import { productPages } from './products2';
import { commercialPages, projectSteps, installers } from './commercial';

const consent = 'I agree that VOOL processes my data to answer this enquiry (privacy policy).';
const error = 'Something went wrong. Please try again or write to info@vool.com.';
const buy = { label: 'Where to buy', href: '/where-to-buy/' };
const contact = { label: 'Get a quote', href: '/get-a-quote/' };

export interface Page { title: string; description: string; image?: string; lang?: string; alternates?: Record<string, string>; sections: any[] }

export const pages: Record<string, Page> = {
  '/': {
    title: 'VOOL – charge more cars on the grid connection you already have',
    description: 'Smart 22 kW EV charger, load management controller and software that work as one system. Designed and made in Estonia.',
    image: '/img/hero-home.webp',
    sections: [
      { type: 'hero', eyebrow: 'Designed and made in Estonia',
        title: 'Charge more cars on the grid connection you already have',
        lead: 'VOOL is one system: a smart charger, a load management controller and software that work together. No grid upgrade, no separate operator, lower charging costs.',
        image: '/img/hero-home.webp', alt: 'VOOL charger on a pole next to a parked car',
        cta: [{ label: 'Find your solution', href: '#solutions' }, buy],
        facts: ['Up to 22 kW', '5-year warranty', 'Up to 30% lower charging costs'] },
      { type: 'stats', items: [
        { value: '20,000+', label: 'devices sold' }, { value: '100+', label: 'chargers managed by one LMC Pro' },
        { value: '45', label: 'chargers on one 125 A connection' }, { value: '14', label: 'countries with VOOL partners' } ] },
      { type: 'logos', title: 'Used by', items: [
        { name: 'Omniva', src: '/img/logos/omniva.webp' }, { name: 'Hansabuss', src: '/img/logos/hansabuss.webp' }, { name: 'Europcar', src: '/img/logos/europcar.webp' }, { name: 'Alexela', src: '/img/logos/alexela.svg' } ] },
      { type: 'cards', id: 'solutions', eyebrow: 'Solutions', title: 'Where do you need charging?', cols: 4, items: [
        { title: 'Apartment buildings', image: '/img/apartments.webp', text: 'Shared charging with load management and fair billing per user.', href: '/solutions/apartment-blocks/' },
        { title: 'Homes', image: '/img/home.webp', text: 'Charge when electricity is cheapest, controlled from your phone.', href: '/solutions/ev-charger-for-home/' },
        { title: 'Fleets', image: '/img/garage.webp', text: 'Costs and status per vehicle, for five cars or thousands.', href: '/solutions/electrical-fleet-owners/' },
        { title: 'Public charging', image: '/img/public.webp', text: 'Open your chargers to visitors and get paid for every session.', href: '/solutions/public-charging/' },
      ] },
      { type: 'cards', soft: true, eyebrow: 'New', title: 'Money for charging', cols: 2, items: [
        { title: 'Estonia: KIK grant for apartment associations', text: 'A 10-point installation with VOOL chargers and load management gets €14,090 in grant. We help with the quote and the application.', href: '/apartment-buildings/', more: 'See the grant' },
        { title: 'Lithuania: get paid for charging at home', text: 'VOOL pays you 3.9 ct for every kWh you charge, through the DAEI system. Launching December 2026.', href: '/daei/', more: 'Join the waiting list' },
      ] },
      { type: 'cards', id: 'products', eyebrow: 'Products', title: 'One system, four parts', cols: 4, items: [
        { title: 'VOOL Charger', image: '/img/charger-finishes.webp', text: 'Up to 22 kW with a 6.5 m cable. Black, aluminium or wood.', href: '/products/vool-charger/' },
        { title: 'VOOL LMC', image: '/img/lmc-cabinet.webp', text: 'Balances the load so fuses stay safe and every amp is used.', href: '/products/vool-lmc/' },
        { title: 'VOOL App', image: '/img/app-hand.webp', text: 'Charges when prices are lowest. Free.', href: '/products/vool-app/' },
        { title: 'VOOL Portal', image: '/img/portal-screen.webp', text: 'Users, billing and reports for every site in one place.', href: '/products/vool-portal/' },
      ] },
      { type: 'cards', soft: true, eyebrow: 'New', title: 'Ready for 2027', cols: 3, items: [
        { title: 'VOOL Charger with ISO 15118-20', text: 'Meets the AFIR rule for chargers installed from 1 January 2027. Plug & Charge now, V2G by update.', href: '/afir/', more: 'AFIR and the new charger' },
        { title: 'VOOL LMC S', text: 'Load management for houses and small sites with up to four chargers. From January 2027.', href: '/products/vool-lmc-s/', more: 'LMC S' },
        { title: 'VOOL Commercial Pole', text: 'Two 22 kW charging points with display, QR payment and an optional MID meter.', href: '/products/commercial-pole/', more: 'Commercial Pole' },
      ] },
      { type: 'split', image: '/img/garage.webp', alt: 'Underground car park with VOOL chargers',
        eyebrow: 'Why VOOL', title: 'The expensive part of charging is the grid. We make it go further.',
        text: 'Most buildings have more capacity than they use. VOOL measures the load in real time and gives the spare capacity to the cars, moving each one to the least loaded phase.',
        points: ['On one campus, 45 chargers run on a single 125 A connection', 'Fuses stay safe while the building runs as usual', 'Add chargers later: mount the casing now, click in the controller when needed'],
        cta: [{ label: 'Try the live demo', href: '/live-demo/' }, { label: 'Compare', href: '/compare/' }] },
      { type: 'cards', eyebrow: 'Customers', title: 'Used by companies that run charging every day', cols: 3, items: [
        { title: 'Omniva: 300 chargers', text: 'VOOL supplies chargers for Omniva’s courier fleet across Estonia over five years.', href: '/resources/blog/vool-joins-omniva-on-their-journey-towards-electrifying-transportation/', more: 'Read the story' },
        { title: 'Office building: 40 chargers, 100 users', text: 'Eleven companies share the chargers. 75 MWh charged in 3,000 sessions within six months.', href: '/case-studies/', more: 'All case studies' },
        { title: 'Residence: 19 chargers in three weeks', text: 'After the shared installation in a 74-space car park, owners ordered 19 chargers within three weeks.', href: '/case-studies/', more: 'All case studies' },
      ] },
      { type: 'cta', title: 'Ready to plan your charging?', lead: 'Tell us about your site, or buy from a partner near you.',
        buttons: [contact, buy, { label: 'Reseller login', href: RESELLER_URL }] },
    ],
  },

  '/products/vool-charger/': {
    title: 'VOOL Charger – 22 kW smart EV charger with a 5-year warranty',
    description: 'Up to 22 kW, 6.5 m Type 2 cable, IP55 and IK10, works from −30 °C to +55 °C. Modular installation on a wall or pole.',
    image: '/img/charger-pole.webp',
    sections: [
      { type: 'hero', eyebrow: 'VOOL Charger', title: 'Reliable charging, built for northern weather',
        lead: 'Up to 22 kW for any electric car, at home, at work or in a shared car park. Backed by a 5-year warranty.',
        image: '/img/charger-pole.webp', alt: 'VOOL charger with wooden front panel on a pole',
        cta: [buy, { label: 'See the specifications', href: '#specs' }], facts: ['Up to 22 kW', 'IP55 · IK10', '−30 °C to +55 °C'] },
      { type: 'cards', soft: true, title: 'What you get', cols: 3, items: [
        { title: 'Works with every EV', text: 'A fixed 6.5 m cable with a Type 2 plug. Nothing to carry, nothing to forget.' },
        { title: 'Lower charging costs', text: 'With the VOOL App the car charges when electricity is cheapest. Users save up to 30%.' },
        { title: 'Quick to install', text: 'Mount the casing on a wall or a VOOL pole, click in the controller, attach the front panel.' },
      ] },
      { type: 'split', image: '/img/charger-finishes.webp', alt: 'VOOL chargers in black, aluminium and wood',
        title: 'Three finishes, one clean design', text: 'Choose the front panel that suits the building: black, aluminium or wood. The charger looks at home on a house wall and in a company car park.' },
      { type: 'split', flip: true, soft: true, image: '/img/charger-two.webp', alt: 'Two VOOL chargers on a wall',
        title: 'Prepare every parking space now, finish later',
        text: 'The casing and the charging controller are separate. Install casings for all spaces during building work and add controllers as drivers switch to electric.',
        points: ['Lower cost on day one', 'No second round of cabling', 'Chargers talk to each other and share the available power'] },
      { type: 'cards', soft: true, eyebrow: 'New from mid-December 2026', title: 'Now with ISO 15118-20', cols: 1, items: [
        { title: 'Ready for the AFIR rule that starts on 1 January 2027', text: 'The new VOOL Charger supports ISO 15118-2, ISO 15118-20 and Plug & Charge. V2G follows by firmware update in Q1 2027. Existing chargers can be upgraded by swapping the controller.', href: '/afir/', more: 'AFIR and ISO 15118' },
      ] },
      { type: 'specs', title: 'Specifications', rows: [
        ['Charging power', 'Up to 22 kW (3 × 32 A)'],
        ['Cable', '6.5 m, Type 2 plug'],
        ['Protection', 'IP55 weather resistance, IK10 impact protection'],
        ['Operating temperature', '−30 °C to +55 °C'],
        ['Connectivity', 'Mobile internet, WiFi, Ethernet, Bluetooth'],
        ['Vehicle communication', 'ISO 15118-2 and -20, Plug & Charge (chargers produced from December 2026)'],
        ['Phase use', 'Dynamic phase switching with VOOL LMC'],
        ['Installation', 'Wall or VOOL pole; modular casing and controller'],
        ['Front panels', 'Black, aluminium, wood'],
        ['Warranty', '5 years'],
        ['Made in', 'Estonia'],
      ], links: [{ label: 'User manual (PDF)', href: '/media/VOOL_user_manual_complete.pdf' }, { label: 'All manuals', href: '/resources/product-manuals/' }] },
      { type: 'cards', title: 'Versions and accessories', cols: 3, items: [
        { title: 'MID wall charger', text: 'With a certified meter for billing by the kWh. Coming in 2027.', href: '/get-a-quote/', more: 'Ask about MID' },
        { title: 'Commercial Pole', text: 'Two 22 kW charging points with display and QR payment for public sites.', href: '/products/commercial-pole/', more: 'Commercial Pole' },
        { title: 'Accessories', text: 'Poles, cable holder, front panels and spare parts.', href: '/products/accessories/', more: 'Accessories' },
      ] },
      { type: 'cta', title: 'Get a VOOL Charger', lead: 'Our partners sell and install VOOL across Europe.', buttons: [buy, contact] },
    ],
  },

  '/products/vool-lmc/': {
    title: 'VOOL LMC – load management controller for EV charging',
    description: 'Use the full capacity of your grid connection. VOOL LMC balances the load and switches phases automatically, so fuses stay safe.',
    image: '/img/lmc.webp',
    sections: [
      { type: 'hero', dark: true, eyebrow: 'VOOL LMC · Load Management Controller', title: 'Use your full grid capacity. Keep every fuse safe.',
        lead: 'The LMC sits in your electrical cabinet, measures the building’s load in real time and gives the spare capacity to the chargers. No grid upgrade needed.',
        image: '/img/lmc.webp', alt: 'VOOL load management controller', cta: [buy, contact] },
      { type: 'cards', title: 'What it does', cols: 3, items: [
        { title: 'Protects the main fuse', text: 'If one phase fills up, charging moves to a less loaded phase or slows down. The load stays balanced.' },
        { title: 'Works on its own', text: 'Nothing to configure day to day. The VOOL App shows electricity use and phase load in real time.' },
        { title: 'Nobody notices', text: 'When it steps in, the car keeps charging, the lights stay on and the washing machine finishes its cycle.' },
      ] },
      { type: 'split', soft: true, image: '/img/lmc-cabinet.webp', alt: 'VOOL LMC mounted in an electrical cabinet',
        title: 'One controller for the whole site',
        text: 'One LMC Pro manages more than 100 chargers and supports load management at several levels of the electrical installation. On a business campus in Luxembourg, one tenant runs 45 VOOL chargers on a single 125 A connection.',
        points: ['Dynamic load management', 'Automatic phase switching', 'Mobile internet, WiFi, Ethernet and Bluetooth'] },
      { type: 'cards', title: 'Two models', cols: 2, items: [
        { title: 'LMC Pro', text: 'For apartment buildings, offices and car parks. Manages 100+ chargers. Available now.' },
        { title: 'LMC S', text: 'For houses and small sites with up to four chargers. Current clamps are included in the box and setup is done over Bluetooth in the VOOL App. Available from January 2027.', href: '/products/vool-lmc-s/', more: 'VOOL LMC S' },
      ] },
      { type: 'demo', soft: true, title: 'Try it: how many cars fit on your connection?', labels: demoLabels.en },
      { type: 'cta', title: 'Planning a larger installation?', lead: 'Send us the number of parking spaces and the size of the main fuse. We will tell you what fits.', buttons: [contact, buy] },
    ],
  },

  '/products/vool-app/': {
    title: 'VOOL App – charge your EV when electricity is cheapest',
    description: 'Free app for your VOOL charger. Smart Charging follows Nord Pool prices and saves up to 30% on charging costs.',
    image: '/img/app-hand.webp',
    sections: [
      { type: 'hero', eyebrow: 'VOOL App', title: 'Your car charges when electricity is cheapest',
        lead: 'Set when the car must be ready. The free VOOL App follows hourly prices and does the rest. Users save up to 30% on charging costs.',
        image: '/img/app-hand.webp', alt: 'VOOL App on a phone',
        cta: [{ label: 'App Store', href: company.appStore }, { label: 'Google Play', href: company.playStore }] },
      { type: 'steps', soft: true, title: 'How it works', items: [
        { title: 'Download the app', text: 'Get the VOOL App and create an account in a few steps.' },
        { title: 'Connect your charger', text: 'Link your VOOL Charger, or any OCPP-compliant charger, to the app.' },
        { title: 'Save while charging', text: 'Turn on Smart Charging or set a recurring schedule. Or start and stop by hand.' },
      ] },
      nightEn,
      { type: 'split', image: '/img/app-insights.webp', alt: 'Charging statistics in the VOOL App',
        title: 'See what charging really costs',
        text: 'Price forecasts for the next 24 hours, energy used and money saved per session, and your full charging history.',
        points: ['Smart Charging based on Nord Pool prices', 'Recurring schedules that match your week', 'Remote monitoring and settings'] },
      { type: 'split', flip: true, soft: true, image: '/img/home-phone.webp', alt: 'Driver using the VOOL App next to a charger',
        title: 'For installers too', text: 'Set up chargers and LMCs in the app, then hand ownership to the customer. You keep remote access to the sites you installed.' },
      { type: 'cta', title: 'The VOOL App is free', buttons: [{ label: 'App Store', href: company.appStore }, { label: 'Google Play', href: company.playStore }] },
    ],
  },

  '/products/vool-portal/': {
    title: 'VOOL Portal – manage EV chargers, users and billing',
    description: 'One place to manage charging sites, users, prices and invoices. Works with any OCPP 1.6 or 2.0 charger.',
    image: '/img/portal-screen.webp',
    sections: [
      { type: 'hero', eyebrow: 'VOOL Portal', title: 'Run your charging without the paperwork',
        lead: 'Sites, users, prices, invoices and reports in one place. For one building or a network of sites.',
        image: '/img/portal-screen.webp', alt: 'VOOL Portal on a laptop',
        cta: [{ label: 'Open VOOL Portal', href: 'https://app.vool.com' }, contact] },
      { type: 'cards', soft: true, title: 'What you can do', cols: 3, items: [
        { title: 'See everything live', text: 'Sessions, energy use and costs for every charger and every site.' },
        { title: 'Decide who charges', text: 'Access levels and users, with RFID cards where needed.' },
        { title: 'Bill automatically', text: 'Prices, invoices and payments are handled for you, with reports per user or apartment.' },
        { title: 'Use any charger', text: 'Works with all OCPP 1.6 and 2.0 chargers, including other brands.' },
        { title: 'Open to the public', text: 'Make chargers visible on Google Maps, Waze and other maps in a few clicks.' },
        { title: 'Less admin', text: 'Automatic reports, a link to your bookkeeping system and alerts when something needs attention.' },
      ] },
      { type: 'split', image: '/img/portal-laptop.webp', alt: 'VOOL Portal and app',
        title: 'Earn from chargers that stand idle',
        text: 'Open a charger for public use, set your own price and availability, and track usage in real time. Payments are collected automatically.',
        cta: [{ label: 'Public charging', href: '/solutions/public-charging/' }] },
      { type: 'cards', soft: true, title: 'More about the software', cols: 2, items: [
        { title: 'All software features', text: 'App, Portal, roaming, integrations and connectivity on one page.', href: '/software/', more: 'VOOL software' },
        { title: 'Billing and payments', text: 'How drivers pay, how you are paid and what it costs.', href: '/software/billing-and-payments/', more: 'Billing and payments' },
      ] },
      { type: 'cta', title: 'Want to see the Portal with your own site?', buttons: [contact, { label: 'Log in', href: 'https://app.vool.com' }] },
    ],
  },

  '/solutions/apartment-blocks/': {
    title: 'EV charging for apartment buildings and offices | VOOL',
    description: 'Charge more cars without upgrading the grid connection. Load management, billing per user and reports for the association.',
    image: '/img/apartments.webp',
    sections: [
      { type: 'hero', eyebrow: 'Apartments & offices', title: 'Charging for the whole building, on the connection you have',
        lead: 'VOOL shares the building’s spare capacity between the cars. The association or the company runs charging itself, and only the people who charge pay for it.',
        image: '/img/apartments.webp', alt: 'VOOL charger at an apartment building',
        cta: [{ label: 'Get a quote', href: '/resources/contact/' }, { label: 'KIK grant in Estonia', href: '/apartment-buildings/' }] },
      { type: 'cards', soft: true, title: 'Why associations and property managers choose VOOL', cols: 3, items: [
        { title: 'No grid upgrade', text: 'Automatic phase switching and load management make full use of the existing connection.' },
        { title: 'Fair costs', text: 'Each driver pays for their own charging. Owners without an electric car pay nothing.' },
        { title: 'No separate operator', text: 'The association manages users and billing in the VOOL Portal. We provide support and maintenance.' },
      ] },
      { type: 'split', image: '/img/garage.webp', alt: 'Car park with VOOL chargers',
        title: 'Prepare now, expand later',
        text: 'Mount casings on every parking space during the building work. Click in a charging controller when the owner of that space gets an electric car.' },
      { type: 'split', flip: true, soft: true, image: '/img/portal-screen.webp', alt: 'Reports in the VOOL Portal',
        title: 'Management that fits a board meeting', points: [
          'Consumption reports per apartment', 'Automatic invoicing', 'Electricity use per charger',
          'User authentication', 'Full charging session history', 'Smart charging built in'] },
      { type: 'cards', title: 'Proof from real buildings', cols: 3, items: [
        { title: '45 chargers on 125 A', text: 'One tenant on a Luxembourg business campus runs 45 VOOL chargers on a single 125 A connection.', href: '/case-studies/', more: 'Case studies' },
        { title: '19 chargers in three weeks', text: 'In a 74-space residence, owners ordered 19 chargers within three weeks of the shared installation.', href: '/case-studies/', more: 'Case studies' },
        { title: 'Getting it through the meeting', text: 'A draft resolution, answers to owners’ questions and what the law says.', href: '/knowledge/general-meeting/', more: 'Guide for boards' },
      ] },
      { type: 'cost', title: 'What charging at home costs a driver', lead: 'A number for the board to show owners.', note: 'Example values for Estonia; enter your own. The electricity price should include energy, network fees and taxes. Assumes 18 kWh/100 km and 6.5 l/100 km.', labels: costLabels.en },
      { type: 'cards', soft: true, title: 'Who runs the charging? You choose.', cols: 3, items: [
        { title: 'The association runs it', text: 'VOOL provides the platform, billing and support. The board sets the price and sees the reports. No separate operator is needed.', href: '/software/billing-and-payments/', more: 'Billing and payments' },
        { title: 'An operator runs it', text: 'If the board wants no part in it, an operator partner owns or manages the chargers on VOOL.', href: '/get-a-quote/', more: 'Ask us for an operator' },
        { title: 'Each owner buys a charger', text: 'The association builds the shared cabling and load management. Owners add their own charger when they need one.', href: '/knowledge/general-meeting/', more: 'Guide for the general meeting' },
      ] },
      projectSteps,
      installers,
      { type: 'cards', title: 'Estonia: KIK pays part of the cost', cols: 1, items: [
        { title: '€14,090 in grant for 10 charging points', text: 'Apartment associations outside Tallinn and Tartu city can apply for KIK’s EV charging grant. Load management is required, and VOOL LMC covers it.', href: '/apartment-buildings/', more: 'Grant terms and example' },
      ] },
      { type: 'cta', title: 'Tell us about your building', lead: 'Number of parking spaces, main fuse size and how many chargers you need now. We reply within 1–2 working days.',
        buttons: [contact, { label: 'Brochure (PDF)', href: '/media/VOOL_apartments__offices_web_01.2024.pdf' }] },
    ],
  },

  '/solutions/ev-charger-for-home/': {
    title: 'Home EV charger – charge when electricity is cheapest | VOOL',
    description: 'A 22 kW smart charger for your house, with an app that follows electricity prices and saves up to 30% on charging.',
    image: '/img/home.webp',
    sections: [
      { type: 'hero', eyebrow: 'Homes', title: 'Plug in at home. Pay less for every kilometre.',
        lead: 'The VOOL Charger and the free app charge your car when electricity is cheapest, and have it ready when you leave.',
        image: '/img/home.webp', alt: 'Family charging an electric car at home in winter', cta: [buy, { label: 'VOOL Charger', href: '/products/vool-charger/' }] },
      { type: 'cards', soft: true, title: 'Made for everyday life', cols: 3, items: [
        { title: 'Up to 30% cheaper', text: 'The app checks prices for the next 24 hours and picks the cheapest hours.' },
        { title: 'Safe for your fuse box', text: 'Add a VOOL LMC and the charger shares power with the heating, the stove and other appliances without tripping a fuse.' },
        { title: 'Built to last', text: 'IP55, IK10 and −30 °C to +55 °C, with a 5-year warranty.' },
      ] },
      nightEn,
      { type: 'split', image: '/img/home-family.webp', alt: 'Parent and child plugging in a car',
        title: 'Set it once', text: 'Tell the app when the car should be ready and how full. It handles the rest and shows what each session cost.',
        cta: [{ label: 'VOOL App', href: '/products/vool-app/' }] },
      { type: 'cards', soft: true, title: 'Lithuania: get paid for charging at home', cols: 1, items: [
        { title: '3.9 ct for every kWh', text: 'With DAEI, VOOL pays you for the electricity you charge at home. The rate is fixed for 12 months.', href: '/daei/', more: 'Join the waiting list' },
      ] },
      { type: 'cta', title: 'Buy from a partner near you', lead: 'VOOL does not install chargers itself. Our partners sell and install.', buttons: [buy] },
    ],
  },

  '/solutions/electrical-fleet-owners/': {
    title: 'EV fleet charging – costs and status per vehicle | VOOL',
    description: 'Charge company cars and fleets without upgrading the grid connection. Real-time overview and costs per vehicle.',
    image: '/img/fleet.webp',
    sections: [
      { type: 'hero', eyebrow: 'Fleets & businesses', title: 'Electrify the fleet without rebuilding the depot',
        lead: 'Hardware and software built by one team. Charge five vehicles or thousands, and see the cost of each one.',
        image: '/img/garage.webp', alt: 'Depot with VOOL chargers', cta: [contact, { label: 'VOOL Portal', href: '/products/vool-portal/' }] },
      { type: 'cards', soft: true, title: 'What fleet managers get', cols: 3, items: [
        { title: 'Status of every vehicle', text: 'Charging, plugged in or on the road, with mileage and location, in real time.' },
        { title: 'Costs you can report', text: 'Energy and cost in kWh and euros per vehicle or for the whole fleet, for any period.' },
        { title: 'Cheaper energy', text: 'Vehicles charge when electricity prices are lowest, or at the times you set.' },
        { title: 'Any charger', text: 'The platform supports any OCPP 1.6 or 2.0 charger, so existing chargers can stay.' },
        { title: 'No grid upgrade', text: 'Load management shares the available power between vehicles.' },
      ] },
      { type: 'cards', title: 'Customer stories', cols: 2, items: [
        { title: 'Omniva: 300 chargers for its courier fleet', text: 'Over five years VOOL supplies Omniva with 300 chargers across Estonia.', href: '/resources/blog/vool-joins-omniva-on-their-journey-towards-electrifying-transportation/', more: 'Read the story' },
        { title: 'Hansabuss charges electric buses at its existing hubs', text: 'The bus operator uses VOOL chargers at its Latvian hubs and at drivers’ homes, without major changes to the infrastructure.', href: '/solutions/usecases/hansabuss-saved-30-with-vool-on-their-fleet-charging-costs/', more: 'Read the story' },
      ] },
      { type: 'cta', title: 'Tell us about your fleet', lead: 'Number of vehicles, where they park and your grid connection. We will propose a setup.', buttons: [contact] },
    ],
  },

  '/solutions/public-charging/': {
    title: 'Public charging – earn from your VOOL charger',
    description: 'Make your charger public in a few clicks. It appears on Google Maps, Waze and Apple Maps, and payments are collected for you.',
    image: '/img/public.webp',
    sections: [
      { type: 'hero', eyebrow: 'Public charging', title: 'Your charger stands idle most of the day. Let it earn.',
        lead: 'Open your VOOL charger to other drivers when it suits you. You set the price and keep the margin. For business customers.',
        image: '/img/public.webp', alt: 'VOOL charger outside an office building', cta: [contact, { label: 'VOOL Portal', href: '/products/vool-portal/' }] },
      { type: 'steps', soft: true, title: 'Four steps', items: [
        { title: 'Add the charger', text: 'Add your charger to the VOOL Portal.' },
        { title: 'Set the electricity price', text: 'Enter what the electricity costs you.' },
        { title: 'Set your margin', text: 'Decide what you earn on each kWh.' },
        { title: 'Make it public', text: 'Drivers can now find it and pay for charging.' },
      ] },
      { type: 'split', image: '/img/app-insights.webp', alt: 'Public chargers in the VOOL App',
        title: 'Drivers find you where they already look',
        text: 'A public charger shows up on Google Maps, Waze, Apple Maps, Tesla, TomTom, HERE and Chargetrip, and in the VOOL App with live availability and price.' },
      { type: 'cards', soft: true, title: 'You stay in control', cols: 3, items: [
        { title: 'Your price, your hours', text: 'Change pricing and availability whenever you want.' },
        { title: 'Payments handled', text: 'Drivers pay in the app. No invoices to chase.' },
        { title: 'Live overview', text: 'See status, sessions and income for every charger.' },
      ] },
      { type: 'cards', title: 'More drivers, less work', cols: 3, items: [
        { title: 'Roaming through Hubject', text: 'Drivers start charging with the apps and cards of other providers. You are paid the same way. Providers are being added now.', href: '/integrations/', more: 'Integrations' },
        { title: 'Ready for AFIR', text: 'Ad hoc payment by QR code and the price shown before charging starts.', href: '/afir/', more: 'AFIR explained' },
        { title: 'VOOL Commercial Pole', text: 'Two 22 kW charging points with display, QR payment and an optional MID meter.', href: '/products/commercial-pole/', more: 'Commercial Pole' },
      ] },
      { type: 'cta', title: 'Open your chargers to the public', buttons: [contact] },
    ],
  },

  '/resources/resellers/': {
    title: 'Become a VOOL reseller or installer',
    description: 'Sell a complete EV charging system: charger, load management and software. See stock and your prices and order online.',
    image: '/img/wall-dark.webp',
    sections: [
      { type: 'hero', dark: true, eyebrow: 'Partners', title: 'Sell a charging system your customers do not call you back about',
        lead: 'Charger, load management and software from one maker, with a 5-year warranty and support from the team that built it.',
        image: '/img/wall-dark.webp', alt: 'VOOL charger on a dark wall',
        cta: [{ label: 'Become a partner', href: '#form' }, { label: 'Reseller login', href: RESELLER_URL }] },
      { type: 'cards', title: 'What you sell', cols: 3, items: [
        { title: 'Charger', points: ['Up to 22 kW, 6.5 m cable', '5-year warranty', 'Dynamic phase switching', 'Wall or VOOL pole', 'Made in Estonia'] },
        { title: 'LMC', points: ['Dynamic load management', 'Automatic phase switching', 'Load management on several levels', 'Mobile internet, WiFi, Ethernet, Bluetooth'] },
        { title: 'Software', points: ['Smart charging app for drivers', 'Portal for apartments, offices, fleets and public charging', 'Remote access to the sites you install'] },
      ] },
      { type: 'steps', soft: true, title: 'Installation in four moves', items: [
        { title: 'Install the casing', text: 'On a wall or a VOOL pole.' },
        { title: 'Insert the controller', text: 'Now, or later if the customer only wants the space prepared.' },
        { title: 'Attach the front panel', text: 'It clicks on.' },
        { title: 'Add the LMC', text: 'For load management and automatic phase switching.' },
      ] },
      { type: 'cards', soft: true, title: 'Sales toolkit', cols: 3, items: [
        { title: 'Datasheets and manuals', text: 'For chargers, LMCs and accessories, in several languages.', href: '/resources/product-manuals/', more: 'Product manuals' },
        { title: 'Tender specification text', text: 'Ready text for designers and public tenders.', href: '/solutions/developers/#spec', more: 'Specification text' },
        { title: 'Live demo for customer meetings', text: 'Show how many cars fit on a customer’s main fuse.', href: '/live-demo/', more: 'Live demo' },
        { title: 'Comparison page', text: 'VOOL load management against ordinary load balancing, point by point.', href: '/compare/', more: 'Compare' },
        { title: 'Guide for the general meeting', text: 'Hand it to apartment associations before they vote.', href: '/knowledge/general-meeting/', more: 'The guide' },
        { title: 'Warranty that covers your demo units', text: 'Five years, counted from your sale to the end customer.', href: '/support/warranty/', more: 'Warranty and support' },
      ] },
      { type: 'cards', title: 'What partners get', cols: 3, items: [
        { title: 'Stock and prices online', text: 'Log in to see what is in stock and your own prices, and place orders.', href: RESELLER_URL, more: 'Reseller login' },
        { title: 'Tools for installers', text: 'Set up sites in the VOOL App and keep remote access for support.' },
        { title: 'Leads from us', text: 'We do not install. Customers who contact VOOL are sent to partners on our where-to-buy page.', href: '/where-to-buy/', more: 'See the partner list' },
      ] },
      { type: 'form', form: 'reseller', title: 'Become a VOOL partner', intro: 'Tell us about your company. We reply within 1–2 working days.',
        fields: [
          { name: 'company', label: 'Company', required: true }, { name: 'country', label: 'Country', required: true, half: true },
          { name: 'partner_type', label: 'You are', type: 'select', options: ['Installer', 'Wholesaler', 'Energy company', 'Other'], half: true },
          { name: 'name', label: 'Name', required: true, half: true }, { name: 'phone', label: 'Phone', type: 'tel', half: true },
          { name: 'email', label: 'Email', type: 'email', required: true }, { name: 'message', label: 'Message', type: 'textarea' },
        ], submit: 'Send', thanks: 'Thank you! We will be in touch soon.', error, consent },
    ],
  },

  '/resources/contact/': {
    title: 'Contact VOOL',
    description: 'Ask for a quote, find a partner or get support. VOOL, Veerenni 38, Tallinn, Estonia.',
    sections: [
      { type: 'hero', eyebrow: 'Contact', title: 'How can we help?',
        lead: `Write to ${company.email} or call ${company.phone}. For help with a charger you already have, the Help Center is the fastest route.`,
        cta: [{ label: 'Send a message', href: '#form' }, { label: 'Help Center', href: company.help }] },
      { type: 'cards', soft: true, title: 'The right door', cols: 3, items: [
        { title: 'I want to buy', text: 'Partners across Europe sell and install VOOL.', href: '/where-to-buy/', more: 'Where to buy' },
        { title: 'I need support', text: 'Guides, manuals and chat with our support team.', href: company.help, more: 'Help Center' },
        { title: 'I want to sell VOOL', text: 'Become a reseller or installer.', href: '/resources/resellers/', more: 'Partners' },
      ] },
      { type: 'form', form: 'contact', title: 'Send us a message', intro: 'We reply within 1–2 working days.',
        fields: [
          { name: 'name', label: 'Name', required: true, half: true }, { name: 'company', label: 'Company or association', half: true },
          { name: 'email', label: 'Email', type: 'email', required: true, half: true }, { name: 'phone', label: 'Phone', type: 'tel', half: true },
          { name: 'topic', label: 'Topic', type: 'select', options: ['Apartment building or office', 'Home', 'Fleet', 'Public charging', 'Other'] },
          { name: 'message', label: 'Message', type: 'textarea', required: true },
        ], submit: 'Send', thanks: 'Thank you! We received your message.', error, consent },
      { type: 'specs', title: 'Company details', rows: [
        ['Company', company.name], ['Registration number', company.reg], ['Address', company.address],
        ['Phone', company.phone], ['Email', company.email] ] },
    ],
  },

  '/resources/help-center/': {
    title: 'VOOL Help Center and support',
    description: 'Installation guides, troubleshooting, app and portal help for VOOL chargers and LMCs.',
    sections: [
      { type: 'hero', eyebrow: 'Support', title: 'Help for installers and drivers',
        lead: 'Step-by-step guides and answers, written by the team that builds VOOL. Chat with support from any article.',
        cta: [{ label: 'Open the Help Center', href: company.help }, { label: 'Product manuals', href: '/resources/product-manuals/' }] },
      { type: 'links', soft: true, title: 'Popular topics', items: [
        { label: 'Installation guide: VOOL Charger', href: 'https://support.vool.com/en/collections/5757748-installation-guide-vool-charger' },
        { label: 'Installation guide: VOOL LMC', href: 'https://support.vool.com/en/collections/5913122-installation-guide-vool-lmc' },
        { label: 'Load management explained', href: 'https://support.vool.com/en/collections/12682971-load-management' },
        { label: 'Troubleshooting charging issues', href: 'https://support.vool.com/en/collections/9261202-troubleshooting-charging-issues' },
        { label: 'Mobile app', href: 'https://support.vool.com/en/collections/5671970-mobile-app' },
        { label: 'VOOL Portal', href: 'https://support.vool.com/en/collections/9472479-vool-portal' },
        { label: 'Public charging', href: 'https://support.vool.com/en/collections/5673080-public-charging' },
        { label: 'Subscriptions', href: 'https://support.vool.com/en/collections/10506185-subscriptions' },
        { label: 'Product updates', href: 'https://support.vool.com/en/collections/9505712-product-updates' },
        { label: 'FAQ', href: '/faq/' },
      ] },
    ],
  },

  '/resources/product-manuals/': {
    title: 'VOOL product manuals and installation guides',
    description: 'Manuals and installation guides for the VOOL Charger and LMC in nine languages, plus the EU declaration of conformity.',
    sections: [
      { type: 'hero', eyebrow: 'Support', title: 'Manuals and installation guides',
        lead: 'For the VOOL Charger, LMC and Pro Pole. Kept up to date in the Help Center.' },
      { type: 'links', soft: true, title: 'Charger & LMC manuals', items: [
        { label: 'English', href: 'https://support.vool.com/en/articles/9527387-english-manuals-installation-guide' },
        { label: 'Estonian', href: 'https://support.vool.com/en/articles/9527511-estonian-manuals-installation-guide' },
        { label: 'Finnish', href: 'https://support.vool.com/en/articles/10256775-finnish-manuals-installation-guide' },
        { label: 'German', href: 'https://support.vool.com/en/articles/10256958-german-manuals-installation-guide' },
        { label: 'French', href: 'https://support.vool.com/en/articles/10256964-french-manuals-installation-guide' },
        { label: 'Portuguese', href: 'https://support.vool.com/en/articles/10256973-portuguese-manuals-installation-guide' },
        { label: 'Latvian', href: 'https://support.vool.com/en/articles/10256977-latvian-manuals-installation-guide' },
        { label: 'Lithuanian', href: 'https://support.vool.com/en/articles/10256983-lithuanian-manuals-installation-guide' },
        { label: 'Swedish', href: 'https://support.vool.com/en/articles/10542256-swedish-manuals-installation-guide' },
      ] },
      { type: 'links', title: 'Other documents', items: [
        { label: 'VOOL Pro Pole – installation manual', href: 'https://support.vool.com/en/articles/17144884-vool-pro-pole-installation-manual' },
        { label: 'EU Declaration of Conformity', href: 'https://support.vool.com/en/articles/10546583-eu-declaration-of-conformity-doc' },
        { label: 'Charger Modbus manual', href: 'https://support.vool.com/en/articles/12959952-charger-modbus-manual' },
        { label: 'Charger user manual (PDF)', href: '/media/VOOL_user_manual_complete.pdf' },
      ] },
    ],
  },

  '/about-us/our-story-new/': {
    title: 'About VOOL – our story',
    description: 'VOOL was founded by people from the electricity grid business who saw how much grid capacity goes unused.',
    image: '/img/dunes.webp',
    sections: [
      { type: 'hero', eyebrow: 'About VOOL', title: 'We come from the grid business. That is why VOOL starts with the grid.',
        lead: 'VOOL means “flow” or “current” in Estonian. We build EV charging that uses the electricity connection a building already has.',
        image: '/img/dunes.webp', alt: 'VOOL charger on a beach' },
      { type: 'split', soft: true, image: '/img/office.webp', alt: 'VOOL charger outside an office',
        title: 'How it started',
        text: 'While working in the energy sector, the founders kept seeing the same thing: electricity connections sized for a peak that rarely comes, with most of the capacity unused. At the same time electric cars were arriving, and charging them put pressure on those connections. So they built a charger and a controller that use the grid to its full potential.' },
      { type: 'cards', title: 'What we stand for', cols: 4, items: [
        { title: 'Seamless', text: 'Technology that works quietly in the background. Charging should just work.' },
        { title: 'Bold', text: 'The energy world is changing fast. We challenge outdated systems.' },
        { title: 'Dynamic', text: 'Energy moves and so do we. We build solutions that adapt.' },
        { title: 'Impactful', text: 'What we build has a purpose: a better energy future.' },
      ] },
      { type: 'specs', soft: true, title: 'Company', rows: [
        ['Company', company.name], ['Registration number', company.reg], ['Office', company.address],
        ['Hardware', 'Designed and made in Estonia'], ['Contact', `${company.email} · ${company.phone}`] ] },
      { type: 'cta', title: 'Work with us', lead: 'Become a partner or talk to us about your project.', buttons: [{ label: 'Partners', href: '/resources/resellers/' }, contact] },
    ],
  },
};

Object.assign(pages, morePages, productPages, commercialPages);

/** Old URLs that now point to a merged page (also written to public/_redirects). */
export const redirects: Record<string, string> = {
  '/et/kkk/': '/et/faq/',
  '/fi/ukk/': '/fi/faq/',
  '/standard-installation-conditions/': '/where-to-buy/',
  '/et/standardpaigalduse-tingimused/': '/where-to-buy/',
  '/fi/vakioasennuksen-edellytykset/': '/where-to-buy/',
  '/solutions/usecases/charging-your-ev-cost-effectively-at-home/': '/solutions/ev-charger-for-home/',
  '/fi/ratkaisut/kayttotilanteet/lataa-sahkoautosi-kustannustehokkaasti-kotona/': '/fi/solutions/ev-charger-for-home/',
  '/get-in-touch/': '/resources/contact/',
  '/about-us/contact/': '/resources/contact/',
  '/about-us/game-changers/': '/about-us/our-story-new/',
  '/solutions/resellers/': '/resources/resellers/',
  '/products/vool-old/': '/products/vool-app/',
  '/products/': '/products/vool-charger/',
  '/solutions/': '/solutions/apartment-blocks/',
};
