import { Ref } from "vue";
/**
 * 获取文字在文段中的位置
 * 以换行符作为行的判断标准
 *
 * @param position 文字位置
 * @param text 文段
 *
 * @return 以 (1,1) 作为坐标原点的位置
 */
export declare const getPlace: (position: number, text: string) => {
    x: number;
    y: number;
};
/**
 * 统计 textarea 文字相关数据
 *
 * @param target 目标 TextArea
 */
export declare const useTextareaStatistics: (target: Ref<HTMLTextAreaElement | undefined | null>) => {
    statisticalData: {
        selectLength: number;
        startPlace: {
            x: number;
            y: number;
        };
        endPlace: {
            x: number;
            y: number;
        };
    };
};
