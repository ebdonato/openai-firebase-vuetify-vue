<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { getAuth } from "firebase/auth"

import { useAppConfigStore } from "@/stores/appConfig"
import router from "@/router"

const appConfigStore = useAppConfigStore()
const { theme, redirectTo } = storeToRefs(appConfigStore)
const { clearRedirectTo } = appConfigStore

router.beforeEach((to, from, next) => {
    const user = getAuth().currentUser

    if (user && to.name == "LoginPage") {
        next({ name: "MainPage" })
        return
    }

    if (!user && to.name != "LoginPage") {
        redirectTo.value = String(to.name) ?? "MainPage"
        next({ name: "LoginPage" })
        return
    }

    next()
})

const isLoading = ref(true)
getAuth().onAuthStateChanged((user) => {
    isLoading.value = false
    if (user) {
        const name = redirectTo.value ?? "MainPage"
        router.push({ name }).finally(() => {
            clearRedirectTo()
        })
    } else {
        router.push({ name: "LoginPage" })
    }
})
</script>

<template>
    <v-app :theme="theme">
        <v-main v-if="isLoading">
            <v-container class="d-flex flex-column h-100 justify-center align-center">
                <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
            </v-container>
        </v-main>
        <RouterView v-else />
    </v-app>
</template>
