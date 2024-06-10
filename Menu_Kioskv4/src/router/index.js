import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Popupview from '@/views/Popupview.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/popup',
      name: 'popup',
      component: Popupview

    }
  ]
});

export default router;
