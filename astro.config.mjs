import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import turbolinks from "@astrojs/turbolinks";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: nodejs(),
  integrations: [turbolinks(), tailwind()]
});