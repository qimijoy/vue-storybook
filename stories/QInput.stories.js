import QInput from '@/components/UI/QInput.vue';

export default {
	title: 'Controls/Input',
	component: QInput,
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'text',
		},
		type: {
			control: { type: 'radio' },
			options: ['text', 'number'],
		},
		placeholder: {
			control: 'text',
		},
		label: {
			control: 'text',
		},
		width: {
			control: 'text',
		},
		errors: {
			control: 'array',
		},
	},
	args: {
		name: 'test-input',
		placeholder: 'Введите что-то',
		label: 'Поле для ввода',
		width: '400px',
		errors: [],
	},
	render: (args) => ({
		components: {
			QInput,
		},
		setup() {
			return { args };
		},
		template: `<QInput v-bind="args" />`,
	}),
};

export const Primary = {
	args: {},
};
