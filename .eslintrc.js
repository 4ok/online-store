const OFF = 0
const ERROR = 2

module.exports = {
	root: true,
	parser: 'babel-eslint',
	extends: 'airbnb',
	env: { browser: true },
	settings: { 'import/resolver': { webpack: { config: 'webpack/configs/common.js' } } },
	plugins: [
		'json',
	],
	rules: {

		// React
		'react/jsx-indent': [ ERROR, 'tab' ],
		'react/jsx-indent-props': [ ERROR, 'tab' ],
		'react/jsx-one-expression-per-line': OFF,
		'react/jsx-curly-spacing': [ ERROR, {
			when: 'always',
			attributes: true,
			children: true,
		}],
		'react/jsx-max-props-per-line': [ ERROR, {
			maximum: 1,
			when: 'always',
		}],

		// Vanilla
		'import/no-extraneous-dependencies': [ ERROR, {
			devDependencies: [
				'webpack/configs/**',
				'jest.setup.js',
			],
		}],
		'arrow-body-style': OFF,
		'no-continue': OFF,
		'no-use-before-define': OFF,
		'comma-dangle': [ ERROR, {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
		}],
		'no-tabs': OFF,
		indent: [ ERROR, 'tab', { SwitchCase: 1 }],
		'newline-after-var': ERROR,
		'newline-before-return': ERROR,
		'no-param-reassign': OFF,
		'no-underscore-dangle': [ ERROR, { allowAfterThis: true }],
		'padded-blocks': OFF,
		'no-plusplus': [ ERROR, { allowForLoopAfterthoughts: true }],
		'template-curly-spacing': [ ERROR, 'always' ],
		'array-bracket-spacing': [ ERROR, 'always', {
			objectsInArrays: false,
			arraysInArrays: false,
		}],
		'newline-per-chained-call': [ ERROR, { ignoreChainWithDepth: ERROR }],
		semi: [ ERROR, 'never' ],
		'object-curly-newline': [ ERROR, {
			ObjectExpression: {
				multiline: true,
				minProperties: ERROR,
			},
			ObjectPattern: {
				multiline: true,
				minProperties: 4,
			},
		}],
		'object-property-newline': [ ERROR, { allowAllPropertiesOnSameLine: false }],
	},
}
