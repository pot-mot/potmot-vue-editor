import {limit} from "./math";
import {nextTick} from "vue";

/**
 * 将目标 textarea 修改为高度自适应
 * @param el 目标元素
 * @param min 最少行
 * @param max 最多行
 */
export const setSize = (el: HTMLTextAreaElement, min: number = 1, max: number = Number.MAX_SAFE_INTEGER) => {
    el.style.height = 'auto'
    const style = window.getComputedStyle(el)
    const length = el.value.split('\n').length
    el.style.height = `calc(${style.lineHeight} * ${limit(length, min, max)} + ${style.paddingTop} + ${style.paddingBottom} + 3px)`
}

/**
 * 导致 textarea 出现高度自适应的事件列表
 */
const eventTypeList = ["focus", "input", "change", "blur"]


/**
 * 在事件触发后设置尺寸
 * @param event 事件
 * @param min 最少行
 * @param max 最多行
 */
const setSizeByEvent = (event: Event, min: number = 1, max: number = Number.MAX_SAFE_INTEGER) => {
    const target = event.target
    if (target instanceof HTMLTextAreaElement) {
        setSize(target, min, max)
    }
}

/**
 * 为元素绑定事件触发设置高度自适应
 * @param textarea 目标元素
 * @param min 最少行
 * @param max 最多行
 */
export const setTextareaAdapt = (textarea: HTMLTextAreaElement, min: number = 1, max: number = Number.MAX_SAFE_INTEGER) => {
    eventTypeList.forEach(eventType => {
        textarea.addEventListener(eventType, (e) => {
            setSizeByEvent(e, min, max)
        })
    })
}

export const updateTextarea = (textarea: HTMLTextAreaElement, history: EditorHistory) => {
    const {start, end, scrollTop, text} = history
    textarea.value = text
    textarea.scrollTop = scrollTop
    nextTick(() => [textarea.selectionStart, textarea.selectionEnd] = [start, end]).then()
    const newE = new Event('input')
    textarea.dispatchEvent(newE)
}
