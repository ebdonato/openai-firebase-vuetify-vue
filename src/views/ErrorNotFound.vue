<template>
    <v-main class="bg-primary text-white">
        <v-container class="d-flex flex-column h-100 w-100 justify-center align-center">
            <div style="font-size: 30vh">404</div>
            <div class="text-h2 text-medium-emphasis">Oops. Nothing here...</div>
            <v-btn color="white" class="mt-12" :to="{ name: 'MainPage' }"> Home </v-btn>
        </v-container>
    </v-main>
</template>
