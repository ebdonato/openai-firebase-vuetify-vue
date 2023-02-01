import { createApp } from "vue"
import { createPinia } from "pinia"

import vuetify from "@/plugins/vuetify"
import App from "@/App.vue"
import router from "@/router"
import "@/plugins/firebase"
import "@/assets/base.css"

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia())

app.mount("#app")
