<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getAuth } from "firebase/auth"

import router from "./router"

const theme = ref("dark")

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
