import {ref} from "vue";
import {setSyncScroll} from "../utils/common/scroll";
import {throttle} from "lodash";

export const useSyncScroll = (
    elements: HTMLElement[],
    disabled: () => boolean,
    timeout: number = 20
) => {
    let isSyncScroll = ref(false)

    elements.forEach(element => {
        element.addEventListener('scroll', throttle(() => {
            if (disabled()) return
            if (isSyncScroll.value) return
            isSyncScroll.value = true
            setSyncScroll(element, ...elements.filter(item => item != element))
            setTimeout(() => isSyncScroll.value = false, timeout)
        }, timeout))
    })

    return {
        isSyncScroll
    }
}