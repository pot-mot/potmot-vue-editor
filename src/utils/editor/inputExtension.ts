import {insertIntoString} from "./insertUtils";
import {getCurrentLineStartEnd, getLeadingSpace} from "../common/text";
import {now} from "../common/time";

// 补全
export const complete = (textarea: HTMLTextAreaElement, insertText: { before: string, after: string }): Partial<EditorHistory> => {
    const {selectionStart: start, selectionEnd: end, value: text} = textarea;
    let result: Partial<EditorHistory> = {end, start, text, type: 'complete' + now()}

    const {before, after} = insertText;

    if (start != end) {
        let mid = text.slice(start, end);
        if (mid.startsWith(before) && mid.endsWith(after)) {
            mid = mid.slice(before.length, mid.length - after.length);
            result.text = insertIntoString(mid, text, start, end);
            result.start = start
            result.end = end - before.length - after.length
        } else {
            mid = `${before}${mid}${after}`
            result.text = insertIntoString(mid, text, start, end);
            result.start = start + before.length
            result.end = end + before.length
        }
    } else {
        result.text = insertIntoString(before, text, start);
        result.end = end + before.length;
        if (after.length > 0) {
            result.text = insertIntoString(after, result.text, result.end);
        }

        result.start! += before.length
    }
    return result
}

// 回车保留缩进
export const complexEnter = (textarea: HTMLTextAreaElement, getSpace: (...args: any[]) => string = getLeadingSpace): Partial<EditorHistory> => {
    const start = textarea.selectionStart;
    const space = getSpace(textarea.value, start);
    const text = insertIntoString("\n" + space, textarea.value, start);
    return {
        text,
        start: start + space.length + 1,
        type: "enter" + now()
    }
}

// 批量缩进（Tab）
const tab = '\t';
const tabBlank = /^( {1,4})|^\t/;

export const removeTab = (text: string): {text: string, matchLength: number} | null => {
    const matches = text.match(tabBlank);
    if (matches == null) return null;
    const length = matches[0].length;
    return {text: text.slice(length), matchLength: length}
}

export const batchTab = (textarea: HTMLTextAreaElement, e: KeyboardEvent): Partial<EditorHistory> | null => {
    const {selectionStart: start, selectionEnd: end, value: text} = textarea;
    let result: Partial<EditorHistory> = {start, text, type: 'tab'};
    if (start == end) {
        if (e.shiftKey) {
            const index = text.lastIndexOf('\n', start - 1) + 1;
            const temp = text.slice(index, start);
            const afterRemove = removeTab(temp);
            if (afterRemove == null) return null;
            const newTemp = afterRemove.text;
            result.text = `${text.slice(0, start - temp.length)}${newTemp}${text.slice(end)}`;
            result.start = start - afterRemove.matchLength;
        } else {
            result.text = insertIntoString(tab, text, start);
            result.start = start + tab.length;
        }
    } else {
        const temp = text.slice(start, end);
        let newTemp: string;
        if (e.shiftKey) {
            const lines = temp.split('\n').map(line => {
                const afterRemove = removeTab(line);
                if (afterRemove) return afterRemove.text;
                return line;
            })
            newTemp = lines.join('\n');
        } else {
            newTemp = `${tab}${temp.replaceAll('\n', `\n${tab}`)}`;
        }
        if (temp.length == newTemp.length) return null;
        result.text = `${text.slice(0, start)}${newTemp}${text.slice(start + temp.length)}`;
        result.end = start + newTemp.length;
        result.type = 'batchTab' + now();
    }
    return result
}

export const selectLine = (textarea: HTMLTextAreaElement): Partial<EditorHistory> => {
    const {selectionStart, value: text} = textarea;
    const {start, end} = getCurrentLineStartEnd(text, selectionStart);
    return {
        start,
        end: end + 1
    }
}