import { defineConfig } from 'tsdown';

export default defineConfig(({ watch }) => ({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli.ts',
  },
  minify: !watch,
  fixedExtension: false,
  sourcemap: true,
  env: { NODE_ENV: 'production' },
  shims: true,
}));
