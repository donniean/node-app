import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'html-validate',
  name: 'HTML-validate',
  url: 'https://html-validate.org',
  pkg: {
    devDependencies: [{ packageName: 'html-validate' }],
    scripts: [
      {
        key: 'lint:html',
        value: 'html-validate .',
      },
    ],
  },
  filePaths: ['html-validate.config.ts'],

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
