import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'oxfmt',
  name: 'Oxfmt',
  url: 'https://oxc.rs/docs/guide/usage/formatter',
  pkg: {
    devDependencies: [{ packageName: 'oxfmt' }],
    scripts: [
      { key: 'format:oxfmt', value: 'oxfmt' },
      { key: 'format:oxfmt:check', value: 'oxfmt --check' },
    ],
  },
  filePaths: ['oxfmt.config.ts'],
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
