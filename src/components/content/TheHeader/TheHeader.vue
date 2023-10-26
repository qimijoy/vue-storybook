<template>
	<header class="header">
		<div class="header__container">
			<a :href="logoComputed.href" class="header__logo">
				<img
					:src="logoComputed.src"
					:alt="logoComputed.alt"
					:width="logoComputed.width"
					:height="logoComputed.height"
				/>
			</a>
			<nav class="header__nav">
				<ul v-if="nav.length" class="header__nav-items">
					<li v-for="link of nav" :key="link.id" class="header__nav-item">
						<a :href="link.href" class="header__nav-link">{{ link.title }}</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	logo: {
		type: Object,
		default: () => logoDefaultObject,
		validator: (logo) => logo.src && logo.alt,
	},
	nav: {
		type: Array,
		default: () => [],
		validator: (array) => array.every((item) => item.id && item.title && item.href),
	},
});

// COMPUTED
const logoComputed = computed(() => {
	return Object.assign({}, logoDefaultObject, props.logo);
});
</script>

<script>
import DefaultLogo from '@/components/content/TheHeader/DefaultLogo.svg';

const logoDefaultObject = {
	src: DefaultLogo,
	alt: 'Logo',
	width: '32',
	height: '32',
	href: '#',
};

export { logoDefaultObject };
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
		padding: 0 15px;
		box-shadow: 0 5px 5px -5px rgb(34 60 80 / 0.6);
		gap: 1rem;
	}

	&__logo {
		display: flex;
		align-items: center;
	}

	&__nav {
		margin-left: auto;
	}

	&__nav-items {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2rem;
	}

	&__nav-item {
		list-style: none;
	}

	&__nav-link {
		text-decoration: none;
		color: inherit;

		&:visited {
			color: inherit;
		}
	}
}
</style>
