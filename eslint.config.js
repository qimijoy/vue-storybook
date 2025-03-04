import globals from 'globals';

import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

import pluginVue from 'eslint-plugin-vue';

import vueParser from 'vue-eslint-parser';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	// GLOBAL IGNORES
	{
		ignores: ['**/dist/*'],
	},
	// FILES TO LINT
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
	},
	// GLOBAL LANGUAGE & LINTER SETTINGS
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2025,
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: 'error',
		},
	},

	js.configs.recommended,
	jsdoc.configs['flat/recommended'],
	{
		name: 'JS',
		files: ['**/*.{js,mjs,cjs,vue}'],
		plugins: {
			jsdoc,
		},
		rules: {
			...js.configs.recommended.rules,
			...jsdoc.configs['flat/recommended'].rules,
		},
	},

	...pluginVue.configs['flat/recommended'],
	{
		name: 'Vue',
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser, // <template>
		},
	},

	eslintPluginPrettierRecommended,
];
