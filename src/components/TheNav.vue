<template>
	<nav>
		<a class="nav-link" href="#sec-1" v-smooth-scroll>Hero</a>
		<a class="nav-link" href="#sec-2" v-smooth-scroll>Skills</a>
		<a class="nav-link" href="#sec-3" v-smooth-scroll>Projects</a>
		<a class="nav-link" href="#sec-4" v-smooth-scroll>Sertificates</a>
		<a class="nav-link" href="#sec-5" v-smooth-scroll>Test tasks</a>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: center;
	gap: 30px;
}
.nav-link {
	text-decoration: none;
	color: inherit;
	padding: 5px 10px;
	border: 2px solid $accent;
	border-radius: 4px;
	display: block;

	&:hover {
		background-color: rgba(133, 190, 247, 0.5);
		color: $white;
	}

	@media (max-width: $mobile) {
		&:first-child,
		&:nth-child(3),
		&:nth-child(4) {
			display: none;
		}
	}
}
</style>
