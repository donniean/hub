module.exports = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      extensions: ['js', 'cjs', 'json', 'md', 'yaml', 'yml'],
    },
    markdownlint: true,
    cspell: {
      extensions: ['**'],
    },
    commitlint: true,
    commitizen: true,
    'sort-package-json': true,
    'lint-staged': true,
    husky: true,
  },
};
