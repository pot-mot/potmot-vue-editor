import {computed} from "vue";

export const isMobile = computed(() => {
    return 'ontouchstart' in document;
})
