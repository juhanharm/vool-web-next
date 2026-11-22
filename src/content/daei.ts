/** DAEI (Lithuania) waitlist page. Rate and terms as decided by VOOL in November 2026. */
export const daei = {
  lt: {
    meta: {
      title: 'DAEI – uždirbkite iš elektromobilio įkrovimo namuose | VOOL',
      description: 'VOOL moka 3,9 ct už kiekvieną namuose įkrautą kWh. Registruokitės į DAEI laukiančiųjų sąrašą.',
    },
    hero: {
      eyebrow: 'DAEI · Lietuva · Startas 2026 m. gruodį',
      title: 'Uždirbkite iš elektromobilio įkrovimo namuose',
      lead: 'VOOL paverčia jūsų įkrovimo stotelės suvartotą elektrą DAEI vienetais, parduoda juos degalų tiekėjams ir dalį pajamų perveda jums.',
      rate: '3,9 ct', rateLabel: 'už kiekvieną įkrautą kWh',
      facts: ['Tarifas fiksuotas 12 mėn.', 'Išmokos į banko sąskaitą', 'Registracija nemokama'],
    },
    steps: {
      title: 'Kaip tai veikia',
      items: [
        { title: 'Užsiregistruokite', text: 'Palikite el. paštą ir nurodykite, kokią stotelę turite. Tai užtruks mažiau nei minutę.' },
        { title: 'Pasirašykite sutartį', text: 'Kai paslauga bus paruošta, atsiųsime nuorodą. Sutartį pasirašysite elektroniniu būdu.' },
        { title: 'Gaukite pajamas', text: 'VOOL automatiškai surenka įkrovimo duomenis, pateikia juos „Baltpool“ ir perveda jūsų dalį.' },
      ],
    },
    calc: {
      title: 'Kiek galite uždirbti?',
      kmLabel: 'Nuvažiuojate per metus (km)',
      result: 'per metus',
      note: 'Skaičiuojama 18 kWh/100 km, visas įkrovimas namuose, 3,9 ct/kWh.',
    },
    faq: {
      title: 'Dažniausi klausimai',
      items: [
        { q: 'Kas yra DAEI?', a: 'DAEI – degalų iš atsinaujinančių energijos išteklių apskaitos vienetai. Degalų tiekėjai privalo jų turėti, o trūkstamus vienetus gali įsigyti iš kitų rinkos dalyvių. Nuo 2026 m. vasario vienetus galima generuoti ir už privačiose stotelėse įkrautą elektrą. Sistemą administruoja „Baltpool“.' },
        { q: 'Kas gali dalyvauti?', a: 'Privatūs namai, daugiabučių namų savininkų bendrijos ir įmonės Lietuvoje su VOOL įkrovimo stotele.' },
        { q: 'Ar mano stotelė veiks kaip anksčiau?', a: 'Taip. VOOL stotelė lieka prijungta prie VOOL platformos – programėlė, tvarkaraščiai ir apkrovos valdymas veikia kaip įprastai.' },
        { q: 'Kiek trunka sutartis?', a: '12 mėnesių. Tarifas šiuo laikotarpiu fiksuotas.' },
        { q: 'Kas yra VOOL?', a: 'Estijos elektromobilių įkrovimo įrangos gamintojas. VOOL (MultiCharge OÜ) yra registruotas DAEI telkėjas „Baltpool“ sistemoje.' },
      ],
    },
    form: {
      title: 'Registruokitės į laukiančiųjų sąrašą',
      intro: 'Vietų skaičius ribotas – pirmieji užsiregistravę prisijungs pirmieji.',
      fields: [
        { name: 'email', label: 'El. paštas', type: 'email', required: true },
        { name: 'name', label: 'Vardas', half: true },
        { name: 'phone', label: 'Telefonas', type: 'tel', half: true },
        { name: 'customer_type', label: 'Klientas', type: 'select', options: ['Privatus asmuo', 'Daugiabučio bendrija', 'Įmonė'], half: true },
        { name: 'charger_brand', label: 'Stotelė', type: 'select', options: ['VOOL', 'Kita'], required: true, half: true },
        { name: 'chargers', label: 'Stotelių skaičius', type: 'number', half: true },
      ],
      submit: 'Prisijungti prie sąrašo',
      thanks: 'Ačiū! Įtraukėme jus į sąrašą ir pranešime, kai paslauga bus paruošta.',
      error: 'Nepavyko išsiųsti. Bandykite dar kartą arba rašykite info@vool.com.',
      consent: 'Sutinku gauti naujienas apie DAEI paslaugos startą (privatumo politika).',
    },
  },
  en: {
    meta: {
      title: 'DAEI – earn from charging your EV at home in Lithuania | VOOL',
      description: 'VOOL pays you 3.9 ct for every kWh you charge at home in Lithuania. Join the DAEI waitlist.',
    },
    hero: {
      eyebrow: 'DAEI · Lithuania · Launching December 2026',
      title: 'Earn from charging your EV at home',
      lead: 'VOOL turns the electricity your charger delivers into DAEI renewable fuel units, sells them to fuel suppliers and pays you a share.',
      rate: '3.9 ct', rateLabel: 'for every kWh you charge',
      facts: ['Rate fixed for 12 months', 'Paid to your bank account', 'Free to join'],
    },
    steps: {
      title: 'How it works',
      items: [
        { title: 'Join the waitlist', text: 'Leave your email and tell us which charger you have. It takes less than a minute.' },
        { title: 'Sign the agreement', text: 'When the service is ready, we send you a link. You sign electronically.' },
        { title: 'Get paid', text: 'VOOL collects your charging data, submits it to Baltpool and pays your share.' },
      ],
    },
    calc: {
      title: 'How much could you earn?',
      kmLabel: 'Kilometres driven per year',
      result: 'per year',
      note: 'Assumes 18 kWh/100 km, all charging at home, 3.9 ct/kWh.',
    },
    faq: {
      title: 'Questions',
      items: [
        { q: 'What is DAEI?', a: 'DAEI are renewable fuel accounting units. Fuel suppliers must hold them and can buy missing units from other market participants. Since February 2026, units can also be generated for electricity charged at private charging points. The system is run by Baltpool.' },
        { q: 'Who can join?', a: 'Private homes, apartment associations and companies in Lithuania with a VOOL charger.' },
        { q: 'Will my charger work as before?', a: 'Yes. Your VOOL charger stays on the VOOL platform – the app, schedules and load management keep working.' },
        { q: 'How long is the agreement?', a: '12 months, with the rate fixed for that period.' },
        { q: 'Who is VOOL?', a: 'An Estonian EV charging hardware maker. VOOL (MultiCharge OÜ) is a registered DAEI aggregator in Baltpool’s system.' },
      ],
    },
    form: {
      title: 'Join the waitlist',
      intro: 'Places are limited – early sign-ups get access first.',
      fields: [
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'name', label: 'Name', half: true },
        { name: 'phone', label: 'Phone', type: 'tel', half: true },
        { name: 'customer_type', label: 'Customer type', type: 'select', options: ['Private person', 'Apartment association', 'Company'], half: true },
        { name: 'charger_brand', label: 'Charger', type: 'select', options: ['VOOL', 'Other'], required: true, half: true },
        { name: 'chargers', label: 'Number of chargers', type: 'number', half: true },
      ],
      submit: 'Join the waitlist',
      thanks: 'Thank you! You are on the list – we will let you know when the service is ready.',
      error: 'Something went wrong. Please try again or write to info@vool.com.',
      consent: 'I agree to receive updates about the DAEI service launch (privacy policy).',
    },
  },
} as const;
