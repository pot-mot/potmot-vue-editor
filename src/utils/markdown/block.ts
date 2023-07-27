export const isBlockEmpty = (data: string[]) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].trim().length != 0) return false
    }
    return true
}