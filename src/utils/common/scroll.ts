import {nextTick} from "vue";

/**
 * 平滑滚动到目标位置
 * @param target 目标元素
 * @param targetHeight 目标位置高度
 * @param maxTime 最长滚动时间，单位为ms, 默认为 800
 * @param stepTime 每步的实际，默认为 10
 * @param end 滚动结束回调函数，默认为空函数
 */
export const smoothScroll = (
    target: HTMLElement,
    targetHeight: number,
    end = () => {
    },
    maxTime: number = 80,
    stepTime: number = 10,
) => {
    const start = target.scrollTop;
    const distance = targetHeight - start;
    const duration = stepTime + Math.ceil(Math.abs(distance) / 600); // 计算滚动时间
    const time = Math.min(duration, maxTime / stepTime); // 取最小值
    const step = distance / time; // 计算每步需要滚动的距离
    let i = 0;
    const interval = setInterval(() => {
        if (i >= time) {
            // 判断是否到达目标位置
            clearInterval(interval);
            setTimeout(end, stepTime); // 等待一段时间后执行回调函数
            return;
        }
        target.scrollBy({top: step}); //执行滚动
        i++;
    }, stepTime);
}

/**
 * 同步滚动
 * @param master 主动方
 * @param slaves 从动方
 */
export const setSyncScroll = (master: HTMLElement, ...slaves: HTMLElement[]) => {
    slaves.filter(element => element != master).forEach(slave => {
        slave.scrollTop = master.scrollTop * (slave.scrollHeight - slave.offsetHeight) / (master.scrollHeight - master.offsetHeight)
    })
}

export const resetScrollTop = (el: HTMLElement) => {
    if (!el) return
    const oldScrollRatio = el.scrollTop / (el.scrollHeight - el.offsetHeight)
    nextTick(() => {
        el.scrollTop = (el.scrollHeight - el.offsetHeight) * oldScrollRatio
    }).then()
}