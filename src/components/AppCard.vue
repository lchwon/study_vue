<template>
	<div class="card">
		<div class="card-body">
			{{ classes }}
			<h5 class="card-title red">Card title</h5>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

console.log("AppCard module");
export default {
	setup() {
		console.log("AppCard setup()");

		const color = ref("red");
		color.value = "red";
		return { color };
	},
};
</script>

<style>
.red {
	color: v-bind(color) !important;
}
</style>

<!-- <style module="classes">
.red {
	color: red !important;
}
</style> -->

<!--<style scoped>
.red {
	color: red !important;
}
</style>-->
