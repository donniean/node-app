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
      { key: 'format:prettier', value: 'prettier --write --ignore-unknown .' },
      {
        key: 'format:prettier:check',
        value: 'prettier --check --ignore-unknown .',
      },
    ],
  },
  filePaths: ['prettier.config.mjs', '.prettierignore'],
  setup: [
    {
      type: 'custom',
      command: [
        '# pnpm pkg set \'devDependencies["prettier"]\'="$(pnpm view prettier version)"',
        '# pnpm pkg set \'devDependencies["prettier-plugin-tailwindcss"]\'="$(pnpm view prettier-plugin-tailwindcss version)"',
        '#',
        '# pnpm pkg set \\',
        "#   'scripts[\"format:prettier\"]'='prettier --write --ignore-unknown .' \\",
        "#   'scripts[\"format:prettier:check\"]'='prettier --check --ignore-unknown .'",
        '#',
        '# curl --create-dirs \\',
        '#   --output prettier.config.mjs https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \\',
        '#   --output .prettierignore https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore',
      ].join('\n'),
    },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
