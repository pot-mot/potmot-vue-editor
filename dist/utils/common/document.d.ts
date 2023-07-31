import { ComputedRef } from "vue";
export declare const getDocumentScrollTop: () => number;
export declare const getDocumentScrollLeft: () => number;
export type ScrollData = {
    oldScrollTop: number;
    oldScrollLeft: number;
    oldOverflow: string;
};
export declare const lockScroll: () => ScrollData;
export declare const unlockScroll: (data: ScrollData) => void;
export declare const createComputedHideDom: (tagName: keyof HTMLElementTagNameMap, id: string) => ComputedRef<Element>;
