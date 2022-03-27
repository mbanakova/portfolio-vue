<template>
	<footer>
		<div class="footer-wrapper">
			<div class="copyright">© mbanakova, {{ getYear }}</div>
			<ul class="contacts">
				<li>
					<a href="https://t.me/mbanakova"
						><font-awesome icon="paper-plane"
					/></a>
				</li>
				<li>
					<a href="tel:+79268757522"><font-awesome icon="phone" /></a>
				</li>
				<li>
					<a href="mailto:mbanakova@yandex.ru"
						><font-awesome icon="envelope"
					/></a>
				</li>
			</ul>
			<div class="framework">build on Vue.js</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			year: null,
		};
	},
	computed: {
		getYear() {
			return new Date().getFullYear();
		},
	},
};
</script>

<style lang="scss" scoped>
footer {
	background-color: $dark;
	padding: 25px 0;
	color: $accent;
	font-family: $mono;
}

.footer-wrapper {
	@include wrapper();
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.contacts {
	display: flex;
	justify-content: space-between;
	gap: 20px;

	& a {
		padding: 10px;
		border: 2px solid $accent;
		display: block;
		text-decoration: none;
		color: inherit;
		border-radius: 50%;
		line-height: 16px;
		transition: $tr;

		&:hover {
			color: $light;
			border-color: $light;
		}
	}

	& svg {
		width: 16px;
		height: 16px;
	}
}
</style>
