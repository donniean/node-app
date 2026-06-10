import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'vitest',
  name: 'Vitest',
  url: 'https://github.com/vitest-dev/vitest',
  pkg: {
    devDependencies: [
      { packageName: '@vitest/coverage-v8' },
      { packageName: '@vitest/ui' },
      { packageName: 'vitest' },
    ],
    scripts: [
      { key: 'test', value: 'pnpm run test:unit' },
      { key: 'test:unit', value: 'vitest run --passWithNoTests' },
      { key: 'test:unit:coverage', value: 'vitest run --coverage' },
      { key: 'test:unit:watch', value: 'vitest watch' },
      { key: 'test:unit:ui', value: 'vitest --ui' },
    ],
  },
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
