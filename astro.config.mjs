import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/site',
  integrations: [tailwind()],
  output: 'static',
});