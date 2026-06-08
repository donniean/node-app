import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { expect, test } from 'vitest';

import { buildCleanCommand, buildSetupCommand } from './commands';

const name = 'Test Config';
const lineContinuation = ' \\' + '\n';

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

const executablePkg = {
  ...pkg,
  devDependencies: [
    { packageName: '@eslint/js', version: '1.0.0' },
    { packageName: 'eslint-config-prettier', version: '10.0.0' },
  ],
};

interface TestPackageJson {
  devDependencies?: Record<string, string>;
  scripts?: Record<string, string>;
}

function createTemporaryPackage() {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'node-app-'));
  fs.writeFileSync(
    path.join(directory, 'package.json'),
    `${JSON.stringify({ name: 'demo' })}\n`,
  );
  return directory;
}

function readPackageJson(directory: string) {
  return JSON.parse(
    fs.readFileSync(path.join(directory, 'package.json'), 'utf8'),
  ) as TestPackageJson;
}

function runShellCommand(command: string, cwd: string) {
  execFileSync('/bin/sh', ['-c', command], { cwd, stdio: 'pipe' });
}

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
    ].join(lineContinuation),
  );
});

test('generated pnpm pkg commands can update package.json', () => {
  const directory = createTemporaryPackage();

  try {
    runShellCommand(
      [
        buildSetupCommand({
          name,
          pkg: executablePkg,
          filePaths: [],
          setupCommandAction: { type: 'pkg.devDependencies.set' },
        }),
        buildSetupCommand({
          name,
          pkg: executablePkg,
          filePaths: [],
          setupCommandAction: { type: 'pkg.scripts.set' },
        }),
      ].join('\n'),
      directory,
    );

    expect(readPackageJson(directory)).toMatchObject({
      devDependencies: {
        '@eslint/js': '1.0.0',
        'eslint-config-prettier': '10.0.0',
      },
      scripts: {
        'lint:js': 'eslint',
        'lint:js:fix': 'pnpm run lint:js --fix',
      },
    });

    runShellCommand(
      [
        buildCleanCommand({
          name,
          pkg: executablePkg,
          filePaths: [],
          cleanCommandAction: { type: 'pkg.devDependencies.delete' },
        }),
        buildCleanCommand({
          name,
          pkg: executablePkg,
          filePaths: [],
          cleanCommandAction: { type: 'pkg.scripts.delete' },
        }),
      ].join('\n'),
      directory,
    );

    const cleanedPackageJson = readPackageJson(directory);
    expect(cleanedPackageJson.devDependencies ?? {}).toEqual({});
    expect(cleanedPackageJson.scripts ?? {}).toEqual({});
  } finally {
    fs.rmSync(directory, { force: true, recursive: true });
  }
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
    ].join(lineContinuation),
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
    ].join(lineContinuation),
  );
});
