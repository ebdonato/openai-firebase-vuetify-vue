import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useAppConfigStore = defineStore("appConfig", () => {
    const theme = ref<"light" | "dark">("dark")
    const themeIcon = computed(() => (theme.value === "light" ? "mdi-weather-sunny" : "mdi-weather-night"))
    function toggleTheme() {
        theme.value = theme.value === "dark" ? "light" : "dark"
    }

    return { theme, themeIcon, toggleTheme }
})
