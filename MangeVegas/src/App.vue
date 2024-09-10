<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import 'primeicons/primeicons.css'
</script>

<template>
  <div>
    <Header/>
    

    <main>
      <RouterView />
    </main>

  <Footer/>
    
  </div>
</template>

<style scoped>
</style>
