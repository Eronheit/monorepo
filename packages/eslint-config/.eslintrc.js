module.exports = {
  env: {
    jest: true,
    node: true,
    es2020: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    camelcase: 'off',
    'react/prop-types': 'off',
    'import/no-cycle': 'warn',
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': 'off', // Does not work in Next.js"s <Link />
    'space-before-function-paren': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    /* 'react/jsx-props-no-spreading': 'off', */
  },
  settings: {
    'import/resolver': {
      node: {},
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
