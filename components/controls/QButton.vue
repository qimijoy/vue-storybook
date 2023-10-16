<template>
	<button type="button" :class="classes" @click="emit('click')">
		<slot />
	</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	slim: {
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
}));
</script>

<style lang="less" scoped>
.q-button {
	appearance: none;
	border: 0;
	border-radius: 5px;
	background: #4676d7;
	color: #fff;
	padding: 8px 16px;
	font-size: 16px;

	cursor: pointer;
	display: inline-block;

	&_slim {
		padding: 4px 8px;
	}
}
</style>
