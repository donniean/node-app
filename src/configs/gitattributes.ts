import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'gitattributes',
  name: 'gitattributes',
  url: 'https://git-scm.com/docs/gitattributes',
  filePaths: ['.gitattributes'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
