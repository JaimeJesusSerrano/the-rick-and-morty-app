module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  parserOptions: {
    project: './tsconfig.json', // Required to have rules that rely on Types.
    tsconfigRootDir: './',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    jsx: true,
    useJSXTextNode: true
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.d.ts'],
      },
    },
  },
  rules: {
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',
  },
}
