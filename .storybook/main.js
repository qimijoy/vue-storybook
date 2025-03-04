import { mergeConfig } from 'vite';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: ['../public'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	async viteFinal(config, { configType }) {
		if (configType === 'DEVELOPMENT') {
			// Your development configuration goes here
		}
		if (configType === 'PRODUCTION') {
			// Your production configuration goes here.
		}

		return mergeConfig(config, {
			// Your environment configuration here
		});
	},
};

export default config;
