import { Ref } from "vue";
/**
 * 对一组元素启用同步滚动
 * @param elements 元素列表
 * @param disabled 禁用函数
 * @param timeout 时间间隔
 */
export declare const useSyncScroll: (elements: Array<HTMLElement | null | undefined>, disabled: () => boolean, timeout?: number) => {
    isSyncScroll: Ref<boolean>;
    lastScroll: Ref<HTMLElement | null | undefined>;
};
