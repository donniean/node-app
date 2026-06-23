import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'stylelint',
  name: 'Stylelint',
  url: 'https://github.com/stylelint/stylelint',
  pkg: {
    devDependencies: [
      { packageName: 'stylelint' },
      { packageName: 'stylelint-config-recess-order' },
      { packageName: 'stylelint-config-standard' },
      { packageName: 'stylelint-config-css-modules' },
    ],
    scripts: [
      { key: 'lint:styles', value: 'stylelint "**/*.css"' },
      { key: 'lint:styles:fix', value: 'pnpm run lint:styles --fix' },
    ],
  },
  filePaths: ['stylelint.config.ts', '.stylelintignore'],
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
