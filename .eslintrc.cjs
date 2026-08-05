module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'eslint-config-prettier',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'environment.d.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'react/no-unescaped-entities': 0,
    // Disabling accessibility rules for now, as they may require additional handling in the codebase.
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-redundant-roles': 0,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
