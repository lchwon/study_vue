<template>
	<div>
		<!-- <h2>{{ teacher.name }}</h2> -->
		<!-- <h3>강의가 있습니까?</h3> -->
		<!-- <p>{{ teacher.lectures.length > 0 ? "있다." : "없다." }}</p> -->
		<!-- <p>{{ hasLecture }}</p> -->
		<!-- 메소드기떄문에 끝에 괄호를 넣어줘야 한다. -->
		<!-- <p>{{ existLecture() }}</p> -->
		<h2>{{ fullName }}</h2>
	</div>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
	setup() {
		const teacher = reactive({
			name: "채원",
			lectures: ["HTML/CSS", "JavaScirpt", "Vue3"],
		});

		//arrow function은 명령어가 하나일 때 return과 중괄호를 뺼 수 있다.
		// const hasLecture = computed(() => {
		// 	return teacher.lectures.length > 0 ? "있다." : "없다.";
		// });
		const hasLecture = computed(() => {
			console.log("computed");
			return teacher.lectures.length > 0 ? "있다." : "없다.";
		});

		const existLecture = () => {
			console.log("method");
			teacher.lectures.length > 0 ? "있다." : "없다.";
		};

		const firstName = ref("홍");
		const lastName = ref("길동");
		const fullName = computed({
			get() {
				//주고

				return firstName.value + " " + lastName.value;
			},
			set(value) {
				//받고
				console.log("value:", value);
				//1. firstName과 lastName으로 나누기 위해 값을 받고 split(띄어쓰기)로 값을 나눈다.
				console.log(value.split(" "));
				//2. 그리고 구조분해 할당해서 -> 기존에 있던 변수에 할당 한다.
				[firstName.value, lastName.value] = value.split(" ");
				console.log("firstName:", firstName.value);
				console.log("lastName:", lastName.value);
			},
		});
		console.log("console 출력:", fullName.value);
		//변경되는 값
		fullName.value = "이 재우";
		return {
			teacher,
			hasLecture,
			existLecture,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
