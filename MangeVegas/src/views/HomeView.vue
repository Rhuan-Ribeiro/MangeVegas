<script setup lang="ts">
  

</script>

<template>
  <main>
    <section id="intro">
      <h1>Vicêncie a experiência definitiva de Cyberpunk 2077</h1>
    </section>
    <div id="bar"></div>
    <section id="news">
      <ul>
        <li></li>
      </ul>
      <a href="">Mais Notícias</a>
    </section>
    <section id="about">
      <h2>Te damos boas vindas ao futuro sombrio</h2>
      <p class="mb-4">Explore a atmosfera futurista que remete ao icônico mundo de Cyberpunk 2077. Descubra as histórias fascinantes e desafios emocionantes na vibrante e perigosa Night City, enquanto desfruta de uma experiência de cassino inovadora e totalmente tematizada.</p>
      <div id="separator-top"></div>
      <img src="/casino.jpg" alt="">
      <div id="separator-bottom"></div>
      <h2 class="mt-4">O Cassino da Distopia</h2>
      <p>Mergulhe no cassino imersivo inspirado no universo de Cyberpunk 2077, onde o futuro se encontra com o entretenimento de uma maneira única! Este exercício acadêmico, desenvolvido exclusivamente para fins educacionais, <strong><u>não tem finalidade lucrativa.</u></strong></p>
    </section>
    
  </main>
</template>

<style scoped lang="scss">
#intro {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: left;
  align-items: center;
  

  background-image: url(/poster.jpg);
  background-size: cover;   /* Ajusta o tamanho da imagem para cobrir o fundo */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat;
  

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

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%);
    pointer-events: none; /* Garante que o pseudo-elemento não interfira nos eventos do mouse */
    
  }
}

#news {
  height: 500px;
  background-color: var(--black); 
  position: relative;
  padding: 0 40px 48px;

  &::after {
    background-image: url(/razor.svg);
    height: 48px;
    width: 100%;
    
    position: absolute;
    bottom: 0;
    left: 0;

    content: "";
  }

  a {
    border-image: url(https://www.cyberpunk.net/build/images/cp-btn-cyan-1867afd5.svg) 0 20 fill;
    color: var(--neon-cyan);

    align-items: center;
    border-style: solid;
    border-width: 0 20px;
    cursor: pointer;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    min-width: 232px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-user-select: none;
    user-select: none;

    font-family: 'BlenderProBold',sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }

  ul {
    grid-gap: 16px 0;
    display: grid;
    grid-template-columns: 48.9130434783% 6.4130434783% 19.1304347826% 2.1739130435% 19.1304347826% 4.2391304348%;
    grid-template-rows: repeat(2,minmax(16.5217391304%,auto));
    list-style: none;
    margin: 0;
    padding: 0;
  }
}


#about {
  background-color: var(--neon-yellow);
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 46px 0;
  justify-content: center;
  text-align: center;

  h2 {
    font-family: 'Refinery-25';
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 22px;
    font-style: normal;
    line-height: 120%;
    font-family: BlenderProBook,sans-serif;
    font-weight: 400;
    max-width: 820px;
  }
  #separator-top {
    background-image: linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000),linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),#000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),#fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000);
    background-repeat: no-repeat;
    background-size: 100% 2px,100% 28px;
    height: 28px;
    margin-bottom: 10px;
    width: 47.2916666667vw;
  }

  #separator-bottom {
    background-image: linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),#000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),#fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000),linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000);
    background-repeat: no-repeat;
    background-size: 100% 26px,100% 28px;
    height: 28px;
    margin-top: 10px;
    width: 47.2916666667vw;
  }

  img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 8px solid black;
  }
}


</style>
