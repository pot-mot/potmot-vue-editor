export const encodeHTML = (html: string) => {
    if (html === null || html === undefined || html === '') {
        return ''
    }
    let temp = document.createElement("div")
    temp.textContent = html
    const output = temp.innerHTML
    temp.remove()
    return output
}

export const decodeHTML = (text: string) => {
    if (text === null || text === undefined || text === '') {
        return ''
    }
    let temp = document.createElement("div");
    temp.innerHTML = text
    const output = temp.textContent === null ? '' : temp.textContent
    temp.remove()
    return output
}
