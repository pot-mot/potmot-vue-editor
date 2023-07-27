import {ref} from "vue";

export const useMobileFullHeight = () => {
    let height = ref(window.innerHeight);
    // We listen to the resize event
    window.addEventListener('resize', () => {
        height.value = window.innerHeight;
    })
    return height;
}