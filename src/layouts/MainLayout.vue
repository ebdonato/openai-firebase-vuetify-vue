<script setup lang="ts">
import { ref } from "vue"
import { RouterView } from "vue-router"
import { getAuth, signOut } from "firebase/auth"

const theme = ref("dark")

const onClick = () => {
    theme.value = theme.value === "light" ? "dark" : "light"
}

const onLogout = () => {
    signOut(getAuth())
}
</script>

<template>
    <v-app :theme="theme">
        <v-app-bar flat>
            <v-icon icon="mdi-home" class="ml-3" />
            <v-spacer></v-spacer>
            <v-btn
                :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                @click="onClick"
                color="primary"
            >
                Toggle Theme
            </v-btn>
            <v-btn prepend-icon="mdi-logout" @click="onLogout" color="primary"> Logout </v-btn>
        </v-app-bar>
        <RouterView />
    </v-app>
</template>
