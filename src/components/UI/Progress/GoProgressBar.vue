<template>
	<div class="progress" :style="[{ width }]">
		<div class="progress__percent">{{ percentString }}</div>

		<div class="progress-bar">
			<div class="progress-bar__filled" :style="[{ width: percentString }]" />
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		width: {
			type: String,
			default: '300px',
		},
		percent: {
			type: Number,
			required: true,
		},
	});

	const percentString = computed(() => `${props.percent}%`);
</script>

<style scoped lang="less">
	@import '@/styles/_palette';

	.progress {
		&__percent {
			margin-bottom: 10px;

			font-weight: 700;
			text-align: center;

			color: @primary;
			user-select: none;
		}
	}

	.progress-bar {
		height: 15px;

		background-color: @primary-hover;
		border-radius: 4px;

		&__filled {
			height: 100%;

			background-color: @primary;
			border-radius: 4px;

			transition: 0.5s;
		}
	}
</style>
