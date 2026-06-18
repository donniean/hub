/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*': [
    'oxfmt --no-error-on-unmatched-pattern',
    'autocorrect --fix',
    'cspell lint --no-progress --no-must-find-files --dot --gitignore',
  ],
  // '*.ts': [() => 'tsc --noEmit', 'vitest related --run'],
  // '*.{js,mjs,cjs,ts}': 'oxlint --fix',
  '*.css': 'stylelint --fix',
  '*.html': 'html-validate',
  '*.md': 'markdownlint --dot --fix',
};
