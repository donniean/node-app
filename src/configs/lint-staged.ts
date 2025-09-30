import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'lint-staged',
  name: 'lint-staged',
  url: 'https://github.com/lint-staged/lint-staged',
  pkg: {
    devDependencies: [{ packageName: 'lint-staged' }],
  },
  filePaths: ['lint-staged.config.mjs'],
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'files.download' },
    {
      type: 'custom',
      command: String.raw`echo "#!/usr/bin/env sh\n\npnpm run i18n:types\npnpm run i18n:check\npnpm exec lint-staged --concurrent false" > .husky/pre-commit`,
    },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'files.delete' },
    {
      type: 'custom',
      command: 'rm .husky/pre-commit',
    },
  ],
} as const satisfies Config;
