import { defineConfig } from 'oxfmt';

export default defineConfig({
  ignorePatterns: [
    '.agents/skills/**',
    '.claude/skills/**',
    '.codex/skills/**',
    '.gemini/skills/**',
    '.github/skills/**',
    '**/*.min.*',
  ],
  singleQuote: true,
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
});
