<!-- v-model:checked -->

<template>
	<label class="checkbox">
		<input
			:id="id"
			type="checkbox"
			class="checkbox__input"
			:name="name"
			:value="value"
			:checked="checked"
			:disabled="disabled"
			@change="handleClick($event)"
		/>
		<span class="checkbox__span">{{ label }}</span>
	</label>
</template>

<script setup>
const props = defineProps({
	name: {
		type: String,
		default: '',
	},
	id: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	checked: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	group: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits({
	'update:checked': (value) => true,
	updateCheckboxGroup: (value) => true,
});

const handleClick = (event) => {
	if (props.group) {
		emit('updateCheckboxGroup', { optionValue: props.value, checked: event.target.checked });
	} else {
		emit('update:checked', event.target.checked);
	}
};
</script>

<style scoped lang="less">
@import '@/styles/_palette';

.checkbox {
	display: inline-flex;
	flex-direction: row;
	align-items: center;

	&__input {
		display: none;
	}

	&__span {
		display: inline-flex;
		align-items: center;
		user-select: none;

		cursor: pointer;

		&:before {
			display: inline-block;

			width: 24px;
			height: 24px;
			margin-right: 10px;

			border: 1px solid @grey;
			border-radius: 6px;
			content: '';
			flex-shrink: 0;
			flex-grow: 0;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 50% 50%;
		}
	}

	&__input:checked + &__span {
		&:before {
			border-color: @primary;

			background-color: @primary;
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
		}
	}

	&__input:focus + &__span {
		&:before {
			box-shadow: 0 7px 20px rgb(0 0 0 / 0.07);
		}
	}

	&__input:disabled + &__span {
		&:before {
			background-color: @grey;
			border: 1px solid @grey;
		}
	}

	&__input:not(:disabled, :checked) + &__span {
		&:hover:before {
			border-color: @primary-hover;
		}
	}

	&__input:not(:disabled):active + &__span {
		&:before {
			background-color: @primary;
			border: 1px solid @grey;
		}
	}

	&__input:focus:not(:checked) + &__span {
		&:before {
			border-color: @primary;
		}
	}
}
</style>
