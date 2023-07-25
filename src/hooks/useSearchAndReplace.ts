import {onMounted, reactive, Ref, ref, toRef, watch} from "vue";
import {debounce} from "lodash";
import {now} from "../utils/common/time";
import {useSelectionFocus} from "./useSelectionFocus";

export const useSearchAndReplace = (
    textarea: Ref<HTMLTextAreaElement>,
    text: Ref<string>,
    searchHook: (history: EditorHistory) => any = () => {},
    replaceOneFinishHook: (history: EditorHistory) => any = () => {},
    replaceAllFinishHook: (history: EditorHistory) => any = () => {},
    searchJudgeHook: (...args: any) => boolean = () => true,
    replaceJudgeHook: (...args: any) => boolean = () => true,
) => {
    const searchData = reactive({
        index: -1,
        indexes: <number[]>[],
    });
    
    const replaceFrom = ref("");
    const replaceTo = ref("");

    const {getCursorScroll} = useSelectionFocus(() => textarea.value);

    const setSearchData = debounce(() => {
        searchData.index = -1
        searchData.indexes = []

        if (textarea.value == undefined) return;
        if (replaceFrom.value.length <= 0) return;
        if (text.value.length <= 0) return;

        let index = text.value.indexOf(replaceFrom.value, 0);
        let count = 0;
        while (index >= 0) {
            let temp = text.value.indexOf(replaceFrom.value, index);
            if (temp < 0) break
            if (textarea.value.selectionStart == temp && textarea.value.selectionEnd - textarea.value.selectionStart == replaceFrom.value.length) {
                searchData.index = count
            }
            searchData.indexes.push(temp);
            index = temp + replaceFrom.value.length;
            count++;
        }
    }, 200);

    const searchIndex = ref(0);

    let isReplace = false

    watch(() => searchData.index, () => {
        searchIndex.value = searchData.index + 1
    });

    const searchCurrent = () => {
        if (!searchJudgeHook()) return;

        if (searchData.indexes.length == 0) {
            searchData.index = -1
            return;
        }

        if (isReplace) return;

        const start = searchData.indexes[searchData.index]
        const length = replaceFrom.value.length

        const {top: scrollTop, left: scrollLeft} = getCursorScroll(start);

        const history: EditorHistory = {
            type: 'searchCurrent' + now(),
            text: text.value,
            start,
            end: start + length,
            scrollTop,
            scrollLeft
        }
        searchHook(history);
    }

    const searchByIndex = () => {
        const index = searchIndex.value
        if (index <= 0 || index > searchData.indexes.length) {
            searchIndex.value = 0
            return;
        }
        searchData.index = index - 1

        searchCurrent();
    }

    const searchPrevious = () => {
        if (textarea.value == undefined) return;

        if (searchData.indexes.length == 0) {
            searchData.index = -1
            return;
        }

        if (searchData.index > 0) {
            searchData.index--;
        } else {
            searchData.index = searchData.indexes.length - 1
        }
        searchCurrent();
    }

    const searchNext = () => {
        if (textarea.value == undefined) return;

        if (searchData.indexes.length == 0) {
            searchData.index = -1
            return;
        }

        if (searchData.index < searchData.indexes.length - 1) {
            searchData.index++
        } else {
            searchData.index = 0
        }
        searchCurrent();
    }

    const replaceOne = () => {
        if (!replaceJudgeHook()) return;

        if (replaceFrom.value.length <= 0) {
            alert("替换文本不可为空");
            return;
        }

        if (searchData.indexes.length == 0) {
            searchData.index = -1
            alert("无文本可替换");
            return;
        }

        if (replaceFrom.value != text.value.slice(textarea.value.selectionStart, textarea.value.selectionEnd)) {
            alert("匹配文本未选中");
            if (searchData.index == -1 && searchData.indexes.length > 0) {
                searchData.index = 0
                searchCurrent();
            }
            return;
        }

        if (isReplace) return;

        isReplace = true

        const start = searchData.indexes[searchData.index]
        const end = start + replaceFrom.value.length

        let nextStart = start
        let nextEnd = start + replaceTo.value.length

        if (searchData.index < searchData.indexes.length - 1) {
            nextStart = searchData.indexes[searchData.index + 1] - replaceFrom.value.length + replaceTo.value.length
            nextEnd = nextStart + replaceFrom.value.length
        }

        const {left: scrollLeft, top: scrollTop} = getCursorScroll(nextStart);


        const history: EditorHistory = {
            text: text.value.slice(0, start) + replaceTo.value + text.value.slice(end),
            start: nextStart,
            end: nextEnd,
            type: 'replaceOne' + now(),
            scrollTop,
            scrollLeft
        }
        replaceOneFinishHook(history);

        isReplace = false
    }

    const replaceAll = () => {
        if (replaceFrom.value.length <= 0) {
            alert("替换文本不可为空");
            return;
        }

        if (searchData.indexes.length == 0) {
            searchData.index = -1
            alert("无文本可替换");
            return;
        }

        if (isReplace) return;

        isReplace = true

        const {scrollLeft, scrollTop, selectionStart: start, selectionEnd: end} = textarea.value

        const history: EditorHistory = {
            start,
            end,
            scrollLeft,
            scrollTop,
            type: `replaceAll${now()}`,
            text: text.value.replaceAll(replaceFrom.value, replaceTo.value)
        }
        replaceAllFinishHook(history);

        isReplace = false;
    };

    onMounted(() => {
        if (textarea.value == undefined) return;

        watch(() => replaceFrom.value, () => {
            if (replaceFrom.value.length <= 0) {
                searchData.index = -1
                searchData.indexes = []
                return;
            }
            setSearchData();
        });

        watch(() => text.value, () => {
            setSearchData();
        });
    });

    return {
        textarea,
        replaceFrom,
        replaceTo,
        searchIndex,
        searchList: toRef(searchData, "indexes"),
        searchCurrent,
        searchByIndex,
        searchNext,
        searchPrevious,
        replaceOne,
        replaceAll,
    }
}