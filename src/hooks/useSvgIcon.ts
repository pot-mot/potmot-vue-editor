import {computed, onMounted, watch} from "vue";
import {svgIcons, svgIconPrefix} from "../constants/icon/svgIcon";
import {createComputedHideDom} from "../utils/common/document";

const containerId: string =  `--${svgIconPrefix}container`
const svgContainer = createComputedHideDom('div', containerId)
const svgNameList = computed(() => {
    const set = new Set;
    const svgList = svgContainer.value.querySelectorAll("svg");
    svgList.forEach(svg => {
        set.add(svg.id);
    });
    return set;
})

export const importIcon = (iconName: string | undefined) => {
    if (!iconName) return;
    if (!svgNameList.value.has(`${svgIconPrefix}${iconName}`) && iconName in svgIcons) {
        svgContainer.value.innerHTML += svgIcons[iconName]!;
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