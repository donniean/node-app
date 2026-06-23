import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'cspell',
  name: 'CSpell',
  url: 'https://github.com/streetsidesoftware/cspell',
  pkg: {
    devDependencies: [{ packageName: 'cspell' }],
    scripts: [
      {
        key: 'lint:spellcheck',
        value: 'cspell --no-progress --dot --gitignore .',
      },
    ],
  },
  filePaths: ['cspell.config.ts'],
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
