<template>
	<section id="sec-2" class="skills">
		<div class="skills__wrapper">
			<h2>I use:</h2>
			<ul class="list">
				<li class="list__group card" v-for="(group, key) in skills" :key="key">
					<h3>{{ group.title }}:</h3>
					<ul class="list__skills">
						<li v-for="(item, key) in group.list" :key="key">{{ item }}</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import {useSkillsStore} from './../../pinia/skillsStore'
const store = useSkillsStore()
const skills = store.skills
</script>

<style lang="scss" scoped>
.skills__wrapper {
	@include wrapper();
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
}
.list {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;

	@media (max-width: $mobile) {
		gap: 20px;
		grid-template-columns: 1fr;
	}
}

.list__group {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.list__skills {
	display: flex;
	flex-direction: column;
	gap: 5px;
	font-family: $mono;

	& li {
		position: relative;
		padding-left: 20px;

		&::before {
			position: absolute;
			content: '';
			left: 0;
			top: 7px;
			width: 5px;
			height: 5px;
			transform: rotate(-45deg);
			background-color: $accent;
		}
	}
}
</style>
