module.exports = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      patterns: ['**'],
    },
    eslint: {
      patterns: ['**/*.{js,mjs,cjs}'],
    },
    markdownlint: {
      patterns: ['**/*.md'],
    },
    cspell: {
      patterns: ['**'],
    },
    'sort-package-json': true,
    commitlint: true,
    commitizen: true,
    'lint-staged': true,
    husky: true,
  },
};
