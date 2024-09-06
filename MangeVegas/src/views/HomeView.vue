<script setup lang="ts">

</script>

<template>
  <main>
    <section id="intro">
      <h1>Vicêncie a experiência definitiva de Cyberpunk 2077</h1>
    </section>
    <section id="news">
      <img src="/razor.svg" style="height: auto;">
    </section>
    <section id="products">
      
      
    </section>
    
  </main>
</template>

<style scoped lang="scss">
#intro {
  height: 100vh;
  background-image: url(/poster.jpg);
  background-size: cover;   /* Ajusta o tamanho da imagem para cobrir o fundo */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat;
  display: flex;
  justify-content: left;
  align-items: center;

  h1 {
    max-width: 587px;
    margin-left: 50px;
    line-height: 90%;
    font-family: 'Refinery-25';
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 700;
    color: var(--black);
  }
}

#news {
  background-color: var(--black);
  height: 500px;
  position: relative;
  img {
    position: absolute;
    bottom: 0;
  }
}

#products {
  background-color: var(--neon-yellow);
  height: 500px;
}


</style>
