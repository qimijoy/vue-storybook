<template>
	<div class="table__column">
		<span v-if="columnTitle" class="table__column-title">{{ columnTitle }}: </span>
		<slot v-if="!isImage"></slot>
		<img v-else class="table__column-image" :src="srcImage" :alt="altImage" />
	</div>
</template>

<script setup>
const props = defineProps({
	isImage: {
		type: Boolean,
		default: false,
	},
	srcImage: {
		type: String,
		default: '',
	},
	altImage: {
		type: String,
		default: '',
	},
	columnTitle: {
		type: String,
		default: '',
	},
});
</script>

<style scoped lang="less">
@import '../../../../gotuda/src/assets/styles/_breakpoints';

.table__column {
	padding: 15px 0;
	position: relative;
}

.table__column-image {
	max-width: 200px;

	@media screen and @medium {
		max-width: 100%;
	}
}

.table__column-title {
	margin-right: 5px;
	display: inline-block;

	@media screen and @medium {
		display: none;
	}
}
</style>
