<template>
	<section id="sec-5" class="tasks">
		<div class="tasks__wrapper">
			<h2>Test tasks & freelance:</h2>

			<ul class="list">
				<li class="list__item" v-for="(task, key) in getTasks" :key="key">
					<a class="list__link" :href="task.link" target="_blank">
						<img :src="task.img" alt="" />
						<p>{{ task.description }}</p>
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: { ...mapGetters(["getTasks"]) },
};
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
	gap: 20px;
}

.list__link {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;

	& img {
		object-fit: cover;
		object-position: center;
		height: 100%;
	}

	& p {
		position: absolute;
		opacity: 0;
		left: 0;
		bottom: 0;
		padding: 20px;
		width: 100%;
		text-align: center;
		color: $white;
		transition: $tr;
		background-color: rgba(9, 43, 93, 0.8);
	}

	&:hover p {
		opacity: 1;
	}
}
</style>
