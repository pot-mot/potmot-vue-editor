import MarkdownEditor from "./components/MarkdownEditor.vue";
import MarkdownOutline from "./components/MarkdownOutline.vue";
import MarkdownPreview from "./components/MarkdownPreview.vue";

const components = [
    MarkdownPreview,
    MarkdownEditor,
    MarkdownOutline
]

// 全局注册方法 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue: any) {
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
//@ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
    //@ts-ignore
    install(window.Vue)
}

export default {
    install,
    ...components
}