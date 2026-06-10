import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'knip',
  name: 'Knip',
  url: 'https://github.com/webpro-nl/knip',
  pkg: {
    devDependencies: [{ packageName: 'knip' }],
    scripts: [
      { key: 'knip:check', value: 'knip' },
      { key: 'knip:fix', value: 'pnpm run knip:check --fix' },
    ],
  },
  filePaths: [],
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
