import QButton from '../components/controls/QButton.vue';

export default {
	title: 'Controls/Button',
	component: QButton,
	tags: ['autodocs'],
	argTypes: {
		onClick: {},
		content: {
			control: 'text',
		},
		slim: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
		link: {
			control: 'boolean',
		},
		download: {
			control: 'boolean',
		},
		href: {
			control: 'text',
		},
	},
	args: {
		content: 'Hello, world!',
		slim: false,
		disabled: false,
		link: false,
		download: false,
	},
	render: (args) => ({
		components: {
			QButton,
		},
		setup() {
			return { args };
		},
		template: `<QButton v-bind="args" v-html="args.content"></QButton>`,
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
		link: true,
		href: 'https://google.com',
	},
};

export const PrimaryLinkDownload = {
	args: {
		link: true,
		href: 'package.json',
		download: true,
	},
};
