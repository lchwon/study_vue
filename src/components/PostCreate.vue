<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid">
			<!-- @click="$emit('createPost', 1, 2, 3, '길동')" -->
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	//emits: ["createPost"],

	//객체문법
	emits: {
		createPost: newPost => {
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
	},

	//구조분해 할당을 이용하려면 context를 빼고 { emit }를 넣어 활용할 수 있다.
	setup(props, { emit }) {
		//setup에 context를 빼고 { emit }를 넣음

		const type = ref("news");
		const title = ref("");

		//context.emit
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit("createPost", newPost);
			type.value = "news";
			title.value = "";
		};
		return { createPost, type, title };
	},
};
</script>

<style lang="scss" scoped></style>
