import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'knip',
  name: 'Knip',
  url: 'https://github.com/webpro-nl/knip',
  pkg: {
    devDependencies: [{ packageName: 'knip' }],
    scripts: [
      { key: 'lint:knip', value: 'knip' },
      { key: 'lint:knip:fix', value: 'knip --fix' },
    ],
  },
  filePaths: ['knip.config.ts'],
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
