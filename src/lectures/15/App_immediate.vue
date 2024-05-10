<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from "vue";

export default {
	setup() {
		const message = ref("hello vue3");
		const reverseMessage = ref("");

		// 1) 첫 번째 방법
		// watch(
		// 	message,
		// 	newValue => {
		// 		//split로 쪼개고 reverse로 반전 후 join으로 붙여준다. 그리고 reverseMessage로 넣어준다.
		// 		reverseMessage.value = newValue.split("").reverse().join("");
		// 	},
		// 	// 이렇게 즉시 실행을 원하면 immediate true를 활용할 수 있다.
		// 	{
		// 		immediate: true,
		// 	},
		// );

		// 2) 두 번째 방법
		// const reverseFunction = newValue => {
		// 	reverseMessage.value = newValue.split("").reverse().join("");
		// };
		// watch(message, reverseFunction);
		// //최초 실행일 때 watch의 newValue의 값이 없다. 그렇기에 message.value를 넣어준다.
		// reverseFunction(message.value);
		// return { message, reverseMessage };

		// 3) 세 번째 방법
		const reverseFunction = () => {
			reverseMessage.value = message.value.split("").reverse().join("");
		};
		watch(message, reverseFunction);
		reverseFunction();
		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
