<template>
	<div>
		<h2>input Value</h2>
		<!-- input -->
		<input type="text" v-model="inputValue" />
		<div>{{ inputValue }}</div>
		<!-- textarea -->
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
	</div>
</template>
<script>
import { ref } from "vue";

export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref(null);
		return { inputValue, textareaValue };
	},
};
</script>

<style lang="scss" scoped></style>
