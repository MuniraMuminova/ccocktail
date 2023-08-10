import { createRouter, createWebHashHistory } from "vue-router";
import { ROUTERS_PATH } from "@/constans";

import Home from "@/pages/Home.vue";

export const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: ROUTERS_PATH.HOME, name: ROUTERS_PATH.HOME, component: Home },
        {
            path: ROUTERS_PATH.COCKTAIL,
            name: ROUTERS_PATH.COCKTAIL,
            component: () =>
                import ('@/pages/Cocktail.vue')
        },
        {
            path: ROUTERS_PATH.COCKTAIL_RANDOM,
            name: ROUTERS_PATH.COCKTAIL_RANDOM,
            component: () =>
                import ('@/pages/CocktailRandom.vue')
        },

    ]
})