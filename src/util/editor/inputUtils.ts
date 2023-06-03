import {nextTick} from "vue";
import {getLeadingSpace} from "./textUtils";

/**
 * 在字符串中插入替换部分
 *
 * @param inserter 插入部分
 * @param target 目标字符串
 * @param start 替换起点
 * @param end 替换终点，默认等于起点（即不进行替换）
 */
export const insertIntoString = (inserter: string, target: string, start: number, end: number = start): string => {
    return target.slice(0, start) + inserter + target.slice(end);
}

export const useExtendInput = (
    target: () => HTMLTextAreaElement,
    update: (newValue: string) => void = (newValue: string) => (target().value = newValue)
) => {
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

        nextTick(() => {
            if (textarea.selectionStart != textarea.selectionEnd) {
                textarea.selectionStart = start;
                textarea.selectionEnd = end + after.length;
            } else {
                textarea.selectionStart = start + before.length;
                textarea.selectionEnd = start + before.length;
            }
        })
    }

    // 回车保留缩进
    const batchEnter = () => {
        const textarea = target()
        const start = textarea.selectionStart;
        const LeadingSpace = getLeadingSpace(textarea.value, start)
        const newValue = insertIntoString(LeadingSpace, textarea.value, start);
        update(newValue)
        nextTick(() => {
            textarea.selectionStart = start + LeadingSpace.length;
            textarea.selectionEnd = textarea.selectionStart;
        })
    }

    // 批量缩进（Tab）
    const batchTab = (e: KeyboardEvent, insertString: string) => {
        const textarea = target()
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        let newValue

        if (e.shiftKey) {
            if (textarea.selectionStart == textarea.selectionEnd) {
                let index = 0;
                for (let i = textarea.selectionStart - 1; i >= 0; i--) {
                    if (textarea.value[i] == '\n') {
                        index = i + 1;
                        break;
                    }
                }
                const temp = textarea.value.slice(index, start);
                const newTemp = temp.replace(insertString, '');
                if (temp.length == newTemp.length) return;
                newValue = textarea.value.slice(0, start - temp.length) + newTemp + textarea.value.slice(end);
                update(newValue)
            } else {
                const temp = textarea.value.slice(start, end);
                const newTemp = temp.replace(insertString, '').replaceAll('\n' + insertString, '\n');
                if (temp.length == newTemp.length) return;
                newValue = textarea.value.slice(0, start) + newTemp + textarea.value.slice(start + temp.length);
                update(newValue)
                nextTick(() => {
                    textarea.selectionStart = start;
                    textarea.selectionEnd = start + newTemp.length;
                })
            }
        } else {
            if (textarea.selectionStart == textarea.selectionEnd) {
                newValue = insertIntoString(insertString, textarea.value, textarea.selectionStart);
                update(newValue)
                nextTick(() => {
                    textarea.selectionStart = start + 1;
                    textarea.selectionEnd = start + 1;
                })
            } else {
                const temp = textarea.value.slice(start, textarea.selectionEnd);
                const newTemp = insertString + temp.replaceAll('\n', '\n' + insertString);
                if (temp.length == newTemp.length) return;
                newValue = textarea.value.slice(0, start) + newTemp + textarea.value.slice(start + temp.length);
                update(newValue)
                nextTick(() => {
                    textarea.selectionStart = start;
                    textarea.selectionEnd = start + newTemp.length;
                })
            }
        }
    }

    return {
        batchEnter,
        batchTab,
        completeAround
    }
}