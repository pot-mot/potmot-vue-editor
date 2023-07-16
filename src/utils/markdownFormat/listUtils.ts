import {ltrim} from "../common/string";

interface listItem {
    mark: boolean
    text: string
}

export const unorderedListCreat = (length: number, mark: string, space: string, placeholder: string = ""): string => {
    let result: string[] = []
    for (let i = 0; i < length; i++) {
        result.push(`${space}${mark} ${placeholder}`)
    }
    return result.join("\n").slice(space.length)
}

export const unorderedListJudge = (data: string[]) => {
    for (const item of data) {
        // 跳过空行
        if (item.trim().length == 0) continue
        if (!(/^\s*[-+*]\s+/.test(item))) {
            return false
        }
    }
    return true
}

export const unorderedListReformat = (data: string[], space?: string): string[] => {
    let result: listItem[] = []

    for (let i = 0; i < data.length; i++) {
        const item = data[i].replace(/^\s*[-+*]\s+/, '')
        result.push({mark: true, text: `${space == undefined ? '' : space}${item}`})
    }
    return groupUnmark(result)
}

export const unorderedListFormat = (data: string[], mark: string, space: string, placeholder: string = ""): string => {
    if (isAllEmpty(data)) {
        return unorderedListCreat(data.length, mark, space, placeholder)
    }
    if (unorderedListJudge(data)) {
        return unorderedListReformat(data, space).join('\n')
    }

    if (orderedListJudge(data)) {
        data = orderedListReformat(data, space)
        if (isAllEmpty(data)) {
            return unorderedListCreat(data.length, mark, space, placeholder)
        }
    }
    let result: string[] = []
    data.forEach(item => {
        if (item.indexOf('\n') == -1 && item.trim().length == 0) {
            result.push('')
        } else {
            result.push(`${space}${mark} ${ltrim(item).length > 0 ? ltrim(item) : placeholder}`)
        }
    })
    return result.join("\n").slice(space.length)
}

export const orderedListCreat = (length: number, start: number, space: string, placeholder: string = ""): string => {
    let result: string[] = []
    for (let i = 0; i < length; i++) {
        result.push(`${space}${start + i}. ${placeholder}`)
    }
    return result.join("\n").slice(space.length)
}

export const orderedListJudge = (data: string[]) => {
    for (const item of data) {
        // 跳过空行
        if (item.trim().length == 0) continue
        if (!(/^\s*\d+\.\s+/.test(item))) {
            return false
        }
    }
    return true
}

export const orderedListReformat = (data: string[], space?: string): string[] => {
    let result: listItem[] = []
    for (let i = 0; i < data.length; i++) {
        const item = data[i].replace(/^\s*\d+\.\s+/, '')
        result.push({mark: true, text: `${space == undefined ? '' : space}${item}`})
    }
    return groupUnmark(result)
}

export const orderedListFormat = (data: string[], space: string, start: number = 1, placeholder: string = ""): string => {
    if (isAllEmpty(data)) {
        return orderedListCreat(data.length, start, space, placeholder)
    }
    if (orderedListJudge(data)) {
        return orderedListReformat(data, space).join('\n')
    }

    if (unorderedListJudge(data)) {
        data = unorderedListReformat(data, space)
        if (isAllEmpty(data)) {
            return orderedListCreat(data.length, start, space, placeholder)
        }
    }
    let result: string[] = []
    let index = 0;
    data.forEach(item => {
        if (item.indexOf('\n') == -1 && item.trim().length == 0) {
            result.push('')
        } else {
            result.push(`${space}${++index}. ${item.length > 0 ? item : placeholder}`)
        }
    })
    return result.join("\n").slice(space.length)
}

export const isAllEmpty = (data: string[]) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].trim().length != 0) return false
    }
    return true
}

export const groupUnmark = (data: listItem[]): string[] => {
    let result: string[] = []
    for (let i = 0; i < data.length; i++) {
        if (result.length  == 0 || data[i].mark) {
            result.push(data[i].text)
        } else {
            result[result.length - 1] += data[i].text + '\n'
        }
    }
    return result
}