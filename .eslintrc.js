const { OFF, ERROR } = {
  OFF: 0,
  WARN: 1,
  ERROR: 2,
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['*.html', '*.js'],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': [ERROR, { allowExpressions: true }],
      '@typescript-eslint/no-explicit-any': ERROR,
      '@typescript-eslint/space-before-function-paren': [ERROR, 'always'],
      'arrow-parens': [ERROR, 'as-needed'],
      'import/extensions': [ERROR, 'never'],
      'import/prefer-default-export': OFF,
      'indent': [ERROR, 2],
      'linebreak-style': OFF,
      'no-console': OFF,
      'no-plusplus': OFF,
      'object-curly-newline': [ERROR, { consistent: true }],
      'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
      'react/jsx-tag-spacing': [ERROR, { beforeSelfClosing: 'always' }],
      'react/react-in-jsx-scope': OFF,
      'react/require-default-props': ERROR,
    },
  }],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
