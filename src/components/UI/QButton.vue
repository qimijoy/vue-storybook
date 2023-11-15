<template>
	<button v-if="!link" type="button" :class="classes" :disabled="disabled" @click="onClickHandler">
		<slot />
	</button>
	<a v-else :href="href" :download="download" :class="classes" @click="onClickHandler">
		<slot />
	</a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	slim: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	link: {
		type: Boolean,
		default: false,
	},
	href: {
		type: String,
		default: '',
	},
	download: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits({
	click: () => {
		return true;
	},
});

const classes = computed(() => ({
	'q-button': true,
	'q-button_slim': props.slim,
	'q-button_disabled': props.disabled,
	'q-button_link': props.link,
}));

const onClickHandler = (event) => {
	if (props.disabled) {
		event.preventDefault();
	} else {
		emit('click');
	}
};
</script>

<style lang="less" scoped>
.q-button {
	display: inline-flex;

	min-width: 20px;
	padding: 0.5em 1em;

	font-family: inherit;
	font-size: 16px;
	line-height: 1.5;

	color: #ffffff;
	background: #4676d7;
	border: 0;
	border-radius: 5px;

	cursor: pointer;

	transition: 0.2s ease-out;
	align-items: center;
	justify-content: center;

	appearance: none;

	&:focus:not(&_disabled) {
		outline: none;
		box-shadow: 0 0 0 2px #bac9ff;
	}

	&:hover:not(&_disabled) {
		background: #1d49aa;
	}

	&:active:not(&_disabled) {
		background: #0b3ba2;
	}

	&_slim {
		padding: 0.25em 0.5em;
	}

	&_link {
		text-decoration: none;

		text-align: center;
	}

	&[disabled],
	&_disabled {
		color: #d2d5db;
		background: #6c7589;
		outline: none;

		cursor: not-allowed;
		box-shadow: none;
	}
}
</style>
