module.exports = {
  'package.json': 'sort-package-json',
  '*.{js,cjs,json,md,yaml,yml}': 'prettier --write',
  '*.md': 'markdownlint --fix',
  '**': 'cspell --no-must-find-files',
};
