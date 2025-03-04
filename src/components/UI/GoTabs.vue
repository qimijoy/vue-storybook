<template>
	<div class="tabs">
		<div class="tabs__nav">
			<span
				v-for="tab in tabs"
				:key="tab.name"
				:class="['tabs__nav-item', { 'tabs__nav-item_selected': tab.name === selectedTab }]"
				@click="clickOnTab(tab.name)"
			>
				{{ tab.label }}
			</span>
		</div>
		<div class="tabs__content">
			<slot />
		</div>
	</div>
</template>

<script setup>
	// Props
	defineProps({
		tabs: {
			type: Array,
			require: true,
			default: () => [],
		},
		selectedTab: {
			type: String,
			default: '',
		},
	});

	// Emits
	const emit = defineEmits({
		changeTab: (tabName) => !!tabName,
	});

	// Functions
	const clickOnTab = (tabName) => {
		emit('changeTab', tabName);
	};
</script>

<style scoped lang="less">
	@import '@/styles/_palette';

	.tabs {
		&__nav {
			display: flex;
			align-items: center;

			margin-bottom: 20px;
		}

		&__nav-item {
			display: flex;

			height: 40px;
			margin-right: 10px;
			padding: 0 20px;

			font-size: 15px;

			border: 1px solid @primary;
			border-radius: 7px;

			cursor: pointer;
			align-items: center;
			justify-content: center;

			&:hover {
				color: #ffffff;
				background: @primary-hover;

				transition: 0.2s;
			}
		}

		&__nav-item_selected {
			color: #ffffff;
			background: @primary;
		}

		&__content {
			padding: 20px;

			background: #ffffff;
			border-radius: 7px;
		}
	}
</style>
