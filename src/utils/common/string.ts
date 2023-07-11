export const ltrim = (str: string): string => {
    return str.replace(/^\s+/, "");
}

export const rtrim = (str: string): string => {
    return str.replace(/\s+$/, "");
}