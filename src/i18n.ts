import * as enContent from './data/content.en';
import * as nlContent from './data/content.nl';

export type Lang = 'en' | 'nl';
export const languages: Lang[] = ['en', 'nl'];
export const defaultLang: Lang = 'en';

export function getContent(lang: Lang) {
  const c = lang === 'nl' ? nlContent : enContent;
  return {
    t: c.en,
    ui: c.ui,
    about: c.aboutPage,
    packages: c.packagesPage,
    privacy: c.privacyPage,
    terms: c.termsPage,
    notFound: c.notFoundPage,
    commitDiscount: c.commitDiscount,
  };
}

// '/about' -> '/nl/about', '/#contact' -> '/nl#contact', '/' -> '/nl'. External and mailto links pass through.
export function localizeHref(lang: Lang, href: string): string {
  if (lang === defaultLang || !href.startsWith('/')) return href;
  if (href === '/') return '/nl';
  if (href.startsWith('/#')) return `/nl${href.slice(1)}`;
  return `/nl${href}`;
}

// Build output uses `format: 'file'`, so pathnames can end in .html or /index; the live URLs have neither.
export function cleanPath(pathname: string): string {
  const p = pathname.replace(/(\/index)?\.html$/, '').replace(/\/$/, '');
  return p || '/';
}

export function langFromPath(pathname: string): Lang {
  return pathname === '/nl' || pathname.startsWith('/nl/') ? 'nl' : 'en';
}

// Path of the same page in another language, given the current pathname.
export function pathForLang(pathname: string, lang: Lang): string {
  const clean = cleanPath(pathname);
  const base = langFromPath(clean) === 'nl' ? clean.replace(/^\/nl/, '') || '/' : clean;
  return localizeHref(lang, base);
}
