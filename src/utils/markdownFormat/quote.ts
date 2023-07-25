export const quoteJudge = (data: string[]) => {
    for (const item of data) {
        if (/^>[ \t]/.test(item)) {
            return true
        }
    }
    return false
}

export const quoteReformat = (data: string[], space: string = ""): string[] => {
    let result: string[] = []

    for (let i = 0; i < data.length; i++) {
        const item = data[i].replace(/^>[ \t]/, '');
        result.push(`${space}${item}`);
    }
    return result
}

export const quoteFormat = (str: string, space: string = ""): string => {
    const data = str.split("\n");
    if (quoteJudge(data)) {
        return quoteReformat(data, space).join("\n");
    }
    let result: string[] = []
    data.forEach(item => {
        result.push(`> ${space}${item.trimStart()}`);
    });
    return result.join("\n");
}