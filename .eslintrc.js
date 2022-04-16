const ERROR = 2;
const OFF = 0;
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },

  plugins: ['jest'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: [ERROR, 'always'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/no-non-null-assertion': OFF, // sometimes we need to use ! to mark variable will never be undefined, avoid TS errors like: the Type 'number | undefined' is not assignable to type 'number'
        '@typescript-eslint/explicit-module-boundary-types': OFF, // not helpful, and has been removed from the ts eslint plugin v5: https://twitter.com/joshuakgoldberg/status/1500591131637256198?s=21
      },
    },
    {
      files: ['**/__tests__/**/*.{js,ts,tsx}', '**/*.@(spec|test).{js,ts,tsx}'],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'jest/expect-expect': 'off',
        'jest/prefer-strict-equal': 'off',
        'no-use-before-define': 'off',

        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-done-callback': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-to-be-null': 'warn',
        'jest/prefer-to-be-undefined': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-spy-on': 'error',
        'jest/valid-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/prefer-todo': 'error',
        'jest/valid-title': 'error',
      },
    },
  ],
};
