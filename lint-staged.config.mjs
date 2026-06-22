/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*': [
    'oxfmt --no-error-on-unmatched-pattern',
    'autocorrect --fix',
    'cspell lint --no-progress --no-must-find-files --dot --gitignore',
  ],
  '*.{ts,tsx,mts,cts}': [
    () => 'tsc --noEmit',
    'vitest related --run',
    'pnpm run docs',
    `git add configs.md`,
  ],
  '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}': 'oxlint --fix',
  '*.md': 'markdownlint --dot --fix',
};
