import { defineConfig } from 'astro/config';

// Static site generation (SSG): pre-rendered HTML + CSS in `dist/` (no client JS)
// Set PUBLIC_* in `.env` for build-time config (see `.env.example`)
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  integrations: [],
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      assetsDir: 'assets',
    },
  },
});
