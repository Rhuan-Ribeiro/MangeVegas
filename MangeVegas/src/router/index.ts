import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SlotMachineView from '@/views/SlotMachineView.vue'
import TokensView from '@/views/TokensView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/slot-machine',
      name: 'slot-machine',
      component: SlotMachineView
    },
    {
      path: '/tokens',
      name: 'tokens',
      component: TokensView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    },
  ]
})

export default router
