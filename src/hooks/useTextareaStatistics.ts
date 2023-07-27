import {nextTick, onMounted, reactive, Ref} from "vue";
import {throttle} from "lodash";

/**
 * 获取文字在文段中的位置
 * 以换行符作为行的判断标准
 *
 * @param position 文字位置
 * @param text 文段
 *
 * @return 以 (1,1) 作为坐标原点的位置
 */
export const getPlace = (position: number, text: string): { x: number, y: number } => {
    let x = 0;
    let y = 1;
    if (text[position] == "\n") {
        position--;
        x++;
    }
    for (let i = position; i >= 0; i--) {
        if (text[i] == '\n') {
            break;
        }
        x++;
    }
    for (let i = position; i >= 0; i--) {
        if (text[i] == '\n') {
            y++;
        }
    }
    return {y, x};
}

const changeEvent = ["input", "change", "select", "focus", "blur"]

/**
 * 统计 textarea 文字相关数据
 *
 * @param target 目标 TextArea
 */
export const useTextareaStatistics = (
    target: Ref<HTMLTextAreaElement | undefined | null>,
) => {
    const statisticalData = reactive({
        selectLength: 0,
        startPlace: {x: 1, y: 1},
        endPlace: {x: 1, y: 1},
    });

    onMounted(() => {
        if (!target.value) return;
        const textarea = target.value;

        // 统计数据
        const setData = throttle(() => {
            statisticalData.startPlace = getPlace(textarea.selectionStart, textarea.value);
            if (textarea.selectionStart == textarea.selectionEnd) {
                statisticalData.endPlace = statisticalData.startPlace;
            } else {
                statisticalData.endPlace = getPlace(textarea.selectionEnd, textarea.value);
            }
            statisticalData.selectLength = textarea.selectionEnd - textarea.selectionStart;
        }, 100)

        changeEvent.forEach(event => {
            textarea.addEventListener(event, () => nextTick(setData))
        })
    })
    
    return {
        statisticalData,
    }
}