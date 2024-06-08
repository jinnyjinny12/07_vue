import {createRouter, createWebHistory} from "vue-router";
import ButtonHome from '@/views/ButtonHome.vue';
import Popupview from "@/views/Popupview.vue";
import Popupview2 from "@/views/Popupview2.vue";
import RootRouter from '@/views/RootRouter.vue';


const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
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
        }


    ]

});

export default router;

