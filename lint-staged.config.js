module.exports = {
  '*.{js,jsx,html,css,scss,json,md}': ['prettier --write', 'git add'],
  '*.{js,jsx,html}': ['eslint --fix', 'git add'],
  '*.{css,scss,html,js,jsx}': ['stylelint --fix', 'git add']
};
