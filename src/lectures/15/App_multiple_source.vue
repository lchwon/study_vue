<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		//watch의 첫 번째 매개변수로 getter를 사용하여 두 수의 합을 감지할 수 있다.
		//getter은 값을 반환한다.!
		// watch(function () {
		// 	return x.value + y.value;
		// });

		//아래와 같은 내용 (arrow를 사용 안 했을 때)
		// watch(
		// 	function () {
		// 		return x.value + y.value;
		// 	},
		// 	function (sum, oldValue) {
		// 		console.log("sum: ", sum);
		// 		console.log("oldValue", oldValue);
		// 	},
		// );

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log("sum: ", sum);
		// 		console.log("oldValue: ", oldValue);
		// 	},
		// );

		//Array
		//이렇게 배열로 값을 넣으면 받는 값 또한 배열로 받는다.
		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		//object
		// console.log(typeof obj.count);
		// watch(
		// 	() => obj.count,
		// 	(newObj, oldObj) => {
		// 		console.log("newObj: ", newObj);
		// 	},
		// );
		// watch(obj, (newObj, oldObj) => {
		// 	console.log("newObj: ", newObj);
		// 	console.log("oldObj: ", oldObj);
		// });

		const person = reactive({
			name: "이채원",
			age: "33",
			hobby: "운동",
			obj: {
				count: 0,
			},
		});

		watch(person, newValue => {
			console.log("newValue: ", newValue);
		});

		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
