<template>
	<div>
		<!-- 3) button의 기본 속성은 submit이며 button을 클릭 시 form에 submit이 호출된다. -->
		<!-- 4) 저장 하였을 때 submit의 호출로 인해 새로고침이 발생하니 prevent를 넣어준다.-->
		<form @submit.prevent="save(title, contents)">
			<!-- 1) 양방향 바인딩을 위해서 v-model 사용-->
			<!-- 2) 매번 값이 변경되는게 아닌 focus가 떨어 졌을 때 값이 변경될 수 있도록 
				lazy를 추가한다.-->
			<input v-model.lazy="title" type="text" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<!-- 5) form에 아닌 button에 @click="save(title, contents)"로도 만들 수 있다. -->
			<!-- <button @click="save(title, contents)">저장</button> -->
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
	setup() {
		const title = ref("");
		const contents = ref("");
		//값을 저장하기 위한 메서드를 하나 만들어준다.
		const save = (title, contents) => {
			console.log(`저장되었습니다. title:${title}, contents:${contents}`);
		};

		watchEffect(() => {
			console.log("watchEffect");
			save(title.value, contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
