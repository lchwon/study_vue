<template>
	<main>
		<div class="container text-center py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput label="이름" data-id="id입니다."></LabelInput>
			<hr />
			<FancyButton>Click!!<span style="color: blue">@</span></FancyButton>
			<FancyButton>
				<template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
			</FancyButton>
			<hr />
			<AppCard>
				<!-- <template #[slotArgs]>header입니다.</template> -->
				<!-- <template #default>내용입니다.</template> -->
				<!-- 암시적으로 Default 슬롯.
				<template #footer>footer입니다.</template> -->
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<template #default="{ childMessage, helloMessage }">
					디폴트 {{ message }}
					<br />
					{{ childMessage }}
					<br />
					{{ helloMessage }}
				</template>
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>
			<hr />
			<AppCard> 게시글입니다. </AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from "./MyButton.vue";
import LabelInput from "./LabelInput.vue";
import FancyButton from "./FancyButton.vue";
import AppCard from "@/components/AppCard.vue";
import { ref } from "vue";
export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert("안녕하세요");
		};
		const slotArgs = ref("header");
		const message = ref("ㅎㅇ");
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
