// Dutch copy. Same shape as content.en.ts: the types below make the build fail if a key is missing.
import type { Part, Content } from './content.en';
import type {
  aboutPage as enAbout,
  packagesPage as enPackages,
  privacyPage as enPrivacy,
  termsPage as enTerms,
  notFoundPage as enNotFound,
  ui as enUi,
} from './content.en';

export const commitDiscount = {
  percent: 20,
  text: 'bij 6+ maanden',
};

export const en: Content = {
  nav: [
    { label: 'Over mij', href: '/about' },
    { label: 'Werkwijze', href: '/#way' },
    { label: 'Pakketten', href: '/packages' },
    { label: 'Contact', href: '/#contact' },
  ],
  headerCta: 'Plan een kennismaking',
  footerNav: [
    { label: 'Over mij', href: '/about' },
    { label: 'Pakketten', href: '/packages' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Voorwaarden', href: '/terms' },
  ],

  hero: {
    location: 'Personal trainer bij Basic-Fit Leuven · Bondgenotenlaan',
    greeting: ['Hoi, ik ben ', { em: 'Fuai' }, '. Jouw personal trainer.'] as Part[],
    title: [
      'Move ', { em: 'better.' }, { br: true },
      'Get ', { em: 'stronger.' }, { br: true },
      'Feel ', { hl: 'amazing.' },
    ] as Part[],
    intro:
      'Persoonlijke coaching voor elk lichaam. Of je nu nieuw bent in de gym of op zoek bent naar je volgende PR, ik schrijf programma’s die met je meegroeien. Training, praktische voedingsbegeleiding en gewoontes die echt blijven hangen.',
    primaryCta: 'Plan een kennismaking',
    secondaryCta: 'Bekijk de pakketten',
    trust: ['Gecertificeerd personal trainer', '8 jaar trainingservaring', 'Live, hybride & online'],
    photoLabel:
      'PHOTO:Fuai, natural light, mid-movement or smiling at the gym (portrait, at least 1600 px tall)',
    certBadge: 'Bekijk mijn certificaten',
    trainWith: 'Train met mij bij',
    modes: ['1-1', 'Hybride', 'Online'],
  },

  focus: {
    label: 'Waar we aan kunnen werken',
    items: ['Kracht', 'Gewichtsverlies', 'Explosiviteit', 'Energie', 'Mobiliteit'],
  },

  coach: {
    eyebrow: 'Maak kennis met je coach',
    title: ['Training die past bij ', { em: 'jouw' }, ' leven, en niet andersom.'] as Part[],
    paragraphs: [
      'Ik groeide op met turnen en vechtsporten, en beweging is altijd een groot deel van mijn leven geweest. Na verloop van tijd groeide mijn passie uit tot krachttraining en powerlifting, wat me inspireerde om personal trainer te worden en anderen de voordelen van sporten te laten ontdekken.',
      'Ik schrijf programma’s die met je meegroeien. Persoonlijke training, praktische voedingsbegeleiding en duurzame gewoontes, volledig afgestemd om je te helpen beter te bewegen, sterker te worden en je op je best te voelen.',
    ],
    photoLabel: 'PHOTO:Fuai coaching a client, explaining technique',
    certsShown: 3,
    link: 'Mijn verhaal & alle certificaten',
  },

  certifications: [
    {
      name: 'International Certified Personal Trainer',
      institution: 'NASM (National Academy of Sports Medicine)',
      year: '2026',
      meaning: 'In staat om evidence-based krachttrainingsprogramma’s op te stellen voor cliënten van elk fitnessniveau.',
    },
    {
      name: 'Personal Trainer (EREPS 4) ',
      institution: 'EREPS (European Register of Exercise Professionals)',
      year: '2026',
      meaning: 'In staat om evidence-based krachttrainingsprogramma’s op te stellen voor cliënten van elk fitnessniveau.',
    },
    {
      name: 'Certified Nutrition Coach',
      institution: 'NASM (National Academy of Sports Medicine)',
      year: '2026',
      meaning: 'In staat om evidence-based voedingsbegeleiding te geven aan cliënten met uiteenlopende gezondheidsdoelen.',
    },
  ],

  way: {
    eyebrow: 'Werkwijze',
    title: ['Van eerste gesprek tot ', { em: 'je sterk voelen' }] as Part[],
    intro: 'Geen crashplannen, geen geschreeuw. Een duidelijke aanpak, stap voor stap, die aansluit bij waar jij nu staat.',
    steps: [
      {
        title: 'Kennismaking',
        text: 'Een ontspannen gesprek in de gym of online. We bespreken je profiel, je doelen en alles wat je in het verleden tegenhield.',
      },
      {
        title: 'Intake',
        text: 'We bekijken hoe je beweegt, waar je vandaag staat en wat je graag doet. Geen oordeel, gewoon een duidelijk beginpunt.',
      },
      {
        title: 'Jouw plan',
        text: 'Een programma rond jou gebouwd: training, praktische voedingsbegeleiding en kleine gewoontes die in je agenda passen.',
      },
      {
        title: 'Trainen & bijsturen',
        text: 'We trainen, volgen je vooruitgang op en sturen bij naarmate je groeit. Vragen tussendoor? Feedback wanneer je erom vraagt.',
        highlight: true,
      },
    ],
  },

  packages: {
    eyebrow: 'Pakketten',
    title: ['Hoe wil je ', { em: 'trainen?' }] as Part[],
    intro: 'Drie manieren om samen te werken. Weet je niet welke past? Dat zoeken we samen uit tijdens je kennismaking.',
    cta: 'Start met een kennismaking',
    compareLink: 'Vergelijk de pakketten in detail',
    items: [
      {
        name: '1-1 coaching',
        blurb:
          'Leer beter bewegen, word sterker en bereik je doelen. Samen, elke sessie, bij Basic-Fit Leuven.',
        price: '€ 60',
        unit: '/ sessie',
        features: [
          'Persoonlijke sessies in de gym',
          'Hands-on techniekcoaching',
          'Persoonlijk programma',
          'Praktische voedingsbegeleiding',
        ],
      },
      {
        name: 'Hybride coaching',
        blurb:
          'Een mix van 1-1 sessies, online coaching en zelfstandig trainen. Ik begeleid je met een persoonlijk programma en werk aan je techniek.',
        price: '€ 150',
        unit: '/ maand',
        features: [
          '2 live 1-1 sessies per maand',
          'Programma voor je solotrainingen',
          'Online check-ins & feedback',
          'Praktische voedingsbegeleiding',
        ],
        featured: true,
      },
      {
        name: 'Online coaching',
        blurb: 'Persoonlijke trainingsprogramma’s en voortdurende ondersteuning, waar je maar wilt. Feedback wanneer je erom vraagt.',
        price: '€ 90',
        unit: '/ maand',
        features: [
          'Persoonlijk trainingsprogramma',
          'Videofeedback op je techniek',
          'Regelmatige check-ins',
          'Praktische voedingsbegeleiding',
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: ['Vragen? ', { em: 'Antwoorden.', onDark: true }] as Part[],
    intro: 'Vind je niet wat je zoekt? Neem contact op, dan help ik je graag verder.',
    items: [
      {
        q: 'Waarom zou ik een PT nemen?',
        a: 'Iedereen kan je een workout geven. Ik geef je een plan om vooruit te gaan. Ik bouw een programma op maat van jouw noden en doelen.',
      },
      {
        q: 'Hoeveel dagen per week moet ik sporten?',
        a: 'Ik vind dat fitness in je leven moet passen, en niet andersom. Jij laat me weten hoeveel tijd je wilt vrijmaken om te sporten, en ik stem je programma daarop af.',
      },
      {
        q: 'Heb ik gymervaring nodig om met een PT te werken?',
        a: 'Helemaal niet! Of je nu helemaal nieuw bent of al jaren traint, mijn coaching is afgestemd op jouw ervaring en doelen.',
      },
      {
        q: 'Kun je me helpen met mijn voeding?',
        a: 'Ja, als Certified Nutrition Coach leer ik je gezonde gewoontes en de basis van macronutriënten, geef ik praktische begeleiding en help ik je om bij de les te blijven. Persoonlijke maaltijdplannen vallen buiten mijn bevoegdheid en moeten door een erkend diëtist opgesteld worden.',
      },
      {
        q: 'Hoe begin ik eraan?',
        a: 'Neem contact op om je doelen en wensen te bespreken. We kijken samen welke coachingvorm het best bij je past, en dan gaan we van start!',
      },
    ],
  },

  testimonials: {
    title: ['Wat klanten ', { em: 'zeggen' }] as Part[],
    items: [
      {
        quote: 'Ze besteedde veel aandacht aan mijn techniek en hielp me mijn uitvoering te verbeteren.',
        by: 'Jasmien · Fitter worden',
      },
      {
        quote: 'Ze heeft veel passie en dat merk je in haar coaching. Ze is erg motiverend en geeft je een goed gevoel over jezelf.',
        by: 'Jef · Beter bewegen',
      },
      {
        quote: 'Ze geeft je geen standaardprogramma, het wordt volledig op jou als persoon afgestemd.',
        by: 'Tom · Spiermassa opbouwen',
      },
    ],
  },

  contact: {
    title: ['Laten we jouw ', { em: 'momentum', onDark: true }, ' opbouwen.'] as Part[],
    intro:
      'Neem contact met me op en laten we je doelen bespreken. Samen vinden we het juiste coachingpakket en starten we je reis om beter te bewegen, sterker te worden en je geweldig te voelen.',
    form: {
      name: 'Naam',
      namePlaceholder: 'Jouw naam',
      email: 'E-mail',
      emailPlaceholder: 'jij@voorbeeld.be',
      goal: 'Waar wil je aan werken?',
      goals: ['Sterker worden', 'Afvallen', 'Beter bewegen / mobiliteit', 'Gezonder leven', 'Nog niet zeker'],
      package: 'Welk pakket interesseert je?',
      packages: ['Help me kiezen', '1-1 coaching', 'Hybride coaching', 'Online coaching'],
      message: 'Is er iets dat ik moet weten?',
      messagePlaceholder: 'Je ervaring, planning, vragen…',
      submit: 'Vraag een kennismaking aan',
      sending: 'Verzenden…',
      success: 'Bedankt! Ik heb je bericht ontvangen en neem snel contact met je op.',
      error: 'Er ging iets mis. Bel of mail me liever via de gegevens links.',
    },
  },

  footer: {
    copyright: 'Momentum Coaching',
    companyNumberLabel: 'Ondernemingsnr.',
    madeBy: 'Gemaakt door',
  },
};

export const aboutPage: typeof enAbout = {
  title: 'Over Coach Fuai: personal trainer in Leuven',
  description:
    'Maak kennis met Fuai, personal trainer bij Basic-Fit Leuven. Haar verhaal, waar ze voor staat en de certificaten achter elk programma.',
  eyebrow: 'Over mij',
  heading: ['Hoi, ik ben ', { em: 'Fuai.' }] as Part[],
  lead: 'Ik help mensen van elke leeftijd, vorm en niveau zich thuis te voelen in de gym en sterker te zijn daarbuiten.',
  story:
    'Ik groeide op met turnen en vechtsporten, en beweging is altijd een groot deel van mijn leven geweest. Na verloop van tijd groeide mijn passie uit tot krachttraining en powerlifting, wat me inspireerde om personal trainer te worden en anderen de voordelen van sporten te laten ontdekken. Ik werk graag met mensen die klaar zijn om in hun gezondheid te investeren, zichzelf uit te dagen en blijvende veranderingen door te voeren. Als je coach begeleid ik je bij elke stap: ik help je om kracht op te bouwen, je conditie te verbeteren en meer vertrouwen te krijgen in wat je lichaam kan.',
  facts: [
    { label: 'Waar', value: 'Basic-Fit Leuven, Bondgenotenlaan 62' },
    { label: 'Actief in de gym sinds', value: '2018' },
    { label: 'Talen', value: 'English, Nederlands, Español' },
    { label: 'Coaching', value: '1-1 · Hybride · Online' },
  ],
  photoLabel: 'PHOTO:warm portrait of Fuai, looking into the camera',

  stand: {
    eyebrow: 'Waar ik voor sta',
    title: 'Drie beloftes, elke sessie',
    pillars: [
      {
        title: ['Beweeg ', { em: 'beter' }] as Part[],
        text: 'Eerst een goede techniek en mobiliteit. Je begrijpt waarom je elke oefening doet en hoe ze moet aanvoelen.',
      },
      {
        title: ['Word ', { em: 'sterker' }] as Part[],
        text: 'Programma’s die op jouw tempo vorderen, zodat je resultaat blijft zien zonder op te branden.',
      },
      {
        title: ['Voel je ', { hl: 'geweldig' }] as Part[],
        text: 'Meer energie en zelfvertrouwen in het dagelijks leven, ondersteund door praktische voeding en gewoontes die je kunt volhouden.',
      },
    ],
  },

  certs: {
    eyebrow: 'Certificaten',
    title: ['Gekwalificeerd en ', { em: 'altijd bijleren' }] as Part[],
    intro: 'Jouw veiligheid en vooruitgang komen op de eerste plaats. Dit zijn de kwalificaties achter elk programma dat ik schrijf.',
    studyingLabel: 'Momenteel in opleiding:',
    studying: '[Naam opleiding, instelling — verwacht [jaar]]',
  },

  cta: {
    title: ['Laten we jouw ', { em: 'momentum', onDark: true }, ' opbouwen.'] as Part[],
    text: 'Start met een vrijblijvende kennismaking in de gym of online.',
    button: 'Plan een kennismaking',
  },
};

export const packagesPage: typeof enPackages = {
  title: 'Personal training pakketten Leuven: 1-1, hybride & online | Coach Fuai',
  description:
    'Vergelijk 1-1, hybride en online personal training met Coach Fuai in Leuven. Elk pakket start met een kennismaking en een plan op maat.',
  eyebrow: 'Pakketten',
  heading: ['Coaching die past in ', { em: 'jouw week' }] as Part[],
  intro:
    'Train zij aan zij, meng het door elkaar, of train zelfstandig met mijn begeleiding. Elk pakket start met een kennismaking en een plan op maat.',
  items: [
    {
      name: '1-1 coaching',
      blurb:
        'Leer beter bewegen, word sterker en bereik je doelen. Samen werken we naar een betere versie van jou, elke sessie.',
      price: '€ 60',
      unit: '/ sessie',
      terms: 'Minimumcontract van één maand.',
      bestFor: 'beginners, mensen die verantwoording of structuur nodig hebben, hun techniek willen verbeteren, of volledige begeleiding willen.',
      photoLabel: 'PHOTO:1-1 session on the gym floor',
      features: [
        'Sessies van 60 minuten bij Basic-Fit Leuven',
        'Hands-on techniekcoaching',
        'Persoonlijk programma',
        'Praktische voedingsbegeleiding',
      ],
      cta: 'Kies 1-1 coaching',
    },
    {
      name: 'Hybride coaching',
      blurb:
        'Een mix van 1-1 sessies, online coaching en zelfstandig trainen. Ik begeleid je met een persoonlijk programma en werk aan je techniek.',
      price: '€ 150',
      unit: '/ maand',
      terms: 'Minimumcontract van één maand.',
      bestFor: 'mensen die regelmatig live willen afstemmen, en de vrijheid willen om zelf te trainen.',
      photoLabel: 'PHOTO:client training solo, phone with program',
      features: [
        '2 live 1-1 sessies per maand',
        'Programma voor je solotrainingen',
        'Online check-ins & videofeedback',
        'Praktische voedingsbegeleiding',
      ],
      cta: 'Kies hybride coaching',
      featured: true,
    },
    {
      name: 'Online coaching',
      blurb: 'Persoonlijke trainingsprogramma’s en voortdurende ondersteuning, waar je maar wilt. Feedback wanneer je erom vraagt.',
      price: '€ 90',
      unit: '/ maand',
      terms: 'Minimumcontract van 3 maanden.',
      bestFor: 'mensen met enige gymervaring, een druk schema, of die buiten Leuven trainen.',
      photoLabel: 'PHOTO:Fuai on a video check-in',
      features: [
        'Persoonlijk trainingsprogramma',
        'Videofeedback op je techniek',
        'Wekelijkse check-ins',
        'Praktische voedingsbegeleiding',
      ],
      cta: 'Kies online coaching',
    },
  ],
  bestFor: 'Ideaal voor:',

  compare: {
    title: ['Vergelijk in één ', { em: 'oogopslag' }] as Part[],
    columns: ['1-1', 'Hybride', 'Online'],
    rows: [
      { label: 'Samen trainen in de gym', values: ['Elke sessie', '2 per maand', '—'] },
      { label: 'Persoonlijk programma', values: ['Ja', 'Ja', 'Ja'] },
      { label: 'Feedback op techniek', values: ['Live', 'Live + video', 'Video'] },
      { label: 'Voedingsbegeleiding', values: ['Ja', 'Ja', 'Ja'] },
      { label: 'Check-ins tussen sessies', values: ['Op aanvraag', 'Wekelijks', 'Wekelijks'] },
      { label: 'Prijs', values: ['€ 60 / sessie', '€ 150 / maand', '€ 90 / maand'], emphasis: true },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: ['Goed om te ', { em: 'weten', onDark: true }] as Part[],
    intro: 'Snelle antwoorden over de pakketten. Nog iets anders? Vraag het gerust.',
    items: [
      {
        q: 'Welk pakket past bij mij?',
        a: 'Dat hangt af van je doelen, je ervaring en hoeveel begeleiding je wilt. Niet zeker? Daar dient de kennismaking net voor: we bespreken het en kiezen wat past.',
      },
      {
        q: 'Hoelang duurt een sessie?',
        a: '[Duur van een sessie: antwoord nog toe te voegen]',
      },
      {
        q: 'Is er een minimumduur en kan ik opzeggen?',
        a: '[Minimumduur en opzegbeleid: antwoord nog toe te voegen]',
      },
      {
        q: 'Kan ik later naar een ander pakket overstappen?',
        a: '[Overstappen tussen pakketten: antwoord nog toe te voegen]',
      },
      {
        q: 'Heb ik een Basic-Fit-lidmaatschap nodig?',
        a: '[Basic-Fit-lidmaatschap: antwoord nog toe te voegen]',
      },
    ],
  },

  steps: {
    eyebrow: 'Aan de slag',
    title: ['Drie stappen naar je ', { em: 'eerste sessie' }] as Part[],
    items: [
      { title: 'Plan een kennismaking', text: 'Stuur een bericht of bel. We vinden een moment om af te spreken in de gym of online.' },
      { title: 'Kies wat past', text: 'Samen kiezen we het pakket dat past bij je doelen, budget en planning.' },
      { title: 'Begin met bewegen', text: 'Je intake en eerste sessie, daarna staat je persoonlijke programma klaar.' },
    ],
  },

  cta: {
    title: ['Laten we jouw ', { em: 'momentum', onDark: true }, ' opbouwen.'] as Part[],
    text: 'Weet je niet welk pakket bij je past? Daar dient de kennismaking net voor.',
    button: 'Plan een kennismaking',
  },
};

export const privacyPage: typeof enPrivacy = {
  title: 'Privacybeleid | Coach Fuai · Momentum Coaching',
  description: 'Hoe Momentum Coaching omgaat met je persoonsgegevens.',
  eyebrow: 'Juridisch',
  heading: ['Privacy', ' ', { em: 'beleid' }] as Part[],
  updated: 'Laatst bijgewerkt: oktober 2026',
  sections: [
    {
      title: 'Wie is verantwoordelijk',
      text: 'Momentum Coaching (Coach Fuai), Basic-Fit Leuven, Bondgenotenlaan 62, 3000 Leuven. Ondernemingsnummer BE 1041.105.156. Contact: Coach.Fuai@gmail.com of 0456 56 07 02.',
    },
    {
      title: 'Welke gegevens ik verzamel',
      text: 'De gegevens die je invult in het contactformulier (naam, e-mail, doel, pakket, bericht) en alles wat je deelt wanneer je me rechtstreeks contacteert via e-mail, telefoon of Instagram.',
    },
    {
      title: 'Waarom en hoelang',
      text: 'Om op je aanvraag te antwoorden en je kennismaking te plannen, en, als je klant wordt, om de coaching te leveren en te factureren. Aanvragen die niet tot coaching leiden worden [X maanden] bewaard en daarna verwijderd. Factuurgegevens worden bewaard zolang de Belgische boekhoudwetgeving dat vereist.',
    },
    {
      title: 'Wie ontvangt ze',
      text: 'De formulierdienst die je bericht aan mij bezorgt ([naam dienst, bv. Web3Forms]) en hostingprovider Cloudflare. Ik verkoop je gegevens niet en gebruik ze niet voor reclame.',
    },
    {
      title: 'Cookies en tracking',
      text: 'Deze site gebruikt geen trackingcookies, geen analytics en geen lettertypes van derden.',
    },
    {
      title: 'Jouw rechten',
      text: 'Je kunt inzage, correctie of verwijdering van je gegevens vragen, of bezwaar maken tegen het gebruik ervan, door te mailen naar Coach.Fuai@gmail.com. Je kunt ook een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be).',
    },
  ],
};

export const termsPage: typeof enTerms = {
  title: 'Algemene voorwaarden | Coach Fuai · Momentum Coaching',
  description: 'De algemene voorwaarden die van toepassing zijn op de diensten en goederen van Momentum Coaching.',
  eyebrow: 'Juridisch',
  heading: ['Algemene ', { em: 'voorwaarden' }] as Part[],
  sections: [
    {
      title: 'Toepassingsgebied',
      paragraphs: [
        'Deze Algemene voorwaarden zijn van toepassing op zowel diensten als goederen.',
        'Door het invullen van de bestelbon of het geven van een opdracht aanvaardt de klant deze Algemene Voorwaarden.',
      ],
    },
    {
      title: 'Facturatie',
      paragraphs: [
        'Voor zakelijke klanten met een Belgisch btw-nummer worden facturen standaard elektronisch verstuurd via het Peppol-netwerk, conform de Belgische wetgeving. Deze klant zorgt voor een actieve Peppol-registratie. Alle overige klanten ontvangen hun factuur per e-mail of per post, tenzij anders overeengekomen. Een factuur verzonden via Peppol geldt als ontvangen op de datum van verzending.',
        'Hoewel het Peppol-netwerk de veiligheid verhoogt, dient de klant zelf de gegevens op de factuur te verifiëren voor betaling. De leverancier is niet aansprakelijk voor schade door fraude of technische fouten bij de Peppol-toegangspunten van de klant of derden.',
      ],
    },
    {
      title: 'Laattijdige betaling',
      paragraphs: [
        'Bij volledige of gedeeltelijke niet-betaling door de klant binnen de 14 kalenderdagen (+ drie werkdagen indien niet via elektronische weg) na verzending van de eerste betalingsherinnering is er van rechtswege en zonder ingebrekestelling een schadevergoeding verschuldigd van:',
      ],
      list: [
        '€ 20 als het verschuldigde bedrag lager dan of gelijk is aan € 150;',
        '€ 30 vermeerderd met 10% van het verschuldigde bedrag boven de € 150;',
        '€ 65 vermeerderd met 5% van het verschuldigde bedrag boven de € 500, met een totaallimiet van € 2.000.',
      ],
      after: [
        'Bij volledige of gedeeltelijke niet-betaling door de klant binnen de 14 kalenderdagen (+ drie werkdagen indien niet via elektronische weg) na verzending van de eerste betalingsherinnering is de klant van rechtswege en zonder ingebrekestelling een interest verschuldigd ten belope van de wettelijke rentevoet voor betalingsachterstand bij handelstransactie, overeenkomstig artikel 5, lid 2 van de wet van 2 augustus 2002 betreffende de bestrijding van de betalingsachterstand bij handelstransacties. Deze interesten worden berekend op de nog te betalen som.',
      ],
    },
    {
      title: 'Betwisting van facturen',
      paragraphs: [
        'De klant controleert de factuur onmiddellijk. Elke betwisting moet binnen de 8 kalenderdagen na factuurdatum schriftelijk en gemotiveerd gebeuren. Na deze termijn worden de factuur en de levering als definitief aanvaard beschouwd.',
      ],
    },
    {
      title: 'Eigendom en risico',
      paragraphs: [
        'Geleverde goederen en diensten blijven eigendom van de leverancier tot volledige betaling. Niettemin gaan alle risico’s over op de koper vanaf het ogenblik van levering.',
      ],
    },
    {
      title: 'Abonnementen',
      paragraphs: [
        'Abonnementen worden automatisch verlengd, tenzij het abonnement op tijd schriftelijk wordt opgezegd, zijnde tenminste één (1) maand voor de afloop van de termijn.',
      ],
    },
    {
      title: 'Niet-nakoming',
      paragraphs: [
        'Indien de klant zijn verplichtingen, onder meer betalingsverplichting, niet tijdig nakomt, zijn wij gerechtigd om verdere leveringen en diensten stop te zetten en de overeenkomst van rechtswege en zonder ingebrekestelling als ontbonden te beschouwen.',
      ],
    },
    {
      title: 'Bevoegde rechtbank',
      paragraphs: [
        'Ingeval van betwisting zijn alleen de daartoe bevoegde rechtbanken van het rechtsgebied bevoegd.',
      ],
    },
  ],
};

export const notFoundPage: typeof enNotFound = {
  title: 'Pagina niet gevonden | Coach Fuai · Momentum Coaching',
  description: 'Deze pagina bestaat niet.',
  eyebrow: '404',
  heading: ['Die pagina nam een ', { em: 'rustdag.' }] as Part[],
  text: 'We konden niet vinden wat je zocht. Ga terug naar de startpagina of bekijk de pakketten.',
  home: 'Terug naar home',
  packages: 'Bekijk de pakketten',
};

export const ui: typeof enUi = {
  skip: 'Ga naar de inhoud',
  menu: 'Menu',
  mainNav: 'Hoofdmenu',
  footerNav: 'Voettekst',
  language: 'Taal',
  focusAria: 'Focusgebieden',
  photosOf: 'Foto’s van Fuai',
  prevPhoto: 'Vorige foto',
  nextPhoto: 'Volgende foto',
  feature: 'Kenmerk',
  honeypot: 'Laat dit leeg',
  formSubject: 'Nieuwe aanvraag — Momentum Coaching',
  jobTitle: 'Personal trainer',
  businessDescription: 'Personal trainer in Leuven met 1-1, hybride en online coaching.',
  alt: {
    hero: 'Fuai glimlacht in de gym, leunend op een squat rack',
    coach1: 'Fuai doet een incline dumbbell press',
    coach2: 'Fuai traint aan het kabeltoestel',
    aboutPortrait: 'Portret van Fuai die naar de camera glimlacht',
    aboutTrail: 'Fuai zit gehurkt op een stapel boomstammen in het bos en wijst naar de camera, naast een golden retriever',
  },
  home: {
    title: 'Personal trainer Leuven — Coach Fuai · Momentum Coaching',
    description:
      'Personal trainer in Leuven bij Basic-Fit Bondgenotenlaan. 1-1, hybride en online coaching om je te helpen beter te bewegen, sterker te worden en je geweldig te voelen.',
  },
};
