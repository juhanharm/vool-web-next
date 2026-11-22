/**
 * Commercial pages: quote form, workplace, developers, warranty & support, accessories, integrations.
 * Building rules: Directive (EU) 2024/1275 (EPBD recast), Article 14.
 */
const consent = 'I agree that VOOL processes my data to answer this enquiry (privacy policy).';
const error = 'Something went wrong. Please try again or write to info@vool.com.';
const quote = { label: 'Get a quote', href: '/get-a-quote/' };
const buy = { label: 'Where to buy', href: '/where-to-buy/' };

/** Shown on several pages: how a project runs from enquiry to charging. */
export const projectSteps = { type: 'steps', soft: true, title: 'How a project runs', items: [
  { title: 'You send the basics', text: 'Parking spaces, main fuse size and how many chargers you need now. A photo of the switchboard helps.' },
  { title: 'We size the system', text: 'VOOL works out how many chargers your connection carries with load management, and what to prepare for later.' },
  { title: 'A partner quotes and installs', text: 'VOOL does not install. A certified installation partner visits the site, quotes the work and builds it.' },
  { title: 'We set up the software', text: 'Users, prices and billing are set up in the VOOL Portal. Drivers charge with the VOOL App or an RFID card.' },
  { title: 'Support for the life of the system', text: 'Remote diagnostics, software updates and a 5-year warranty on the chargers.' },
] };

export const installers = { type: 'table', title: 'Who installs', lead: 'VOOL makes the chargers, the load management and the software. Installation is done by local partners.',
  head: ['Country', 'Site', 'Installation partner'], rows: [
    ['Estonia', 'Apartment buildings and offices', 'Elemeks, Diotech'],
    ['Estonia', 'Private homes', 'Hepa Elekter'],
    ['Finland', 'All sites', 'EV Lataus'],
    ['Other countries', 'All sites', 'See the partner list on the where-to-buy page'],
  ], note: 'Already have an electrician? Any qualified installer can install VOOL. The manuals are on our product manuals page.' };

export const commercialPages: Record<string, any> = {
  '/get-a-quote/': {
    title: 'Get a quote for EV charging | VOOL',
    description: 'Send us the number of parking spaces and your main fuse size. We size the system and connect you with an installation partner.',
    sections: [
      { type: 'hero', eyebrow: 'Get a quote', title: 'Tell us about your site. We reply within one working day.',
        lead: 'You get a sized proposal: how many chargers fit on your connection, what hardware you need and who can install it.',
        cta: [{ label: 'Fill in the form', href: '#form' }, { label: 'Try the live demo', href: '/live-demo/' }] },
      { type: 'form', form: 'quote', title: 'Your site', intro: 'Six questions about the site, then your contact details.',
        fields: [
          { name: 'you_are', label: 'You are', type: 'select', required: true, half: true, options: ['Apartment association', 'Property manager', 'Developer or designer', 'Business or office', 'Fleet owner', 'Public charging site', 'Home owner', 'Installer or reseller'] },
          { name: 'country', label: 'Country', required: true, half: true },
          { name: 'city', label: 'City or town', half: true },
          { name: 'parking_spaces', label: 'Parking spaces', type: 'number', half: true },
          { name: 'chargers_now', label: 'Chargers needed now', type: 'number', half: true },
          { name: 'main_fuse', label: 'Main fuse (A), if you know it', half: true },
          { name: 'name', label: 'Name', required: true, half: true },
          { name: 'organisation', label: 'Company or association', half: true },
          { name: 'email', label: 'Email', type: 'email', required: true, half: true },
          { name: 'phone', label: 'Phone', type: 'tel', half: true },
          { name: 'message', label: 'Anything else we should know', type: 'textarea' },
          { name: 'has_installer', label: 'I already have an installer', type: 'checkbox' },
        ], submit: 'Send', thanks: 'Thank you! We will reply within one working day.', error, consent },
      projectSteps,
      installers,
    ],
  },

  '/solutions/workplace/': {
    title: 'EV charging for offices and workplaces | VOOL',
    description: 'Charging for employees, company cars and visitors on the connection you have. Private charging is paid by the employee, company cars are reported separately.',
    image: '/img/office.webp',
    sections: [
      { type: 'hero', eyebrow: 'Workplace charging', title: 'Charging at work, without the company paying for private kilometres',
        lead: 'Employees pay for their own charging. Company cars are reported separately. The building’s connection stays as it is.',
        image: '/img/office.webp', alt: 'Office car park with VOOL chargers', cta: [quote, { label: 'Billing and payments', href: '/software/billing-and-payments/' }] },
      { type: 'cards', soft: true, title: 'What the employer gets', cols: 3, items: [
        { title: 'No grid upgrade', text: 'VOOL LMC shares the spare capacity of the building between the cars, so more chargers fit on the same main fuse.', href: '/products/vool-lmc/', more: 'VOOL LMC' },
        { title: 'Three groups, three prices', text: 'Company cars, employees and visitors each get their own price and access rights.' },
        { title: 'No invoicing work', text: 'VOOL charges employees for private charging and pays the company monthly.', href: '/software/billing-and-payments/', more: 'How it works' },
        { title: 'Reports for accounting', text: 'Energy and cost per car and per user, sent on a schedule.' },
        { title: 'Open to visitors', text: 'Make some chargers public in office hours or after them, with payment by QR code.', href: '/solutions/public-charging/', more: 'Public charging' },
        { title: 'Company cars at home', text: 'Drivers who charge a company car at home can report the energy from their own VOOL charger.', href: '/solutions/electrical-fleet-owners/', more: 'Fleets' },
      ] },
      { type: 'split', image: '/img/office2.webp', alt: 'VOOL chargers at an office', title: 'Start with a few chargers, add more when cars arrive',
        text: 'Build the cabling and load management once. Each new charger then takes minutes to add, and the LMC shares the capacity again.',
        points: ['One LMC Pro manages more than 100 chargers', 'Load management at several fuse levels', 'Works with other makers’ chargers over OCPP'], cta: [{ label: 'Try the live demo', href: '/live-demo/' }] },
      projectSteps,
      { type: 'faq', title: 'Questions', items: [
        { q: 'Can employees pay for private charging themselves?', a: 'Yes. They pay by card in the VOOL App, VOOL invoices them and transfers the money to the company monthly.' },
        { q: 'We rent our office. Who should own the chargers?', a: 'Either the landlord or the tenant can. Access groups let one installation serve several companies in the same building.' },
        { q: 'We already have chargers from another maker.', a: 'Chargers that support OCPP 1.6 or 2.0 can be added to the VOOL Portal.' },
      ] },
      { type: 'cta', title: 'How many chargers fit on your office’s connection?', lead: 'Send us the parking spaces and the main fuse size.', buttons: [quote] },
    ],
  },

  '/solutions/developers/': {
    title: 'EV charging for new buildings: developers and designers | VOOL',
    description: 'What EU rules require for charging in new and renovated buildings, how to size the connection, and specification text for tenders.',
    image: '/img/garage.webp',
    sections: [
      { type: 'hero', dark: true, eyebrow: 'Developers and electrical designers', title: 'Design charging into the building once, and size the connection smaller',
        lead: 'New buildings must be prepared for charging. With load management at several fuse levels, the charging load fits a connection sized for the building.',
        image: '/img/garage.webp', alt: 'Underground car park with VOOL chargers', cta: [quote, { label: 'Specification text', href: '#spec' }] },
      { type: 'prose', title: 'What the EU rules require', paragraphs: ['The recast Energy Performance of Buildings Directive sets minimum requirements for new buildings and major renovations. Member states apply them through national law and may go further, so check the local rules.'],
        points: [
          '<strong>New residential buildings with more than three parking spaces:</strong> pre-cabling for at least half of the spaces, ducting for the rest, and at least one charging point.',
          '<strong>New non-residential buildings with more than five parking spaces:</strong> at least one charging point for every five spaces, pre-cabling for at least half and ducting for the rest.',
          '<strong>Charging points must be capable of smart charging.</strong>',
          '<strong>Chargers installed from 1 January 2027</strong> must also support ISO 15118-20. <a href="/afir/">See AFIR and ISO 15118</a>.',
        ], sources: [{ label: 'Directive (EU) 2024/1275, Article 14', href: 'https://eur-lex.europa.eu/eli/dir/2024/1275/oj' }] },
      { type: 'cards', soft: true, title: 'Why designers specify VOOL', cols: 3, items: [
        { title: 'Smaller connection', text: 'The LMC measures the building’s real load and gives the rest to the cars. One site runs 45 chargers on a 125 A connection.', href: '/case-studies/', more: 'Case studies' },
        { title: 'Several fuse levels', text: 'Limits are respected at the main fuse, at sub-distribution boards and on each charger line.' },
        { title: 'Phase switching', text: 'Chargers move single-phase cars to the least loaded phase, so the three phases stay balanced.' },
        { title: 'Build in stages', text: 'Install cabling and the LMC with the building. Owners add chargers later, each one in minutes.' },
        { title: 'Ready for billing', text: 'Each owner or tenant pays for their own charging. The association or operator issues no invoices.', href: '/software/billing-and-payments/', more: 'Billing' },
        { title: 'Open protocols', text: 'OCPP, Modbus TCP and OCPI, so the building is not locked to one operator.', href: '/integrations/', more: 'Integrations' },
      ] },
      { type: 'prose', id: 'spec', title: 'Specification text for tenders', paragraphs: ['Copy and adapt this text. It describes functions, so it does not exclude other makers who can deliver the same.'], points: [
        'AC charging points up to 22 kW (3 × 32 A) with Type 2 connector, IP54 or better and IK10.',
        'Dynamic load management that measures the building’s total consumption in real time and limits charging so that the main fuse and every sub-distribution fuse stay within their rating.',
        'Load management at a minimum of two levels of the electrical installation, for at least 100 charging points per controller.',
        'Automatic phase switching or phase balancing between charging points.',
        'Load management continues to work when the internet connection is down.',
        'Communication: OCPP 1.6 or later. Chargers installed from 1 January 2027: ISO 15118-2 and ISO 15118-20.',
        'Software for user management, RFID or app authorisation, pricing per user group and billing per user, with consumption reports for the building owner.',
        'Interface to the building management system over Modbus TCP.',
        'Manufacturer’s warranty of at least five years on charging points.',
      ] },
      { type: 'table', soft: true, title: 'A sizing example', lead: 'A residential building with 60 parking spaces, prepared for 30 chargers.', head: ['', 'Without load management', 'With VOOL LMC'], rows: [
        ['Capacity reserved for charging', '30 × 11 kW = 330 kW', 'The building’s spare capacity, shared'],
        ['Extra connection capacity', 'About 480 A', 'Often none'],
        ['When all 30 cars are plugged in', 'Every car gets 11 kW', 'Cars share what is free, most at night'],
      ], note: 'An illustration. Send us the load profile or the planned main fuse and we calculate it for your building.' },
      { type: 'links', title: 'For your project file', items: [
        { label: 'Product manuals and datasheets', href: '/resources/product-manuals/' },
        { label: 'Live demo: cars on one connection', href: '/live-demo/' },
        { label: 'VOOL vs ordinary load balancing', href: '/compare/' },
        { label: 'Guide for the general meeting', href: '/knowledge/general-meeting/' },
      ] },
      { type: 'cta', title: 'Send us the drawings', lead: 'We return a charging layout, a load calculation and a bill of materials.', buttons: [quote] },
    ],
  },

  '/support/warranty/': {
    title: 'Warranty and support | VOOL',
    description: 'VOOL chargers have a 5-year warranty. What happens when something stops working, and how to reach support.',
    sections: [
      { type: 'hero', eyebrow: 'Warranty and support', title: 'Five years of warranty, and people who answer',
        lead: 'VOOL chargers are built in Estonia and carry a 5-year warranty. Most problems are solved remotely, without a site visit.',
        cta: [{ label: 'Help Center', href: '/resources/help-center/' }, { label: 'Warranty terms', href: '/vool-ev-charger-warranty-termsconditions/' }] },
      { type: 'steps', soft: true, title: 'If something stops working', items: [
        { title: 'Contact support', text: 'Write to us through the Help Center or at info@vool.com, or ask your installer.' },
        { title: 'We look at the device remotely', text: 'Connected chargers and LMCs send diagnostics, so we usually see the cause without a visit.' },
        { title: 'Fixed by update or setting', text: 'Many issues are solved with a software update or a configuration change.' },
        { title: 'Replacement part if needed', text: 'The charger is modular. A faulty charge controller is swapped in minutes and the casing and cabling stay.' },
      ] },
      { type: 'cards', title: 'What is included', cols: 3, items: [
        { title: '5-year warranty', text: 'On VOOL chargers, from the sale to the end customer.', href: '/vool-ev-charger-warranty-termsconditions/', more: 'Warranty terms' },
        { title: 'Software updates', text: 'New features and fixes arrive over the air.' },
        { title: 'Remote diagnostics', text: 'For connected devices, at no extra cost.' },
        { title: 'Help Center', text: 'Installation guides, manuals and answers to common questions.', href: '/resources/help-center/', more: 'Help Center' },
        { title: 'Support for installers', text: 'Installers keep remote access to the sites they set up.', href: '/resources/resellers/', more: 'Partners' },
      ] },
      { type: 'cta', title: 'Need help now?', buttons: [{ label: 'Help Center', href: '/resources/help-center/' }, { label: 'Contact', href: '/resources/contact/' }] },
    ],
  },

  '/products/accessories/': {
    title: 'Accessories and spare parts | VOOL',
    description: 'Poles, cable holder, front panels, charge controller and measurement accessories for VOOL chargers and LMCs.',
    image: '/img/charger-finishes.webp',
    sections: [
      { type: 'hero', eyebrow: 'Accessories', title: 'Poles, panels and parts',
        lead: 'Everything that goes around the charger. Order through your reseller.', image: '/img/charger-finishes.webp', alt: 'VOOL charger front panels', cta: [buy] },
      { type: 'cards', soft: true, title: 'For the charger', cols: 3, items: [
        { title: 'VOOL pole', text: 'For parking spaces without a wall.' },
        { title: 'Cable holder', text: 'A metal holder with a plastic insert that keeps the cable and plug off the ground.' },
        { title: 'Front panels', text: 'Black, aluminium or wood.' },
        { title: 'Charge controller', text: 'The orange controller is the same in every VOOL charger. Sold separately as a spare or as the ISO 15118 upgrade.', href: '/afir/', more: 'ISO 15118 upgrade' },
        { title: 'MID metering', text: 'A certified meter for billing by the kWh, on the Commercial Pole and on the MID wall charger.', href: '/products/commercial-pole/', more: 'Commercial Pole' },
      ] },
      { type: 'cards', title: 'For load management', cols: 3, items: [
        { title: 'Current clamps', text: 'For measuring the main connection and sub-boards with VOOL LMC.' },
        { title: 'LMC Pro with 4G', text: 'For sites where no network cable reaches the switchboard.', href: '/products/vool-lmc/', more: 'VOOL LMC' },
        { title: 'LMC S', text: 'For houses and small sites, from January 2027.', href: '/products/vool-lmc-s/', more: 'VOOL LMC S' },
      ] },
      { type: 'cta', title: 'Need a part or a price?', lead: 'Resellers have stock and prices. For projects, ask us for a quote.', buttons: [buy, quote] },
    ],
  },

  '/integrations/': {
    title: 'Integrations: OCPP, Modbus, OCPI, roaming | VOOL',
    description: 'Connect VOOL to building management, energy management, other charging platforms and roaming networks.',
    image: '/img/lmc.webp',
    sections: [
      { type: 'hero', eyebrow: 'Integrations', title: 'Open protocols, so the site is never locked in',
        lead: 'VOOL chargers and LMCs speak the standard protocols of the industry. Use our software, someone else’s, or both.', image: '/img/lmc.webp', alt: 'VOOL LMC', cta: [quote, { label: 'Product manuals', href: '/resources/product-manuals/' }] },
      { type: 'table', soft: true, title: 'What connects to what', head: ['Protocol', 'What you can do', 'Typical use'], rows: [
        ['OCPP 1.6 and 2.0', 'Connect VOOL chargers to another back end, or other makers’ chargers to the VOOL Portal', 'Mixed sites, operators with their own platform'],
        ['Modbus TCP', 'Read measurements and set current limits on the VOOL LMC', 'Building management, energy management, batteries and solar'],
        ['OCPI', 'Exchange locations, sessions and prices with partner platforms', 'Operators and service providers'],
        ['Hubject', 'Roaming: drivers use other providers’ apps and cards at your public chargers', 'Public and semi-public sites'],
        ['ISO 15118-2 and -20', 'Plug & Charge; bidirectional charging by firmware update in Q1 2027', 'Chargers produced from December 2026'],
        ['Nord Pool prices', 'Charging in the cheapest hours', 'Homes and apartment buildings'],
      ] },
      { type: 'cards', title: 'Common setups', cols: 3, items: [
        { title: 'Chargers from several makers', text: 'Keep the chargers you have. Add them to the VOOL Portal over OCPP and manage users and billing in one place.' },
        { title: 'Building management system', text: 'The BMS reads charging load from the LMC and can lower the limit during peaks.' },
        { title: 'Home Assistant', text: 'A community integration reads VOOL devices over Modbus. Useful for home automation with solar or a battery.' },
        { title: 'Your own operator', text: 'Point the chargers to the operator’s OCPP back end. Load management keeps running locally on the LMC.' },
        { title: 'Roaming', text: 'Through Hubject, public VOOL chargers accept the charging apps and cards drivers already have. Providers are being added now.', href: '/solutions/public-charging/', more: 'Public charging' },
        { title: 'Lithuania: DAEI', text: 'Charging data is reported for DAEI units, and you are paid for the electricity you charge.', href: '/daei/', more: 'DAEI' },
      ] },
      { type: 'faq', title: 'Good to know', items: [
        { q: 'Does load management need the internet?', a: 'No. The LMC and the chargers talk locally. The internet is needed for the app, billing and remote support.' },
        { q: 'Which earthing systems does the LMC support?', a: 'IT earthing systems, common in parts of Norway, are not supported for load management. Charging itself works normally.' },
        { q: 'How are chargers connected to the LMC?', a: 'Over CAN in a daisy chain, or over the local network.' },
        { q: 'Is Modbus write access on by default?', a: 'No. It is enabled on the LMC when you need it.' },
      ] },
      { type: 'cta', title: 'Planning an integration?', lead: 'Tell us what the other system is. We send the register map or the OCPP details.', buttons: [quote] },
    ],
  },
};
