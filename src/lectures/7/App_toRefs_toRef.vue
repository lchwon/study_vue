<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef } from "vue";
export default {
	setup() {
		const book = reactive({
			author: "Vue Team",
			year: "2020",
			title: "Vue 3 Giude",
			descriprtion: "당신은 읽습니다.",
			price: "무료",
		});

		const author = toRef(book, "author");
		const title = toRef(book, "title");

		return { author, title, book };
	},
};
</script>

<style lang="scss" scoped></style>
