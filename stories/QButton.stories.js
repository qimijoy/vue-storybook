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
		disabled: {
			control: 'boolean',
		},
		isLink: {
			control: 'boolean',
		},
		href: {
			control: 'text',
		},
	},
	args: {
		label: 'Hello, world!',
		slim: false,
		disabled: false,
		isLink: false,
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

export const PrimaryDisabled = {
	args: {
		disabled: true,
	},
};

export const PrimaryLink = {
	args: {
		isLink: true,
		href: 'https://google.com',
	},
};

export const PrimaryLinkDownload = {
	args: {
		isLink: true,
		href: 'package.json',
	},
};
