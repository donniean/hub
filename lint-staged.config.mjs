/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*': [
    'oxfmt --no-error-on-unmatched-pattern',
    'autocorrect --fix',
    'cspell lint --no-progress --no-must-find-files --dot --gitignore',
  ],
  // '*.{ts,tsx,mts,cts}': [() => 'tsc --noEmit', 'vitest related --run'],
  // '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}': 'oxlint --fix',
  '*.css': 'stylelint --fix',
  '*.html': 'html-validate',
  '*.md': 'markdownlint --dot --fix',
};
