import primaryRules from '@qimijoy/stylelint-config/configs/primary.js';

export default {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: ['stylelint-config-standard', 'stylelint-config-standard-less'],

	plugins: [
		'stylelint-prettier',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-order',
		'stylelint-no-unsupported-browser-features',
	],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: false,
	reportInvalidScopeDisables: false,
	reportNeedlessDisables: false,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: false,

	overrides: [
		{
			files: ['**/*.html'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.less'],
			customSyntax: 'postcss-less',
		},
		{
			files: ['**/*.vue'],
			extends: ['stylelint-config-standard-vue'],
		},
	],

	rules: {
		...primaryRules.rules,
	},
};
