import {tableHeadOptions} from "../../constants/insertUnits/markdown/table";

const headerSpace = "---"

export const tableLineCreate = (length: number, placeHolder: string = "", data: string[] = []): string => {
    let line: string[] = ["|"]
    for (let j = 0; j < length; j++) {
        if (j < data.length && data[j].length > 0) {
            line.push(` ${data[j]} |`)
        } else {
            line.push(` ${placeHolder} |`)
        }
    }
    return line.join("")
}

export const tableCreate = (height: number, width: number, placeholder: string, tableHead?: string): string => {
    const result: string[] = []
    if (tableHead == tableHeadOptions[0]) {
        result.push(tableLineCreate(width, placeholder), tableLineCreate(width, headerSpace))
        for (let i = 1; i < height; i++) {
            result.push(tableLineCreate(width, placeholder))
        }
    } else if (tableHead == tableHeadOptions[1]) {
        result.push(tableLineCreate(width, ""), tableLineCreate(width, headerSpace))
        for (let i = 0; i < height; i++) {
            result.push(tableLineCreate(width, placeholder))
        }
    } else {
        for (let i = 0; i < height; i++) {
            result.push(tableLineCreate(width, placeholder))
        }
    }
    return result.join("\n")
}

export const tableFormat = (data: string[][], width: number, placeholder: string, tableHead?: string) => {
    const result: string[] = []
    if (tableHead == tableHeadOptions[0]) {
        result.push(tableLineCreate(width, placeholder, data[0]), tableLineCreate(width, headerSpace))
        for (let i = 1; i < data.length; i++) {
            result.push(tableLineCreate(width, placeholder, data[i]))
        }
    } else if (tableHead == tableHeadOptions[1]) {
        result.push(tableLineCreate(width, ""), tableLineCreate(width, headerSpace))
        for (let i = 0; i < data.length; i++) {
            result.push(tableLineCreate(width, placeholder, data[i]))
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            result.push(tableLineCreate(width, placeholder, data[i]))
        }
    }
    return result.join("\n")
}