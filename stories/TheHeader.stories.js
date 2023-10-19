import TheHeader from '../components/content/TheHeader/TheHeader.vue';

export default {
	title: 'Content/Header',
	component: TheHeader,
	tags: ['autodocs'],
	render: (args) => ({
		components: {
			TheHeader,
		},
		setup() {
			return {
				...args,
			};
		},
		template: '<TheHeader />',
	}),
};

export const Primary = {};
