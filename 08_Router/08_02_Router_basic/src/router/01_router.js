import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/01_Router/HomeVue.vue";
import { compile } from "vue";

import QueryString from "../views/01_Router/QueryString.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            //path: 라우트를 호출할 경로를 나타내는 것으로 path에 해당하는 컴포넌트를 routerView로 렌더링한다
            path: '/',
            // 라우트를 호출할 때 사용되며 특정 이름의 라우트로 이동하거나 router.path를 사용하여 해당 라우트로 이동한다
            name: 'home',
            //라우트가 호출되면 렌더링할 때 컴포넌트를 등록한다
            component: HomeVue

        },
        {
            path:'/pathvariable/:id',
            name: 'path',
            component: () => import('../views/01_Router/PathVariable.vue')

        },
        {
            path: "/querystring",
            name: "query",
            component : QueryString
        }
    ]
});

export default router;
