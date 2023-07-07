export const encodeHTML = (html: string) => {
    let temp = document.createElement("div")
    temp.textContent = html
    const output = temp.innerHTML
    temp.remove()
    return output
}

export const decodeHTML = (text: string) => {
    let temp = document.createElement("div");
    temp.innerHTML = text
    const output = temp.textContent === null ? '' : temp.textContent
    temp.remove()
    return output
}
