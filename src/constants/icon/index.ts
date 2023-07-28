import {toolbarIcon} from "./toolbar";

export const svgIconPrefix = "potmot-editor-svg-icon-"

export const setSvgId = (svg: string, name: string, prefix: string = svgIconPrefix) => {
    if (!/^\s?<svg/.test(svg)) return svg;
    const id = `id="${prefix}${name}"`
    if (/id=".*?"/.test(svg)) {
        return svg.replace(/id=".*?"/, id);
    } else {
        return svg.replace(/^\s?<svg/, `<svg ${id}`);
    }
}

const setSvgIds = (input: {[key: string]: string}) => {
    Object.keys(input).forEach(key => {
        input[key] = setSvgId(input[key], key)
    })
    return input;
}

export const svgIcons: {
    [key: string]: string
} = {
    ...setSvgIds(toolbarIcon)
}

export const svgIconNameList = Object.keys(svgIcons)