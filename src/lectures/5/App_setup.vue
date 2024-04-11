<template>
	<p>{{ counter }}</p>
	<button @click="increment">click!</button>
</template>

<script>
import { ref } from "vue";
export default {
	setup() {
		const counter = ref(0);
		//메소드 선언
		const increment = () => {
			counter.value++;
		};
		return {
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
