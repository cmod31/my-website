import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import turbolinks from "@astrojs/turbolinks";


// https://astro.build/config
export default defineConfig({
  adapter: nodejs(),
  integrations: [turbolinks()]
});