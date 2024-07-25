<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from "vue";

export default {
	setup() {
		console.log("setup");
		const inputRef = ref(null);
		onBeforeMount(() => {
			console.log("onBeforeMount");
		});
		onMounted(() => {
			console.log("onMounted", inputRef.value);
		});

		return { inputRef };
	},
	// beforeCreate() {
	// 	console.log("beforeCreate");
	// },
	// created() {
	// 	console.log("created");
	// },
};
</script>

<style lang="scss" scoped></style>
