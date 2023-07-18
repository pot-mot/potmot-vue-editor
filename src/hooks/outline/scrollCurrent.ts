import {smoothScroll} from "../../utils/common/scroll";
import {ref} from "vue";

/**
 * 使用精确控制滚动，配合创造平滑滚动效果结束后保持点击时 current 不发生变更
 * @param maxTime 最大滚动时间，默认为 300
 * @param endDuration 结束后释放 isScroll 的时间，默认为 100
 */
export const useScrollCurrent = (
    maxTime: number = 300,
    endDuration: number = 100
) => {
    // 是否处于滚动状态
    const isScroll = ref(false)

    /**
     * 处理滚动，将从一个元素的 offsetTop 滚动到另一个元素的 offsetTop
     *
     * @param scroller 将被滚动的元素
     * @param target 目标元素
     */
    const handleScroll = (
        scroller: HTMLElement,
        target: HTMLElement
    ) => {
        isScroll.value = true
        smoothScroll(scroller, target.offsetTop - scroller.offsetTop, () => {
            // 在结束后经过 100ms 才重新判断滚动
            setTimeout(() => {
                isScroll.value = false
            }, endDuration)
        }, maxTime)
    }

    /**
     * 在容器元素中判断一组元素中的当前元素
     * 此处 '当前' 即表现出高亮表示已选中
     *
     * @param container 容器元素
     * @param items 子元素列表，允许为 undefined
     * @param judge 判断函数，接收 container 和 item
     *
     * @return 当前元素下标
     */
    const getCurrent = (
        container: HTMLElement,
        items: Array<HTMLElement | undefined>,
        judge: (container: HTMLElement, item: HTMLElement) => boolean =
            (container, item) => {
                return item.getBoundingClientRect().top <= (container.getBoundingClientRect().top + 40)
            }
    ): number | undefined => {
        if (isScroll.value) return

        if (!(container instanceof HTMLElement) || !Array.isArray(items)) {
            return
        }

        for (let i = items.length - 1; i >= 0; i--) {
            if (items[i] == undefined || !(items[i] instanceof HTMLElement)) continue
            if (judge(container, items[i]!)) {
                return i
            }
        }

        return 0
    }

    return {
        isScroll,
        handleScroll,
        getCurrent
    }
}

