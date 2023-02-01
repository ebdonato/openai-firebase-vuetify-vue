import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("@/layouts/LandingLayout.vue"),
            children: [
                {
                    path: "",
                    component: () => import("@/views/LoginView.vue"),
                    name: "LoginPage",
                },
            ],
        },
        {
            path: "/main",
            component: () => import("@/layouts/MainLayout.vue"),
            children: [
                {
                    path: "",
                    component: () => import("@/views/MainView.vue"),
                    name: "MainPage",
                },
                {
                    path: "create",
                    component: () => import("@/views/CreateView.vue"),
                    name: "CreatePage",
                },
            ],
        },

        // Always leave this as last one,
        // but you can also remove it
        {
            path: "/:catchAll(.*)*",
            component: () => import("@/views/ErrorNotFound.vue"),
        },
    ],
})

export default router
