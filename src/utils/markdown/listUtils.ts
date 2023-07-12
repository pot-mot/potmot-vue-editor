import {ltrim} from "../common/string";

export const unorderedListMarks = ['-', '*', '+']

export const unorderedListCreat = (length: number, mark: string, space: string): string => {
    let result: string[] = []
    for (let i = 0; i < length; i++) {
        result.push(`${space}${mark} `)
    }
    return result.join("\n").slice(space.length)
}

export const unorderedListJudge = (data: string[]) => {
    for (const item of data) {
        // 当第一部分是mark且后面是空格，才符合要求
        if (!(unorderedListMarks.includes(ltrim(item)[0]) && ltrim(item)[1] == ' ')) {
            return false
        }
    }
    return true
}

export const unorderedListFormat = (data: string[], mark: string, space: string): string => {
    if (unorderedListJudge(data)) {
        return unorderedListReformat(data, space).join('\n')
    } else if (orderedListJudge(data)) {
        data = orderedListReformat(data, space)
    }
    let result: string[] = []
    data.forEach(item => {
        result.push(`${space}${mark} ${ltrim(item)}`)
    })
    return result.join("\n").slice(space.length)
}

export const unorderedListReformat = (data: string[], space?: string): string[] => {
    let result: string[] = []
    for (let i = 0; i < data.length; i++) {
        let item, mark
        for (mark of unorderedListMarks) {
            item = ltrim(data[i])
            if (item.startsWith(mark)) {
                break
            }
        }
        if (item == undefined || mark == undefined) continue
        item = ltrim(item).slice(ltrim(item).indexOf(mark) + 2)
        if (space != undefined) {
            result.push(`${space}${item}`)
        } else {
            result.push(item)
        }
    }
    return result
}

export const orderedListCreat = (length: number, start: number, space: string): string => {
    let result: string[] = []
    for (let i = 0; i < length; i++) {
        result.push(`${space}${start + i}. `)
    }
    return result.join("\n").slice(space.length)
}

export const orderedListJudge = (data: string[]) => {
    for (const item of data) {
        // 当第一部分是数字且后面是空格，才符合要求
        const length = ltrim(item).indexOf('.')
        if (!(!isNaN(parseInt(ltrim(item).slice(0, length))) && ltrim(item)[length + 1] == ' ')) {
            return false
        }
    }
    return true
}

export const orderedListFormat = (data: string[], space: string): string => {
    if (orderedListJudge(data)) {
        return orderedListReformat(data, space).join('\n')
    } else if (unorderedListJudge(data)) {
        data = unorderedListReformat(data, space)
    }
    let result: string[] = []
    for (let i = 0; i < data.length; i++) {
        result.push(`${space}${i + 1}. ${ltrim(data[i])}`)
    }
    return result.join("\n").slice(space.length)
}

export const orderedListReformat = (data: string[], space?: string): string[] => {
    let result: string[] = []
    for (let i = 0; i < data.length; i++) {
        const item = ltrim(data[i]).slice(ltrim(data[i]).indexOf('.') + 2)
        if (space != undefined) {
            result.push(`${space}${item}`)
        } else {
            result.push(item)
        }
    }
    return result
}