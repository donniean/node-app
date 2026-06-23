import type { Configuration } from 'lint-staged';

export default {
  '*': [
    'oxfmt --no-error-on-unmatched-pattern',
    'autocorrect --fix',
    'cspell --no-progress --dot --gitignore --no-must-find-files',
  ],
  '*.{ts,tsx,mts,cts}': [
    () => 'tsc --noEmit',
    'vitest related --run',
    () => 'pnpm run docs',
    () => 'git add configs.md',
  ],
  '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}': 'oxlint --fix',
  '*.md': 'markdownlint --dot --fix',
} satisfies Configuration;
