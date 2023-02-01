<script setup lang="ts">
import { ref } from "vue"

import prompts from "@/assets/prompts"

const prompt = ref("")
const isValid = ref(false)

const onSurpriseMe = () => {
    prompt.value = prompts[Math.floor(Math.random() * prompts.length)]
}
const onSubmit = () => {
    !!isValid.value && alert(prompt.value)
}
</script>

<template>
    <v-main>
        <v-container class="d-flex flex-column w-75 justify-center align-center">
            <div>
                <v-form v-model="isValid" validate-on="submit" @submit.prevent="onSubmit">
                    <p class="text-h3 my-2">Create</p>
                    <p class="text-h6 my-2 text-medium-emphasis">
                        Create imaginative and visually stunning images through DALL-E AI and share them with the
                        community
                    </p>
                    <div class="d-flex align-center">
                        <v-text-field
                            label="Prompt"
                            variant="underlined"
                            clearable
                            class="my-4"
                            v-model="prompt"
                            :rules="[(val) => !!val || 'This field is mandatory']"
                        ></v-text-field>
                        <v-btn variant="text" class="ml-2" @click="onSurpriseMe"> Surprise me </v-btn>
                    </div>
                    <v-card rounded width="400">
                        <v-img
                            aspect-ratio="1"
                            width="400"
                            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                            cover
                        />
                    </v-card>
                    <v-btn class="my-4" color="secondary" :disabled="!prompt"> Generate </v-btn>
                    <p class="text-h6 my-2 text-medium-emphasis">
                        Once you have created the image you want, you can share it width others in the community
                    </p>
                    <v-btn class="w-100" color="primary" type="submit"> Submit </v-btn>
                </v-form>
            </div>
        </v-container>
    </v-main>
</template>
