<template>
	<section id="sec-1" class="hero">
		<div class="hero__wrapper">
			<div class="hero__content">
				<h1>Hello!</h1>
				<p>My name is <span class="dev">Maria Banakova</span>, I'm a web-developer. Currently working for a&nbsp;men's fashion brand.<br />Aim to&nbsp;build modern reactive, highly perfomant interfaces and level up&nbsp;my&nbsp;coding skill 🤗</p>
				<div class="hero__cta">
					<a class="cta__link button" href="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-01.appspot.com/o/mbanakova-js.pdf?alt=media&token=8fea9ba4-fbaa-4bdc-929e-1dd68c1722ca" download="mbanakova-js.pdf" target="_self">Download CV</a>
					<a class="cta__link button button--pale" href="#sec-3" v-smooth-scroll>See my pet-projects</a>
				</div>
			</div>
			<Witch class="hero__img" />
		</div>
	</section>
</template>

<script>
import Witch from "@/components/Witch";
export default {
	components: {
		Witch,
	},
};
</script>

<style lang="scss" scoped>
.hero {
	background-image: linear-gradient(to bottom right, #011017, #0b3144);
}
.hero__wrapper {
	@include wrapper();
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;

	@media (max-width: $tablet) {
		gap: 0;
		justify-content: flex-start;
	}

	@media (max-width: $mobile) {
		flex-direction: column;
		padding-bottom: 30px;
	}
}

.hero__content {
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 40px;
	@media (max-width: $tablet) {
		padding: 20px;
		position: relative;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 4px;
	}

	@media (max-width: $mobile) {
		width: 100%;
	}
}
.dev {
	color: $accent;
}
.hero__cta {
	display: flex;
	gap: 20px;
	@media (max-width: $tablet) {
		flex-direction: column;
	}
}

p {
	color: $light;
}
</style>
