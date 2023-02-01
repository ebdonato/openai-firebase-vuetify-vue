<script setup lang="ts">
import { RouterView } from "vue-router"
import { getAuth, signOut } from "firebase/auth"
import { storeToRefs } from "pinia"

import { useAppConfigStore } from "@/stores/appConfig"

const appConfigStore = useAppConfigStore()
const { themeIcon } = storeToRefs(appConfigStore)
const { toggleTheme } = appConfigStore

const onLogout = () => {
    signOut(getAuth())
}
</script>

<template>
    <v-app-bar flat>
        <v-app-bar-title>OpenAI Firebase Vuetify</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="primary" class="mx-2"> Create </v-btn>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-account" v-bind="props" color="primary"></v-btn>
            </template>

            <v-list>
                <v-list-item :prepend-icon="themeIcon" @click="toggleTheme">
                    <v-list-item-title>Toggle Theme</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-logout" @click="onLogout">
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
    <RouterView />
</template>
