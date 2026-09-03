const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
  { ignores: ['dist/', 'node_modules/'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettier,
  {
    files: ['src/ts/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
  }
);
