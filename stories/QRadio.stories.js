import QRadio from '../components/UI/Controls/QRadio.vue';

export default {
	title: 'Controls/Radio',
	component: QRadio,
	tags: ['autodocs'],
	argTypes: {
		onClick: {},
		name: {
			control: 'text',
		},
		id: {
			control: 'text',
		},
		value: {
			control: 'text',
		},
		label: {
			control: 'text',
		},
		checked: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
	},
	args: {
		name: 'q-radio',
		id: 'q-radio',
		value: 'test',
		label: 'Радиокнопка',
		checked: false,
		disabled: false,
	},
	render: (args) => ({
		components: {
			QRadio,
		},
		setup() {
			return { args };
		},
		template: `<QRadio v-bind="args"></QRadio>`,
	}),
};

export const Primary = {
	args: {},
};

export const PrimaryChecked = {
	args: {
		checked: true,
	},
};

export const PrimaryDisabled = {
	args: {
		disabled: true,
	},
};
