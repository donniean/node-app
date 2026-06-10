import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'markdownlint',
  name: 'markdownlint',
  url: 'https://github.com/DavidAnson/markdownlint',
  pkg: {
    devDependencies: [{ packageName: 'markdownlint-cli' }],
    scripts: [
      { key: 'lint:markdown:check', value: 'markdownlint --dot "**/*.md"' },
      {
        key: 'lint:markdown:fix',
        value: 'pnpm run lint:markdown:check --fix',
      },
    ],
  },
  filePaths: ['.markdownlint.json', '.markdownlintignore'],
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
