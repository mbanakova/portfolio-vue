<template>
	<section id="sec-4" class="sertificates">
		<div class="sertificates__wrapper">
			<h2>Sertificates:</h2>
			<ul class="list">
				<li
					class="list__group school card"
					v-for="(item, key) in getSertificates"
					:key="key"
				>
					<h3 class="school__title">{{ item.school }}</h3>
					<ul class="school__list">
						<li v-for="(course, key) in item.courses" :key="key">
							<a class="school__link" :href="course.link" target="_blank">
								<p>{{ course.title }}</p>
								<p class="school__date">{{ course.date }}</p>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getSertificates"]),
	},
};
</script>

<style lang="scss" scoped>
.sertificates__wrapper {
	@include wrapper();
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
}
.list {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.school {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.school__date {
	color: $med-grey;
}
.school__link {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	padding: 5px;
	text-decoration: none;
	color: inherit;
	font-family: $mono;
}
</style>
