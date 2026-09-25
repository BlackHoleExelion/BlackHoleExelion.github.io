import { defineConfig } from 'astro/config';

// Repo name doesn't match the <username>.github.io pattern, so the site
// publishes at https://blackholeexelion.github.io/ximo.liang.github.io/
export default defineConfig({
  site: 'https://blackholeexelion.github.io',
  base: '/ximo.liang.github.io',
});
