import { defineConfig } from 'astro/config';

// GitHub Actions supplies both values. Override them for a custom domain.
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
