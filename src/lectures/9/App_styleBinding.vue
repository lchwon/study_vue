<template>
	<div>
		<div :style="styleObject">
			<!-- lorem을 엔터를치면 임의 글이 작성된다.-->
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident
			ab deleniti a ipsum consequatur reiciendis, temporibus nam fuga. Modi,
			reiciendis rem! Culpa asperiores, magnam eaque nisi amet quasi ipsa.
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: "red",
		// 	//css 속성의 경우에는 카멜케이스로 작성한다.
		// 	fontSize: "15px",
		// });

		const fontSize = ref(13);

		const styleObject = computed(() => {
			return {
				color: "red",
				fontSize: fontSize.value + "px",
			};
		});

		return {
			fontSize,
			styleObject,
		};
	},
};
</script>

<style lang="scss" scoped></style>
