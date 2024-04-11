<template>
	<div>
		<h2>보간법</h2>
		<p>문자열 : {{ message }}</p>
		<!-- v-once 디렉티브를 이용한 예제 -->
		<p v-once>문자열 : {{ message }}</p>
		<button v-on:click="message = message + '!'">Click!</button>
		<hr />
		<h2>hTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려보세요</div>
		<input type="text" value="홍길동" :disabled="isInputDisabled" />
		<input :="attrs" />
		<h2>JavaScript</h2>
		{{ message.split("").reverse().join("///") }}
		<br /><br />
		{{ isInputDisabled ? "예" : "아니요" }}
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	setup() {
		const message = ref("안녕하세요!");
		const rawHtml = ref("<strong>안녕하세요</strong>");

		const dynamicTitle = ref("안녕하세요!!");
		const isInputDisabled = ref(false);
		const attrs = ref({
			type: "text",
			value: "123456",
			disabled: true,
		});
		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
