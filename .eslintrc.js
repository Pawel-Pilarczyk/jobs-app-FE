module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    'fetch': true,
    'Element': true,
    'Response': true
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js'],
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', '@react-native-community'],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
    'react/prop-types': 'off', // turned off because prop-types are not used
    'react-native/no-raw-text': 'off', //turned off to use Typography component correctly
    'import/prefer-default-export': 'off', // turned off because some components require named export
    '@typescript-eslint/no-use-before-define': 'off', //turned off to put StyleSheet in the end of the file
    'implicit-arrow-linebreak':'off', // turned off because line length can exceed max length without break
    'no-unused-vars': 'off', //duplicates @typescript-eslint/no-unused-vars
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': ['error', { 'consistent': true }],
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state', 'draftState'] }],
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'no-shadow': 'off',
    "@typescript-eslint/no-shadow": "error"
  },
};
