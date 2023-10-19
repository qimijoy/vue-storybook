<template>
	<header class="header">
		<div class="container header__container">
			<a href="#" class="header__logo">
				<img :src="logo.src" :alt="logo.alt" :width="logo.width" :height="logo.height" />
			</a>
			<nav class="header__nav">
				<ul v-if="nav.length">
					<li v-for="link of nav" :key="link.id">
						<a :href="link.link">{{ link.title }}</a>
					</li>
				</ul>
			</nav>
			<a href="/track-shipment" class="header__button">Track</a>
		</div>
	</header>
</template>

<script setup>
import DefaultLogo from '@/components/content/TheHeader/DefaultLogo.svg';

const props = defineProps({
	logo: {
		type: Object,
		default: () => ({
			src: DefaultLogo,
			alt: 'Logo',
			width: '32',
			height: '32',
		}),
		validator: (logo) => logo.src && logo.alt,
	},
	nav: {
		type: Array,
		default: () => [],
		validator: (array) => array.every((item) => item.id && item.title && item.href),
	},
});
</script>

<style lang="less" scoped>
.header {
	&__container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 960px;

		margin: auto;
		border: 1px solid red;
	}

	&__nav {
		margin-left: auto;
	}
}
</style>
