<template>
	<section id="sec-3" class="pets">
		<div class="pets__wrapper">
			<h2>Pet projects</h2>

			<ul class="list">
				<li class="list__item" v-for="(project, key) in getPets" :key="key">
					<img :src="project.img" :alt="project.title" />
					<div class="list__info">
						<p>{{ project.title }}</p>
						<a class="list__link" :href="project.link" target="_blank"
							>visit the website</a
						>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getPets"]),
	},
};
</script>

<style lang="scss" scoped>
.pets__wrapper {
	@include wrapper();
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
}

.list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	@media (max-width: $tablet) {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
