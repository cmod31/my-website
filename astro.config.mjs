import { defineConfig } from 'astro/config';
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [turbolinks()]
});