<template>
	<div>
		<Hero />
		<Skills />
		<PetProjects />
		<Sertificates />
		<Landings />
	</div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Skills from "@/components/Skills.vue";
import PetProjects from "@/components/PetProjects.vue";
import Sertificates from "@/components/Sertificates.vue";
import Landings from "@/components/Landings.vue";

export default {
	name: "Home",
	components: {
		Hero,
		Skills,
		PetProjects,
		Sertificates,
		Landings,
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
