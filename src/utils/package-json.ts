import fs from 'fs-extra';
import type { PackageJson } from 'type-fest';

import * as paths from '@/utils/paths';

function readRootPackageJsonSync() {
  const filePath = paths.resolveRoot('package.json');
  // eslint-disable-next-line import-x/no-named-as-default-member
  return fs.readJsonSync(filePath, {
    encoding: 'utf8',
    throws: false,
  }) as PackageJson;
}

export { readRootPackageJsonSync };
