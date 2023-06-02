import {onBeforeUnmount, onMounted} from "vue";

export const isMobile = () => {
    return 'ontouchstart' in document;
}

/**
 * 约束数值大小
 *
 * @param input 输入值
 * @param min 最小值
 * @param max 最大值
 */
export const limit = (input: number, min: number | undefined, max: number | undefined): number => {
    if (max != undefined && input > max) {
        return max;
    }
    if (min != undefined && input < min) {
        return min;
    }
    return input;
}

/**
 * 监听目标一段时间不发生变更
 *
 * @param target 监听目标
 * @param event 执行
 * @param step 轮询时间，默认为 1000
 */
export const watchForNoChange = (
    target: Function,
    event: Function,
    step: () => number = () => 1000
) => {
    let oldValue: any

    // 如果发生变化，将 flag 置为 1，此时将开始等待 flag 出现第一次不变
    let flag = 0

    // 如果结束，将不继续循环
    let stop = 0

    const next = () => {
        const nextTime: number = step()

        setTimeout(
            () => {
                if (oldValue != target()) {
                    // 如果发生变化，保存变化并设置等待
                    oldValue = target()
                    flag = 1
                } else {
                    // 如果下一层轮询没有发生变化，触发事件
                    if (flag == 1) {
                        event();
                        flag = 0
                    }
                }

                if (stop == 1) return
                next()
            },
            nextTime
        )
    }

    onMounted(() => {
        event()
        next()
    })

    onBeforeUnmount(() => {
        stop = 1
    })
}