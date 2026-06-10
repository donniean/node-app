import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'npm-check-updates',
  name: 'npm-check-updates',
  url: 'https://github.com/raineorshine/npm-check-updates',
  pkg: {
    scripts: [
      {
        key: 'deps:check',
        value: 'pnpm dlx npm-check-updates@latest --deep --format cooldown',
      },
      { key: 'deps:upgrade', value: 'pnpm run deps:check --upgrade' },
    ],
  },
  setup: [{ type: 'pkg.scripts.set' }],
  clean: [{ type: 'pkg.scripts.delete' }],
} as const satisfies Config;
