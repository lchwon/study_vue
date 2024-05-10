<template>
	<div></div>
</template>

<script>
import { ref, watch } from "vue";

export default {
	setup() {
		const message = ref("");
		//반응형(message)를 감지하고 콜백함수를 넘겨주는데 변화가 생겼을 때의 데이터(newValue)
		//기존값(oldValue)
		watch(message, (newValue, oldValue) => {
			console.log("newValue", newValue);
			console.log("oldValue", oldValue);
		});
		return { message };
	},
};
</script>

<style lang="scss" scoped></style>
