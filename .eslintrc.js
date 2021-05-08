module.exports = {
  env: {
    'node': true,
    'browser': true,
    'commonjs': true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // standard rules
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'computed-property-spacing': 'error',
    'space-in-parens': 'error',
    'comma-spacing': 'error',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'quotes': [ 'error', 'single' ],
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'semi': 'error',
    'space-infix-ops': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0, maxBOF: 0 } ],
    'jsx-quotes': 'error',
    'sort-imports': [ 'error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
    } ],
    // @typescript-eslint rules
    '@typescript-eslint/no-var-requires': 'off', // needed for dynamic require
    // react rules
    'react/jsx-closing-bracket-location': [ 'error', { location: 'line-aligned' } ],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [ 'error', 2, { checkAttributes: true, indentLogicalExpressions: true } ],
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-pascal-case': [ 'error', { allowAllCaps: true, allowNamespace: true } ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': [ 'error', { beforeClosing: 'never' } ],
    'react/no-unescaped-entities': [ 'error', { forbid: [ '>', '"', '\'', '}', '“', '”', '‘', '’' ] } ],
    // import rules
    'import/order': [ 'error', { alphabetize: { order: 'asc', caseInsensitive: true } } ],
  },
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [ 'error' ],
        '@typescript-eslint/no-var-requires': [ 'error' ],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
