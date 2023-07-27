import {tableHeadType} from "../../core/insertUnits/markdown/table";

const headerSpace = "---"

export const tableLineCreate = (length: number, placeHolder: string = "", space: string = "", data: string[] = []): string => {
    let line: string[] = [`${space}|`]
    for (let j = 0; j < length; j++) {
        if (j < data.length && data[j].length > 0) {
            line.push(` ${data[j]} |`);
        } else {
            line.push(` ${placeHolder} |`);
        }
    }
    return line.join("");
}

export const tableCreate = (height: number, width: number, placeholder: string = "", space: string = "", tableHead?: string): string => {
    const result: string[] = []
    if (tableHead == tableHeadType.get("firstLine")) {
        result.push(tableLineCreate(width, placeholder, space), tableLineCreate(width, headerSpace, space));
        for (let i = 1; i < height; i++) {
            result.push(tableLineCreate(width, placeholder, space));
        }
    } else if (tableHead == tableHeadType.get("empty")) {
        result.push(tableLineCreate(width, ""), tableLineCreate(width, headerSpace));
        for (let i = 0; i < height; i++) {
            result.push(tableLineCreate(width, placeholder, space));
        }
    } else {
        for (let i = 0; i < height; i++) {
            result.push(tableLineCreate(width, placeholder, space));
        }
    }
    return result.join("\n");
}

export const tableFormat = (data: string[][], width: number, placeholder: string = "", space: string = "", tableHead?: string) => {
    const result: string[] = []
    if (tableHead == tableHeadType.get("firstLine")) {
        result.push(tableLineCreate(width, placeholder, space, data[0]), tableLineCreate(width, headerSpace, space));
        for (let i = 1; i < data.length; i++) {
            result.push(tableLineCreate(width, placeholder, space, data[i]));
        }
    } else if (tableHead == tableHeadType.get("empty")) {
        result.push(tableLineCreate(width, ""), tableLineCreate(width, headerSpace));
        for (let i = 0; i < data.length; i++) {
            result.push(tableLineCreate(width, placeholder, space, data[i]));
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            result.push(tableLineCreate(width, placeholder, space, data[i]));
        }
    }
    return result.join("\n");
}