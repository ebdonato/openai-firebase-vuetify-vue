import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("../layouts/LoginLayout.vue"),
            children: [
                {
                    path: "",
                    component: () => import("../views/LoginView.vue"),
                    name: "LoginPage",
                },
            ],
        },
        {
            path: "/main",
            component: () => import("../layouts/MainLayout.vue"),
            children: [
                {
                    path: "",
                    component: () => import("../views/ImagesView.vue"),
                    name: "ImagesPage",
                },
            ],
        },
    ],
})

export default router
