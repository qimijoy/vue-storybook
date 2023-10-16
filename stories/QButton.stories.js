import QButton from '../components/controls/QButton.vue';

export default {
	title: 'Example/Button',
	component: QButton,
	tags: ['autodocs'],
	argTypes: {
		onClick: {},
		label: {
			control: 'text',
		},
		slim: {
			control: 'boolean',
		},
	},
	args: {
		label: 'Hello, world!',
		slim: false,
	},
	render: (args) => ({
		components: {
			QButton,
		},
		setup() {
			return { args };
		},
		template: `<QButton v-bind="args">{{ args.label }}</QButton>`,
	}),
};

export const Primary = {
	args: {},
};

export const PrimarySlim = {
	args: {
		slim: true,
	},
};
