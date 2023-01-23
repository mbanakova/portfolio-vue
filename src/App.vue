<template>
	<TheHeader />
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"> </component> </transition
	></router-view>
	<TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
	components: {
		TheHeader,
		TheFooter,
	},
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Mono&display=swap');
</style>
