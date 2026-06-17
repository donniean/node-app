import { CONFIG_BASE_URL } from '@/models/configs.constants';
import type {
  CleanCommandAction,
  Config,
  SetupCommandAction,
} from '@/models/configs.types';
import { buildCommand } from '@/utils/commands';

type GetCommandOptions = Pick<Config, 'name' | 'pkg' | 'filePaths'>;

const SHELL_SINGLE_QUOTE = String.raw`'\''`;

function quoteShellValue(value: string) {
  return `'${value.replaceAll("'", SHELL_SINGLE_QUOTE)}'`;
}

function formatPackageJsonPropertyPath(parent: string, key: string) {
  return quoteShellValue(`${parent}[${JSON.stringify(key)}]`);
}

function throwUnsupportedCommandType(_type: never): never {
  throw new Error('Unsupported command type');
}

function buildSetupCommand({
  name,
  pkg,
  filePaths,
  setupCommandAction,
}: GetCommandOptions & {
  setupCommandAction: SetupCommandAction;
}) {
  const errorTitle = `Setup Error(${name})`;

  const { type, command } = setupCommandAction;

  switch (type) {
    case 'pkg.devDependencies.set': {
      const devDependencies = pkg?.devDependencies ?? [];
      if (!(Array.isArray(devDependencies) && devDependencies.length > 0)) {
        throw new Error(
          `${errorTitle}: please set devDependencies in config.pkg`,
        );
      }
      const commands = devDependencies.map(({ packageName, tag, version }) => {
        const packageTag = tag ? `@${tag}` : '';
        const packageVersion = (
          version ?? `$(pnpm view ${packageName}${packageTag} version)`
        ).trim();
        return buildCommand({
          mainCommand: 'pnpm',
          subCommand: 'pkg set',
          args: [
            `${formatPackageJsonPropertyPath('devDependencies', packageName)}="${packageVersion}"`,
          ],
        });
      });
      return commands.join('\n');
    }
    case 'pkg.scripts.set': {
      const scripts = pkg?.scripts;
      if (!(Array.isArray(scripts) && scripts.length > 0)) {
        throw new Error(`${errorTitle}: Please set scripts in config.pkg`);
      }
      return buildCommand({
        mainCommand: 'pnpm',
        subCommand: 'pkg set',
        args: scripts.map(
          ({ key, value }) =>
            `${formatPackageJsonPropertyPath('scripts', key)}=${quoteShellValue(value)}`,
        ),
      });
    }
    case 'files.download': {
      if (!(Array.isArray(filePaths) && filePaths.length > 0)) {
        throw new Error(`${errorTitle}: Please set filePaths in config`);
      }
      return buildCommand({
        mainCommand: 'curl',
        subCommand: '--create-dirs',
        args: filePaths.map(
          (value) => `--output ${value} ${CONFIG_BASE_URL}${value}`,
        ),
      });
    }
    case 'custom': {
      if (command === undefined) {
        throw new Error(`${errorTitle}: please set command in config.setup`);
      }
      return command;
    }
    default: {
      return throwUnsupportedCommandType(type);
    }
  }
}

function buildCleanCommand({
  name,
  pkg,
  filePaths,
  cleanCommandAction,
}: GetCommandOptions & {
  cleanCommandAction: CleanCommandAction;
}) {
  const errorTitle = `Clean Error(${name})`;

  const { type, command } = cleanCommandAction;

  switch (type) {
    case 'pkg.devDependencies.delete': {
      const devDependencies = pkg?.devDependencies;
      if (!(Array.isArray(devDependencies) && devDependencies.length > 0)) {
        throw new Error(
          `${errorTitle}: please set devDependencies in config.pkg`,
        );
      }
      return buildCommand({
        mainCommand: 'pnpm',
        subCommand: 'pkg delete',
        args: devDependencies.map((dependency) =>
          formatPackageJsonPropertyPath(
            'devDependencies',
            dependency.packageName,
          ),
        ),
      });
    }
    case 'pkg.scripts.delete': {
      const scripts = pkg?.scripts;
      if (!(Array.isArray(scripts) && scripts.length > 0)) {
        throw new Error(`${errorTitle}: please set scripts in config.pkg`);
      }
      return buildCommand({
        mainCommand: 'pnpm',
        subCommand: 'pkg delete',
        args: scripts.map(({ key }) =>
          formatPackageJsonPropertyPath('scripts', key),
        ),
      });
    }
    case 'files.delete': {
      if (!(Array.isArray(filePaths) && filePaths.length > 0)) {
        throw new Error(`${errorTitle}: please set filePaths in config`);
      }
      return buildCommand({
        mainCommand: 'rm',
        args: filePaths,
      });
    }
    case 'custom': {
      if (command === undefined) {
        throw new Error(`${errorTitle}: please set command in config.clean`);
      }
      return command;
    }
    default: {
      return throwUnsupportedCommandType(type);
    }
  }
}

export { buildCleanCommand, buildSetupCommand };
