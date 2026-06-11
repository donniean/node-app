import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'npm-check-updates',
  name: 'npm-check-updates',
  url: 'https://github.com/raineorshine/npm-check-updates',
  pkg: {
    devDependencies: [{ packageName: 'npm-check-updates' }],
    scripts: [
      {
        key: 'ncu',
        value: 'ncu --deep --format cooldown',
      },
      { key: 'ncu:upgrade', value: 'pnpm run ncu --upgrade' },
    ],
  },
  filePaths: ['.ncurc.mjs'],
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
