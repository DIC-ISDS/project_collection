// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Deployment settings come from environment variables so the same code works
// locally, on GitHub Pages (served under /<repo>/) and on a custom domain.
//   SITE_URL   production origin, e.g. https://dic-isds.github.io
//   BASE_PATH  subpath the site is served from, e.g. /project_collection ('/' for a domain root)
// They feed canonical URLs, Open Graph tags, the sitemap, robots.txt and every internal link.
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
