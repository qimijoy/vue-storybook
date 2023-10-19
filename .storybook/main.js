import { mergeConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	core: {
		builder: '@storybook/builder-vite', // 👈 The builder enabled here.
	},
	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			resolve: {
				alias: {
					'@': fileURLToPath(new URL('../', import.meta.url)),
				},
			},
		});
	},
};

export default config;
