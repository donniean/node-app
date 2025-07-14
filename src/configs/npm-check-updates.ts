import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'npm-check-updates',
  name: 'npm-check-updates',
  url: 'https://github.com/raineorshine/npm-check-updates',
  pkg: {
    scripts: [
      { key: 'ncu', value: 'npx npm-check-updates --deep' },
      { key: 'ncu:upgrade', value: 'npm run ncu -- --upgrade' },
    ],
  },
  setup: [{ type: 'pkg.scripts.set' }],
  clean: [{ type: 'pkg.scripts.delete' }],
} as const satisfies Config;
