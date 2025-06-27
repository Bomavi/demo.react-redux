import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import allyjsxPlugin from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  prettierPlugin,
  {
    ignores: [
      'dist',
      'build',
      'coverage',
      'node_modules',
      'package-lock.json',
      'yarn.lock',
      'bun.lock',
      '**/*/vite-env.d.ts',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          bun: true,
        }),
      ],
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'jsx-a11y': allyjsxPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // eslint import X
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      // 'import-x/newline-after-import': 'error',
      // 'import-x/no-cycle': 'error',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'unknown',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@mui/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'src/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
          'newlines-between': 'always',
        },
      ],
      'space-before-blocks': 'error',
      'spaced-comment': ['error', 'always'],
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
        },
      ],
      // tslint
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
        'off',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          interfaces: ['signature', 'field', 'constructor', 'method'],
          typeLiterals: ['signature', 'field', 'constructor', 'method'],
        },
      ],
      // prettier
      'prettier/prettier': ['error', { singleQuote: true }],
      // react
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-sort-props': [
        1,
        {
          shorthandFirst: true,
          callbacksLast: true,
          ignoreCase: false,
          noSortAlphabetically: true,
          reservedFirst: true,
        },
      ],
      'react/sort-comp': [
        'error',
        {
          order: [
            'static-methods',
            'lifecycle',
            'everything-else',
            'rendering',
          ],
          groups: {
            rendering: ['/^render.+$/', 'render'],
          },
        },
      ],
      // jsx-a11y
      'jsx-a11y/media-has-caption': 0,
    },
  },
);
