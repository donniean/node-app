import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'lint-staged',
  name: 'lint-staged',
  url: 'https://github.com/lint-staged/lint-staged',
  pkg: {
    devDependencies: [{ packageName: 'lint-staged' }],
  },
  filePaths: ['.husky/pre-commit', 'lint-staged.config.mjs'],
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'files.download' }],
  clean: [{ type: 'pkg.devDependencies.delete' }, { type: 'files.delete' }],
} as const satisfies Config;
