// Business facts that don't change per language. Placeholders stay in [square brackets].
export const site = {
  name: 'Coach Fuai',
  company: 'Momentum Coaching',
  slogan: 'Move better. Get stronger. Feel amazing.',
  phone: { display: '0456 56 07 02', href: 'tel:+32456560702' },
  email: 'Coach.Fuai@gmail.com',
  // Set `url` once the Instagram handle is known; until then the line renders as plain text.
  instagram: { handle: '@coach.fuai', url: 'https://www.instagram.com/coach.fuai/' as string | null },
  address: {
    venue: 'Basic-Fit Leuven',
    street: 'Bondgenotenlaan',
    number: '62',
    postalCode: '3000',
    city: 'Leuven',
    mapsUrl: 'https://maps.app.goo.gl/VnesniygDJZA5BNU8',
  },
  companyNumber: 'BE 1041.105.156',
  year: 2026,
  // Form backend. Endpoint and key come from env vars (see .env.example).
  form: {
    endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
    accessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY || '',
    honeypot: 'botcheck',
  },
};

export const addressLine = `${site.address.venue}, ${site.address.street} ${site.address.number}, ${site.address.postalCode} ${site.address.city}`;
