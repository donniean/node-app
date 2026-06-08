import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'pnpm-workspace',
  name: 'pnpm workspace',
  url: 'https://pnpm.io/settings',
  filePaths: ['pnpm-workspace.yaml'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
