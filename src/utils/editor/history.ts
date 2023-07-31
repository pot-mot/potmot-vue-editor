export const completeHistory = (input: Partial<EditorHistory> | undefined, defaultValue: EditorHistory): EditorHistory => {
    if (!input) return defaultValue;
    if (input.start != undefined && input.end == undefined) {
        input.end = input.start;
    }
    return Object.assign(defaultValue, input)
}