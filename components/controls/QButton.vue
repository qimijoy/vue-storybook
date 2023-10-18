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
	align-items: center;
	justify-content: center;
	min-width: 20px;
	padding: 0.5em 1em;

	font-family: inherit;
	font-size: 16px;
	color: #fff;
	line-height: 1.5;

	appearance: none;
	border: 0;
	border-radius: 5px;
	background: #4676d7;

	cursor: pointer;

	transition: 0.2s ease-out;

	&_slim {
		padding: 0.25em 0.5em;
	}

	&:hover:not(&_disabled) {
		background: #1d49aa;
	}

	&:focus:not(&_disabled) {
		outline: none;
		box-shadow: 0 0 0 2px #bac9ff;
	}

	&:active:not(&_disabled) {
		background: #0b3ba2;
	}

	&[disabled],
	&_disabled {
		color: #d2d5db;
		background: #6c7589;
		cursor: not-allowed;
		outline: none;
		box-shadow: none;
	}

	&_link {
		text-decoration: none;
		text-align: center;
	}
}
</style>
