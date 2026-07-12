// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.will-cheng.com',
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), markdoc(), sitemap(), keystatic()],
  adapter: vercel()
});
