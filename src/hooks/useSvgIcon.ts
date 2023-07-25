import {isRef, onBeforeUnmount, onMounted, Ref, watch} from "vue";
import {svgIcons, svgIconPrefix} from "../constants/icon/svgIcon";
import {setStyle} from "../utils/common/style";
import {hideStyle} from "../constants/css/style";

export const useSvgIcon = (icons: (string | Ref<string> | undefined)[], containerId: string = `${svgIconPrefix}container`) => {
    const svgNameList = new Set

    let container: HTMLElement | null

    onMounted(() => {
        container = document.getElementById(containerId);

        watch(() => icons, () => {
            if (container) {
                const svgList = container.querySelectorAll("svg");
                svgList.forEach(svg => {
                    svgNameList.add(svg.id);
                });
            } else {
                const item = document.createElement('div');
                item.id = containerId
                setStyle(item, hideStyle);
                document.documentElement.appendChild(item);
                container = item
            }

            icons.forEach(iconName => {
                if (iconName == undefined) return;

                let name: string
                if (isRef(iconName)) {
                    name = iconName.value
                } else {
                    name = iconName
                }
                if (!svgNameList.has(`${svgIconPrefix}${name}`) && name in svgIcons && container) {
                    container.innerHTML += svgIcons[name]!
                }
            });
        }, {immediate: true});
    });

    onBeforeUnmount(() => {
        let container: HTMLElement | null = document.getElementById(containerId);
        if (container) container.remove();
    });
}