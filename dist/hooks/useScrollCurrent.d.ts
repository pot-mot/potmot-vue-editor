/**
 * 使用精确控制滚动，配合创造平滑滚动效果结束后保持点击时 current 不发生变更
 * @param maxTime 最大滚动时间，默认为 300
 * @param endDuration 结束后释放 isScroll 的时间，默认为 100
 */
export declare const useScrollCurrent: (maxTime?: number, endDuration?: number) => {
    isScroll: import("vue").Ref<boolean>;
    handleScroll: (scroller: HTMLElement, target: HTMLElement) => void;
    getCurrent: (container: HTMLElement, items: Array<HTMLElement | undefined>, judge?: (container: HTMLElement, item: HTMLElement) => boolean) => number | undefined;
};
