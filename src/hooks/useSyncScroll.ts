import {Ref, ref} from "vue";
import {setSyncScroll} from "../utils/common/scroll";
import {throttle} from "lodash";

/**
 * 对一组元素启用同步滚动
 * @param elements 元素列表
 * @param disabled 禁用函数
 * @param timeout 时间间隔
 */
export const useSyncScroll = (
    elements: HTMLElement[],
    disabled: () => boolean,
    timeout: number = 20
) => {
    const isSyncScroll = ref(false)
    const lastScroll: Ref<HTMLElement | undefined> = ref()

    elements.forEach(element => {
        element.addEventListener('scroll', throttle(() => {
            if (isSyncScroll.value) return
            lastScroll.value = element
            if (disabled()) return
            isSyncScroll.value = true
            setSyncScroll(element, ...elements)
            setTimeout(() => isSyncScroll.value = false, timeout)
        }, timeout))
    })

    return {
        isSyncScroll,
        lastScroll,
    }
}