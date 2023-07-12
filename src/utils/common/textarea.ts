/**
 * 将目标 textarea 修改为高度自适应
 * @param el 目标元素
 */
export const setSize = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto'
    el.style.height = `calc(${el.scrollHeight}px + 0.2em)`
}

/**
 * 导致 textarea 出现高度自适应的事件列表
 */
const eventTypeList = ["focus", "input", "change", "blur"]


/**
 * 在事件触发后设置尺寸
 * @param event 事件
 */
const setSizeByEvent = (event: Event) => {
    const textarea = <HTMLTextAreaElement>event.target
    setSize(textarea)
}

/**
 * 为元素绑定事件触发设置高度自适应
 * @param textarea 目标元素
 */
export const setTextareaAdapt = (textarea: HTMLTextAreaElement) => {
    eventTypeList.forEach(eventType => {
        textarea.addEventListener(eventType, setSizeByEvent)
    })
}

/**
 * 为元素清空事件触发设置高度自适应
 * @param textarea 目标元素
 */
export const removeTextareaAdapt = (textarea: HTMLTextAreaElement) => {
    eventTypeList.forEach(eventType => {
        textarea.removeEventListener(eventType, setSizeByEvent)
    })
}
