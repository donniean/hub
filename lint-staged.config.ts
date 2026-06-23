import type { Configuration } from 'lint-staged';

export default {
  '*': [
    'oxfmt --no-error-on-unmatched-pattern',
    'autocorrect --fix',
    'cspell --no-progress --dot --gitignore --no-must-find-files',
  ],
  // '*.{ts,tsx,mts,cts}': [() => 'tsc --noEmit', 'vitest related --run'],
  // '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}': 'oxlint --fix',
  '*.css': 'stylelint --fix',
  '*.html': 'html-validate',
  '*.md': 'markdownlint --dot --fix',
} satisfies Configuration;
