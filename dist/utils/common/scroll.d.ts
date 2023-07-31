/**
 * 平滑滚动到目标位置
 * @param target 目标元素
 * @param targetTop 目标位置 top
 * @param targetLeft 目标位置 left
 * @param maxTime 最长滚动时间，单位为ms, 默认为 800
 * @param stepTime 每步的实际，默认为 10
 * @param end 滚动结束回调函数，默认为空函数
 */
export declare const smoothScroll: (target: HTMLElement, targetTop: number, targetLeft?: number, end?: () => void, maxTime?: number, stepTime?: number) => void;
/**
 * 同步滚动
 * @param master 主动方
 * @param slaves 从动方
 */
export declare const setSyncScroll: (master: HTMLElement | null | undefined, ...slaves: Array<HTMLElement | null | undefined>) => void;
export declare const resetScroll: (el: HTMLElement | null | undefined) => void;
