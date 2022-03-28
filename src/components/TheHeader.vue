<template>
	<header>
		<div class="header-wrapper">
			<a
				href="https://github.com/mbanakova"
				class="header__github"
				target="_blank"
				><img src="@/assets/github.svg" alt="My github" title="My github"
			/></a>
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
	z-index: 100;
}

.header-wrapper {
	@include wrapper();
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;

	& img {
		width: 40px;
		height: 40px;
	}
}
</style>
