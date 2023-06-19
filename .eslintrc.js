/* eslint-disable */
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
    'prettier/@typescript-eslint',
    'prettier/react',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint' /* , 'autofix', 'import' */],
  rules: {
    // indent: ['error', 2, { SwitchCase: 1 }],
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
