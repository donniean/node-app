/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  'package.json': 'sort-package-json',
  '*': [
    'prettier --write --ignore-unknown',
    'autocorrect --fix',
    'cspell lint --no-progress --no-must-find-files --dot --gitignore',
  ],
  '*.ts': [
    () => 'tsc --noEmit',
    'vitest related --run',
    'pnpm run docs',
    `git add README.md`,
  ],
  '*.{js,mjs,cjs,ts}': 'eslint --fix', // --max-warnings 0
  '*.md': 'markdownlint --dot --fix',
};
