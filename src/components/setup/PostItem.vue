<template>
	<div class="card">
		<div class="card-body">
			<!-- type : new, notice -->
			<!-- <span class="badge text-bg-secondary">{{
				type == "news" ? "뉴스" : "공지사항"
			}}</span> -->
			<span class="badge text-bg-secondary"> {{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>

			<!-- v-if를 통해서 isLike가 true일 경우 위에 아닐경우 밑에 태그가 노출된다.-->
			<!-- <a href="#" v-if="isLike" class="btn btn-danger">좋아요</a>
			<a href="#" v-else class="btn btn-outline-danger">좋아요</a> -->

			<!-- computed를 이용한 태그 묶기 -->
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
console.log("nomal script setup");
</script>

<script setup>
import { computed } from "vue";

console.log("script setup");

const props = defineProps({
	//속성을 정의
	type: {
		type: String,
		default: "news",
		//타입이 명확히 들어가 있는지 유효성 검사를 진행한다. 만약 타입이 잘못 들어가 있으면 콘솔에 'Invalid prop'라는 오류를 볼 수 있다.
		validator: value => {
			return ["news", "notice"].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		//required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	//레퍼런스타입(객체, 배열 등) 디폴트를 설정할 때는 기본값을 반환하는 팩토리 함수를 선언해야 한다.
	obj: {
		type: Object,
		default: () => {
			return;
		},
	},
});

const emit = defineEmits(["toggleLike"]);

//console.log("props.title:", props.title);
// computed를 이용해 좋아요를 하나로 묶어보자
const isLikeClass = computed(() =>
	props.isLike ? "btn-danger" : "btn-outline-danger",
);

const typeName = computed(() => (props.type === "news" ? "뉴스" : "공지사항"));

const toggleLike = () => {
	emit("toggleLike");
};
</script>
<style></style>
