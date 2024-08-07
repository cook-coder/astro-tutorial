import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://voluble-creponne-18077c.netlify.app",
  integrations: [preact()]
});