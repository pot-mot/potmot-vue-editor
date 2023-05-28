export const decodeHTML = (input: string) => {
    return input
        .replaceAll('&amp;', "&")
        .replaceAll('&quot;', '"')
        .replaceAll('&#39;', "'")
        .replaceAll('&lt;', "<")
        .replaceAll('&gt;', ">")
        .replaceAll('<br/>', "<br>")
        .replaceAll('</br>', '<br>')
}