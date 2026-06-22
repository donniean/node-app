import type { KnipConfig } from 'knip';

const config = {
  entry: ['.ncurc.mjs'],
  vitest: {
    entry: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
} as const satisfies KnipConfig;

export default config;
