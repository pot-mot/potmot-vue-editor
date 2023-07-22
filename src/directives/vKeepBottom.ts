import {watch} from "vue";
import {throttle} from "lodash";

export const vKeepBottom = {
    mounted(el: HTMLElement, binding: {value: any}) {
        if (binding == undefined) return

        watch(() => binding.value, throttle(() => {
            el.scrollTo({top: el.scrollHeight - el.offsetHeight})
        }, 20), {immediate: true, deep: true})
    }
}