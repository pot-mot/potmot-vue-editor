import {getKeys} from "../../utils/common/object";

export const svgIconPrefix = "potmot-editor-svg-icon-"

export const close: string = `
<svg id="${svgIconPrefix}close" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
    <path d="M822.003 776.822l0.023-0.022-575.522-575.483c-5.788-5.792-13.786-9.374-22.621-9.374-17.662 0-31.98 14.318-31.98 31.98 0 8.834 3.582 16.832 9.373 22.62L776.112 821.34c5.84 6.278 14.167 10.21 23.417 10.21 17.662 0 31.98-14.318 31.98-31.98 0-8.901-3.638-16.949-9.506-22.747z"/>
    <path d="M776.784 201.448l-0.023-0.022-575.483 575.521c-5.792 5.788-9.374 13.786-9.374 22.621 0 17.663 14.318 31.98 31.98 31.98 8.834 0 16.832-3.582 22.62-9.373L821.301 247.34c6.278-5.839 10.21-14.166 10.21-23.416 0-17.662-14.318-31.98-31.98-31.98-8.902 0-16.95 3.637-22.747 9.505z"/>
</svg>
`

export const fullScreen = `
<svg id="${svgIconPrefix}fullScreen" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
   <path d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"/>
</svg>
`

export const editHistory = `
<svg id="${svgIconPrefix}editHistory" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M736 512 512 512 512 288C512 270.08 497.92 256 480 256 462.08 256 448 270.08 448 288l0 256C448 561.92 462.08 576 480 576l256 0C753.92 576 768 561.92 768 544 768 526.08 753.92 512 736 512zM480 64C215.04 64 0 279.04 0 544 0 808.96 215.04 1024 480 1024c264.96 0 480-215.04 480-480C960 279.04 744.96 64 480 64zM480 960C250.24 960 64 773.76 64 544 64 314.24 250.24 128 480 128 709.76 128 896 314.24 896 544 896 773.76 709.76 960 480 960z"/>
</svg>
`

export const search = `
<svg id="${svgIconPrefix}search" class="icon" viewBox="120 200 800 500" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <path d="M953.6 795.733333l-145.066667-192c53.333333-44.8 89.6-113.066667 89.6-187.733333C896 279.466667 787.2 170.666667 650.666667 170.666667 516.266667 170.666667 405.333333 279.466667 405.333333 416S516.266667 661.333333 650.666667 661.333333c44.8 0 85.333333-12.8 121.6-32v2.133334l145.066666 192c4.266667 6.4 10.666667 8.533333 17.066667 8.533333 4.266667 0 8.533333-2.133333 12.8-4.266667 10.666667-8.533333 12.8-23.466667 6.4-32zM448 416c0-110.933333 91.733333-202.666667 202.666667-202.666667s202.666667 91.733333 202.666666 202.666667-91.733333 202.666667-202.666666 202.666667-202.666667-91.733333-202.666667-202.666667zM128 277.333333h192c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333H128c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333333zM128 490.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333H128zM467.2 701.866667h-341.333333c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h341.333333c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333z"/>
</svg>
`

export const help = `
<svg id="${svgIconPrefix}help" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 0C215.04 0 0 215.04 0 480 0 744.96 215.04 960 480 960S960 744.96 960 480C960 215.04 744.96 0 480 0zM480 896C250.24 896 64 709.76 64 480 64 250.24 250.24 64 480 64 709.76 64 896 250.24 896 480 896 709.76 709.76 896 480 896zM480 192C391.68 192 320 263.68 320 352 320 369.92 334.08 384 352 384 369.92 384 384 369.92 384 352 384 298.88 426.88 256 480 256 533.12 256 576 298.88 576 352 576 405.12 533.12 448 480 448 462.08 448 448 462.08 448 480l0 128C448 625.92 462.08 640 480 640 497.92 640 512 625.92 512 608L512 508.8c72.96-14.72 128-79.36 128-156.8C640 263.68 568.32 192 480 192zM480 704C462.08 704 448 718.08 448 736 448 753.92 462.08 768 480 768 497.92 768 512 753.92 512 736 512 718.08 497.92 704 480 704z"/>
</svg>
`

export const preview = `
<svg id="${svgIconPrefix}preview" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"/>
</svg>
`

export const undo = `
<svg id="${svgIconPrefix}undo" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M283.84 55.744l35.84 35.776-217.408 217.728h587.328a329.408 329.408 0 0 1 329.472 329.6 329.408 329.408 0 0 1-329.472 329.344h-253.568v-50.624h253.568a278.912 278.912 0 0 0 0-557.76h-587.328l217.664 217.856-36.032 35.776-278.784-278.912 278.72-278.784z"/>
</svg>
`

export const redo = `
<svg id="${svgIconPrefix}redo" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M740.16 55.744l-35.84 35.776 217.408 217.728h-587.328a329.408 329.408 0 0 0-329.472 329.536 329.472 329.472 0 0 0 329.472 329.472h253.568v-50.688h-253.568a278.848 278.848 0 0 1 0-557.696h587.328l-217.664 217.792 36.032 35.776 278.784-278.912L740.16 55.744z"/>
</svg>
`

export const copy = `
<svg id="${svgIconPrefix}copy" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"/>
    <path d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"/>
</svg>
`

export const lock = `
<svg id="${svgIconPrefix}lock" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"/>
    <path d="M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"/>
</svg>
`

export const more = `
<svg id="${svgIconPrefix}more" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"/>
</svg>
`

export const outline = `
 <svg id="${svgIconPrefix}outline" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 325h675v60h-675zM195 75H965v60H195z"/>
    <ellipse ry="75" rx="75" cy="100" cx="100"/>
    <path d="M200 575h675v60H200zM200 825h675v60H200z"/>
 </svg>
`

export const svgIcon: {
    [key: string]: string
} = {
    close,
    fullScreen,
    editHistory,
    outline,
    search,
    help,
    preview,
    undo,
    redo,
    copy,
    lock,
    more
}

export const svgIconNameList = getKeys(svgIcon)