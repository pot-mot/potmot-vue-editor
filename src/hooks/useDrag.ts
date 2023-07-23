import {isMobile} from "../utils/common/platform";
import {throttle} from "lodash";
import {limit} from "../utils/common/math";
import {onMounted} from "vue";

const setPositionByRange = (el: HTMLElement, range: PositionRange | undefined, moveX: number, moveY: number) => {
    if (range == undefined) {
        el.style.top = moveY + 'px'
        el.style.left = moveX + 'px'
    } else {
        el.style.top = limit(moveY, range.minY, range.maxY ? range.maxY - el.offsetWidth : undefined) + "px";
        el.style.left = limit(moveX, range.minX, range.maxX ? range.maxX - el.offsetWidth : undefined) + "px";
    }}

const setMouseDrag = (el: HTMLElement | undefined, range: PositionRange | (() => PositionRange), throttleTimeout: number) => {
    if (el == undefined) return

    let positionRange: PositionRange

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

        if (range instanceof Function) {
            positionRange = range()
        } else {
            positionRange = range
        }

        // 当前滑块位置
        const rectLeft = el.offsetLeft;
        const rectTop = el.offsetTop;
        // 初始的位置
        const startX = e.clientX;
        const startY = e.clientY;

        const setXY = (e: MouseEvent) => {
            const moveX = e.clientX - startX + rectLeft;
            const moveY = e.clientY - startY + rectTop;
            setPositionByRange(el, positionRange, moveX, moveY)
        };

        const removeSetXY = () => {
            document.removeEventListener('mousemove', setXY);
            document.removeEventListener('mouseup', removeSetXY);
        }

        document.addEventListener('mousemove', setXY);
        document.addEventListener('mouseup', removeSetXY);

        return false
    }, throttleTimeout))
}


const setTouchDrag = (el: HTMLElement | undefined, range: PositionRange | (() => PositionRange), throttleTimeout: number) => {
    if (el == undefined) return

    let positionRange: PositionRange

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

        if (range instanceof Function) {
            positionRange = range()
        } else {
            positionRange = range
        }

        // 当前滑块位置
        const rectLeft = el.offsetLeft;
        const rectTop = el.offsetTop;

        const startX = e.touches[0].clientX;
        const startY = e.touches[0].clientY;

        const setXY = (e: TouchEvent) => {
            const moveX = e.touches[0].clientX - startX + rectLeft;
            const moveY = e.touches[0].clientY - startY + rectTop;

            setPositionByRange(el, positionRange, moveX, moveY)
        }

        const removeSetXY = () => {
            document.removeEventListener('touchmove', setXY);
            document.removeEventListener('touchend', removeSetXY);
        }

        document.addEventListener('touchmove', setXY);
        document.addEventListener('touchend', removeSetXY);

        return false
    }, throttleTimeout))
}

export const useDrag = (target: () => HTMLElement | undefined, range: PositionRange | (() => PositionRange), throttleTimeout: number = 100) => {
    const el = target()
    if (el == undefined) {
        onMounted(() => {
            if (isMobile.value) {
                setTouchDrag(target(), range, throttleTimeout)
            } else {
                setTouchDrag(target(), range, throttleTimeout)
            }
        })
    } else {
        if (isMobile.value) {
            setTouchDrag(el, range, throttleTimeout)
        } else {
            setMouseDrag(el, range, throttleTimeout)
        }
    }
}