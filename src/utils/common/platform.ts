import {computed} from "vue";

export const isMobile = computed(() => {
    return 'ontouchstart' in document
})

export const isDarkTheme = computed(() => {
    return window.matchMedia("(prefers-color-scheme: dark)")
})