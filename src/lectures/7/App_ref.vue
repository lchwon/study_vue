<template>
	<div>
		<p>{{ message }}</p>
		<!-- 반응형 동작 확인 -->
		<button v-on:click="addMessage">Click!</button>
	</div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
	setup() {
		// const는 상수기 때문에 let으로 변경
		// 속성을 사용했기에 .value로 연결해서 사용해야 한다.
		let message = ref("Hello Vue!");
		const addMessage = () => {
			message.value = message.value + "!";
		};
		console.log("message", message.value);
		console.log("message", typeof message.value);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
