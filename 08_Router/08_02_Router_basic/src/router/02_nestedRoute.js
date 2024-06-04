import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../views/01_Router/HomeVue.vue";
import RootRouter from '@/views/02_nestedRoute/RootRouter.vue';
import NestedHome from '@/views/02_nestedRoute/NestedHome.vue';
import NestedView from '@/views/02_nestedRoute/NestedView.vue';
import HiddenView from '@/views/02_nestedRoute/HiddenView.vue';

const router = createRouter({

    history : createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeVue
        },
        {
            path: '/nested',
            name: 'nested',
            component: RootRouter,
            children:[
                {
                    path : "",
                    component : NestedHome
                },
                {
                    path : 'view',
                    component : NestedView
                },
                {
                    path : 'hidden',
                    name : 'hidden',
                    component: HiddenView
                }
            ]
        }
    ]
});

export default router;
