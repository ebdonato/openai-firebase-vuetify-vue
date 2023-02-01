<script setup lang="ts">
import { ref } from "vue"
import {
    GoogleAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider,
    OAuthProvider,
    signInWithPopup,
    getAuth,
} from "firebase/auth"

import router from "@/router"

const isLoading = ref(false)
const snackShow = ref(false)

const providers = [
    {
        name: "Google",
        icon: "mdi-google",
        providerFactory: () => new GoogleAuthProvider(),
        disable: import.meta.env.VITE_DISABLE_GOOGLE_PROVIDER === "true",
    },
    {
        name: "Twitter",
        icon: "mdi-twitter",
        providerFactory: () => new TwitterAuthProvider(),
        disable: import.meta.env.VITE_DISABLE_TWITTER_PROVIDER === "true",
    },
    {
        name: "Microsoft",
        icon: "mdi-microsoft",
        providerFactory: () => new OAuthProvider("microsoft.com"),
        disable: import.meta.env.VITE_DISABLE_MICROSOFT_PROVIDER === "true",
    },
    {
        name: "Yahoo",
        icon: "mdi-yahoo",
        providerFactory: () => new OAuthProvider("yahoo.com"),
        disable: import.meta.env.VITE_DISABLE_YAHOO_PROVIDER === "true",
    },
    {
        name: "Github",
        icon: "mdi-github",
        providerFactory: () => new GithubAuthProvider(),
        disable: import.meta.env.VITE_DISABLE_GITHUB_PROVIDER === "true",
    },
]

const signIn = (providerName: string): void => {
    const provider = providers.find((item) => item.name === providerName)?.providerFactory()

    if (provider) {
        isLoading.value = true
        signInWithPopup(getAuth(), provider)
            .then(() => {
                router.push({ name: "MainPage" })
            })
            .catch((error) => {
                snackShow.value = true
                console.error(error)
            })
            .finally(() => {
                isLoading.value = false
            })
    }
}
</script>
<template>
    <v-main>
        <v-container class="d-flex flex-column h-100 justify-center align-center">
            <v-card width="400" flat>
                <template v-slot:title>
                    <p class="text-center">OpenAi Vuetify</p>
                </template>
                <template v-slot:subtitle> </template>
                <template v-slot:text>
                    <div v-for="(provider, index) in providers" :key="index" class="ma-2 text-center">
                        <v-btn
                            flat
                            min-width="300"
                            :prepend-icon="provider.icon"
                            color="primary"
                            @click="signIn(provider.name)"
                            :disabled="provider.disable"
                        >
                            {{ provider.name }}
                        </v-btn>
                    </div>
                </template>
            </v-card>
            <v-overlay v-model="isLoading" class="align-center justify-center" persistent>
                <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
            </v-overlay>
            <v-snackbar v-model="snackShow" timeout="2000" color="error">
                <div class="d-flex flex-column justify-center align-center">Error ao tentar entrar</div>
            </v-snackbar>
        </v-container>
    </v-main>
</template>
