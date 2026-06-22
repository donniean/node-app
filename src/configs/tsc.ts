import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'tsc',
  name: 'tsc',
  url: 'https://github.com/microsoft/TypeScript',
  pkg: {
    devDependencies: [{ packageName: 'typescript' }],
    scripts: [{ key: 'typecheck', value: 'tsc --noEmit' }],
  },
  filePaths: ['tsconfig.json'],
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
