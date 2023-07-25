import {setStyle, syncSearchCssStyle} from "../utils/common/style";
import {getCurrentLineBefore} from "../utils/common/text";
import {hideStyle} from "../constants/css/style";
import {encodeHTML} from "../utils/common/htmlParse";
import {onBeforeUnmount} from "vue";

/**
 * 计算 selection 和 cursor 位置
 * @param target
 * @param containerId
 */
export const useSelectionFocus = (
    target: () => HTMLTextAreaElement | undefined,
    containerId: string = "search-box-container"
) => {
    let container = document.getElementById(containerId);
    if (container == null) {
        const item = document.createElement('div');
        item.id = containerId
        setStyle(item, hideStyle);
        document.documentElement.appendChild(item);
        container = item
    }
    const calculateBox = document.createElement('div');
    setStyle(calculateBox, hideStyle);
    container.appendChild(calculateBox);

    const getCursorScroll = (start: number) => {
        const textarea = target();
        if (textarea == undefined) return {top: 0, left: 0}

        syncSearchCssStyle(calculateBox, textarea);

        calculateBox.textContent = getCurrentLineBefore(textarea.value, start);
        const leftDelta: number = calculateBox.scrollWidth - textarea.clientWidth / 3

        const heightText = textarea.value.slice(0, start);
        if (window.getComputedStyle(textarea).whiteSpace == 'nowrap') {
            calculateBox.innerHTML = encodeHTML(heightText).replaceAll('\n', '<br>');
        } else {
            calculateBox.textContent = heightText
        }
        const topDelta: number = calculateBox.scrollHeight - textarea.clientHeight / 2.4

        return {
            top: topDelta > 0 ? topDelta : 0,
            left: leftDelta > 0 ? leftDelta : 0
        }
    }

    onBeforeUnmount(() => {
        if (container) container.remove();
    });

    return {
        getCursorScroll,
    }
}