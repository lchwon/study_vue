<template>
	<div class="card">
		<div class="card-body">
			<!-- 항목에 맞게 넣어준다. -->
			<h5 class="card-title red">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
export default {
	//props라는 속성을 선언한다.
	props: ["title", "contents"],
	setup() {
		return {};
	},
};
</script>
<style></style>
