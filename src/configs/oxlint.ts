import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'oxlint',
  name: 'Oxlint',
  url: 'https://github.com/oxc-project/oxc',
  pkg: {
    devDependencies: [
      { packageName: 'oxlint' },
      // cSpell: ignore oxlint-tsgolint
      { packageName: 'oxlint-tsgolint' },
    ],
    scripts: [
      { key: 'lint:oxlint', value: 'oxlint' },
      { key: 'lint:oxlint:fix', value: 'oxlint --fix' },
    ],
  },
  filePaths: ['oxlint.config.ts'],
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
