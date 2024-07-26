<template>
	<div class="container py-4">
		<button @click="visible = !visible">Toggle Child</button>
		<LifeCycleChild v-if="visible"></LifeCycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
import LifeCycleChild from "./LifeCycleChild.vue";

export default {
	components: {
		LifeCycleChild,
	},
	setup() {
		// console.log("setup");
		const inputRef = ref(null);
		const message = ref("");
		const visible = ref(false);
		//onBeforeMount는 mount되기 전이라 출력X
		// onBeforeMount(() => {
		// 	console.log("onBeforeMount", inputRef.value);
		// });
		//onMounted는 mount된 이후이기 때문에 출력
		// onMounted(() => {
		// 	console.log("onMounted", inputRef.value.value);
		// });

		// onBeforeUpdate(() => {
		// 	console.log("onBefroeUpdate", message.value);
		// 	console.log(
		// 		"DOM Content:",
		// 		document.querySelector("#message").textContent,
		// 	);
		// });
		// onUpdated(() => {
		// 	console.log("onUpdated", message.value);
		// 	console.log(
		// 		"DOM Content:",
		// 		document.querySelector("#message").textContent,
		// 	);
		// });

		return { inputRef, message, visible };
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
