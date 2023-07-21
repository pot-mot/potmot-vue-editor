import {insertIntoString} from "./insertUtils";
import {getLeadingSpace} from "../common/text";
import {now} from "../../tests/time";

// 补全
export const complete = (textarea: HTMLTextAreaElement, insertText: { before: string, after: string }): EditorHistory => {
    const {selectionStart: start, selectionEnd: end, value: text, scrollTop} = textarea;
    let result: EditorHistory = {scrollTop, end, start, text, type: 'complete' + now()}

    const {before, after} = insertText;

    if (start != end) {
        let mid = text.slice(start, end)
        if (mid.startsWith(before) && mid.endsWith(after)) {
            mid = mid.slice(before.length, mid.length - after.length)
            result.text = insertIntoString(mid, result.text, start, end)
            result.start = start
            result.end = end - before.length - after.length
        } else {
            mid = `${before}${mid}${after}`
            result.text = insertIntoString(mid, result.text, start, end)
            result.start = start + before.length
            result.end = end + before.length
        }
    } else {
        result.text = insertIntoString(before, text, start);
        result.end = end + before.length;
        if (after.length > 0) {
            result.text = insertIntoString(after, result.text, result.end);
        }

        result.start += before.length
        result.end = result.start
    }
    return result
}

// 回车保留缩进
export const batchEnter = (textarea: HTMLTextAreaElement, e: KeyboardEvent, getSpace: (...args: any[]) => string = getLeadingSpace): EditorHistory => {
    const start = textarea.selectionStart;
    const space = getSpace(textarea.value, start)
    const text = insertIntoString("\n" + space, textarea.value, start);
    return {
        scrollTop: textarea.scrollTop, end: start + space.length + 1, start: start + space.length + 1, text, type: "enter" + now()
    }
}

// 批量缩进（Tab）
export const batchTab = (textarea: HTMLTextAreaElement, e: KeyboardEvent, tab: string = '\t'): EditorHistory | null => {
    const {selectionStart: start, selectionEnd: end, value: text, scrollTop} = textarea;

    let result: EditorHistory = {scrollTop, end, start, text, type: 'tab' + now()}

    if (e.shiftKey) {
        if (start == end) {
            const index = text.lastIndexOf('\n', start - 1) + 1;
            const temp = text.slice(index, start);
            const newTemp = temp.replace(tab, '');
            if (temp.length === newTemp.length) return null
            result.text = `${text.slice(0, start - temp.length)}${newTemp}${text.slice(end)}`
            result.start = start - 1
            result.end = start - 1
        } else {
            const temp = text.slice(start, end);
            const newTemp = temp.replace(tab, '').replaceAll(`\n${tab}`, '\n');
            if (temp.length === newTemp.length) return null
            result.text = `${text.slice(0, start)}${newTemp}${text.slice(start + temp.length)}`
            result.end = start + newTemp.length
        }
    } else {
        if (start == end) {
            result.text = insertIntoString(tab, text, start)
            result.start = start + tab.length
            result.end = start + tab.length
        } else {
            const temp = text.slice(start, end);
            const newTemp = `${tab}${temp.replaceAll('\n', `\n${tab}`)}`;
            if (temp.length === newTemp.length) return null
            result.text = `${text.slice(0, start)}${newTemp}${text.slice(start + temp.length)}`;
            result.end = start + newTemp.length
        }
    }
    return result
}