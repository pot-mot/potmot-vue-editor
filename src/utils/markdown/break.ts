import {getCurrentLine, getCurrentLineBefore} from "../common/text";

// 多级引用
export const multiQuote: RegExp = /^[ \t]*(>[ \t]*)*/;

// 列表前置标记
export const listMark: RegExp = /(([-+*]|\d+\.)( \[[xX ]])?)[ \t]+/

// 复杂前置 mark
export const leadingMarkRegex = /^[ \t]*((>[ \t]*)*)((([-+*]|\d+\.)( \[[xX ]])?)[ \t]+)*/;

/**
 * 获取当前行前方的缩进、引用、列表标记前缀
 * @param text 整个文段
 * @param start 当前起点
 * @param keepLastListMark 保留最后一个列表符
 */
export const getLeadingMarks = (text: string, start: number, keepLastListMark: boolean = true): string => {
    const line = getCurrentLineBefore(text, start);
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

export const judgeTableLine  = (line: string): boolean => {
    const result = line.trim().match(multiQuote);
    return result != null;
}

/**
 * 获取当前行的表格部分
 */
export const getTableLine = (line: string): string => {
    const tds = line.split(/(?<!\\)\|/g).filter(td => td.length > 0);
    return tds.map(td => td.replace(/./g, ' ')).join('|');
}

export const getMarkdownLeadingLine = (text: string, start: number) => {
    // const line = getCurrentLine(text, start);
    // const tableLine = judgeTableLine(line)
    // if (tableLine) {
    //     console.log(getTableLine(line));
    //     return getTableLine(line);
    // } else {
        return getLeadingMarks(text, start);
    // }
}