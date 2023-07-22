import {isBlockEmpty} from "./block";

export const unorderedListCreat = (data: number | string[], mark: string, space: string = "", placeholder: string = ""): string => {
    let result: string[] = []
    if (typeof data == 'number') {
        for (let i = 0; i < data; i++) {
            result.push(`${space}${mark} ${placeholder}`)
        }
    } else {
        const empty = isBlockEmpty(data)
        if (empty) {
            for (let i = 0; i < data.length; i++) {
                result.push(`${space}${mark} ${placeholder}`)
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                const item = data[i].trimStart()
                if (item.length == 0) {
                    result.push(space)
                } else {
                    result.push(`${space}${mark} ${item}`)
                }
            }
        }
    }
    return result.join("\n")
}

export const unorderedListJudge = (data: string[]) => {
    if (isBlockEmpty(data)) return false

    for (const item of data) {
        // 跳过空行
        if (item.trim().length == 0) continue
        if (!(/^[ \t]*[-+*][ \t]/.test(item))) {
            return false
        }
    }
    return true
}

export const unorderedListReformat = (data: string[], space: string = ""): string[] => {
    let result: string[] = []

    for (let i = 0; i < data.length; i++) {
        if (data[i].trim().length == 0) {
            result.push(space)
        } else {
            const item = data[i].replace(/^[ \t]*[-+*][ \t]/, '')
            result.push(`${space}${item}`)
        }
    }
    return result
}

export const unorderedListFormat = (str: string, mark: string, space: string = "", placeholder: string = ""): string => {
    let data = str.split("\n")
    if (unorderedListJudge(data)) {
        return unorderedListReformat(data, space).join('\n')
    }

    if (orderedListJudge(data)) {
        data = orderedListReformat(data, space)
    }

    return unorderedListCreat(data, mark, space, placeholder)
}

export const orderedListCreat = (data: number | string[], start: number, space: string = "", placeholder: string = ""): string => {
    let result: string[] = []
    if (typeof data == 'number') {
        for (let i = 0; i < data; i++) {
            result.push(`${space}${start + i}. ${placeholder}`)
        }
    } else {
        const empty = isBlockEmpty(data)
        if (empty) {
            for (let i = 0; i < data.length; i++) {
                result.push(`${space}${start + i}. ${placeholder}`)
            }
        } else {
            let index = 0
            for (let i = 0; i < data.length; i++) {
                const item = data[i].trimStart()
                if (item.length == 0) {
                    result.push(space)
                } else {
                    result.push(`${space}${start + index++}. ${item}`)
                }
            }
        }
    }
    return result.join("\n")
}

export const orderedListJudge = (data: string[]) => {
    if (isBlockEmpty(data)) return false

    for (const item of data) {
        // 跳过空行
        if (item.trim().length == 0) continue
        if (!(/^[ \t]*\d+\.[ \t]/.test(item))) {
            return false
        }
    }
    return true
}

export const orderedListReformat = (data: string[], space: string = ""): string[] => {
    let result: string[] = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].trim().length == 0) {
            result.push(`${space}`)
        } else {
            const item = data[i].replace(/^[ \t]*\d+\.[ \t]/, '')
            result.push(`${space}${item}`)
        }
    }
    return result
}

export const orderedListFormat = (str: string, space: string = "", start: number = 1, placeholder: string = ""): string => {
    let data = str.split("\n")
    if (orderedListJudge(data)) {
        return orderedListReformat(data, space).join('\n')
    }

    if (unorderedListJudge(data)) {
        data = unorderedListReformat(data, space)
    }

    return orderedListCreat(data, start, space, placeholder)
}