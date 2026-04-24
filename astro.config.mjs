import { defineConfig } from 'astro/config';

/**
 * GitLab: CI_PAGES_URL (GitLab 16.1+), or GitHub Actions from GITHUB_REPOSITORY.
 * Override: ASTRO_SITE + ASTRO_BASE in CI/CD or .env
 */
function resolveGitHubRepository() {
  if (process.env.GITHUB_ACTIONS !== 'true') return null;
  const full = process.env.GITHUB_REPOSITORY;
  if (!full) return null;
  const [owner, name] = full.split('/', 2);
  if (!owner || !name) return null;
  const site = `https://${owner}.github.io`;
  if (name.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    return { site, base: '/' };
  }
  return { site, base: `/${name}/` };
}

function resolveSiteAndBase() {
  const explicitSite = process.env.ASTRO_SITE?.trim();
  const explicitBase = process.env.ASTRO_BASE?.trim();

  if (explicitSite) {
    const base = normalizeBase(explicitBase ?? '/');
    return { site: explicitSite, base };
  }

  const pages = process.env.CI_PAGES_URL?.trim();
  if (pages) {
    try {
      const url = new URL(pages);
      const site = url.origin;
      if (url.pathname === '/' || url.pathname === '') {
        return { site, base: '/' };
      }
      return { site, base: normalizeBase(url.pathname) };
    } catch {
      // fall through
    }
  }

  const fromGh = resolveGitHubRepository();
  if (fromGh) {
    return fromGh;
  }

  return { site: 'https://example.com', base: '/' };
}

function normalizeBase(path) {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

const { site, base } = resolveSiteAndBase();

// Static site generation (SSG). PUBLIC_* in `.env` for page content.
export default defineConfig({
  output: 'static',
  site,
  base,
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
