import AboutView from '@/views/AboutView.vue'
import BlogPost from '@/views/BlogPost.vue'
import DetailsView from '@/views/DetailsView.vue'
import Homeview from '@/views/Homeview.vue'
import { compile } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:"home",
      component: Homeview
    },
    {
      path:"/blogs/:id",
      name:"blogs",
      component: DetailsView
    },
    {
      path:"/post",
      name:"post",
      component:BlogPost

    },
    {
      path:"/about",
      name: "about",
      component: AboutView
    }
  ]
})

export default router;
