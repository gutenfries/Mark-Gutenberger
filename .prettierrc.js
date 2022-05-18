module.exports = {
	$schema: 'https://json.schemastore.org/prettierrc',
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: true,
	printWidth: 125,
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
	vueIndentScriptAndStyle: false,
	xmlSelfClosingSpace: true,
	overrides: [
		{
			files: ['*.xaml', '*.vcxproj'],
			options: {
				parser: 'xml',
			},
		},
		{
			files: ['*.yml', '*.yaml'],
			options: {
				singleQuote: false,
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: ['*.md', '*.html'],
			options: {
				singleQuote: false,
				printWidth: 100,
				parser: 'html',
			},
		},
		{
			files: ['*.svg', 'nuget.config', '*.props', '*.filters', '*.targets', 'packages.config', '*.appxmanifest'],
			options: {
				parser: 'xml',
				xmlWhitespaceSensitivity: 'ignore',
			},
		},
		{
			files: ['*.ejs'],
			options: {
				parser: 'glimmer',
			},
		},
		{
			files: ['.imgbotconfig'],
			options: {
				parser: 'json',
			},
		},
	],
};
