import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'aggregate-lint',
  name: 'Aggregate Lint',
  pkg: {
    devDependencies: [{ packageName: 'concurrently' }],
    scripts: [
      {
        key: 'lint',
        value:
          'concurrently --group --timings "pnpm:lint:*(!:fix|^lint:knip$)" "pnpm:format:*:check" "pnpm:typecheck"',
      },
      {
        key: 'lint:fix',
        value:
          'concurrently --max-processes=1 --group --timings "pnpm:lint:*:fix(!^lint:knip:fix$)" "pnpm:format:*(!:check)"',
      },
    ],
  },
  setup: [{ type: 'pkg.scripts.set' }],
  clean: [{ type: 'pkg.scripts.delete' }],
} as const satisfies Config;
