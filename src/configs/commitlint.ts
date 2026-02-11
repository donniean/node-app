import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'commitlint',
  name: 'commitlint',
  url: 'https://github.com/conventional-changelog/commitlint',
  pkg: {
    devDependencies: [
      { packageName: '@commitlint/cli' },
      { packageName: '@commitlint/config-conventional' },
      { packageName: '@commitlint/types' },
    ],
  },
  filePaths: ['.husky/commit-msg', 'commitlint.config.ts'],
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'files.download' }],
  clean: [{ type: 'pkg.devDependencies.delete' }, { type: 'files.delete' }],
} as const satisfies Config;
