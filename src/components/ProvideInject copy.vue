<template>
	<div class="container py-4">
		<Child></Child>
	</div>
</template>

<script>
import Child from "./Child.vue";
export default {
	components: {
		Child,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
