import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { expect, test } from 'vitest';
import * as z from 'zod';

import { buildCleanCommand, buildSetupCommand } from './commands';

const name = 'Test Config';
const lineContinuation = ` \\
`;

const pkg = {
  devDependencies: [
    { packageName: 'oxlint' },
    { packageName: 'oxlint-tsgolint' },
  ],
  scripts: [
    { key: 'lint:oxlint', value: 'oxlint' },
    { key: 'lint:oxlint:fix', value: 'oxlint --fix' },
  ],
};

const executablePkg = {
  ...pkg,
  devDependencies: [
    { packageName: 'oxlint', version: '1.70.0' },
    { packageName: 'oxlint-tsgolint', version: '0.23.0' },
  ],
};

const TestPackageJsonSchema = z.object({
  devDependencies: z.record(z.string(), z.string()).optional(),
  scripts: z.record(z.string(), z.string()).optional(),
});

function createTemporaryPackage() {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'node-app-'));
  fs.writeFileSync(
    path.join(directory, 'package.json'),
    `${JSON.stringify({ name: 'demo' })}\n`,
  );
  return directory;
}

function readPackageJson(directory: string) {
  const packageJson: unknown = JSON.parse(
    fs.readFileSync(path.join(directory, 'package.json'), 'utf8'),
  );
  return TestPackageJsonSchema.parse(packageJson);
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
      'pnpm pkg set \'devDependencies["oxlint"]\'="$(pnpm view oxlint version)"',
      'pnpm pkg set \'devDependencies["oxlint-tsgolint"]\'="$(pnpm view oxlint-tsgolint version)"',
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
      "  'scripts[\"lint:oxlint\"]'='oxlint'",
      "  'scripts[\"lint:oxlint:fix\"]'='oxlint --fix'",
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
        oxlint: '1.70.0',
        'oxlint-tsgolint': '0.23.0',
      },
      scripts: {
        'lint:oxlint': 'oxlint',
        'lint:oxlint:fix': 'oxlint --fix',
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
      '  \'devDependencies["oxlint"]\'',
      '  \'devDependencies["oxlint-tsgolint"]\'',
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
      '  \'scripts["lint:oxlint"]\'',
      '  \'scripts["lint:oxlint:fix"]\'',
    ].join(lineContinuation),
  );
});
