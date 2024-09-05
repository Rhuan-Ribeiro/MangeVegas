<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import 'primeicons/primeicons.css'
</script>

<template>
  <div>
    <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/tokens">Tokens</RouterLink>
          <RouterLink to="/slot-machine">Slot Machine</RouterLink>
        </nav>
    </header>

    <main>
      <RouterView />
    </main>

  <Footer/>
    
  </div>
</template>

<style scoped>

</style>
