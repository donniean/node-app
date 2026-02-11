import type { Config } from '@/models/configs.types';

export const CONFIG = {
  key: 'editorconfig',
  name: 'EditorConfig',
  url: 'https://editorconfig.org/',
  filePaths: ['.editorconfig'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
