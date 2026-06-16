import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'sort-package-json',
  name: 'Sort Package.json',
  url: 'https://github.com/keithamus/sort-package-json',
  pkg: {
    devDependencies: [{ packageName: 'sort-package-json' }],
    scripts: [
      {
        key: 'format:package-json',
        value:
          'sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"',
      },
      {
        key: 'format:package-json:check',
        value: 'pnpm run format:package-json --check',
      },
    ],
  },
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
