import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://eucategarion.org',
  // base: '/eucategarion', // descomenta si deploys a subpath en GitHub Pages sin dominio custom
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
