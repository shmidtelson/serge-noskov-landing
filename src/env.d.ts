/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_MAX_CHANNEL_URL: string;
  readonly PUBLIC_LANDING_AUTHOR_IMAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
