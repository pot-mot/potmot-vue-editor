import {Ref} from "vue";
import {InsertUnit} from "../../declare/EditorUtil";
import {now} from "../../tests/time";
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
    beforePart: string,
    afterPart: string = "",
    keepSelect: boolean = false,
    replace: boolean = false,
    pushNow: boolean = true,
): EditorHistory => {
    const text = textarea.value
    const oldStart = textarea.selectionStart
    const oldEnd = textarea.selectionEnd
    const top = textarea.scrollTop

    const startPart: string = text.slice(0, oldStart)
    const midPart: string = replace ?  '' : text.slice(oldStart, oldEnd)
    const endPart: string = text.slice(oldEnd)

    let content: string[] = [startPart, beforePart, midPart, afterPart, endPart];

    let newStart: number;
    let newEnd: number;

    if (keepSelect) {
        newStart = oldStart
        newEnd = newStart + beforePart.length + midPart.length + afterPart.length
    } else {
        newStart = oldStart + beforePart.length
        newEnd = newStart
    }

    return {
        scrollTop: top,
        text: content.join(""),
        type: type + (pushNow ? ` ${now()}` : ''),
        start: newStart,
        end: newEnd,
    };
}

export const formatInsert = (
    textarea: HTMLTextAreaElement,
    type: string,
    formatter: (startPart: string, midPart: string, endPart: string, space: string) => {
        content: string[] | string,
        start: number,
        end?: number
    },
    pushNow: boolean = true,
): EditorHistory => {
    const text = textarea.value
    const oldStart = textarea.selectionStart
    const oldEnd = textarea.selectionEnd
    const top = textarea.scrollTop

    const startPart: string = text.slice(0, oldStart)
    const midPart: string = text.slice(oldStart, oldEnd)
    const endPart: string = text.slice(oldEnd)

    let temp = textarea.selectionStart
    while (text[temp] == " " || text[temp] == "\t") {
        temp++;
    }
    const space = getLeadingSpace(text, temp).replace("\n", "")

    const {content, start, end} = formatter(startPart, midPart, endPart, space);

    return {
        scrollTop: top,
        text: typeof content == "string" ? content : content.join(""),
        type: type + (pushNow ? ` ${now()}` : ''),
        start: start,
        end: end == undefined ? start : end,
    };
}