module.exports = {
  '*.{js,css,html,json,md}': 'prettier --write',
  '*.{js,html}': 'eslint --fix',
  '*.{css}': 'stylelint --fix',
  '*.*': 'cspell',
};
