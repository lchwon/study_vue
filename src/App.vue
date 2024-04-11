<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive } from "vue";
export default {
	setup() {
		const book = reactive({
			author: "Vue Team",
			year: "2020",
			title: "Vue 3 Giude",
			descriprtion: "당신은 읽습니다.",
			price: "무료",
		});

		const { author, title } = book;
		console.log(typeof author);
		return { author, title, book };
	},
};
</script>

<style lang="scss" scoped></style>
