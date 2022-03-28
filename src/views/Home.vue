<template>
	<main>
		<Hero />
		<Skills />
		<PetProjects />
		<Sertificates />
		<Tasks />
	</main>
</template>

<script>
import Hero from "@/components/blocks/Hero.vue";
import Skills from "@/components/blocks/Skills.vue";
import PetProjects from "@/components/blocks/PetProjects.vue";
import Sertificates from "@/components/blocks/Sertificates.vue";
import Tasks from "@/components/blocks/Tasks.vue";

export default {
	name: "Home",
	components: {
		Hero,
		Skills,
		PetProjects,
		Sertificates,
		Tasks,
	},
};
</script>
<style lang="scss" scoped>
section {
	min-height: 100vh;
	background-color: $light;
	padding-top: 123px;
	padding-bottom: 40px;
	display: flex;

	&:nth-of-type(even) {
		background-color: $grey;
	}
}
</style>
