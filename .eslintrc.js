module.exports = {
	// es6: true,
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'warn',
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		camelcase: 'off',
		'no-unused-vars': 'off',
	},
};
