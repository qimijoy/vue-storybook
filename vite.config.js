import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/components/index.js'),
			name: 'qimijoyui',
			fileName: (format) => `qimijoyui.${format}.js`,
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
