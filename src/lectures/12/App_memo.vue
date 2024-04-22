<template>
	<p>v-memo</p>
	<div v-memo="[subscribers]">
		<p>subscribers: {{ subscribers }}</p>
		<p>views: {{ views }}</p>
		<p>likes: {{ likes }}</p>
	</div>
	<button v-on:click="subscribers++">sub++</button>
	<button @click="views++">views++</button>
	<button @click="likes++">likes++</button>

	<p>기본</p>
	<div>
		<p>subscribers: {{ subscribers }}</p>
		<p>views: {{ views }}</p>
		<p>likes: {{ likes }}</p>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
