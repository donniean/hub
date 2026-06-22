import type { KnipConfig } from 'knip';

const config = {
  entry: ['.htmlvalidate.mjs', '.ncurc.mjs', 'apps/playground/index.js', 'snippets/**/*.js'],
} as const satisfies KnipConfig;

export default config;
