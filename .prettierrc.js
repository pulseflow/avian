/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	printWidth: 100,
	singleQuote: false,
	trailingComma: 'es5',
	bracketSameLine: true,
	semi: true,
	quoteProps: 'as-needed',
	importOrder: [
		'^([A-Za-z]|@[^s/])',
		'^@avian/(interface|client|ui)(/.*)?$',
		'^~/',
		'^\\.'
	],
	importOrderSortSpecifiers: true,
	importOrderParserPlugins: ['importAssertions', 'typescript', 'jsx'],
	pluginSearchDirs: false,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
}
