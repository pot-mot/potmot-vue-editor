import MarkdownItContainer from "markdown-it-container";
import {createVNode, Fragment} from "vue";

export const tabsType = ['tabs', 'tab-item']

let tabNesting = true;
let tabIndex = 0;
let tabName = "";

export const renderTabs: MarkdownItContainer.ContainerOpts = {
    //@ts-ignore
    render: (tokens, idx) => {
        if (tokens[idx].nesting != 1) {
            tabNesting = true
            return;
        }
        tabNesting = false;
        tabIndex = 0;
        const info = tokens[idx].info.trim().replace(/^tabs\s*/, '')
        tabName = 'tabs-' + info + idx;

        const children = []
        if (info.length > 0) {
            children.push(createVNode('div', {class: 'title', innerHTML: info}))
        }
        return createVNode('div', {class: 'tabs'}, children);
    }
}

export const renderTabItem: MarkdownItContainer.ContainerOpts = {
    //@ts-ignore
    render: (tokens, idx) => {
        if (tabNesting) return;
        if (tokens[idx].nesting != 1) return;
        tabIndex++;
        let info = tokens[idx].info.trim().replace(/^tab-item\s*/, '');
        let checked = tabIndex == 1;
        if (info.startsWith('[x]')) {
            checked = true;
            info = info.replace(/\[x]\s*/, '');
        }
        const id = `tab-${tabName}-${info}-${tabIndex}`
        const parent = createVNode('div', {class: 'tab-item-content'}, [])
        return {parent, node: createVNode(Fragment, {}, [
                createVNode('input', {class: 'tab-item-radio', type: 'radio', id, name: tabName, checked}),
                createVNode('label', {class: 'tab-item-label', for: id, innerText: info.length > 0 ? info : `Item${tabIndex}`}),
                parent,
            ])}
    }
}