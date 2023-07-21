import {isMobile} from "../utils/common/platform";
import {limit} from "../utils/common/math";
import {throttle} from "lodash";

/**
 * 拖曳指令，可以通过给定范围来控制拖曳范围。具体如下：
 * v-drag="{minX: 0, minY: 0, maxX: 500, maxY: 500}", 可以使目标保持在以初始位置为（0，0）的范围中
 *
 * input、button、textarea、select、option默认不会触发 v-drag
 * 可以通过给定 ignore-drag 属性来使其他子元素避免拖动事件
 *
 * 注意！触控端为避免冲突，会开启 e.preventDefault() 导致原有事件被覆盖，请尽可能给有需要交互的元素给定 ignore-drag
 */
export const vDrag = {
    mounted(el: HTMLElement, binding: {value: PositionRange}) {
        if (isMobile.value) {
            // 移动端手指触碰事件
            el.addEventListener('touchstart', throttle((e: TouchEvent) => {
                for (const eventTarget of e.composedPath()) {
                    if (eventTarget instanceof HTMLElement) {
                        const element = <HTMLElement>eventTarget
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement ||
                            element instanceof HTMLSelectElement ||
                            element instanceof HTMLButtonElement ||
                            element.attributes.getNamedItem('ignore-drag') != undefined
                        ) return
                    }
                }

                e.preventDefault();

                const positionRange: PositionRange = binding.value

                // 当前滑块位置
                const rectLeft = el.offsetLeft;
                const rectTop = el.offsetTop;

                const startX = e.touches[0].clientX;
                const startY = e.touches[0].clientY;

                const setXY = (e: TouchEvent) => {
                    const moveX = e.touches[0].clientX - startX + rectLeft;
                    const moveY = e.touches[0].clientY - startY + rectTop;

                    if (positionRange == undefined) {
                        el.style.top = moveY + 'px'
                        el.style.left = moveX + 'px'
                    } else {
                        el.style.top = limit(moveY, positionRange.minY, positionRange.maxY ? positionRange.maxY - el.offsetWidth : undefined) + "px";
                        el.style.left = limit(moveX, positionRange.minX, positionRange.maxX ? positionRange.maxX - el.offsetWidth : undefined) + "px";
                    }
                }

                const removeSetXY = () => {
                    document.removeEventListener('touchmove', setXY);
                    document.removeEventListener('touchend', removeSetXY);
                }

                document.addEventListener('touchmove', setXY);
                document.addEventListener('touchend', removeSetXY);

                return false
            }, 100))
        } else {
            // 网页端鼠标事件
            el.addEventListener('mousedown', throttle((e: MouseEvent) => {
                for (const eventTarget of e.composedPath()) {
                    if (eventTarget instanceof HTMLElement) {
                        const element = <HTMLElement>eventTarget
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement ||
                            element instanceof HTMLSelectElement ||
                            element instanceof HTMLButtonElement ||
                            element.attributes.getNamedItem('ignore-drag') != undefined
                        ) return
                    }
                }

                const positionRange: PositionRange = binding.value

                // 当前滑块位置
                const rectLeft = el.offsetLeft;
                const rectTop = el.offsetTop;
                // 初始的位置
                const startX = e.clientX;
                const startY = e.clientY;

                const setXY = (e: MouseEvent) => {
                    const moveX = e.clientX - startX + rectLeft;
                    const moveY = e.clientY - startY + rectTop;

                    if (positionRange == undefined) {
                        el.style.top = moveY + 'px'
                        el.style.left = moveX + 'px'
                    } else {
                        el.style.top = limit(moveY, positionRange.minY, positionRange.maxY ? positionRange.maxY - el.offsetWidth : undefined) + "px";
                        el.style.left = limit(moveX, positionRange.minX, positionRange.maxX ? positionRange.maxX - el.offsetWidth : undefined) + "px";
                    }
                };

                const removeSetXY = () => {
                    document.removeEventListener('mousemove', setXY);
                    document.removeEventListener('mouseup', removeSetXY);
                }

                document.addEventListener('mousemove', setXY);
                document.addEventListener('mouseup', removeSetXY);

                return false
            }, 100))
        }
    }
}