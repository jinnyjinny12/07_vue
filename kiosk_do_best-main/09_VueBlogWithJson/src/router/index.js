import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '@/views/DetailsView.vue'
import HomeView2 from '../views/HomeView2.vue'
import DeCoffee from '../views/DeCoffee.vue'
import Smoothie from '../views/Smoothie.vue'
import TeaAde from '../views/TeaAde.vue'
import Dessert from '../views/Dessert.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/home2',
      name: 'home2',
      component: HomeView2
    },{
      path: '/deCoffee',
      name: 'decoffee',
      component: DeCoffee
    },
    {
      path: '/smoothie',
      name: 'smoothie',
      component: Smoothie
    },
    {
      path: '/teaAde',
      name: 'teaAde',
      component: TeaAde
    },
    {
      path: '/dessert',
      name: 'dessert',
      component: Dessert
    },
    {
        path: '/:category/:id',
        name: 'detail',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: DetailsView//() => import('../views/AboutView.vue')
    }
  ]
})

export default router
