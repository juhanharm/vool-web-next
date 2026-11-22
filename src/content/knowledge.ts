/**
 * Case studies, comparison, live demo and the general-meeting guide (EN + ET).
 * Partner case figures are published by AMP X VOLT (ampxvolt.eu), a VOOL reseller in Luxembourg.
 * Legal notes are general information with sources linked on the page; they are not legal advice.
 */
const contact = { label: 'Talk to us', href: '/resources/contact/' };
const AMPX = 'https://ampxvolt.eu/case-studies/';

export const demoLabels = {
  en: { fuse: 'Main fuse', cars: 'Cars plugged in', time: 'Time of day', play: 'Play 24 hours', building: 'Building', charging: 'Charging', limit: 'Fuse limit →',
    without: 'Without load management, this connection fits', chargers: 'chargers at 11 kW', with: 'With VOOL, cars charging right now', each: 'about {kw} kW per car now, or roughly {km} km of range in 8 hours',
    note: 'Simplified simulation with an example load curve. Without load management, 16 A per phase is reserved for each charger at the building’s peak. With VOOL, the spare current on each phase is shared and each car is moved to the freest phase (minimum 6 A).' },
  et: { fuse: 'Peakaitse', cars: 'Ühendatud autosid', time: 'Kellaaeg', play: 'Mängi 24 tundi', building: 'Maja', charging: 'Laadimine', limit: 'Kaitsme piir →',
    without: 'Ilma koormusjuhtimiseta mahub sellele liitumisele', chargers: '11 kW laadijat', with: 'VOOLiga laeb praegu autosid', each: 'umbes {kw} kW auto kohta ehk ligikaudu {km} km sõiduulatust 8 tunniga',
    note: 'Lihtsustatud simulatsioon näidiskoormusega. Ilma koormusjuhtimiseta reserveeritakse igale laadijale maja tipukoormuse ajal 16 A faasi kohta. VOOLiga jagatakse iga faasi vaba vool autode vahel ja auto lülitatakse kõige vabamale faasile (vähemalt 6 A).' },
};

export const costLabels = {
  en: { km: 'Kilometres per year', elec: 'Electricity price, ct/kWh (all-in)', diesel: 'Diesel price, €/l', ev: 'Electric car, charged at home', ice: 'Diesel car', save: 'Difference', perYear: 'per year' },
  et: { km: 'Läbisõit aastas, km', elec: 'Elektri hind, s/kWh (kõik kokku)', diesel: 'Diisli hind, €/l', ev: 'Elektriauto, kodus laadides', ice: 'Diiselauto', save: 'Vahe', perYear: 'aastas' },
};
const costNoteEn = 'Example values for Estonia; enter your own. The electricity price should include energy, network fees and taxes. Assumes 18 kWh/100 km and 6.5 l/100 km.';
const costNoteEt = 'Näidisväärtused; sisesta enda omad. Elektri hind peaks sisaldama energiat, võrgutasu ja makse. Arvestatud 18 kWh/100 km ja 6,5 l/100 km.';

export const nightEn = { type: 'night', title: 'Plug in at six. Charging starts when prices drop.',
  text: 'The car waits through the evening price peak and charges in the cheapest hours of the night. It is ready at the time you set.',
  note: 'Example hourly prices in ct/kWh, not live data.',
  labels: { peak: 'evening peak', charging: 'Charging', waiting: 'Waiting', ready: 'car ready' } };

export const morePages: Record<string, any> = {
  '/case-studies/': {
    title: 'Case studies – VOOL charging in offices, residences and fleets',
    description: 'Real sites with numbers: 45 chargers on one 125 A connection, 300 chargers for Omniva, 40 chargers serving 100 users in one office building.',
    image: '/img/garage.webp',
    sections: [
      { type: 'hero', eyebrow: 'Case studies', title: 'What VOOL does on real sites',
        lead: 'Numbers from our customers and from sites built by our partners.', image: '/img/garage.webp', alt: 'Car park with VOOL chargers' },
      { type: 'stats', items: [
        { value: '20,000+', label: 'devices sold' }, { value: '45', label: 'chargers on one 125 A connection' },
        { value: '300', label: 'chargers for Omniva’s courier fleet' }, { value: '14', label: 'countries with VOOL partners' } ] },
      { type: 'cards', title: 'Our customers', cols: 3, items: [
        { title: 'Omniva: 300 chargers for couriers', text: 'VOOL supplies Omniva with 300 chargers across Estonia over five years. The first 50 or so went to Tallinn, Tartu, Kuressaare and Rakvere.', href: '/resources/blog/vool-joins-omniva-on-their-journey-towards-electrifying-transportation/', more: 'Read the story' },
        { title: 'Hansabuss: electric buses at existing hubs', text: 'The bus operator charges its electric fleet at its Latvian hubs and at drivers’ homes, without major changes to the infrastructure.', href: '/solutions/usecases/hansabuss-saved-30-with-vool-on-their-fleet-charging-costs/', more: 'Read the story' },
        { title: 'Alexela: turnkey charging for its customers', text: 'The energy company offers VOOL chargers, load management and smart charging to private and business customers in Estonia and Latvia.', href: '/resources/blog/alexela-and-vool-partnership/', more: 'Read the story' },
      ] },
      { type: 'cards', soft: true, eyebrow: 'Built by our partner AMP X VOLT, Luxembourg', title: 'Partner sites', cols: 3, items: [
        { title: 'Business campus, Hamm', text: 'More than 100 chargers on multi-level load management. One tenant runs 45 chargers on a single 125 A connection.', href: AMPX + 'headquarters-hamm', more: 'AMP X VOLT case' },
        { title: 'Office building, Mersch', text: '40 chargers shared by 11 companies. About 100 users charged 75 MWh in 3,000 sessions within six months.', href: AMPX + 'office-building-mersch', more: 'AMP X VOLT case' },
        { title: 'Residence, Steinsel', text: '74 parking spaces. Owners ordered 19 chargers within three weeks of the shared installation.', href: AMPX + 'residence-steinsel', more: 'AMP X VOLT case' },
        { title: 'Residence, Luxembourg City', text: 'Two buildings. More than 20 private chargers ordered since the shared parts were installed.', href: AMPX + 'residence-luxembourg-city', more: 'AMP X VOLT case' },
        { title: 'Production plant', text: '22 AC chargers for a new building at an industrial site in Luxembourg.', href: AMPX + 'industrial-plant', more: 'AMP X VOLT case' },
      ] },
      { type: 'logos', title: 'Clients of our Luxembourg partner AMP X VOLT', items: [
        { name: 'BALTHASAR Group', src: '/img/logos/partner/balthasar.png' }, { name: 'Goodyear', src: '/img/logos/partner/goodyear.png' }, { name: 'Fonds du Logement', src: '/img/logos/partner/fonds_du_logement.png' }, { name: 'BDO Luxembourg', src: '/img/logos/partner/bdo.png' }, { name: 'Brink’s', src: '/img/logos/partner/brinks.png' }, { name: 'Sales-Lentz', src: '/img/logos/partner/sales_lentz.png' }, { name: 'WISAG', src: '/img/logos/partner/wisag.png' }, { name: 'Energolux', src: '/img/logos/partner/energolux.png' } ] },
      { type: 'cta', title: 'Want numbers like these for your site?', lead: 'Tell us the number of parking spaces and the size of your main fuse.', buttons: [contact, { label: 'Try the live demo', href: '/live-demo/' }] },
    ],
  },

  '/live-demo/': {
    title: 'Live demo – how VOOL load management shares your grid connection',
    description: 'Move the sliders: main fuse, number of cars and time of day. See how many cars charge with and without load management.',
    sections: [
      { type: 'hero', eyebrow: 'Live demo', title: 'See how many cars your connection can charge',
        lead: 'Set the main fuse, the number of cars and the time of day. The grey part is the building, the orange part is charging.' },
      { type: 'demo', soft: true, title: 'Load management simulator', labels: demoLabels.en },
      { type: 'split', image: '/img/lmc-cabinet.webp', alt: 'VOOL LMC in an electrical cabinet', title: 'On a real site: 45 chargers on 125 A',
        text: 'At a business campus in Luxembourg built by our partner AMP X VOLT, one tenant runs 45 VOOL chargers on a single 125 A connection. The LMC measures each phase and gives the spare current to the cars.',
        cta: [{ label: 'Case studies', href: '/case-studies/' }, { label: 'VOOL LMC', href: '/products/vool-lmc/' }] },
      { type: 'cta', title: 'Send us your real numbers', lead: 'Main fuse size, parking spaces and how many chargers you need. We will tell you what fits.', buttons: [contact] },
    ],
  },

  '/compare/': {
    title: 'Compare – VOOL load management vs ordinary load balancing',
    description: 'What changes when a charging system measures the building in real time and moves cars between phases.',
    sections: [
      { type: 'hero', eyebrow: 'Compare', title: 'Not all load management is the same',
        lead: 'Most systems limit charging so the fuse holds. VOOL also moves each car to the least loaded phase, so the capacity you already pay for is used.' },
      { type: 'table', soft: true, title: 'Four ways to connect chargers',
        head: ['', 'No load management', 'Static limit', 'Typical dynamic load balancing', 'VOOL: dynamic + phase switching'],
        rows: [
          ['How it works', 'Each charger gets a fixed reserved current', 'All chargers share one fixed limit', 'Chargers share what the building leaves free', 'Chargers share what each phase leaves free, and cars are moved between phases'],
          ['Measures the building’s load', 'No', 'No', 'Yes', 'Yes, per phase'],
          ['Uses spare capacity at night', 'No', 'No', 'Yes', 'Yes'],
          ['Balances uneven phases', 'No', 'No', 'Depends on the product', 'Yes, automatic phase switching'],
          ['Several fuse levels (building, riser, sub-board)', 'No', 'Depends on the product', 'Depends on the product', 'Yes'],
          ['Chargers on one controller', '–', 'Depends on the product', 'Depends on the product', '100+ with LMC Pro'],
          ['Typical result', 'A few chargers, then a grid upgrade', 'More chargers, slow charging', 'More chargers, one full phase limits all', 'Most chargers on the same connection'],
        ],
        note: 'The middle columns describe common approaches, not a specific product. Compare with the datasheet of the system you are considering.' },
      { type: 'demo', title: 'Try it with your own fuse size', labels: demoLabels.en },
      { type: 'cta', title: 'Comparing offers for your building?', lead: 'Send us the other quote. We will show what VOOL does differently on your connection.', buttons: [contact, { label: 'Case studies', href: '/case-studies/' }] },
    ],
  },

  '/knowledge/general-meeting/': {
    title: 'How to get EV charging approved at the general meeting | VOOL',
    description: 'A guide for apartment association boards: what to prepare, a draft resolution, answers to owners’ questions and what the law says in Estonia and the EU.',
    image: '/img/apartments.webp',
    alternates: { en: '/knowledge/general-meeting/', et: '/et/uldkoosolek/' },
    sections: [
      { type: 'hero', eyebrow: 'Guide for apartment associations', title: 'How to get EV charging approved at the general meeting',
        lead: 'One neighbour wants a charger. The board needs a decision that works for the whole building. Here is what to prepare, what to vote on and what the law says.',
        image: '/img/apartments.webp', alt: 'VOOL charger at an apartment building', cta: [{ label: 'Get a quote for the meeting', href: '/apartment-buildings/#form' }] },
      { type: 'steps', soft: true, title: 'Before the meeting', items: [
        { title: 'Count', text: 'Parking spaces, the size of the main fuse, and how many owners want a charger now or within three years.' },
        { title: 'Get one quote', text: 'Ask for the shared part (cabling, load management) and the price of one charger as separate lines.' },
        { title: 'Agree the cost split', text: 'The usual split: the association pays for the shared part, each driver pays for their own charger and electricity.' },
        { title: 'Check the grant', text: 'In Estonia, KIK covers part of the cost for associations outside Tallinn and Tartu city.' },
      ] },
      { type: 'prose', title: 'A resolution you can put on the agenda', paragraphs: ['Owners vote more easily on a specific proposal with a cost ceiling. Adapt this text to your building:'],
        box: { title: 'Draft resolution', text: 'To build shared EV charging infrastructure with dynamic load management in the building’s car park for up to ___ parking spaces, at a cost of up to € ___, financed from ___ (grant applied for: ___). Each owner pays for the charger at their own parking space and for the electricity they use. The board is authorised to apply for the grant and to sign the contracts.' } },
      { type: 'cards', soft: true, title: 'What owners ask, and the short answers', cols: 2, items: [
        { title: '“I don’t have an electric car. Why should I pay?”', text: 'You pay only your share of the shared part, if the meeting decides so. Chargers and electricity are paid by the people who charge, billed per user.' },
        { title: '“Can our connection take it?”', text: 'Load management measures the building and gives only the spare capacity to the cars. On one site, 45 chargers run on a 125 A connection.' },
        { title: '“What if ten more people want one next year?”', text: 'Spaces can be prepared now and chargers added one by one. Nothing has to be rebuilt.' },
        { title: '“Who will run it?”', text: 'The association can manage users and billing itself in the VOOL Portal, or hand it to an operator.' },
      ] },
      { type: 'demo', title: 'Show the meeting what load management does', labels: demoLabels.en },
      { type: 'cost', title: 'What charging at home costs a driver', lead: 'A number owners can compare with what they pay for fuel today.', note: costNoteEn, labels: costLabels.en },
      { type: 'prose', soft: true, title: 'Estonia: what the law says', points: [
        '<strong>The majority needed.</strong> Under the Apartment Ownership and Apartment Associations Act (KrtS) § 39, changes that modernise the common property can be decided at a general meeting when more than half of all votes are in favour and those owners hold more than half of the co-ownership shares. Ordinary management is decided by a simple majority (§ 35). Which rule applies depends on what is built, so check with the association’s lawyer.',
        '<strong>New and rebuilt buildings.</strong> Where the building permit application or notice was filed after 10 March 2021, building the charging infrastructure is an obligation that starts with the developer.',
        '<strong>Grant.</strong> KIK supports charging points for associations with at least 10 parking spaces whose permit was filed before that date. <a href="/apartment-buildings/">Terms and example</a>.',
      ], sources: [
        { label: 'Ministry of Climate: legal obstacles to renovation (2026)', href: 'https://kliimaministeerium.ee/sites/default/files/documents/2026-06/renoveerimise%20%C3%B5iguslikud%20takistused.PDF' },
        { label: 'Pallo & Partnerid on KrtS § 39', href: 'https://pallo.ee/energiatohususe-suurendamise-eesmargil-kuttesusteemi-vahetamine-ja-korteriuhistu-otsustamisprotsess/' },
        { label: 'Enefit on the charging obligation', href: 'https://www.enefit.ee/en/-/blogi/Kuum-kusimus-kas-korteriuhistul-on-kohustus-paigaldada-elektriautode-laadijaid' },
        { label: 'KIK', href: 'https://kik.ee/et/toetatavad-tegevused/elektriauto-laadimistaristu-toetus' } ] },
      { type: 'prose', title: 'EU: the “right to plug”', points: [
        'The recast Energy Performance of Buildings Directive, (EU) 2024/1275, Article 14, tells member states to make installing charging points simpler and faster, in particular in co-owners’ associations.',
        'Member states must remove barriers such as needing the co-owners’ consent for a private charging point for the owner’s own use. A request can be refused only on serious and legitimate grounds.',
        'Countries had until May 2026 to write this into national law, and they have done it in different ways. Check the rules in your country before the meeting.',
      ], sources: [
        { label: 'EUR-Lex summary of Directive (EU) 2024/1275', href: 'https://eur-lex.europa.eu/EN/legal-content/summary/energy-performance-of-buildings.html' },
        { label: 'Transport & Environment: Right to Plug briefing', href: 'https://transportenvironment.org/uploads/files/2025_01_TE_briefing_Right_to_Plug.pdf' },
        { label: 'AVERE recommendation', href: 'https://avere.org/blogpages/policy-details/2024/07/09/joint-recommendation-how-to-impactfully-implement-right-to-plug-in-the-eu-3' } ] },
      { type: 'prose', soft: true, title: 'Please note', paragraphs: ['This page is general information, not legal advice. Laws and grant terms change; the sources are linked above.'] },
      { type: 'cta', title: 'Need figures for your meeting?', lead: 'We prepare the quote and the grant estimate with an installation partner.', buttons: [{ label: 'Get a quote', href: '/apartment-buildings/#form' }, { label: 'Case studies', href: '/case-studies/' }] },
    ],
  },

  '/et/uldkoosolek/': {
    lang: 'et',
    title: 'Kuidas saada elektriautode laadimine üldkoosolekul heaks kiidetud | VOOL',
    description: 'Juhend korteriühistu juhatusele: mida ette valmistada, otsuse eelnõu, vastused omanike küsimustele ja mida ütleb seadus.',
    image: '/img/apartments.webp',
    alternates: { en: '/knowledge/general-meeting/', et: '/et/uldkoosolek/' },
    sections: [
      { type: 'hero', eyebrow: 'Juhend korteriühistule', title: 'Kuidas saada laadimine üldkoosolekul heaks kiidetud',
        lead: 'Üks naaber soovib laadijat. Juhatus vajab otsust, mis sobib kogu majale. Siin on, mida ette valmistada, mille üle hääletada ja mida ütleb seadus.',
        image: '/img/apartments.webp', alt: 'VOOL laadija kortermaja juures', cta: [{ label: 'Küsi pakkumist koosolekuks', href: '/et/kortermajad/#form' }] },
      { type: 'steps', soft: true, title: 'Enne koosolekut', items: [
        { title: 'Loe kokku', text: 'Parkimiskohad, peakaitsme suurus ja kui paljud omanikud soovivad laadijat kohe või kolme aasta jooksul.' },
        { title: 'Võta üks pakkumine', text: 'Palu ühine osa (kaabeldus, koormusjuhtimine) ja ühe laadija hind eraldi ridadena.' },
        { title: 'Lepi kokku kulude jaotus', text: 'Tavaline jaotus: ühise osa eest maksab ühistu, oma laadija ja elektri eest iga laadija kasutaja.' },
        { title: 'Kontrolli toetust', text: 'KIK katab osa kulust ühistutele väljaspool Tallinna ja Tartu linna.' },
      ] },
      { type: 'prose', title: 'Otsus, mille saab päevakorda panna', paragraphs: ['Omanikel on lihtsam hääletada konkreetse ettepaneku üle, millel on kulude ülempiir. Kohanda tekst oma majale:'],
        box: { title: 'Otsuse eelnõu', text: 'Rajada maja parklasse dünaamilise koormusjuhtimisega elektriautode laadimistaristu kuni ___ parkimiskohale maksumusega kuni ___ €, mida rahastatakse ___ (toetus taotletud: ___). Iga omanik tasub oma parkimiskoha laadija ja tarbitud elektri eest ise. Volitada juhatust taotlema toetust ja sõlmima lepingud.' } },
      { type: 'cards', soft: true, title: 'Mida omanikud küsivad ja lühikesed vastused', cols: 2, items: [
        { title: '„Mul ei ole elektriautot. Miks ma peaksin maksma?“', text: 'Maksad ainult oma osa ühisest osast, kui koosolek nii otsustab. Laadijate ja elektri eest maksavad need, kes laevad; arveldus on kasutajapõhine.' },
        { title: '„Kas meie liitumine peab vastu?“', text: 'Koormusjuhtimine mõõdab maja tarbimist ja annab autodele ainult vaba võimsuse. Ühel objektil töötab 45 laadijat 125 A liitumisega.' },
        { title: '„Mis siis, kui järgmisel aastal soovib veel kümme inimest?“', text: 'Kohad saab ette valmistada kohe ja laadijad lisada ükshaaval. Midagi ei pea ümber ehitama.' },
        { title: '„Kes seda haldab?“', text: 'Ühistu saab kasutajaid ja arveldust hallata ise VOOL portaalis või anda selle operaatorile.' },
      ] },
      { type: 'demo', title: 'Näita koosolekul, mida koormusjuhtimine teeb', labels: demoLabels.et },
      { type: 'cost', title: 'Mida maksab kodus laadimine autojuhile', lead: 'Arv, mida omanik saab võrrelda oma praeguse kütusekuluga.', note: costNoteEt, labels: costLabels.et, locale: 'et-EE' },
      { type: 'prose', soft: true, title: 'Mida ütleb seadus', sourcesLabel: 'Allikad', points: [
        '<strong>Vajalik häälteenamus.</strong> Korteriomandi- ja korteriühistuseaduse (KrtS) § 39 järgi saab kaasomandi eseme ajakohastamiseks vajaliku muudatuse otsustada üldkoosolekul, kui poolt on üle poole kõigist häältest ja neile omanikele kuulub üle poole kaasomandi osadest. Tavapärase valitsemise küsimused otsustatakse häälteenamusega (§ 35). Kumb kord kehtib, sõltub sellest, mida rajatakse – küsi nõu ühistu juristilt.',
        '<strong>Uued ja oluliselt rekonstrueeritud majad.</strong> Kui ehitusloa taotlus või ehitusteatis on esitatud pärast 10.03.2021, on laadimistaristu rajamine kohustus, mis algab arendajast.',
        '<strong>Toetus.</strong> KIK toetab laadimispunktide rajamist ühistutele, kelle kinnistul on vähemalt 10 parkimiskohta ja kelle ehitusluba on esitatud enne seda kuupäeva. <a href="/et/kortermajad/">Tingimused ja näide</a>.',
        '<strong>Euroopa Liit.</strong> Hoonete energiatõhususe direktiivi (EL) 2024/1275 artikkel 14 kohustab liikmesriike lihtsustama laadimispunktide paigaldamist, eriti korteriühistutes. Oma tarbeks mõeldud laadimispunkti taotlusest võib keelduda ainult tõsistel ja õigustatud põhjustel.',
      ], sources: [
        { label: 'Kliimaministeerium: renoveerimise õiguslikud takistused (2026)', href: 'https://kliimaministeerium.ee/sites/default/files/documents/2026-06/renoveerimise%20%C3%B5iguslikud%20takistused.PDF' },
        { label: 'Pallo & Partnerid KrtS § 39 kohta', href: 'https://pallo.ee/energiatohususe-suurendamise-eesmargil-kuttesusteemi-vahetamine-ja-korteriuhistu-otsustamisprotsess/' },
        { label: 'KIK', href: 'https://kik.ee/et/toetatavad-tegevused/elektriauto-laadimistaristu-toetus' },
        { label: 'EUR-Lex', href: 'https://eur-lex.europa.eu/EN/legal-content/summary/energy-performance-of-buildings.html' } ] },
      { type: 'prose', title: 'Pane tähele', paragraphs: ['See leht on üldine info, mitte õigusnõu. Seadused ja toetuse tingimused muutuvad; allikad on eespool lingitud.'] },
      { type: 'cta', title: 'Vajad koosolekuks arve?', lead: 'Koostame pakkumise ja toetuse arvestuse koos paigalduspartneriga.', buttons: [{ label: 'Küsi pakkumist', href: '/et/kortermajad/#form' }] },
    ],
  },
};
