import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in the Cloudflare Pages build environment once the domain is known.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [sitemap({
      filter: (page) => !page.endsWith('/404'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', nl: 'nl' } },
    })],
});
