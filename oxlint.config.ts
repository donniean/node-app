import type { OxlintConfig } from 'oxlint';
import { defineConfig } from 'oxlint';

const nodeParameterNames = [
  'acc', // for reduce accumulators
  'accumulator', // for reduce accumulators
  'e', // for e.returnvalue
  'ctx', // for Koa routing
  'context', // for Koa routing
  'req', // for Express requests
  'request', // for Express requests
  'res', // for Express responses
  'response', // for Express responses
  '$scope', // for Angular 1 scopes
  'staticContext', // for ReactRouter context
  'draft', // for immer
];

export default defineConfig<OxlintConfig>({
  options: {
    denyWarnings: true,
    reportUnusedDisableDirectives: 'error',
    respectEslintDisableDirectives: true,
    typeAware: false,
    typeCheck: false,
  },
  ignorePatterns: ['eslint.config.mjs'],
  env: {
    builtin: true,
    node: true,
  },
  categories: {
    correctness: 'error',
    suspicious: 'error',
    pedantic: 'off',
    perf: 'warn',
    style: 'off',
    restriction: 'off',
    nursery: 'off',
  },
  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'oxc',
    'import',
    'jsdoc',
    'promise',
    'node',
    'vitest',
  ],
  rules: {
    'eslint/curly': 'error',
    'eslint/eqeqeq': 'error',
    'eslint/no-console': [
      process.env['NODE_ENV'] === 'development' ? 'warn' : 'error',
      { allow: ['warn', 'error'] },
    ],
    'eslint/no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: nodeParameterNames,
      },
    ],
    'eslint/no-restricted-imports': [
      'error',
      {
        patterns: ['../../**'],
      },
    ],
    'eslint/no-useless-call': 'error',
    'eslint/no-var': 'error',
    'eslint/prefer-const': 'error',
    'eslint/prefer-template': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': [
      'error',
      {
        considerQueryString: true,
      },
    ],
    'import/no-unassigned-import': 'off',
    'typescript/consistent-type-exports': 'error',
    'typescript/consistent-type-imports': 'error',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-misused-promises': 'error',
    'typescript/no-require-imports': 'error',
    'typescript/restrict-plus-operands': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'vitest/no-import-node-test': 'error',
    'vitest/prefer-importing-vitest-globals': 'error',
  },
  overrides: [
    {
      files: ['**'],
      rules: {
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
      },
    },
  ],
});
