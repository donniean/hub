import { defineConfig } from '@donniean/configs';

export default defineConfig({
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      patterns: ['**'],
    },
    autocorrect: true,
    tsc: {
      patterns: ['**/*.ts'],
    },
    eslint: {
      patterns: ['**/*.{js,mjs,cjs,ts}'],
      // vitestPatterns: ['**/*.test.ts'],
    },
    stylelint: {
      patterns: ['**/*.css'],
    },
    htmlhint: {
      patterns: ['**/*.html'],
    },
    markdownlint: {
      patterns: ['**/*.md'],
    },
    cspell: {
      patterns: ['**'],
      ignorePatterns: ['mac/'],
    },
    'sort-package-json': true,
    commitlint: true,
    commitizen: true,
    'lint-staged': true,
    husky: true,
  },
});
