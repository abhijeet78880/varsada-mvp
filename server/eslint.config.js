// eslint.config.js
import { ESLint } from 'eslint';

export default [
  {
    ignores: ['node_modules', 'dist', 'build'], // Replaces .eslintignore
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      parser: '@typescript-eslint/parser',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
