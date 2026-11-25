import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.vool.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'et', 'lt', 'lv', 'fi', 'sv', 'no', 'pl', 'pt', 'de', 'fr', 'it', 'sk', 'es', 'ru', 'hu', 'el', 'tr', 'cs'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
