// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';
import { LANGUAGES } from './src/i18n/config.i18n';

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://realspringllc.com',
  adapter: cloudflare(),
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'redirect',
      redirectToDefaultLocale: true,
    }
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        en: 'en',
        es: 'es'
      },
      
    },
    
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    customPages: [
      'https://realspringllc.com/',
      'https://realspringllc.com/en/'
    ]
  })]
});