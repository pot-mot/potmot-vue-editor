import {onMounted} from "vue";
import {svgIcon, svgIconPrefix} from "../../constants/icon/svgIcon";

export const useSvgIcon = (icons: string[], containerId: string = `${svgIconPrefix}container`) => {
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
            item.style.overflow = "hidden"
            item.style.width = "0"
            item.style.height = "0"
            item.style.display = "none"
            item.style.visibility = "hidden"
            document.documentElement.appendChild(item)
            container = item
        }

        icons.forEach(iconName => {
            if (!svgNameList.has(`${svgIconPrefix}${iconName}`) && iconName in svgIcon && container) {
                container.innerHTML += svgIcon[iconName]!
            }
        })
    })
}