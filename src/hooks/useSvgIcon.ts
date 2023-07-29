import {onMounted, watch} from "vue";
import {svgIcons, svgIconPrefix} from "../constants/icon";
import {createComputedHideDom} from "../utils/common/document";

const containerId: string =  `--${svgIconPrefix}container`
const svgContainer = createComputedHideDom('div', containerId)
const svgList = new Set;

export const importIcon = (iconName: string | undefined) => {
    if (!iconName) return;
    const id = `${svgIconPrefix}${iconName}`
    if (!svgList.has(id) && iconName in svgIcons) {
        svgContainer.value.innerHTML += svgIcons[iconName]!;
        svgList.add(id);
    }
}

export const useSvgIcon = (icon: string) => {
    onMounted(() => {
        watch(() => icon, () => {
            importIcon(icon);
        }, {immediate: true, deep: true});
    });
}

export const useSvgIcons = (icons: (string | undefined)[]) => {
    onMounted(() => {
        watch(() => icons, () => {
            icons.forEach(iconName => importIcon(iconName));
        }, {immediate: true, deep: true});
    });
}