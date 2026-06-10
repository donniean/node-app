import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'prettier',
  name: 'Prettier',
  url: 'https://github.com/prettier/prettier',
  pkg: {
    devDependencies: [
      { packageName: 'prettier' },
      { packageName: 'prettier-plugin-tailwindcss' },
    ],
    scripts: [
      {
        key: 'format:prettier:check',
        value: 'prettier --check --ignore-unknown .',
      },
      {
        key: 'format:prettier:fix',
        value: 'prettier --write --ignore-unknown .',
      },
    ],
  },
  filePaths: ['prettier.config.mjs', '.prettierignore'],
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
