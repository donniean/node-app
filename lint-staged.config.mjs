/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*': [
    'pnpm run format:oxfmt -- --no-error-on-unmatched-pattern',
    'pnpm run lint:autocorrect:fix --',
    () => 'pnpm run lint:spellcheck',
  ],
  '*.{ts,tsx,mts,cts}': [
    () => 'pnpm run typecheck',
    'vitest related --run',
    () => 'pnpm run docs',
    () => 'git add configs.md',
  ],
  '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}': 'pnpm run lint:oxlint:fix --',
  '*.md': () => 'pnpm run lint:markdown:fix',
};
