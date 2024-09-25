<template>
    <footer>
      <img id="razor-bottom" decoding="async" src="/razor-bottom.svg" alt="">
      <div id="footer-content">
        <div id="footer-info">
          <div id="findme">
            <span>{{ $t('FOOTER.FINDME') }}</span>
            <a href="https://github.com/Rhuan-Ribeiro" target="_blank"><i class="pi pi-github"></i></a>
            <a href="https://linkedin.com/in/rhuan-ribeiro" target="_blank"><i class="pi pi-linkedin"></i></a>
            <a href="mailto:rhuan.augusto.ribeiro@gmail.com" target="_blank"><i class="pi pi-envelope"></i></a>
          </div>
        <img src="/rating.png" alt="">
        </div>
        
        <div id="footer-copyright">
          <a href="https://www.cdprojektred.com/" target="_blank" ><img id="cd-projekt" src="/CDProjektRed.svg" alt=""></a>
          <span>&#169 {{ $t('FOOTER.COPYRIGHT') }}</span> 
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
      width: 100vw;
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
        text-transform: uppercase;
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