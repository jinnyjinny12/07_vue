import { createRouter, createWebHistory } from 'vue-router'
import OrderReceipt from "../components/OrderReceipt.vue";
import BigNumber from "../components/Receipt/BigNumber.vue";
import ReceiptBox from "../components/Receipt/ReceiptBox.vue";
import ReceiptFix from "../components/Receipt/ReceiptFix.vue";
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',
      name: "home",
      component: Home
    },
    {
      path: '/BigNumber',
      name: 'BigNumber',
      component: BigNumber
    },
    {
      path: '/OrderReceipt',
      name: 'OrderReceipt',
      component: OrderReceipt
    },
    {
      path: '/ReceiptBox',
      name: 'ReceiptBox',
      component: ReceiptBox
    },
    {
      path: '/ReceiptFix',
      name: 'ReceiptFix',
      component: ReceiptFix
    }
  ]
});

export default router
