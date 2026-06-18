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
  setup: [
    {
      type: 'custom',
      command: [
        '# pnpm pkg set \'devDependencies["sort-package-json"]\'="$(pnpm view sort-package-json version)"',
        '#',
        '# pnpm pkg set \\',
        '#   \'scripts["format:package-json"]\'=\'sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"\' \\',
        '#   \'scripts["format:package-json:check"]\'=\'pnpm run format:package-json --check\'',
      ].join('\n'),
    },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
