import fs from 'fs-extra';
import * as z from 'zod';

import * as paths from '@/utils/paths';

const PackageJsonSchema = z.object({
  version: z.string().optional(),
});

function readRootPackageJsonSync() {
  const filePath = paths.resolveRoot('package.json');
  const packageJson: unknown = fs.readJsonSync(filePath, {
    encoding: 'utf8',
    throws: false,
  });

  return PackageJsonSchema.parse(packageJson);
}

export { readRootPackageJsonSync };
