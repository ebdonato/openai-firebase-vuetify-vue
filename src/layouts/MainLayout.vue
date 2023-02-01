<script setup lang="ts">
import { RouterView } from "vue-router"
import { getAuth, signOut } from "firebase/auth"
import { storeToRefs } from "pinia"
import { useDisplay } from "vuetify"

import { useAppConfigStore } from "@/stores/appConfig"

const appConfigStore = useAppConfigStore()
const { themeIcon } = storeToRefs(appConfigStore)
const { toggleTheme } = appConfigStore
const { xs } = useDisplay()

const onLogout = () => {
    signOut(getAuth())
}
</script>

<template>
    <v-app-bar flat>
        <v-app-bar-title>OpenAI Firebase Vuetify</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="xs" color="primary" icon @click="toggleTheme">
            <v-icon>{{ themeIcon }}</v-icon>
        </v-btn>
        <v-btn v-else color="primary" :prepend-icon="themeIcon" @click="toggleTheme"> Toggle Theme </v-btn>
        <v-btn v-if="xs" color="primary" icon @click="onLogout">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
        <v-btn v-else color="primary" prepend-icon="mdi-logout" @click="onLogout"> Logout </v-btn>
        <v-btn variant="flat" color="primary" class="ml-1" :to="{ name: 'CreatePage' }"> Create </v-btn>
    </v-app-bar>
    <RouterView />
</template>
