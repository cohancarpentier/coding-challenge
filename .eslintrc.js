const fs = require('fs')

const foldersUnderSrc = fs
	.readdirSync('src', { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)

module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'plugin:jsx-a11y/strict',
	],
	env: {
		browser: true,
		jasmine: true,
		jest: true,
	},
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'simple-import-sort'],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'no-async-promise-executor': 0,
		'no-console': 0,
		'no-irregular-whitespace': 0,
		'react/jsx-key': 0,
		'no-restricted-imports': [
			2,
			{
				paths: [
					{
						name: 'lodash',
						message:
							"Do not import from `lodash` directly, as we don't support tree-shaking for it. Instead, import the function you're trying to use, e.g. `import debounce from 'lodash/debounce'`",
					},
				],
			},
		],
		'react-hooks/exhaustive-deps': 1,
		'react/jsx-sort-default-props': [
			'warn',
			{
				ignoreCase: false,
			},
		],
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		'react-hooks/rules-of-hooks': 1,
		'react/prop-types': 0,
		'react/display-name': 0,
		'react/no-unescaped-entities': 0,
		'jsx-a11y/no-autofocus': 0,
		'jsx-a11y/media-has-caption': 0,
		'@typescript-eslint/no-empty-function': 0,
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
			rules: {
				'simple-import-sort/imports': [
					'warn',
					{
						groups: [
							// Packages. `react` related packages come first.
							// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
							['^react', '^@?\\w'],
							// Absolute imports and Relative imports.
							[`^(${foldersUnderSrc.join('|')})(/.*|$)`, '^\\.'],
							// for other local imports.
							['^[^.]'],
						],
					},
				],
			},
		},
	],
	globals: {
		global: 'readonly',
		Atomics: 'readonly',
		process: true,
		SharedArrayBuffer: 'readonly',
		Promise: 'readonly',
		Buffer: 'readonly',
		WeakSet: 'readonly',
		setImmediate: 'readonly',
		setInterval: 'readonly',
		setTimeout: 'readonly',
		shallow: 'readonly',
		page: 'readonly',
	},
}
