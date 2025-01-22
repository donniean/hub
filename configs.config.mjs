import { defineConfig } from '@donniean/configs';

export default defineConfig({
  features: {
    gitignore: {
      ignorePatterns: ['src/1password-to-apple-passwords/1password-data.json'],
    },
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
      ignorePatterns: ['macOS/'],
    },
    'sort-package-json': true,
    commitlint: true,
    commitizen: true,
    'lint-staged': true,
    husky: true,
  },
});
