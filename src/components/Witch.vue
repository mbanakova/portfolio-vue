<template>
	<div class="container">
		<div class="witch">
			<div class="hat"></div>
			<div class="hair"></div>
			<div class="face">
				<div class="eye eye-left"></div>
				<div class="eye eye-right"></div>
				<div class="mouth"></div>
			</div>
			<div class="dress">
				<div class="left-hand">
					<div class="stick">
						<div class="info">
							<div class="error">Send offers!</div>
						</div>
					</div>
				</div>
				<div class="right-hand"></div>
			</div>
		</div>
		<div class="wood">
			<div class="wood-1"></div>
			<div class="wood-2"></div>
			<div class="wood-3"></div>
		</div>
		<div class="fire">
			<div class="red flame"></div>
			<div class="orange flame"></div>
			<div class="yellow flame"></div>
			<div class="white flame"></div>
		</div>
		<div class="fire-left">
			<div class="red flame"></div>
			<div class="orange flame"></div>
			<div class="yellow flame"></div>
			<div class="white flame"></div>
		</div>
		<div class="fire-right">
			<div class="red flame"></div>
			<div class="orange flame"></div>
			<div class="yellow flame"></div>
			<div class="white flame"></div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$accent: #0062ff;
$hat: #48072d;
$hair: #f97a00;
$skin: #fae3c4;
$wood: #a56c2a;

.container {
	height: 480px;
	width: 330px;
	position: relative;
	right: 0;

	@media (max-width: $tablet) {
		position: absolute;
		right: 100px;
	}

	@media (max-width: $mobile) {
		width: 300px;
		right: unset;
		left: -50px;
		position: relative;
	}
}

.witch {
	position: absolute;
	top: 120px;
	left: 50%;
	transform: translateX(-50%);

	@media (max-width: $mobile) {
		top: 100px;
	}
}

.hair {
	position: absolute;
	top: 20px;
	left: 50%;
	z-index: 1;
	transform: translateX(-50%);
	height: 0;
	width: 125px;
	border-bottom: 160px solid $hair;
	border-left: 17px solid transparent;
	border-right: 17px solid transparent;
}

.face {
	position: absolute;
	background-color: $skin;
	background: linear-gradient(to bottom, $skin, #f5f4f4);
	height: 60px;
	width: 80px;
	border-radius: 0 0 50px 50px;
	top: 15px;
	z-index: 10;
	left: 50%;
	top: 34px;
	transform: translateX(-50%);
	box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.eye {
	position: absolute;
	background-color: #081e19;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	top: 11px;
	left: 14px;
}

.eye-left {
	box-shadow: 0 -1px 0 4px #fff, inset 0 0 0 3px #168c7e;
}
.eye-right {
	left: unset;
	right: 14px;
	box-shadow: 0 -1px 0 4px #fff, inset 0 0 0 3px #1d970d;
}
.mouth {
	position: absolute;
	background-color: #e63363;
	bottom: 14px;
	left: 50%;
	transform: translateX(-50%);
	width: 22px;
	height: 4px;
}

.hat {
	background-color: $hat;
	width: 160px;
	height: 25px;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -37px;
	z-index: 20;
	box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.4);

	&::before {
		position: relative;
		content: "";
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 100px solid $hat;
		bottom: 95px;
		left: 28px;
	}

	&::after {
		content: "";
		position: absolute;
		left: 75px;
		top: -73px;
		border: 10px solid transparent;
		border-left: 45px solid $hat;
		bottom: 95px;
		z-index: 1;
		transform: rotate(20deg);
	}
}

.dress {
	position: absolute;
	width: 150px;
	height: 0;
	top: 90px;
	left: 50%;
	transform: translateX(-50%);
	border-bottom: 180px solid $hat;
	border-left: 40px solid transparent;
	border-right: 40px solid transparent;
	z-index: 2;
}

.left-hand {
	background-color: $hat;
	position: absolute;
	left: 68px;
	height: 30px;
	width: 90px;
	transform: rotate(-20deg);
	bottom: -30px;
	transform-origin: left;
	animation: wave 2s infinite;

	&::before {
		position: absolute;
		content: "";
		height: 25px;
		width: 15px;
		background-color: $skin;
		border-radius: 0 15px 15px 0;
		top: 50%;
		right: -14px;
		transform: translateY(-50%);
	}

	&::after {
		position: absolute;
		content: "";
		width: 10px;
		height: 10px;
		z-index: 20;
		top: 2px;
		right: -9px;
		border-radius: 0 5px 5px 0;
		background-color: $skin;
	}
}

.stick {
	position: absolute;
	bottom: -25px;
	right: -14px;
	transform: rotate(15deg);
	width: 10px;
	height: 110px;
	border-radius: 5px;
	background: linear-gradient(45deg, #9b5a10 50%, #9d6421 50%);
	background-size: 6px 10px;
}

.info {
	width: 120px;
	height: 80px;
	background: linear-gradient(to right, #9b5a10 50%, #9d6421 50%);
	background-size: 6px 100%;
	border-radius: 10px;
	position: absolute;
	top: -65px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 25;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.error {
	font-size: 20px;
	font-weight: 700;
	text-align: center;
	color: #e6ff03;
	letter-spacing: 5px;
}

.right-hand {
	background-color: $hat;
	position: absolute;
	left: -58px;
	height: 30px;
	width: 100px;
	transform: rotate(-65deg);
	top: 37px;

	&::before {
		position: absolute;
		content: "";
		height: 25px;
		width: 15px;
		background-color: $skin;
		border-radius: 15px 0 0 15px;
		top: 50%;
		left: -14px;
		transform: translateY(-50%);
	}
}

.fire {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	animation: burning 2ms ease-in infinite;
	z-index: 10;
}

.fire-left {
	left: 30%;
	transform: translateX(-50%);
}

.fire-right {
	right: 30%;
	transform: translateX(-50%);
}

.fire-left,
.fire-right {
	position: absolute;
	bottom: -10px;
	animation: burning 5ms ease-in infinite;

	& .red {
		width: 80px;
		height: 80px;
	}

	& .orange {
		width: 60px;
		height: 60px;
	}

	& .yellow {
		width: 40px;
		height: 40px;
	}

	& .white {
		width: 20px;
		height: 20px;
	}
}

.flame {
	position: absolute;
	bottom: 0;
	left: 50%;
	border-radius: 50% 0 50% 50%;
	transform: translateX(-50%) rotate(-45deg);
}

.red {
	width: 100px;
	height: 100px;
	background-color: #f00;
	box-shadow: 0 0 80px 10px #f00;
	filter: blur(2px);
}

.orange {
	left: 0;
	width: 80px;
	height: 80px;
	background-color: #ff9000;
	box-shadow: 0 0 30px 10px #ff9000;
	filter: blur(4px);
}

.yellow {
	left: 0;
	bottom: 10px;
	width: 50px;
	height: 50px;
	background-color: #fff200;
	box-shadow: 0 0 10px 2px #fff200;
	filter: blur(6px);
}

.white {
	left: 0;
	bottom: 5px;
	width: 30px;
	height: 30px;
	background-color: rgba(255, 255, 255, 0.7);
	box-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
	filter: blur(5px);
}

.wood-1,
.wood-2,
.wood-3 {
	position: absolute;
	width: 140px;
	height: 20px;
	bottom: -10px;
	left: 50%;
	background-color: darken($wood, 30%);
	transform: translateX(-50%) rotate(-20deg);
}

.wood-2 {
	width: 60px;
	height: 20px;
	transform: translateX(-50%) rotate(-80deg);
}

.wood-3 {
	transform: translateX(-50%) rotate(20deg);
}

@keyframes burning {
	0% {
		transform: rotate(-1deg);
	}

	20% {
		transform: rotate(2deg);
	}

	40% {
		transform: rotate(-1deg) scaleY(1.07);
	}

	60% {
		transform: rotate(1deg);
	}

	80% {
		transform: rotate(-2deg) scaleY(0.95);
	}

	100% {
		transform: rotate(1deg);
	}
}

@keyframes wave {
	50% {
		transform: rotate(5deg);
	}
}
</style>
