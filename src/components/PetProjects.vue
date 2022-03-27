<template>
	<section id="sec-3" class="pets">
		<div class="pets__wrapper">
			<h2>PetProjects</h2>
			<ul class="list">
				<li class="list__group" v-for="(project, key) in getPets" :key="key">
					<a :href="project.link" target="_blank">
						<h3>{{ project.title }}</h3>
					</a>
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
	gap: 10px;
}

.list__group {
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 40px;
	border: 1px solid $accent;
	background-color: $white;
}
</style>
