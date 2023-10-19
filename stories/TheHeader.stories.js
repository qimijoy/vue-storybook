import TheHeader, { logoDefaultObject } from '@/components/content/TheHeader/TheHeader.vue';

export default {
	title: 'Content/Header',
	component: TheHeader,
	tags: ['autodocs'],
	argTypes: {
		logo: {
			control: 'object',
		},
		nav: {
			control: 'array',
		},
	},
	args: {
		logo: logoDefaultObject,
		nav: [
			{ id: 1, title: 'Test 1', href: '/test1' },
			{ id: 2, title: 'Test 2', href: '/test2' },
			{ id: 3, title: 'Test 3', href: '/test3' },
		],
	},
	render: (args) => ({
		components: {
			TheHeader,
		},
		setup() {
			return { args };
		},
		template: `<TheHeader v-bind="args"/>`,
	}),
};

export const Primary = {};
