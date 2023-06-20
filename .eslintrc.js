// eslint-disable-next-line @typescript-eslint/no-var-requires
const process = require('process');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2023,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint' /* , 'autofix', 'import' */],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    curly: ['error', 'all'],
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    // 'autofix/no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^_',
    //     ignoreRestSiblings: true,
    //     destructuredArrayIgnorePattern: '^_',
    //   },
    // ],
    // '@typescript-eslint/consistent-type-imports': [
    //   'error',
    //   {
    //     prefer: 'type-imports',
    //     // fixStyle: 'inline-type-imports',
    //   },
    // ],

    // для определения порядка импортов (пока что нам так не сильно подходит)
    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
    //     pathGroups: [
    //       {
    //         pattern: 'react',
    //         group: 'parent',
    //         position: 'before',
    //       },
    //     ],
    //     alphabetize: { order: 'asc' },
    //   },
    // ],
  },
};
