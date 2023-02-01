<script setup lang="ts">
import { onMounted } from "vue"
import { getAuth } from "firebase/auth"
import { storeToRefs } from "pinia"

import { useAppConfigStore } from "@/stores/appConfig"
import router from "@/router"

const appConfigStore = useAppConfigStore()
const { theme } = storeToRefs(appConfigStore)

onMounted(() => {
    getAuth().onAuthStateChanged((user) => {
        if (user) {
            router.push({ name: "MainPage" })
        } else {
            router.push({ name: "LoginPage" })
        }
    })
})
</script>

<template>
    <v-app :theme="theme">
        <RouterView />
    </v-app>
</template>
