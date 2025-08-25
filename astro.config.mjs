// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: './out',
  build: {
    assets: '_astro'
  }
});
