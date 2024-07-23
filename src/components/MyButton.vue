<template>
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
		<!-- {{ $attrs }}-->
	</div>
</template>

<script>
export default {
	//inheritAttrs: false,
	emits: ["click"],
	setup(props, { emit }) {
		//context.attrs
		// console.log("context.attrs:", context.attrs);
		// console.log("context.attrs:", context.attrs.class);
		// console.log("context.attrs:", context.attrs.id);
		// console.log("context.attrs:", context.attrs.onClick);
		//context.attrs.onClick
		const sayHello = () => {
			emit("click");
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
