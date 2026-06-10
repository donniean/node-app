import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'aggregate-quality',
  name: 'Aggregate Quality',
  pkg: {
    devDependencies: [{ packageName: 'concurrently' }],
    scripts: [
      {
        key: 'quality:check',
        value:
          'concurrently --group --timings "pnpm:format:*:check" "pnpm:lint:*:check"',
      },
      {
        key: 'quality:fix',
        value:
          'concurrently --group --timings --max-processes=1 "pnpm:format:*:fix" "pnpm:lint:*:fix"',
      },
    ],
  },
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
