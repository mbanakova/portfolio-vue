<template>
	<section id="sec-5" class="tasks">
		<div class="tasks__wrapper">
			<h2>Test tasks & freelance:</h2>

			<ul class="list">
				<li class="list__item" v-for="(task, key) in tasks" :key="key">
					<img :src="task.img" :alt="task.title" />
					<div class="list__info">
						<p>{{ task.description }}</p>
						<a class="list__link" :href="task.link" target="_blank"
							>visit the website</a
						>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import {useTasksStore} from './../../pinia/tasksStore'
const store = useTasksStore()
const tasks = store.tasks
</script>

<style lang="scss" scoped>
.tasks__wrapper {
	@include wrapper();
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
}

.list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	@media (max-width: $tablet) {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
