import {getCurrentLine, getCurrentLineBefore, getCurrentLineStartEnd} from "../common/text";
import {now} from "lodash";

// 多级引用
export const multiQuote: RegExp = /^[ \t]*(>[ \t]*)*/;

// 列表前置标记
export const listMark: RegExp = /(([-+*]|\d+\.)( \[[xX ]])?)[ \t]+/;

// 复杂前置 mark
export const leadingMarkRegex = /^[ \t]*((>[ \t]*)*)((([-+*]|\d+\.)( \[[xX ]])?)[ \t]+)*/;

/**
 * 获取当前行前方的缩进、引用、列表标记前缀
 * @param text 整个文段
 * @param index 当前下标
 * @param keepLastListMark 保留最后一个列表符
 */
export const getLeadingMarks = (text: string, index: number, keepLastListMark: boolean = true): string => {
    const line = getCurrentLineBefore(text, index);
    const leadingMarks = line.match(leadingMarkRegex);

    if (leadingMarks == null || leadingMarks.length == 0) return '';

    let result = leadingMarks[0];
    let prefix = '';

    const match = result.match(multiQuote);
    if (match) {
        prefix = match[0];
        result = result.replace(prefix, '');
    }

    // 替换列表起点，直至只剩一个
    if (keepLastListMark) {
        while (listMark.test(result)) {
            const match = result.match(listMark);
            if (match) {
                const temp = result.replace(match[0], match[0].replace(/\S/g, ' '));
                if (listMark.test(temp)) {
                    result = temp;
                } else {
                    break;
                }
            }
        }

        result = result.replace(/\d+\./g, orderedListMark => {
            const incrementedNumber = parseInt(orderedListMark.slice(0, orderedListMark.length - 1)) + 1;
            return `${incrementedNumber}.`;
        });

        result = result.replace(/([-+*]|\d+\.) \[[xX ]]/g, todoListMark => {
            return todoListMark.replace(/\[[xX ]]/g, '[ ]');
        });
    } else {
        while (listMark.test(result)) {
            const match = result.match(listMark);
            if (match) {
                result = result.replace(match[0], match[0].replace(/\S/g, ' '));
            }
        }
    }

    return prefix + result
}

const tableLine = /(\|?.*?\|)+[ \t\\]*$/

const tableLineEnd = /[ \t\\]*$/

export const judgeTableLine  = (text: string, index: number): boolean => {
    const line = getCurrentLine(text, index);
    return tableLine.test(line.replace(multiQuote, ''));
}

/**
 * 创建表格的下一行
 */
export const createNextTableLine = (text: string, index: number): Partial<EditorHistory> => {
    let prefix = '';

    const {start, end} = getCurrentLineStartEnd(text, index);

    let line = text.slice(start, end);

    const matchPrefix = line.match(multiQuote);
    if (matchPrefix) {
        prefix = matchPrefix[0];
        line = line.slice(prefix.length);
    }
    const matchSuffix = line.match(tableLineEnd);
    if (matchSuffix) {
        line = line.slice(0, line.length - matchSuffix[0].length);
    }

    const tds = line.split(/(?<!\\)\|/g).filter(td => td.length > 0);

    if (index == end) {
        const nextLine = `\n${prefix}|${'  |'.repeat(tds.length)}`;
        return {
            type: 'table line' + now(),
            text: text.slice(0, end) + nextLine + text.slice(end),
            start: end + prefix.length + 3
        };
    } else {
        return {
            start: end
        };
    }
}