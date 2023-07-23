import {onBeforeUnmount, onMounted} from "vue";
import {svgIcon, svgIconPrefix} from "../constants/icon/svgIcon";
import {setStyle} from "../utils/common/style";
import {hideStyle} from "../constants/css/style";

export const useSvgIcon = (icons: (string | undefined)[], containerId: string = `${svgIconPrefix}container`) => {
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
            setStyle(item, hideStyle)
            document.documentElement.appendChild(item)
            container = item
        }

        icons.forEach(iconName => {
            if (iconName == undefined) return
            if (!svgNameList.has(`${svgIconPrefix}${iconName}`) && iconName in svgIcon && container) {
                container.innerHTML += svgIcon[iconName]!
            }
        })
    })

    onBeforeUnmount(() => {
        let container: HTMLElement | null = document.getElementById(containerId)
        if (container) container.remove()
    })
}