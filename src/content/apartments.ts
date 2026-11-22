/** Apartment buildings + Estonian KIK EV charging grant. Grant facts as of November 2026 (kik.ee). */
export const KIK_URL = 'https://kik.ee/et/toetatavad-tegevused/elektriauto-laadimistaristu-toetus';

export const apartments = {
  et: {
    meta: {
      title: 'Elektriauto laadimine kortermajale KIK toetusega | VOOL',
      description: 'VOOL laadijad ja dünaamiline koormusjaotus korteriühistule. Aitame KIK elektriauto laadimistaristu toetuse taotlemisel.',
    },
    hero: {
      eyebrow: 'Kortermajad · KIK toetus',
      title: 'Elektriautode laadimine kortermajale KIK toetusega',
      lead: 'VOOL laadijad ja koormusjuhtimine sobivad KIK laadimistaristu toetusega. Aitame ühistul lahenduse valida, eelarve koostada ja taotluse ette valmistada.',
      cta: 'Küsi pakkumist',
      stat: '14 090 €', statLabel: 'toetust 10 laadimispunktile*',
    },
    why: {
      title: 'Miks VOOL korteriühistule',
      items: [
        { title: 'VOOL laadija', points: ['Kuni 22 kW', '5-aastane garantii', '4G, WiFi, Ethernet, Bluetooth'] },
        { title: 'VOOL LMC', points: ['Dünaamiline koormusjaotus – KIK toetuse nõue', 'Maja peakaitse ei koormu üle', 'Sageli pole vaja liitumist suurendada'] },
        { title: 'VOOL portaal ja äpp', points: ['Ühistu haldab laadimist ise', 'Kasutajad, arveldus ja aruanded ühes kohas', 'Kulu kannavad ainult laadijad'] },
      ],
    },
    grant: {
      title: 'KIK toetus lühidalt',
      who: [
        'Äriregistrisse kantud korteriühistu (v.a Tallinna ja Tartu linnas)',
        'Kinnistul vähemalt 10 parkimiskohta',
        'Ehitusluba või -teatis esitatud enne 10.03.2021',
        'Ühe taotlusega 4–20 laadimispunkti',
        'Dünaamiline koormusjaotus ja ainult taastuvenergia',
      ],
      tableTitle: 'Toetuse ühikuhinnad',
      rows: [
        ['Projekteerimine ja ehitus (2–10 punkti)', '757 € / punkt'],
        ['Projekteerimine ja ehitus (11–20 punkti)', '370 € / punkt'],
        ['Laadija soetamine', '615 € / laadija'],
        ['Dünaamiline koormusjaotus (VOOL LMC)', '370 €'],
        ['Võimsuse suurendamine', '199 € / amper'],
      ],
      notes: [
        'Toetusele lisandub käibemaks, kui ühistu ei saa seda tagasi küsida.',
        'Toetus makstakse välja pärast valmimist; elluviimiseks on aega kuni 36 kuud.',
        'Voor on avatud kuni eelarve (900 300 €) lõppemiseni – taotlusi menetletakse laekumise järjekorras.',
      ],
      exampleTitle: 'Näide: 10 laadimispunkti',
      example: '10 × 757 € + 10 × 615 € + 370 € = 14 090 €',
      source: '*Tingimused seisuga november 2026. Täpsed tingimused kik.ee lehel ja taristuministri 31.07.2025 määruses nr 46.',
      link: 'Toetuse tingimused kik.ee lehel',
    },
    steps: {
      title: 'Kuidas see käib',
      items: [
        { title: 'Jäta päring', text: 'Kirjelda maja, parklat ja soovitud laadimispunktide arvu.' },
        { title: 'Pakkumine ja toetuse arvestus', text: 'Koostame koos paigalduspartneriga pakkumise ja arvutame toetuse.' },
        { title: 'KIK taotlus', text: 'Ühistu esitab taotluse KIK e-toetuse keskkonnas – aitame dokumentidega.' },
        { title: 'Paigaldus', text: 'Partner paigaldab laadijad ja LMC, meie seadistame portaali ja kasutajad.' },
      ],
    },
    form: {
      title: 'Küsi pakkumist oma majale',
      intro: 'Vastame 1–2 tööpäeva jooksul.',
      fields: [
        { name: 'association', label: 'Korteriühistu nimi', required: true },
        { name: 'address', label: 'Maja aadress', required: true, half: true },
        { name: 'city', label: 'Linn või vald', required: true, half: true },
        { name: 'parking_spaces', label: 'Parkimiskohtade arv', type: 'number', half: true },
        { name: 'charging_points', label: 'Soovitud laadimispunkte', type: 'number', half: true },
        { name: 'name', label: 'Kontaktisik', required: true, half: true },
        { name: 'phone', label: 'Telefon', type: 'tel', half: true },
        { name: 'email', label: 'E-post', type: 'email', required: true },
        { name: 'kik_help', label: 'Soovin abi KIK toetuse taotlemisel', type: 'checkbox' },
        { name: 'message', label: 'Lisainfo', type: 'textarea' },
      ],
      submit: 'Saada päring',
      thanks: 'Aitäh! Saime päringu kätte ja võtame peagi ühendust.',
      error: 'Saatmine ebaõnnestus. Proovi uuesti või kirjuta info@vool.com.',
      consent: 'Nõustun, et VOOL töötleb minu andmeid päringule vastamiseks (privaatsuspoliitika).',
    },
  },
  en: {
    meta: {
      title: 'EV charging for apartment buildings with the KIK grant | VOOL',
      description: 'VOOL chargers and dynamic load management for Estonian apartment associations. We help you apply for the KIK EV charging grant.',
    },
    hero: {
      eyebrow: 'Apartment buildings · KIK grant (Estonia)',
      title: 'EV charging for apartment buildings – with the KIK grant',
      lead: 'VOOL chargers and load management are a natural fit for KIK’s EV charging grant for apartment associations. We help you choose the setup, build the budget and prepare the application.',
      cta: 'Get a quote',
      stat: '€14,090', statLabel: 'grant for 10 charging points*',
    },
    why: {
      title: 'Why VOOL for apartment associations',
      items: [
        { title: 'VOOL Charger', points: ['Up to 22 kW', '5-year warranty', '4G, WiFi, Ethernet, Bluetooth'] },
        { title: 'VOOL LMC', points: ['Dynamic load management – required by KIK', 'Protects the building’s main fuse', 'Often no grid upgrade needed'] },
        { title: 'VOOL Portal & App', points: ['The association runs charging itself', 'Users, billing and reports in one place', 'Only those who charge pay'] },
      ],
    },
    grant: {
      title: 'The KIK grant in short',
      who: [
        'Apartment associations in the Commercial Register (except Tallinn and Tartu city)',
        'At least 10 parking spaces on the property',
        'Building permit or notice filed before 10 March 2021',
        '4–20 charging points per application',
        'Dynamic load management and renewable energy only',
      ],
      tableTitle: 'Grant unit rates',
      rows: [
        ['Design and construction (2–10 points)', '€757 / point'],
        ['Design and construction (11–20 points)', '€370 / point'],
        ['Charger', '€615 / charger'],
        ['Dynamic load management (VOOL LMC)', '€370'],
        ['Extra grid capacity', '€199 / ampere'],
      ],
      notes: [
        'VAT is added on top if the association cannot reclaim it.',
        'Paid after completion; projects have up to 36 months.',
        'Open until the €900,300 budget runs out – first come, first served.',
      ],
      exampleTitle: 'Example: 10 charging points',
      example: '10 × €757 + 10 × €615 + €370 = €14,090',
      source: '*Conditions as of November 2026. See kik.ee and Infrastructure Minister’s regulation No. 46 of 31.07.2025.',
      link: 'Grant conditions on kik.ee',
    },
    steps: {
      title: 'How it works',
      items: [
        { title: 'Send an enquiry', text: 'Tell us about the building, the car park and the charging points you need.' },
        { title: 'Quote and grant estimate', text: 'With an installation partner we prepare a quote and calculate the grant.' },
        { title: 'KIK application', text: 'The association applies in KIK’s e-toetus portal – we help with the documents.' },
        { title: 'Installation', text: 'The partner installs chargers and LMC; we set up the portal and users.' },
      ],
    },
    form: {
      title: 'Get a quote for your building',
      intro: 'We reply within 1–2 working days.',
      fields: [
        { name: 'association', label: 'Apartment association', required: true },
        { name: 'address', label: 'Building address', required: true, half: true },
        { name: 'city', label: 'City or municipality', required: true, half: true },
        { name: 'parking_spaces', label: 'Parking spaces', type: 'number', half: true },
        { name: 'charging_points', label: 'Charging points needed', type: 'number', half: true },
        { name: 'name', label: 'Contact person', required: true, half: true },
        { name: 'phone', label: 'Phone', type: 'tel', half: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'kik_help', label: 'I’d like help with the KIK application', type: 'checkbox' },
        { name: 'message', label: 'Anything else', type: 'textarea' },
      ],
      submit: 'Send enquiry',
      thanks: 'Thank you! We received your enquiry and will be in touch soon.',
      error: 'Something went wrong. Please try again or write to info@vool.com.',
      consent: 'I agree that VOOL processes my data to answer this enquiry (privacy policy).',
    },
  },
} as const;
