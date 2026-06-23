import type { KnipConfig } from 'knip';

export default {
  entry: ['html-validate.config.ts', '.ncurc.mjs', 'apps/playground/index.js', 'snippets/**/*.js'],
} satisfies KnipConfig;
