import globals from 'globals';

import babelParser from '@babel/eslint-parser';
import eslintConfig from '@qimijoy/eslint-config/configs/primary.js';

import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

import vueParser from 'vue-eslint-parser';
import vue from 'eslint-plugin-vue';
import vueConfig from '@qimijoy/eslint-config/configs/vueConfig.js';

export default [
	{
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
	},
	{
		files: ['**/*.js'],
		ignores: ['**/dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: babelParser,
			parserOptions: {
				babelOptions: {
					presets: ['@babel/preset-env'],
				},
			},
		},
		rules: {
			...eslintConfig.rules,
		},
	},
	// VUE
	{
		files: ['**/*.vue'],
		ignores: ['**/dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			parser: vueParser, // <template>
			parserOptions: {
				parser: babelParser, // <script>
			},
		},
		plugins: { vue },
		rules: {
			...vueConfig.rules,
		},
	},
	// Prettier options (must be last!)
	{
		files: ['**/*.js'],
		ignores: ['**/dist/**/*'],
		plugins: { prettier },
		rules: {
			...prettierConfig.rules,
			'prettier/prettier': 'error',
			'arrow-body-style': 'off',
			'prefer-arrow-callback': 'off',
		},
	},
];
