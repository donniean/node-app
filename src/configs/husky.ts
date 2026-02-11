import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'husky',
  name: 'Husky',
  url: 'https://github.com/typicode/husky',
  pkg: {
    devDependencies: [{ packageName: 'husky' }],
    scripts: [{ key: 'prepare', value: 'husky' }],
  },
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'pkg.scripts.set' },
    { type: 'custom', command: 'pnpm run prepare' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'custom', command: 'rm -rf .husky/' },
  ],
} as const satisfies Config;
