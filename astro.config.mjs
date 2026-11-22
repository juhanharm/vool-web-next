import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.vool.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'et', 'lt'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
