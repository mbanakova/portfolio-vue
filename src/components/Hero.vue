<template>
	<section id="sec-1" class="hero">
		<div class="hero__wrapper">
			<div class="hero__content">
				<h1>Hi!</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
					provident ea eius ex aspernatur eveniet fugiat quibusdam. Voluptatem
					possimus voluptatum magni porro iusto temporibus. Blanditiis.
				</p>
				<div class="hero__cta">
					<a class="cta__link button">Download CV</a>
					<a class="cta__link button button--pale" href="#sec-3" v-smooth-scroll
						>See my pet-projects</a
					>
				</div>
			</div>
			<Owl class="hero__img" />
		</div>
	</section>
</template>

<script>
import Owl from "@/components/Owl";
export default {
	components: {
		Owl,
	},
};
</script>

<style lang="scss" scoped>
.hero {
	background-color: #062534;
}
.hero__wrapper {
	@include wrapper();
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
}

.hero__content {
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 40px;
}

.hero__cta {
	display: flex;
	gap: 20px;
}

p {
	color: $light;
}
</style>
