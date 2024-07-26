<template>
	<div class="card">
		<div class="card-body">Lifecycle Child</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from "vue";
export default {
	setup() {
		//console.log("[child] setup");
		onBeforeMount(() => {
			console.log("[child] onBeforeMount");
		});
		onMounted(() => {
			console.log("[child] onMount");
		});
		onBeforeUnmount(() => {
			console.log("[Child] onBeforeUnmount");
			console.log(document.querySelector("#input"));
		});
		onUnmounted(() => {
			console.log("[Child] onUnmounted");
			console.log(document.querySelector("#input"));
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
