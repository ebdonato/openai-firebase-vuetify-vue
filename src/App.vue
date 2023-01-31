<script setup lang="ts">
import { ref } from "vue"

const theme = ref("light")

const onClick = () => {
    theme.value = theme.value === "light" ? "dark" : "light"
}
</script>

<template>
    <v-app :theme="theme">
        <v-app-bar>
            <v-icon icon="mdi-home" />
            <v-spacer></v-spacer>
            <v-btn
                v-ripple
                :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                @click="onClick"
                >Toggle Theme
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-container> Content area </v-container>
        </v-main>
    </v-app>
</template>
