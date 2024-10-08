// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'
import * as importPlugin from 'eslint-plugin-import';
import * as nextPlugin from '@next/eslint-plugin-next';
import * as reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default tseslint.config({
  files: ['src/**/*.ts', 'src/**/*.tsx'],
  plugins: {
    import: importPlugin,
    next: nextPlugin,
    react: reactPlugin,
    '@stylistic': stylistic,
  },
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  rules: {
    ...reactPlugin.rules,
    ...nextPlugin.rules,

    // eslint: possible problems
    'array-callback-return': 'error',
    'no-constructor-return': 'error',
    'no-self-compare': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-vars': 'off', // handled by @typescript-eslint plugin (part of "recommended")

    // eslint: suggestions
    'block-scoped-var': 'error',
    'camelcase': 'error',
    'curly': 'error',
    'dot-notation': 'off', // handled by @typescript-eslint plugin (part of "stylistic")
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-bitwise': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implied-eval': 'off', // handled by @typescript-eslint plugin (part of "recommended")
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'off', // handled by @typescript-eslint plugin (manual)
    'no-magic-numbers': 'off', // handled by @typescript-eslint plugin (manual)
    'no-multi-assign': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off', // handled by @typescript-eslint plugin (manual)
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-warning-comments': 'warn',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'] }],
    'radix': 'error',
    'require-await': 'off', // handled by @typescript-eslint plugin (part of "recommended")
    // 'require-unicode-regexp': 'error',
    'yoda': 'error',

    // sytlistic
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'always'],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/comma-style': 'error',
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': 'error',
    '@stylistic/computed-property-spacing': 'error',
    '@stylistic/eol-last': 'error',
    '@stylistic/func-call-spacing': 'error',
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/generator-star-spacing': 'error',
    '@stylistic/implicit-arrow-linebreak': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-quotes': 'error',
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/linebreak-style': 'error',
    '@stylistic/lines-between-class-members': 'error',
    '@stylistic/member-delimiter-style': 'error',
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/new-parens': 'error',
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line', nestedBinaryExpressions: false, enforceForArrowConditionals: false }],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-newline': 'error',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'function' }],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/semi': 'error',
    '@stylistic/semi-spacing': 'error',
    '@stylistic/semi-style': 'error',
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    '@stylistic/space-in-parens': 'error',
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/spaced-comment': 'error',
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/template-tag-spacing': 'error',
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-iife': 'error',
    '@stylistic/yield-star-spacing': 'error',

    // @typescript-eslint
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    // '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    // '@typescript-eslint/no-magic-numbers': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [ 'error', { ignorePrimitives: { string: true } } ],
    '@typescript-eslint/prefer-readonly': 'error',
    // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],

    // import rules
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
  },
});
