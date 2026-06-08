import { expect, test } from 'vitest';

import { buildCleanCommand, buildSetupCommand } from './commands';

const name = 'Test Config';

const pkg = {
  devDependencies: [
    { packageName: '@eslint/js' },
    { packageName: 'eslint-config-prettier', version: '10.0.0' },
  ],
  scripts: [
    { key: 'lint:js', value: 'eslint' },
    { key: 'lint:js:fix', value: 'pnpm run lint:js --fix' },
  ],
};

test('builds safe pnpm pkg set commands for package.json keys', () => {
  expect(
    buildSetupCommand({
      name,
      pkg,
      filePaths: [],
      setupCommandAction: { type: 'pkg.devDependencies.set' },
    }),
  ).toBe(
    [
      'pnpm pkg set \'devDependencies["@eslint/js"]\'="$(pnpm view @eslint/js version)"',
      'pnpm pkg set \'devDependencies["eslint-config-prettier"]\'="10.0.0"',
    ].join('\n'),
  );

  expect(
    buildSetupCommand({
      name,
      pkg,
      filePaths: [],
      setupCommandAction: { type: 'pkg.scripts.set' },
    }),
  ).toBe(
    [
      'pnpm pkg set',
      "  'scripts[\"lint:js\"]'='eslint'",
      "  'scripts[\"lint:js:fix\"]'='pnpm run lint:js --fix'",
    ].join(' \\ \n'),
  );
});

test('builds safe pnpm pkg delete commands for package.json keys', () => {
  expect(
    buildCleanCommand({
      name,
      pkg,
      filePaths: [],
      cleanCommandAction: { type: 'pkg.devDependencies.delete' },
    }),
  ).toBe(
    [
      'pnpm pkg delete',
      '  \'devDependencies["@eslint/js"]\'',
      '  \'devDependencies["eslint-config-prettier"]\'',
    ].join(' \\ \n'),
  );

  expect(
    buildCleanCommand({
      name,
      pkg,
      filePaths: [],
      cleanCommandAction: { type: 'pkg.scripts.delete' },
    }),
  ).toBe(
    [
      'pnpm pkg delete',
      '  \'scripts["lint:js"]\'',
      '  \'scripts["lint:js:fix"]\'',
    ].join(' \\ \n'),
  );
});
