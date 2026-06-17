import { defineConfig } from 'oxlint';

export default defineConfig({
  // https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#options
  options: {
    denyWarnings: true,
    reportUnusedDisableDirectives: 'error',
    respectEslintDisableDirectives: true,
    typeAware: true,
    typeCheck: false,
  },
  // https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins
  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'oxc',
    'import',
    'jsdoc',
    'promise',
    // node
    'node',
    // vitest
    'vitest',
  ],
  // https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#env
  env: {
    builtin: true,
  },
  // https://oxc.rs/docs/guide/usage/linter/config.html#enable-groups-of-rules-with-categories
  categories: {
    correctness: 'error',
    suspicious: 'error',
    pedantic: 'off',
    perf: 'warn',
    style: 'off',
    restriction: 'off',
    nursery: 'off',
  },
  // https://oxc.rs/docs/guide/usage/linter/rules.html
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
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'draft', // for immer
        ],
      },
    ],
    'eslint/no-restricted-imports': [
      'error',
      {
        patterns: ['../../**'],
      },
    ],
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
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'typescript/consistent-type-exports': 'error',
    'typescript/consistent-type-imports': 'error',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-misused-promises': 'error',
    'typescript/no-require-imports': 'error',
    'typescript/no-unnecessary-condition': 'error',
    'typescript/no-unsafe-argument': 'error',
    'typescript/no-unsafe-assignment': 'error',
    'typescript/no-unsafe-call': 'error',
    'typescript/no-unsafe-member-access': 'error',
    'typescript/no-unsafe-return': 'error',
    'typescript/restrict-plus-operands': 'error',
    'typescript/switch-exhaustiveness-check': 'error',
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
      env: {
        node: true,
      },
      rules: {
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
      },
    },
  ],
});
