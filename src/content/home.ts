import type { Lang } from './ui';

export const home: Record<Lang, any> = {
  en: {
    meta: {
      title: 'VOOL – the complete EV charging solution',
      description: 'Smart 22 kW EV charger, load management controller and software – designed and made in Estonia.',
    },
    promos: [
      { badge: 'Estonia', text: 'Apartment associations: get up to €14,090 KIK grant for 10 charging points.', cta: 'See how', href: '/apartment-buildings/' },
      { badge: 'Lithuania', text: 'Get paid 3.9 ct for every kWh you charge at home. Join the DAEI waitlist.', cta: 'Join the waitlist', href: '/daei/' },
    ],
    hero: {
      eyebrow: 'Designed and made in Estonia',
      title: 'The complete EV charging solution',
      lead: 'A smart charger, a load management controller and software that work together – for homes, apartment buildings and businesses.',
      primary: { label: 'Explore products', href: '#products' },
      secondary: { label: 'Where to buy', href: '#buy' },
    },
    products: {
      eyebrow: 'Products',
      title: 'Everything you need to charge, in one system',
      items: [
        { title: 'VOOL Charger', tag: 'The EV charger that works for you.', points: ['Up to 22 kW', '5-year warranty', '4G, WiFi, Ethernet and Bluetooth'] },
        { title: 'VOOL LMC', tag: '100% of your electricity on tap. Safely.', points: ['Dynamic load management', 'Protects the main fuse', 'Automatic phase switching'] },
        { title: 'VOOL App', tag: 'Cheaper EV charging. On your terms.', points: ['Start, stop and schedule', 'Charge when electricity is cheap', 'Share the charger with others'] },
        { title: 'VOOL Portal', tag: 'Complete EV charging software.', points: ['Manage sites and users', 'Billing and reports', 'Remote support'] },
      ],
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Built for every place you park',
      items: [
        { title: 'Homes', text: 'Charge at night when power is cheapest, controlled from your phone.' },
        { title: 'Apartment buildings', text: 'Shared charging with load management and fair billing for every resident.', href: '/apartment-buildings/', more: 'KIK grant in Estonia →' },
        { title: 'Businesses & fleets', text: 'Charge company cars and fleets without upgrading the grid connection.' },
        { title: 'Public charging', text: 'Open your chargers to visitors and get paid for every session.' },
      ],
    },
    buy: {
      title: 'Where to buy',
      lead: 'VOOL is sold and installed by our partners across Europe. Resellers can see stock and their prices and order online.',
      primary: { label: 'Find a reseller', href: '/where-to-buy/' },
      secondary: { label: 'Become a partner', href: '/resources/resellers/' },
    },
  },

  et: {
    meta: {
      title: 'VOOL – elektriauto laadimise terviklahendus',
      description: 'Nutikas 22 kW elektriauto laadija, koormusjuhtimise kontroller ja tarkvara – arendatud ja toodetud Eestis.',
    },
    promos: [
      { badge: 'KIK toetus', text: 'Korteriühistu: 10 laadimispunkti puhul kuni 14 090 € toetust.', cta: 'Vaata lähemalt', href: '/et/kortermajad/' },
    ],
    hero: {
      eyebrow: 'Arendatud ja toodetud Eestis',
      title: 'Elektriauto laadimise terviklahendus',
      lead: 'Nutikas laadija, koormusjuhtimise kontroller ja tarkvara, mis töötavad koos – eramajale, kortermajale ja ettevõttele.',
      primary: { label: 'Tutvu toodetega', href: '#products' },
      secondary: { label: 'Kust osta', href: '#buy' },
    },
    products: {
      eyebrow: 'Tooted',
      title: 'Kõik laadimiseks vajalik ühes süsteemis',
      items: [
        { title: 'VOOL laadija', tag: 'Laadija, mis töötab sinu heaks.', points: ['Kuni 22 kW', '5-aastane garantii', '4G, WiFi, Ethernet ja Bluetooth'] },
        { title: 'VOOL LMC', tag: 'Kogu maja võimsus kasutusse. Turvaliselt.', points: ['Dünaamiline koormusjaotus', 'Kaitseb peakaitset', 'Automaatne faasivahetus'] },
        { title: 'VOOL äpp', tag: 'Odavam laadimine sinu tingimustel.', points: ['Alusta, peata ja planeeri', 'Lae siis, kui elekter on odav', 'Jaga laadijat teistega'] },
        { title: 'VOOL portaal', tag: 'Laadimise haldustarkvara.', points: ['Asukohad ja kasutajad', 'Arveldus ja aruanded', 'Kaugtugi'] },
      ],
    },
    solutions: {
      eyebrow: 'Lahendused',
      title: 'Iga parkimiskoha jaoks',
      items: [
        { title: 'Eramajad', text: 'Lae öösel, kui elekter on kõige odavam, ja juhi kõike telefonist.' },
        { title: 'Kortermajad', text: 'Ühine laadimine koormusjuhtimise ja õiglase arveldusega.', href: '/et/kortermajad/', more: 'KIK toetus →' },
        { title: 'Ettevõtted ja autopargid', text: 'Lae firmaautosid ilma liitumist suurendamata.' },
        { title: 'Avalik laadimine', text: 'Ava laadijad külastajatele ja teeni iga laadimise pealt.' },
      ],
    },
    buy: {
      title: 'Kust osta',
      lead: 'VOOLi müüvad ja paigaldavad meie partnerid. Edasimüüjad näevad laoseisu ja oma hindu ning saavad tellida veebis.',
      primary: { label: 'Leia edasimüüja', href: '/et/kust-osta/' },
      secondary: { label: 'Hakka partneriks', href: '/et/lahendused/edasimüüjad/' },
    },
  },

  lt: {
    meta: {
      title: 'VOOL – visapusiškas elektromobilių įkrovimo sprendimas',
      description: 'Išmani 22 kW įkrovimo stotelė, apkrovos valdiklis ir programinė įranga – sukurta ir pagaminta Estijoje.',
    },
    promos: [
      { badge: 'DAEI', text: 'Gaukite 3,9 ct už kiekvieną namuose įkrautą kWh. Registruokitės į laukiančiųjų sąrašą.', cta: 'Registruotis', href: '/lt/daei/' },
    ],
    hero: {
      eyebrow: 'Sukurta ir pagaminta Estijoje',
      title: 'Visapusiškas elektromobilių įkrovimo sprendimas',
      lead: 'Išmani įkrovimo stotelė, apkrovos valdiklis ir programinė įranga, veikiantys kartu – namams, daugiabučiams ir įmonėms.',
      primary: { label: 'Produktai', href: '#products' },
      secondary: { label: 'Kur įsigyti', href: '#buy' },
    },
    products: {
      eyebrow: 'Produktai',
      title: 'Viskas, ko reikia įkrovimui, vienoje sistemoje',
      items: [
        { title: 'VOOL stotelė', tag: 'Įkrovimo stotelė, kuri dirba jums.', points: ['Iki 22 kW', '5 metų garantija', '4G, WiFi, Ethernet ir Bluetooth'] },
        { title: 'VOOL LMC', tag: 'Visa namo galia – saugiai.', points: ['Dinaminis apkrovos valdymas', 'Saugo įvadinį saugiklį', 'Automatinis fazių perjungimas'] },
        { title: 'VOOL programėlė', tag: 'Pigesnis įkrovimas jūsų sąlygomis.', points: ['Paleiskite, sustabdykite, planuokite', 'Kraukite, kai elektra pigi', 'Dalinkitės stotele'] },
        { title: 'VOOL portalas', tag: 'Įkrovimo valdymo programinė įranga.', points: ['Vietos ir naudotojai', 'Atsiskaitymai ir ataskaitos', 'Nuotolinė pagalba'] },
      ],
    },
    solutions: {
      eyebrow: 'Sprendimai',
      title: 'Kiekvienai stovėjimo vietai',
      items: [
        { title: 'Namai', text: 'Kraukite naktį, kai elektra pigiausia, ir valdykite viską telefonu.', href: '/lt/daei/', more: 'Uždirbkite su DAEI →' },
        { title: 'Daugiabučiai', text: 'Bendras įkrovimas su apkrovos valdymu ir sąžiningu atsiskaitymu.' },
        { title: 'Įmonės ir autoparkai', text: 'Įkraukite įmonės automobilius nedidindami prijungimo galios.' },
        { title: 'Viešas įkrovimas', text: 'Atverkite stoteles lankytojams ir uždirbkite iš kiekvieno įkrovimo.' },
      ],
    },
    buy: {
      title: 'Kur įsigyti',
      lead: 'VOOL parduoda ir įrengia mūsų partneriai. Perpardavėjai mato atsargas ir savo kainas bei gali užsisakyti internetu.',
      primary: { label: 'Rasti pardavėją', href: '/lt/kur-isigyti/' },
      secondary: { label: 'Tapkite partneriu', href: '/lt/sprendimai/Perpardavėjai/' },
    },
  },
};
