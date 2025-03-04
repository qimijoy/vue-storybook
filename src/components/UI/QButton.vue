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

	const classes = computed(() => {
		const mainClass = 'q-button';

		return {
			[mainClass]: true,
			[`${mainClass}_slim`]: props.slim,
			[`${mainClass}_disabled`]: props.disabled,
			[`${mainClass}_link`]: props.link,
		};
	});

	const onClickHandler = (event) => {
		if (props.disabled) {
			event.preventDefault();
		} else {
			emit('click');
		}
	};
</script>

<style lang="less" scoped>
	@import '@/styles/_palette';

	.q-button {
		display: inline-flex;

		min-width: 20px;
		padding: 0.5em 1em;

		font-family: inherit;
		font-size: 16px;
		line-height: 1.5;

		color: @white;
		background: @primary;
		border: 0;
		border-radius: 5px;

		cursor: pointer;

		transition: 0.2s ease-out;
		align-items: center;
		justify-content: center;

		appearance: none;

		&:focus:not(&_disabled) {
			outline: none;
			box-shadow: 0 0 0 2px @shadow-blue;
		}

		&:hover:not(&_disabled) {
			background: @primary-hover;
		}

		&:active:not(&_disabled) {
			background: @primary-active;
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
			color: @grey;
			background: @disabled;
			outline: none;

			cursor: not-allowed;
			box-shadow: none;
		}
	}
</style>
