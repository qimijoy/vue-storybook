<!-- v-model:value="someValue" -->

<template>
	<label class="input" :style="{ width }">
		<span class="input__label">{{ label }}</span>
		<input
			:id="name"
			class="input__control"
			:type="type"
			:name="name"
			:placeholder="placeholder"
			:value="value"
			@input="updateValue"
		/>
		<TransitionGroup>
			<div v-for="error of errors" :key="error.$uid" class="input__errors">
				<div class="input__error">{{ error.$message }}</div>
			</div>
		</TransitionGroup>
	</label>
</template>

<script setup>
	defineProps({
		value: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			required: true,
		},
		width: {
			type: String,
			default: '300px',
		},
		errors: {
			type: Array,
			default: () => [],
		},
	});

	const emit = defineEmits({
		'update:value': () => true,
	});

	const updateValue = (event) => {
		emit('update:value', event.target.value);
	};
</script>

<style scoped lang="less">
	.input {
		display: inline-block;

		position: relative;

		&__label {
			display: block;

			position: absolute;
			z-index: 1;
			top: 20px;

			font-weight: 700;

			color: #6979f8;
			opacity: 0;

			transition: 0.3s;
		}

		&__control {
			z-index: 2;

			width: 100%;
			height: 40px;
			padding: 0 10px;

			border: 1px solid #6979f8;
			border-radius: 7px;

			&:focus,
			&:not(:placeholder-shown) {
				& + .input__label {
					z-index: 1;
					top: -35px;

					opacity: 1;
				}
			}
		}

		&__errors {
			margin-top: 4px;
			padding: 5px;

			font-size: 13px;

			color: #ffffff;
			background: #ff647c;
			border-radius: 7px;
		}
	}

	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
