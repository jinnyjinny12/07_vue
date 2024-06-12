import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/Home.vue'
import ReMenu from '../components/menu/ReMenu.vue'
import DetailsView from '@/components/menu/DetailsView.vue'
import Coffee from '../components/menu/Coffee.vue'
import DeCoffee from '../components/menu/DeCoffee.vue'
import Smoothie from '../components/menu/Smoothie.vue'
import TeaAde from '../components/menu/TeaAde.vue'
import Dessert from '../components/menu/Dessert.vue'
import OrderView from '@/components/basket/OrderView.vue'
import Button from '@/components/basket/Button.vue'
import OrderSummary from '@/components/basket/OrderSummary.vue'
import ParentComponent from '@/components/basket/ParentComponent.vue'
import ButtonHome from '../components/pay/ButtonHome.vue'
import Popupview from '../components/pay/Popupview.vue'
import Popupview2 from '../components/pay/Popupview2.vue'
import PayView from '../views/PayView.vue'
import OrderReceipt from '../components/bill/OrderReceipt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bill',
      name: 'bill',
      component: OrderReceipt
    },
    {
      path: '/payment',
      name: 'payment',
      component: PayView
    },
    {
      path: '/btn',
      name: 'button',
      component: ButtonHome
    },
    {
      path: '/popup1',
      name: 'popup1',
      component: Popupview
    },
    {
      path: '/popup2',
      name: 'popup2',
      component: Popupview2
    },
    {
      path: '/button',
      name: 'ButtonView',
      component: Button
    },
    {
      path: '/order',
      name: 'OrderView',
      component: OrderView
    },
    {
      path: '/order-summary',
      name: 'OrderSummaryView',
      component: OrderSummary
    },
    {
      path: '/parent-component',
      name: 'ParentComponent',
      component: ParentComponent
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reMenu',
      name: 'reMenu',
      component: ReMenu
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: Coffee
    }, {
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
