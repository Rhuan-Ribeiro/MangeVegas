<script setup lang="ts">
import { ref, onMounted, defineExpose } from 'vue';

const iconMap = ["heart", "grape" , "bell", "clover", "spades" , "star", "orange", "moneybag" , "clubs"];
const icon_width = 79;
const icon_height = 79;
const num_icons = 9;
const time_per_icon = 100;
const indexes = ref<number[]>([0, 0, 0]);

const roll = (reel: HTMLElement, offset = 0): Promise<number> => {
  const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
  
  return new Promise((resolve) => {
    const style = getComputedStyle(reel);
    const backgroundPositionY = parseFloat(style.getPropertyValue("background-position-y"));
    const targetBackgroundPositionY = backgroundPositionY + delta * icon_height;
    const normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);
    
    setTimeout(() => {
      reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
      reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
    }, offset * 150);
    
    setTimeout(() => {
      reel.style.transition = `none`;
      reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
      resolve(delta % num_icons);
    }, (8 + 1 * delta) * time_per_icon + offset * 150);
  });
};

const rollAll = () => {
  console.log("Rolando...");
  
  const reelsList = document.querySelectorAll<HTMLElement>('.slots > .reel');
  
  Promise.all([...reelsList].map((reel, i) => roll(reel, i)))
    .then((deltas) => {
      deltas.forEach((delta, i) => indexes.value[i] = (indexes.value[i] + delta) % num_icons);
      console.log("Resultado:", indexes.value.map(i => iconMap[i]).join(' - '));

	  if (indexes.value[0] === indexes.value[1] || indexes.value[0] === indexes.value[2]  || indexes.value[1] === indexes.value[2]) {
		let winCls: string;
		if (indexes.value[0] === indexes.value[1] && indexes.value[0] === indexes.value[2]) {
			winCls = "win2";
			console.log("Premio máximo! Ganhou");
		} else {
			winCls = "win1";
			console.log("Premio de consoloção.");
		}

        const slotsElement = document.querySelector(".slots") as HTMLElement;
        if (slotsElement) {
          slotsElement.classList.add(winCls);
          setTimeout(() => slotsElement.classList.remove(winCls), 2000);
        }
      } else {
		console.log("Perdeu, otário!");
	  }
    });
};

defineExpose({ rollAll });
</script>

<template>
    <div id="machine">
		<div class="slots">
			<div class="reel"></div>
			<div class="reel"></div>
			<div class="reel"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
$icon_width: 79px;
$icon_height: 79px;
$num_icons: 9;

#machine {
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(45deg, grey 0%, lightgray 100%);
}

.slots {
	position: relative;
	width: calc(3.5 * $icon_width);
	height: calc(3.6 * $icon_height);
	display: flex;
	justify-content: space-between;
	padding: 0.3 * $icon_width;
	background: linear-gradient(45deg, grey 0%, lightgray 100%);
	border-top: 1px solid rgba(white, 0.6);
	border-right: 1px solid rgba(white, 0.6);
	border-left: 1px solid rgba(black, 0.4);
	border-bottom: 1px solid rgba(black, 0.4);
	box-shadow: -2px 2px 3px rgba(black, 0.3);
	border-radius: 3px;
	
	&::before, 
	&::after {
		content:"";
		position: absolute;
		top: 50%;
		width: 10px;
		height: 2px;
		background-color: rgba(black, 0.5);
	}
	
	&::before {
		left: 0;
		transform: translate(-200%, -50%);
	}
	
	&::after {
		right: 0;
		transform: translate(200%, -50%);
	}
	
	@keyframes win1 {
		0% { background: linear-gradient(45deg, orange 0%, yellow 100%); 
		box-shadow: 0 0 80px orange }
		100% { background: linear-gradient(45deg, grey 0%, lightgrey 100%); box-shadow: -2px 2px 3px rgba(black, 0.3); }
	}
	
	@keyframes win2 {
		0% { background: linear-gradient(45deg, lightblue 0%, lightgreen 100%); 
		box-shadow: 0 0 80px lightgreen }
		100% { background: linear-gradient(45deg, grey 0%, lightgrey 100%); box-shadow: -2px 2px 3px rgba(black, 0.3); }
	}
	
	&.win1 {
		animation: win1 200ms steps(2, end) infinite;
	}
	
	&.win2 {
		animation: win2 200ms steps(2, end) infinite;
	}

	.reel {
		position: relative;
		width: $icon_width;
		height: calc(3 * $icon_height);
		border: 1px solid rgba(black, 0.3);
		border-radius: 3px;
		overflow: hidden;
		background-image: url(/slotreel.jpg);
		background-position: 0 0;
		background-repeat: repeat-y;
		
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(rgba(black, 0.4) 0%, transparent 30%, transparent 70%, rgba(black, 0.4) 100%);
			box-shadow: inset 0 0 6px 2px rgba(black, 0.3);
		}

	}
	
}

</style>