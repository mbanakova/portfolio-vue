<template>
	<header>
		<div class="header-wrapper">
			<TheNav />
		</div>
	</header>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
export default {
	components: {
		TheNav,
	},
};
</script>

<style lang="scss" scoped>
header {
	background-color: $dark;
	padding: 25px 0;
	color: $accent;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	font-family: $mono;
	z-index: 1;
}

.header-wrapper {
	@include wrapper();
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
</style>
