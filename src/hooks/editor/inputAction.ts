import {nextTick} from "vue";
import {getLeadingMarks} from "../../utils/common/textUtils";
import {insertIntoString} from "../../utils/editor/insertUtils";

export const useExtendInput = (
    target: () => HTMLTextAreaElement,
    update: (newValue: string) => void = (newValue: string) => (target().value = newValue)
) => {
    const resetSelection = (start: number, end: number) => {
        const textarea = target()
        nextTick(() => [textarea.selectionStart, textarea.selectionEnd] = [start, end]).then()
    }

    // 补全（括号和引号）
    const completeAround = (insertText: { before: string, after: string }) => {
        const textarea = target()
        let start = textarea.selectionStart;
        let selectEnd = textarea.selectionEnd;
        let text = textarea.value;
        let end: number;
        const {before, after} = insertText;
        text = insertIntoString(before, text, start);
        end = selectEnd + before.length;
        if (after.length > 0) {
            text = insertIntoString(after, text, end);
        }
        update(text)
        if (textarea.selectionStart != textarea.selectionEnd) {
            resetSelection(start, end + after.length)
        } else {
            resetSelection(start + before.length, start + before.length)
        }
    }

    // 回车保留缩进
    const batchEnter = () => {
        const textarea = target()
        const start = textarea.selectionStart;
        const space = getLeadingMarks(textarea.value, start)
        const newValue = insertIntoString("\n" + space, textarea.value, start);
        update(newValue)
        resetSelection(start + space.length + 1, start + space.length + 1)
    }

    // 批量缩进（Tab）
    const batchTab = (e: KeyboardEvent, tab: string = '\t') => {
        const textarea = target();
        const {selectionStart: start, selectionEnd: end} = textarea;

        if (e.shiftKey) {
            if (start == end) {
                const index = textarea.value.lastIndexOf('\n', start - 1) + 1;
                const temp = textarea.value.slice(index, start);
                const newTemp = temp.replace(tab, '');
                if (temp.length === newTemp.length) return;
                const newValue = `${textarea.value.slice(0, start - temp.length)}${newTemp}${textarea.value.slice(end)}`;
                update(newValue)
            } else {
                const temp = textarea.value.slice(start, end);
                const newTemp = temp.replace(tab, '').replaceAll(`\n${tab}`, '\n');
                if (temp.length === newTemp.length) return;
                const newValue = `${textarea.value.slice(0, start)}${newTemp}${textarea.value.slice(start + temp.length)}`;
                update(newValue)
                resetSelection(start, start + newTemp.length)
            }
        } else {
            if (start == end) {
                const newValue = insertIntoString(tab, textarea.value, start);
                update(newValue)
                resetSelection(start + tab.length, start + tab.length)
            } else {
                const temp = textarea.value.slice(start, end);
                const newTemp = `${tab}${temp.replaceAll('\n', `\n${tab}`)}`;
                if (temp.length === newTemp.length) return;
                const newValue = `${textarea.value.slice(0, start)}${newTemp}${textarea.value.slice(start + temp.length)}`;
                update(newValue)
                resetSelection(start, start + newTemp.length)
            }
        }
    };

    return {
        resetSelection,
        batchEnter,
        batchTab,
        completeAround
    }
}