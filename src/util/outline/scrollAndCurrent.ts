// 是否处于滚动状态
import {smoothScroll} from "../common/scroll";
import {ref} from "vue";

export const useScrollCurrent = () => {
    const isScroll = ref(false)

    const handleScroll = (target: HTMLElement, item: HTMLElement) => {
        isScroll.value = true
        smoothScroll(target, item.offsetTop - target.offsetTop, () => {
            setTimeout(() => {
                isScroll.value = false
            }, 100)
        }, 300)
    }

    const setCurrent = (target: HTMLElement, items: OutlineItem[]) => {
        if (isScroll.value) return;

        if (!(target instanceof HTMLElement) || !Array.isArray(items)) {
            return
        }

        let current = 0

        for (let i = items.length - 1; i >= 0; i--) {
            if (!items[i].id) return;
            const element = target.querySelector(`#${items[i].id}`)
            if (!element || !(element instanceof HTMLElement)) return;
            if (element.getBoundingClientRect().top <= target.getBoundingClientRect().top + 40) {
                current = i
                break
            }
        }

        for (let i = 0; i < items.length; i++) {
            items[i].current = i == current;
        }
    }

    return {
        isScroll,
        handleScroll,
        setCurrent
    }
}

