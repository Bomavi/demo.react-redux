module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'prettier', 'jsx-a11y'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		// 'plugin:react/recommended',
		'react-app',
		'plugin:jsx-a11y/recommended',
	],
	rules: {
		// eslint
		allowTemplateLiterals: true,
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'lines-around-comment': ['error', { beforeBlockComment: true }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-nested-ternary': 'error',
		'no-trailing-spaces': 'error',
		'prefer-object-spread': 'error',
		'space-before-blocks': 'error',
		'spaced-comment': ['error', 'always'],
		// tslint
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/explicit-function-return-type': [0,
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: true,
			}
		],
		// jsx-a11y
		'jsx-a11y/no-autofocus': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
