import type { KnipConfig } from 'knip';

export default {
  entry: ['.ncurc.mjs'],
  vitest: {
    entry: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
} satisfies KnipConfig;
