<template>
	<div>
		<div :class="{ active: weActive, 'text-dager': hasError }">
			텍스트 입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<button>toggleError</button>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const weActive = ref(true);
		const hasError = ref(false);

		const toggle = () => {
			weActive.value = !weActive.value;
		};

		return { weActive, hasError, toggle };
	},
};
</script>

<style scoped>
.active {
	font-size: 30px;
	color: rebeccapurple;
}

.text-dager {
	color: aqua;
	font-weight: 700;
}
</style>
