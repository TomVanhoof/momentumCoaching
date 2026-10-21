// English copy, taken verbatim from the design files. Add content.nl.ts later with the same shape.
// Rich text: strings are plain, { em } is a serif-italic accent word, { hl } is the highlighted
// word, { br } is a line break.
export type Part =
  | string
  | { em: string; onDark?: boolean }
  | { hl: string }
  | { br: true };

// Shown on every package card: commit for minMonths or more and get percent off
export const commitDiscount = {
  percent: 20,
  text: 'with 6+ months',
};

export const en = {
  nav: [
    { label: 'About me', href: '/about' },
    { label: 'Way of working', href: '/#way' },
    { label: 'Packages', href: '/packages' },
    { label: 'Contact', href: '/#contact' },
  ],
  headerCta: 'Book an intro',
  footerNav: [
    { label: 'About me', href: '/about' },
    { label: 'Packages', href: '/packages' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Privacy', href: '/privacy' },
  ],

  hero: {
    location: 'Personal trainer at Basic-Fit Leuven · Bondgenotenlaan',
    greeting: ["Hi, I'm ", { em: 'Fuai' }, '. Your personal trainer.'] as Part[],
    title: [
      'Move ', { em: 'better.' }, { br: true },
      'Get ', { em: 'stronger.' }, { br: true },
      'Feel ', { hl: 'amazing.' },
    ] as Part[],
    intro:
      "Personal coaching for every body. Whether you're new to the gym or chasing your next PR, I design programs that grow with you. Training, practical nutrition guidance and habits that actually stick.",
    primaryCta: 'Book an intro',
    secondaryCta: 'See packages',
    trust: ['Certified personal trainer', '8 years of training experience', 'In person, hybrid & online'],
    photoLabel:
      'PHOTO:Fuai, natural light, mid-movement or smiling at the gym (portrait, at least 1600 px tall)',
    certBadge: 'View my certifications',
    trainWith: 'Train with me at',
    modes: ['1-1', 'Hybrid', 'Online'],
  },

  focus: {
    label: 'What we can work on',
    items: ['Strength', 'Weight loss', 'Power', 'Energy', 'Mobility'],
  },

  coach: {
    eyebrow: 'Meet your coach',
    title: ['Training that fits ', { em: 'your' }, ' life, not the other way around.'] as Part[],
    paragraphs: [
      'I design programs that grow with you. Personalised training, practical nutrition guidance and sustainable habits, all tailored to help you move better, get stronger and feel your best.',
      'I grew up practising gymnastics and martial arts, and movement has always been a big part of my life. Over time, my passion evolved into strength training and lifting, which inspired me to become a personal trainer and help others discover the benefits of exercise.',
    ],
    photoLabel: 'PHOTO:Fuai coaching a client, explaining technique',
    certsShown: 3, // how many certifications the home page lists (from `certifications` below)
    link: 'My story & all certifications',
  },

  // Single source for certifications: add, remove or reorder freely. Used on / and /about.
  certifications: [
    {
      name: 'NASM Certified Personal Trainer',
      institution: 'National Academy of Sports Medicine',
      year: '2026',
      meaning: 'Ability to design evidence-based strength training programs for clients of all fitness levels.',
    },
    {
      name: 'EREPS 4',
      institution: 'European Register of Exercise Professionals',
      year: '2026',
      meaning: 'Ability to design evidence-based strength training programs for clients of all fitness levels.',
    },
    {
      name: 'NASM - Certified Nutrition Coach',
      institution: 'National Academy of Sports Medicine',
      year: '2026',
      meaning: 'Ability to provide evidence-based nutrition guidance for clients with various health goals.',
    },
  ],

  way: {
    eyebrow: 'Way of working',
    title: ['From first chat to ', { em: 'feeling strong' }] as Part[],
    intro: 'No crash plans, no shouting. A clear, step-by-step approach that meets you where you are.',
    steps: [
      {
        title: 'Free intro',
        text: "A relaxed chat at the gym or online. We talk about your goals, your week and anything that's held you back before.",
      },
      {
        title: 'Assessment',
        text: "We look at how you move, where you're starting from and what you enjoy. No judgement, just a clear starting point.",
      },
      {
        title: 'Your plan',
        text: 'A program built around you: training, practical nutrition guidance and small habits that fit your schedule.',
      },
      {
        title: 'Train & adjust',
        text: 'We train, track your progress and adjust as you grow. Questions in between? Feedback whenever you ask for it.',
        highlight: true,
      },
    ],
  },

  packages: {
    eyebrow: 'Packages',
    title: ['How do you want to ', { em: 'train?' }] as Part[],
    intro: "Three ways to work together. Not sure which one fits? We'll figure it out during your free intro.",
    cta: 'Start with a free intro',
    compareLink: 'Compare packages in detail',
    items: [
      {
        name: '1-1 coaching',
        blurb:
          'Learn how to move better, get stronger and reach your goals. Together, every session, at Basic-Fit Leuven.',
        price: '€ 60',
        unit: '/ session',
        features: [
          'Personal sessions at the gym',
          'Hands-on technique coaching',
          'Personalised program',
          'Practical nutrition guidance',
        ],
      },
      {
        name: 'Hybrid coaching',
        blurb:
          'Mix 1-1 sessions, online coaching and independent training. I guide you through a personalised program and perfect your technique.',
        price: '€ 150',
        unit: '/ month',
        features: [
          '2 in person 1-1 sessions per month',
          'Program for your solo workouts',
          'Online check-ins & feedback',
          'Practical nutrition guidance',
        ],
        featured: true,
      },
      {
        name: 'Online coaching',
        blurb: 'Personalised training programs and ongoing support, wherever you want. Feedback whenever you ask for it.',
        price: '€ 90',
        unit: '/ month',
        features: [
          'Personalised training program',
          'Video feedback on your technique',
          'Regular check-ins',
          'Practical nutrition guidance',
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: ['Questions? ', { em: 'Answers.', onDark: true }] as Part[],
    intro: "Can't find what you're looking for? Get in touch and I'll happily help.",
    items: [
      {
        q: 'Why should I get a PT?',
        a: 'Anyone can give you a workout. I will give you a plan to progress. I will build you a programme tailored to your needs and goals.',
      },
      {
        q: 'How many days a week do I need to work out?',
        a: 'I believe that fitness should fit your life, and not the other way around. You let me know how much time you want to commit to working out and I will tailor your programme based on that.',
      },
      {
        q: 'Do I need gym experience to work with a PT?',
        a: 'Not at all! Whether you are completely new or you have been training for years, my coaching is tailored to your experience and goals.',
      },
      {
        q: 'Can you help me with my nutrition?',
        a: 'Yes, as a Certified Nutrition Coach I can educate you on healthy habits and the basics of macronutrients, give you practical guidance and help you stay accountable. Personalised meal plans are outside of my scope of practice and should be provided by a registered dietitian.',
      },
      {
        q: 'How do I get started?',
        a: "Get in touch to discuss your goals and what you're looking for. We will discuss which coaching option suits you best and then we will get started!",
      },
    ],
  },

  testimonials: {
    title: ['What clients ', { em: 'say' }] as Part[],
    items: [
      {
        quote: '[Client quote: one or two sentences about their result or how training with Fuai feels.]',
        by: '[First name] · [Goal, e.g. first pull-up]',
      },
      {
        quote: '[Client quote: one or two sentences about their result or how training with Fuai feels.]',
        by: '[First name] · [Goal]',
      },
      {
        quote: '[Client quote: one or two sentences about their result or how training with Fuai feels.]',
        by: '[First name] · [Goal]',
      },
    ],
  },

  contact: {
    title: ["Let's build your ", { em: 'momentum.', onDark: true }] as Part[],
    intro:
      "Contact me, and let's discuss your goals. Together we'll find the right coaching package for you, and get you started on your journey to move better, get stronger and feel amazing.",
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      goal: 'What would you like to work on?',
      goals: ['Getting stronger', 'Losing weight', 'Moving better / mobility', 'Live healthier', 'Not sure yet'],
      package: 'Which package interests you?',
      packages: ['Help me choose', '1-1 coaching', 'Hybrid coaching', 'Online coaching'],
      message: 'Anything I should know?',
      messagePlaceholder: 'Your experience, schedule, questions…',
      submit: 'Request an intro',
      sending: 'Sending…',
      success: "Thanks! I've got your message and will get back to you soon.",
      error: 'Something went wrong. Please call or email me instead using the details on the left.',
    },
  },

  footer: {
    copyright: 'Momentum Coaching',
    companyNumberLabel: 'Ondernemingsnr.',
  },
};

export const aboutPage = {
  title: 'About Coach Fuai: personal trainer in Leuven',
  description:
    'Meet Fuai, personal trainer at Basic-Fit Leuven. Her story, what she stands for and the certifications behind every program.',
  eyebrow: 'About me',
  heading: ["Hi, I'm ", { em: 'Fuai.' }] as Part[],
  lead: 'I help people of every age, shape and level feel at home in the gym and stronger outside of it.',
  story:
    'I grew up practising gymnastics and martial arts, and movement has always been a big part of my life. Over time, my passion evolved into strength training and lifting, which inspired me to become a personal trainer and help others discover the benefits of exercise. I love working with people who are ready to invest in their health, challenge themselves, and make lasting changes. As your coach, I’ll guide you every step of the way, helping you build strength, improve your fitness, and become more confident in what your body can do.',
  facts: [
    { label: 'Where', value: 'Basic-Fit Leuven, Bondgenotenlaan 62' },
    { label: 'Active in the gym since', value: '2018' },
    { label: 'Languages', value: 'English, Nederlands, Español' },
    { label: 'Coaching', value: '1-1 · Hybrid · Online' },
  ],
  photoLabel: 'PHOTO:warm portrait of Fuai, looking into the camera',

  stand: {
    eyebrow: 'What I stand for',
    title: 'Three promises, every session',
    pillars: [
      {
        title: ['Move ', { em: 'better' }] as Part[],
        text: "Good technique and mobility first. You'll understand why you do each exercise and how it should feel.",
      },
      {
        title: ['Get ', { em: 'stronger' }] as Part[],
        text: 'Programs that progress at your pace, so you keep seeing results without burning out.',
      },
      {
        title: ['Feel ', { hl: 'amazing' }] as Part[],
        text: 'More energy and confidence in daily life, backed by practical nutrition and habits you can keep.',
      },
    ],
  },

  certs: {
    eyebrow: 'Certifications',
    title: ['Qualified and ', { em: 'always learning' }] as Part[],
    intro: 'Your safety and progress come first. These are the qualifications behind every program I write.',
    studyingLabel: 'Currently studying:',
    studying: '[Course name, institution — expected [year]]',
  },

  cta: {
    title: ["Let's build your ", { em: 'momentum.', onDark: true }] as Part[],
    text: 'Start with a free, no-pressure intro at the gym or online.',
    button: 'Book a free intro',
  },
};

export const packagesPage = {
  title: 'Personal training packages Leuven: 1-1, hybrid & online | Coach Fuai',
  description:
    'Compare 1-1, hybrid and online personal training with Coach Fuai in Leuven. Every package starts with a free intro and a plan made just for you.',
  eyebrow: 'Packages',
  heading: ['Coaching that fits ', { em: 'your week' }] as Part[],
  intro:
    'Train side by side, mix it up, or train on your own with my guidance. Every package starts with a free intro and a plan made just for you.',
  items: [
    {
      name: '1-1 coaching',
      blurb:
        'Learn how to move better, get stronger and reach your goals. Together we work towards a better you, every session.',
      price: '€ 60',
      unit: '/ session',
      terms: '[Session packs: 5 or 10 sessions at € …]',
      bestFor: 'beginners, people that need accountability or structure, want to improvetechnique, people that want full guidance.',
      photoLabel: 'PHOTO:1-1 session on the gym floor',
      features: [
        '[60]-minute sessions at Basic-Fit Leuven',
        'Hands-on technique coaching',
        'Personalised program',
        'Practical nutrition guidance',
      ],
      cta: 'Choose 1-1 coaching',
    },
    {
      name: 'Hybrid coaching',
      blurb:
        'Mix 1-1 sessions, online coaching and independent training. I guide you through a personalised program and perfect your technique.',
      price: '€ 150',
      unit: '/ month',
      terms: '[Minimum term, e.g. 3 months]',
      bestFor: 'people who want regular check-ins in person, and the freedom to train on their own.',
      photoLabel: 'PHOTO:client training solo, phone with program',
      features: [
        '[X] 1-1 sessions per month',
        'Program for your solo workouts',
        'Online check-ins & video feedback',
        'Practical nutrition guidance',
      ],
      cta: 'Choose hybrid coaching',
      featured: true,
    },
    {
      name: 'Online coaching',
      blurb: 'Personalised training programs and ongoing support, wherever you want. Feedback whenever you ask for it.',
      price: '€ 90',
      unit: '/ month',
      terms: '[Monthly, cancel anytime?]',
      bestFor: 'people with some gym experience, busy schedules, or who train outside Leuven.',
      photoLabel: 'PHOTO:Fuai on a video check-in',
      features: [
        'Personalised training program',
        'Video feedback on your technique',
        '[Weekly] check-ins',
        'Practical nutrition guidance',
      ],
      cta: 'Choose online coaching',
    },
  ],
  bestFor: 'Best for:',

  compare: {
    title: ['Compare at a ', { em: 'glance' }] as Part[],
    columns: ['1-1', 'Hybrid', 'Online'],
    rows: [
      { label: 'Sessions together at the gym', values: ['Every session', '2 per month', '—'] },
      { label: 'Personalised program', values: ['Yes', 'Yes', 'Yes'] },
      { label: 'Technique feedback', values: ['In person', 'In person + video', 'Video'] },
      { label: 'Nutrition guidance', values: ['Yes', 'Yes', 'Yes'] },
      { label: 'Check-ins between sessions', values: ['[On request]', '[Weekly]', '[Weekly]'] },
      { label: 'Price', values: ['€ 60 / session', '€ 150 / month', '€ 90 / month'], emphasis: true },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: ['Good to ', { em: 'know', onDark: true }] as Part[],
    intro: 'Quick answers about the packages. Anything else? Just ask.',
    items: [
      {
        q: 'Which package is right for me?',
        a: "That depends on your goals, your experience and how much guidance you want. Not sure? That's exactly what the free intro is for: we talk it through and pick what fits.",
      },
      {
        q: 'How long is a session?',
        a: '[Session length: answer to be added]',
      },
      {
        q: 'Is there a minimum term, and can I cancel?',
        a: '[Minimum term and cancellation policy: answer to be added]',
      },
      {
        q: 'Can I switch to another package later?',
        a: '[Switching packages: answer to be added]',
      },
      {
        q: 'Do I need a Basic-Fit membership?',
        a: '[Basic-Fit membership: answer to be added]',
      },
    ],
  },

  steps: {
    eyebrow: 'Getting started',
    title: ['Three steps to your ', { em: 'first session' }] as Part[],
    items: [
      { title: 'Book a free intro', text: "Send a message or call. We'll find a moment to meet at the gym or online." },
      { title: 'Pick what fits', text: 'We choose the package that matches your goals, budget and schedule together.' },
      { title: 'Start moving', text: 'Your assessment and first session, then your personal program is ready to go.' },
    ],
  },

  cta: {
    title: ["Let's build your ", { em: 'momentum.', onDark: true }] as Part[],
    text: "Not sure which package suits you? That's exactly what the free intro is for.",
    button: 'Book a free intro',
  },
};

export const privacyPage = {
  title: 'Privacy policy | Coach Fuai · Momentum Coaching',
  description: 'How Momentum Coaching handles your personal data.',
  eyebrow: 'Legal',
  heading: ['Privacy ', { em: 'policy' }] as Part[],
  updated: 'Last updated: [date]',
  sections: [
    {
      title: 'Who is responsible',
      text: '[Placeholder:Momentum Coaching, Basic-Fit Leuven, Bondgenotenlaan [nr], 3000 Leuven. Ondernemingsnummer [BE 0XXX.XXX.XXX]. Contact: Coach.Fuai@gmail.com.]',
    },
    {
      title: 'What data I collect',
      text: '[Placeholder:the details you enter in the contact form (name, email, goal, package, message) and anything you share when you contact me directly.]',
    },
    {
      title: 'Why and for how long',
      text: '[Placeholder:to reply to your request and arrange your free intro. Retention period: [X months].]',
    },
    {
      title: 'Who receives it',
      text: '[Placeholder:the form provider that delivers your message to me ([provider name]), and hosting provider Cloudflare.]',
    },
    {
      title: 'Cookies and tracking',
      text: '[Placeholder:this site uses no tracking cookies or third-party fonts. Update if analytics is added.]',
    },
    {
      title: 'Your rights',
      text: '[Placeholder:access, correction, deletion, objection; contact me by email, or lodge a complaint with the Belgian Data Protection Authority.]',
    },
  ],
};

export const notFoundPage = {
  title: 'Page not found | Coach Fuai · Momentum Coaching',
  description: 'This page could not be found.',
  eyebrow: '404',
  heading: ['That page took a ', { em: 'rest day.' }] as Part[],
  text: "We couldn't find what you were looking for. Head back home or see the packages.",
  home: 'Back to home',
  packages: 'See packages',
};

export type Content = typeof en;
