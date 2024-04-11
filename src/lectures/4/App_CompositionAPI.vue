<template>
	<div>
		<h2>반응형 메세지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">Add Message</button>
		<h2>일반 메세지</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addnormalMessage">Add Message</button>
	</div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from "vue";

export default {
	setup() {
		console.log("setup()");
		//반응형
		const reactiveMessage = ref("Hello! 반응형 API  Message");
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + "!";
		};
		console.log("isRef(reactiveMessage) ->", isRef(reactiveMessage));
		//기본
		let normalMessage = "Hell norma";
		const addnormalMessage = () => {
			normalMessage.value = normalMessage.value + "!";
		};
		console.log("isRef(normalMessage) ->", isRef(normalMessage));

		onMounted(() => {
			console.log("onMointed");
		});
		onBeforeMount(() => {
			console.log("onBeforeMount");
		});

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addnormalMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
