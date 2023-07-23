import {useDrag} from "../hooks/useDrag";

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
    mounted(el: HTMLElement, binding: {value: PositionRange | (() => PositionRange)}) {
        useDrag(() => el, binding.value)
    }
}
