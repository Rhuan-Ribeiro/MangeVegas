<template>
    <footer>
      <img id="razor-bottom" decoding="async" src="/razor-bottom.svg" alt="">
      <div id="footer-content">
        <div id="footer-info">
          <div id="findme">
            <span>ENCONTRE-ME EM:</span>
            <a href="https://github.com/Rhuan-Ribeiro" target="_blank"><i class="pi pi-github"></i></a>
            <a href="https://linkedin.com/in/rhuan-ribeiro" target="_blank"><i class="pi pi-linkedin"></i></a>
            <a href="mailto:rhuan.augusto.ribeiro@gmail.com" target="_blank"><i class="pi pi-envelope"></i></a>
          </div>
        <img src="/rating.png" alt="">
        </div>
        
        <div id="footer-copyright">
          <a href="https://www.cdprojektred.com/" target="_blank" ><img id="cd-projekt" src="/CDProjektRed.svg" alt=""></a>
          <span>&#169 2024 Rhuan Ribeiro. Todos os direitos reservados. Este site foi desenvolvido como um exercício acadêmico, inspirado no design do Cyberpunk 2077. Os elementos visuais e estilísticos utilizados são de propriedade da CD PROJEKT S.A., e os direitos relacionados ao Cyberpunk, Cyberpunk 2077 e seus logotipos são marcas registradas da CD PROJEKT S.A. nos EUA e/ou em outros países. O uso destes elementos é exclusivo para fins educacionais e não tem intenção comercial.</span> 
        </div>
      </div>
    </footer>
</template>

<style scoped lang="scss">
  footer {
    background-color: var(--black);

    #razor-bottom {
      transform: scaleY(-1);
      background-color: var(--neon-yellow);

    }

    #footer-content {
      padding: 1.5rem 8rem;

      #footer-info {
        display: flex;
        justify-content: space-between;
        #findme span {
          font-family: 'BlenderProBold';
        }
      }

      span {
        color: var(--white);
        font-size: 1.5rem;
        font-weight: 700;
      }

      a {
        cursor: pointer;
        margin-left: 20px;

        i {
        color: var(--neon-cyan);
        font-size: 1.75rem;
        }
      }

      img {
        width: 40px;
      }

      #footer-copyright {
        display: flex;
        align-items: center;
        gap: 40px;

        img {
          width: 169px;
          height: 73px;
        }

        span {
          color: var(--white);
          font-size: 1rem;
          font-weight: 200;
        }
      }
    }
  }
</style>