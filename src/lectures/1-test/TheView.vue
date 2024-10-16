<template>
	<main>
		<div class="container text-center py-4">
			<div class="row g-3">
				<div class="col col-4">
					<AppCard title="제목1" contents="내용1"></AppCard>
				</div>
				<div class="col col-4">
					<AppCard :title="post.title" :contents="post.contents"></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from "@/lectures/1-test/AppCard.vue";
import { reactive } from "vue";
export default {
	components: {
		AppCard,
	},
	setup() {
		//바인딩하여 사용할 수 있다.
		const post = reactive({
			title: "제목2",
			contents: "내용2",
		});
		return { post };
	},
};
</script>

<style lang="scss" scoped></style>
