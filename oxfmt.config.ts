import { defineConfig } from 'oxfmt';

export default defineConfig({
  ignorePatterns: ['**/*.min.*'],
  singleQuote: true,
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
});
