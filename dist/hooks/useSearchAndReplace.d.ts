import { Ref } from "vue";
export declare const useSearchAndReplace: (textarea: Ref<HTMLTextAreaElement | null | undefined>, text: Ref<string>, searchHook?: (history: EditorHistory) => any, replaceOneFinishHook?: (history: EditorHistory) => any, replaceAllFinishHook?: (history: EditorHistory) => any, searchJudgeHook?: (...args: any) => boolean, replaceJudgeHook?: (...args: any) => boolean) => {
    textarea: Ref<HTMLTextAreaElement | null | undefined>;
    replaceFrom: Ref<string>;
    replaceTo: Ref<string>;
    searchIndex: Ref<number>;
    searchList: Ref<number[]>;
    searchCurrent: () => void;
    searchByIndex: () => void;
    searchNext: () => void;
    searchPrevious: () => void;
    replaceOne: () => void;
    replaceAll: () => void;
};
