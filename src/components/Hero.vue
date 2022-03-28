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
					<a
						class="cta__link button"
						href="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-01.appspot.com/o/banakova-maria-CV.pdf?alt=media&token=99e1d94f-4509-4ad5-94db-38fcdcd5f41e"
						download="banakova-maria-CV.pdf"
						target="_self"
						>Download CV</a
					>
					<a class="cta__link button button--pale" href="#sec-3" v-smooth-scroll
						>See my pet-projects</a
					>
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
