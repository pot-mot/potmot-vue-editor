export const setSize = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto'
    el.style.height = `calc(${el.scrollHeight}px + 0.2em)`
}

const setSizeByEvent = (event: Event) => {
    const textarea = <HTMLTextAreaElement>event.target
    setSize(textarea)
}

const eventTypeList = ["focus", "input", "change", "blur"]

export const setTextareaAdapt = (textarea: HTMLTextAreaElement) => {
    eventTypeList.forEach(eventType => {
        textarea.addEventListener(eventType, setSizeByEvent)
    })
}


export const removeTextareaAdapt = (textarea: HTMLTextAreaElement) => {
    eventTypeList.forEach(eventType => {
        textarea.removeEventListener(eventType, setSizeByEvent)
    })
}
