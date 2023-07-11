import {Ref} from "vue";
import {InsertUnit} from "../../declare/EditorUtil";
import {now} from "../../tests/time";

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

/**
 * 获取 Ref 参数 Map
 * @param units: 插入列表
 */
export const getArgsMap = (units: InsertUnit[]): Map<string, Ref> => {
    const argsMap = new Map<string, Ref>()
    for (let i = 0; i < units.length; i++) {
        for (let j = 0; j < units[i].arguments.length; j++) {
            argsMap.set(units[i].arguments[j].name, units[i].arguments[j].getRef())
        }
    }
    return argsMap
}

export const simpleInsert = (
    textarea: HTMLTextAreaElement,
    type: string,
    before: string,
    after: string = "",
    keepSelect: boolean = false,
    replace: boolean = false,
    pushNow: boolean = true,
): EditorHistory => {
    const text = textarea.value
    const oldStart = textarea.selectionStart
    const oldEnd = textarea.selectionEnd
    const top = textarea.scrollTop

    let content
    let newStart
    let newEnd

    if (replace) {
        content = insertIntoString(before, text, oldStart, oldEnd);
    } else {
        content = insertIntoString(before, text, oldStart);
    }
    newEnd = oldEnd + before.length
    if (after.length > 0) {
        content = insertIntoString(after, content, newEnd);
    }
    if (keepSelect) {
        newStart = oldStart
        newEnd = newEnd + after.length
    } else {
        newStart = oldStart + before.length
        newEnd = oldStart + before.length
    }

    return {
        scrollTop: top,
        text: content,
        type: type + (pushNow ? ` ${now()}` : ''),
        start: newStart != undefined ? newStart : oldStart,
        end: newEnd != undefined ? newEnd : (newStart != undefined ? newStart : oldStart),
    }
}