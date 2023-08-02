module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
			useJSXTextNode: true
		}
	},

	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest', 'prettier'],
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true
	},
	globals: {
		/* global data readnonly */
	},
	rules: {
		'no-control-regex': 0,
		'no-undef': 0,
		'no-unused-vars': 'off',
		'react/prop-types': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-non-null-assertion': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		'linebreak-style': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}
