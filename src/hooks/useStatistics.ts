import {onBeforeUnmount, onMounted, reactive} from "vue";

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

/**
 * 统计 textarea 文字相关数据
 *
 * @param target 目标，一个函数，返回一个 HTMLTextAreaElement
 * @param step 扫描间隔时间，默认为 100
 * @param text 文本，默认为 target 的 value
 */
export const useStatistics = (
    target: () => HTMLTextAreaElement,
    step: number = 100,
    text: () => string = () => target().value
) => {
    const statisticalData = reactive({
        selectLength: 0,
        startPlace: {x: 1, y: 1},
        endPlace: {x: 1, y: 1},
    });

    // 统计数据，和定时器一起使用
    const setEditData = () => {
        const textarea = target();
        if (!textarea) return;

        statisticalData.startPlace = getPlace(textarea.selectionStart, text());
        if (textarea.selectionStart == textarea.selectionEnd) {
            statisticalData.endPlace = statisticalData.startPlace;
        } else {
            statisticalData.endPlace = getPlace(textarea.selectionEnd, text());
        }
        statisticalData.selectLength = textarea.selectionEnd - textarea.selectionStart;
    }

    let editEditInterval: number;

    onMounted(() => {
        setEditData();
        editEditInterval = setInterval(setEditData, step);
    });

    onBeforeUnmount(() => {
        clearInterval(editEditInterval);
    });
    
    return {
        statisticalData,
    }
}