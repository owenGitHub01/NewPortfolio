import { ref } from "vue"

export const isDark = ref(true)

export const changeColour = () => {
    isDark.value = !isDark.value
}

