<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
  '/machine-images/1.jpg', // Substitua pelos caminhos reais das suas ns
  '/machine-images/1.png', // Substitua pelos caminhos reais das suas ns
  '/machine-images/2.png',
  '/machine-images/3.png',
  '/machine-images/4.png',
  '/machine-images/5.png',
  '/machine-images/6.png',
  '/machine-images/7.png',
  '/machine-images/8.png',
  '/machine-images/9.png',
]);

const visibleImages = ref([0, 1, 2]); // Índices das imagens visíveis
const intervalId = ref<number | null>(null);
const totalImages = images.value.length;
const finalResult = ref<number | null>(null); // Variável para armazenar o resultado final

const startRolling = () => {
  if (intervalId.value) return; // Evita iniciar múltiplos intervalos

  intervalId.value = setInterval(() => {
    // Rotaciona os índices para a esquerda
    visibleImages.value = visibleImages.value.map(index => (index + 1) % totalImages);
  }, 200); // Ajuste a velocidade conforme necessário

  setTimeout(stopRolling, 3000); // Dura 3 segundos antes de parar
};

const stopRolling = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;

    // Armazena o resultado final (índice do item 1)
    finalResult.value = visibleImages.value[0];
    console.log('Resultado final:', finalResult.value); // Você pode visualizar o resultado no console
  }
};

</script>

<template>
  <main>
    <div class="slot-column">
      <div class="slot-images">
        <img v-for="(imageIndex, index) in visibleImages" 
             :key="index" 
             :src="images[imageIndex]" 
             alt="Slot Image" 
             class="slot-image" />
      </div>
    </div>
    <button @click="startRolling">Iniciar Rolagem</button>
  </main>
</template>

<style scoped lang="scss">
.slot-column {
  height: 200px; // Altura da coluna
  overflow: hidden;
  position: relative;
}

.slot-images {
  display: flex;
  flex-direction: column; // Organiza as imagens na vertical
  transform: translateY(0); // Para centralizar as imagens
  transition: transform 0.5s ease; // Transição suave
}

.slot-image {
  width: 50px; // Ajuste para o tamanho desejado
  height: auto; // Mantém a proporção
}
</style>