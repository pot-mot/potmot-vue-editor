import {onMounted} from "vue";
import {svgIconMap} from "../../constants/icon/svgIcon";

export const useSvgIconLib = (icons: string[], containerId: string = "svg-icon-lib-container") => {
    const svgNameList = new Set

    onMounted(() => {
        let container: HTMLElement | null = document.getElementById(containerId)

        if (container) {
            const svgList = container.querySelectorAll("svg")
            svgList.forEach(svg => {
                svgNameList.add(svg.id)
            })
        } else {
            const item = document.createElement('div')
            item.id = containerId
            document.documentElement.appendChild(item)
            container = item
        }

        icons.forEach(iconName => {
            if (!svgNameList.has(iconName) && svgIconMap.has(iconName) && container) {
                container.innerHTML += svgIconMap.get(iconName)!
            }
        })
    })
}