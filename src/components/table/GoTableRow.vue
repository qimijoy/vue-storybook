<template>
	<div class="table__row" :style="{ 'grid-template-columns': columnTemplates, 'background-color': rowBackgroundColor }">
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	columnTemplates: {
		type: String,
		default: '',
	},
	rowBackgroundColor: {
		type: String,
		default: '',
	},
});
</script>

<style scoped lang="less">
@import '../../../../gotuda/src/assets/styles/_breakpoints';

.table__row {
	border-bottom: 2px solid #eeeff4;
	position: relative;
	display: block;
	column-gap: 10px;
	align-items: center;
	padding: 0 16px;

	@media screen and @medium {
		display: grid;
	}

	&:last-child {
		border-bottom: none;
	}
	&_items-center {
		justify-items: center;
	}
}
</style>
