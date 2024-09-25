<script setup lang="ts">

</script>

<template>
  <main>
    <div class="flex justify-content-around align-items-center">
      <img src="https://media.tenor.com/Fe7gfo9_2ecAAAAi/sad-v.gif" />
      <div class="flex flex-column justify-content-center align-items-start">
        <span>Página Não Encontrada!</span>
        <RouterLink to="/">< Volte para a Home</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 90vh;
  background-color: var(--neon-yellow);

  div {
    height: 100%;

    img {
      height: 70vh; /* Para preencher o contêiner */
      object-fit: cover; /* Para manter a proporção da imagem */
    }


    span {
      font-size: 5rem;
      font-family: 'BlenderProBold';
    }

    a {
      padding: 0.5rem;
      border: 4px solid #111;
      font-size: 3rem;
      color: #FFF;
      text-decoration: none;
      background-color: rgba($color: #000, $alpha: 0.6);
    }
  }
}

</style>
