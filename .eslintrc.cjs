module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {},
  },

  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],

  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { 'jsx': true },
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: [
    'react',
    'react-refresh',
    '@typescript-eslint',
    'prettier',
    'import',
    '@typescript-eslint/eslint-plugin'
  ],

  rules: {
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',

    'import/no-anonymous-default-export': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    semi: [ 'error', 'always' ],
    'no-console': 'error',

    'max-len': [
      'error',
      {
        code: 140,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignorePattern: 'd=\'([\\s\\S]*?)\''
        // svg d=...
      }
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_'
      }
    ],

    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ]
  },
};
