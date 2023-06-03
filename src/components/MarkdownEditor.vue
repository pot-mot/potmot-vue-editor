<template>
    <div class="editor"
         :class="[isFullScreen? 'full':'non-full', isMobile()? 'mobile': 'pc']"
         :style="isFullScreen ? '' : {width: props.width, height: props.height}">
        <div class="toolbar">
            <ul class="left">
                <li v-for="tool in leftTools" v-show="tool.show">
				<span
                        @mousedown.prevent.stop="tool.method(tool)"
                        :title="tool.label"
                        class="iconfont"
                        :class="[tool.active ? 'chosen' : '',tool.icon]">
				</span>
                </li>
            </ul>
            <ul class="right">
                <li v-for="tool in rightTools" v-show="tool.show">
				<span @mousedown.prevent.stop="tool.method(tool)"
                      :title="tool.label"
                      class="iconfont"
                      :class="[tool.active ? 'chosen' : '',tool.icon]">
				</span>
                </li>
            </ul>
        </div>
        <ContextMenu title="模板插入" :visible="getEditToolActive('insert')" width="200px" :position="{top: '2.5rem', left: '0'}" class="context-menu">
			<template #close>
                <span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('insert', false)"/>
            </template>
            <template #default>
                <template v-for="item in props.insertUnits">
					<span class="insert-text">
					<span class="hover-color-blue" @mousedown.prevent.stop="insertIntoTextarea(item)"
                          :title='item.key ? (item.ctrl? "Ctrl + ":"") + (item.shift? "Shift + ":"") + (item.alt? "Alt + ":"") + item.key: "无快捷键"'>
						{{ item.label }}
					</span>
						<template v-for="arg in item.arguments">
							<label>{{ arg.label }}</label>
							<select v-if="'options' in arg" :value="argsMap.get(arg.name).value"
									@change="(e) => {changeSelectArg(arg.name, e)}">
								<option v-for="item in arg.options">{{ item }}</option>
							</select>
							<input v-else-if="'type' in arg" :type="arg.type" :value="argsMap.get(arg.name).value"
								   :maxlength="'inputLength' in arg ? arg.inputLength : 100"
								   :style="'styleWidth' in arg ? 'width: ' + arg.styleWidth : ''"
								   @input="(e) => {changeInputArg(arg.name, e)}">
						</template>
					</span>
                    <br>
                </template>
            </template>
        </ContextMenu>
        <ContextMenu title="查找替换" :visible="getEditToolActive('replace')" width="200px" :position="{top: '2.5rem', left: '2.5rem'}" class="context-menu replace-box">
            <template #close>
                <span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('replace', false)"/>
            </template>
			<template #default>
                <textarea v-model="replaceData.replaceFrom" placeholder="查找文本"/>
                <br>
                <textarea v-model="replaceData.replaceTo" placeholder="替换文本"/>
                <br>
                <span class="hover-color-blue" @mousedown.prevent.stop="searchNext">下一个</span>
                <span style="display: inline-block;width: 1em;"></span>
                <span class="hover-color-blue" @mousedown.prevent.stop="searchPrevious">上一个</span>
                <span style="display: inline-block;width: 1em;"></span>
                <span class="hover-color-blue" @mousedown.prevent.stop="searchByIndex">跳转到</span>
                <input type="number" style="width: 4em;" @keydown.enter="searchByIndex"
                       v-model="searchIndex">
                <span style="display: inline-block; min-width: 3em;">/{{ searchData.indexes.length }}</span>
                <span class="hover-color-blue" @mousedown.prevent.stop="replaceOne">替换当前</span>
                <span style="display: inline-block;width: 1em;"></span>
                <span class="hover-color-blue" @mousedown.prevent.stop="replaceAll">替换全部</span>
			</template>
		</ContextMenu>
		<ContextMenu :visible="getEditToolActive('outline')" width="200px" :position="{top: '2.5rem', right: '2.5rem'}" class="context-menu outline-box">
			<template #close>
                <span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('outline', false)"/>
			</template>
			<template #default>
                <slot name="outline" :target="previewCard">
                    <MarkdownOutline :target="previewCard"></MarkdownOutline>
                </slot>
			</template>
		</ContextMenu>
        <div class="container" :class="containerClass">
			<textarea
                    :style="[!isFullScreen && isPreview ? 'position: absolute; visibility: hidden;':'']"
                    ref="textarea"
                    v-model="data.text"
                    :placeholder="props.placeholder"
                    class="edit-card"
                    @keydown.self="onKeyDown"
                    @dragend.self="onDragEnd"
                    @contextmenu.self.prevent="setEditToolActive('insert', true)">
			</textarea>
            <div ref="previewCard"
                 class="preview-card">
                <slot name="preview" :text="data.text">
                    <MarkdownPreview :wait-for-no-change="true" :markdown-text="data.text"></MarkdownPreview>
                </slot>
            </div>
            <div ref="textareaCountLine"
                 style="visibility: hidden;white-space: pre-wrap;overflow-wrap: break-word;padding: 0.5em;border: 1px solid #eee;"
                 v-text="textareaCountLineSubText"
                 :style="textareaCountLineStyle">
            </div>
        </div>
        <slot name="footer" :textarea="textarea" :data="statisticalData" :history="historyData">
            <ul class="statistical-list" v-if="textarea !== undefined">
                <li>字数 {{ data.text.length }}</li>
                <li>
                    {{ statisticalData.startPlace.y }}:{{ statisticalData.startPlace.x }}
                    <span v-show="statisticalData.selectLength > 0">
					至 {{ statisticalData.endPlace.y }}:{{ statisticalData.endPlace.x }}
				</span>
                </li>
                <li v-show="statisticalData.selectLength > 0">选中 {{ statisticalData.selectLength }}</li>
            </ul>
        </slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MarkdownEditor'
}
</script>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onMounted, PropType, reactive, Ref, ref, watch} from "vue";
import {isMobile} from "../util/common/common";
import {insertIntoString} from "../util/editor/insertUtils";
import {getArgsMap, markdownInsertUnits, extendedInsertUnits} from "../util/editor/insertUnits";
import type {EditorShortcutKey, EditTool, InsertUnit} from "../declare/EditorUtil";
import {useHistoryStack} from "../util/editor/editHistory";
import {judgeKeyForEditorKeyEvent} from "../util/editor/editorEvent";
import MarkdownOutline from "./MarkdownOutline.vue";
import MarkdownPreview from "./MarkdownPreview.vue";
import {getLeadingSpace} from "../util/editor/textUtils";
import {useStatistics} from "../util/editor/statistics";
import ContextMenu from "./ContextMenu.vue";
import {smoothScroll} from "../util/common/scroll";


const isB = 'truess'

/**
 * 外部传入参数
 */
const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },

    placeholder: {
        type: String,
        required: false,
        default: "",
    },
    width: {
        type: String,
        required: false,
        default: '960px',
    },
    height: {
        type: String,
        required: false,
        default: '540px',
    },

    shortcutKeys: {
        type: Array as PropType<EditorShortcutKey[]>,
        required: false,
        default: []
    },
    insertUnits: {
        type: Array as PropType<InsertUnit[]>,
        required: false,
        default: [...markdownInsertUnits, ...extendedInsertUnits]
    },

    startWithFullScreen: {
        type: Boolean,
        required: false,
        default: false,
    },
})

// 盒型数据
const textarea = ref();
const previewCard = ref();

// 组件初始化
onMounted(() => {
    data.text = props.modelValue;

    if (props.startWithFullScreen) {
        isFullScreen.value = true;
        isPreview.value = true;
    }
})

// 核心容器样式类
const containerClass = computed(() => {
    if (!isFullScreen.value) return '';
    if (isPreview.value) return 'edit-preview';
    return 'edit';
})

// 数据
const data = reactive({
    text: ""
})

const emit = defineEmits(['update:modelValue']);

watch(() => data.text, () => {
    emit('update:modelValue', data.text);
})

// 统计数据
const {statisticalData} = useStatistics(() => textarea.value)

// 工具列表
const editTools = reactive(<EditTool[]>[
    {
        name: "insert",
        label: "快捷插入",
        icon: "icon-bulletpoint",
        active: false,
        show: true,
        position: "left",
        method: (self: EditTool) => {
            self.active = !self.active
        }
    },
    {
        name: "replace",
        label: "文本查找与替换",
        icon: "icon-search-list",
        active: false,
        show: true,
        position: "left",
        method: (self: EditTool) => {
            self.active = !self.active
        }
    },
    {
        name: "preview",
        label: "预览",
        icon: "icon-browse",
        active: false,
        show: true,
        position: "right",
        method: (self: EditTool) => {
            self.active = !self.active
        }
    },
    {
        name: "outline",
        label: "大纲",
        icon: "icon-file-tree",
        active: false,
        show: true,
        position: "right",
        method: (self: EditTool) => {
            self.active = !self.active
        }
    },
    {
        name: "undo",
        label: "撤销",
        icon: "icon-undo",
        active: false,
        show: true,
        position: "left",
        method: () => {
            undo();
        }
    },
    {
        name: "redo",
        label: "重做",
        icon: "icon-redo",
        active: false,
        show: true,
        position: "left",
        method: () => {
            redo();
        }
    },
    {
        name: "fullScreen",
        label: "全屏/收起全屏",
        icon: "icon-full-screen",
        active: false,
        show: true,
        position: "right",
        method: (self: EditTool) => {
            self.active = !self.active
        },
    },
])

const leftTools = computed(() => {
    return editTools.filter(item => item.position == "left")
})

const rightTools = computed(() => {
    return editTools.filter(item => item.position == "right")
})

const toolMap = computed(() => {
    const map = new Map<string, EditTool>()
    editTools.forEach(item => map.set(item.name, item))
    return map
})

const getEditToolActive = (key: string) => {
    const item = toolMap.value.get(key)
    if (item) {
        return item.active
    }
    return false
}

const setEditToolActive = (key: string, newValue: boolean) => {
    const item = toolMap.value.get(key)
    if (item) {
        item.active = newValue
    }
}

const isFullScreen = computed({
    get() {
        return getEditToolActive('fullScreen');
    },
    set(newValue: boolean) {
        setEditToolActive('fullScreen', newValue);
    }
})

let beforeFullScreenTop = 0

watch(() => isFullScreen.value, async (newValue) => {
    if (newValue) {
        isPreview.value = !isMobile();
        beforeFullScreenTop = document.documentElement.scrollTop;
    } else {
        isPreview.value = false;
        await nextTick(() => {
            document.documentElement.scrollTop = beforeFullScreenTop;
        })
    }
})

const isReplace = computed({
    get() {
        return getEditToolActive('replace');
    },
    set(newValue: boolean) {
        setEditToolActive('replace', newValue);
    }
})

const isPreview = computed({
    get() {
        return getEditToolActive('preview');
    },
    set(newValue: boolean) {
        setEditToolActive('preview', newValue);
    }
})

/**
 * 插入工具
 */
const argsMap = ref(new Map<string, Ref>)

argsMap.value = getArgsMap(props.insertUnits)

const changeInputArg = (name: string, e: InputEvent) => {
    argsMap.value.get(name)!.value = (<HTMLInputElement>e.target).value;
}
const changeSelectArg = (name: string, e: Event) => {
    argsMap.value.get(name)!.value = (<HTMLSelectElement>e.target).value;
}

const insertIntoTextarea = (insertUnit: InsertUnit) => {
    let start = textarea.value.selectionStart;
    let selectEnd = textarea.value.selectionEnd;
    let text = data.text;
    let end: number;
    const {before, after} = insertUnit.insert(argsMap.value, data.text, textarea.value);
    if (insertUnit.replace) {
        text = insertIntoString(before, text, start, selectEnd);
        end = start + before.length;
    } else {
        text = insertIntoString(before, text, start);
        end = selectEnd + before.length
    }
    if (after.length > 0) {
        text = insertIntoString(after, text, end);
    }
    data.text = text;
    pushFlag = "insert";
    nextTick(() => {
        if (insertUnit.keepSelect && start != selectEnd) {
            textarea.value.selectionStart = start;
            textarea.value.selectionEnd = end + after.length;
        } else {
            textarea.value.selectionStart = start + before.length;
            textarea.value.selectionEnd = start + before.length;
        }
    })
}


/**
 * 滚动同步
 */
const syncScroll = (from: HTMLElement, to: HTMLElement) => {
    to.scrollTop = from.scrollTop * (to.scrollHeight - to.offsetHeight) / (from.scrollHeight - from.offsetHeight);
}

watch(() => isPreview.value, () => {
    if (isPreview.value) {
        syncScroll(textarea.value, previewCard.value);
    } else if (!isFullScreen.value && !isMobile()) {
        syncScroll(previewCard.value, textarea.value);
    }
})


/**
 * 历史记录
 */
const defaultHistory = () => {
    return {
        start: textarea.value ? textarea.value.selectionStart : 0,
        end: textarea.value ? textarea.value.selectionEnd : 0,
        text: data.text,
        scrollTop: textarea.value ? textarea.value.scrollTop : 0,
    }
}

const {
    historyData,
    redo,
    undo,
    push,
    top,
} = useHistoryStack(400,
    () => {
        alert("已是最后，无法继续撤销");
    },
    () => {
        alert("已是最新，无法继续重做");
    },
    defaultHistory,
);

const setFromHistory = (historyTop: EditorHistory = historyData.stack[historyData.stackTop]) => {
    data.text = historyTop.text;
    nextTick(() => {
        textarea.value.selectionStart = historyTop.start;
        textarea.value.selectionEnd = historyTop.end;
        textarea.value.scrollTo(0, historyTop.scrollTop);
    })
}

// 当前操作类别
let pushFlag = "init";

onMounted(() => {
    top.value = defaultHistory();

    // 当输入法切换时，默认历史记录
    textarea.value.addEventListener('compositionend', () => {
        top.value = defaultHistory();
    })
})

// 文本编辑快捷键
const shortcutKeys = reactive(<EditorShortcutKey[]>[
    {
        key: ['x', 'X'],
        ctrl: true,
        method: () => {
            pushFlag = "cut";
            setTimeout(push, 200);
        }
    },
    {
        key: ['v', 'V'],
        ctrl: true,
        method: () => {
            pushFlag = "copy";
            setTimeout(push, 200);
        }
    },
    {
        key: ['z', 'Z'],
        ctrl: true,
        method: (e: KeyboardEvent) => {
            if (e.key == 'z') {
                pushFlag = "undo";
                undo();
                setFromHistory();
            } else {
                pushFlag = "redo";
                redo();
                setFromHistory();
            }
        },
        prevent: true,
        reject: true,
    },
    {
        key: ['r', 'f'],
        ctrl: true,
        method: () => {
            replaceData.replaceFrom = data.text.slice(textarea.value.selectionStart, textarea.value.selectionEnd);
            isReplace.value = true;
        },
        prevent: true,
        reject: true,
    },
    {
        key: "Enter",
        method: () => {
            batchEnter();
        },
        prevent: true,
        reject: true,
    },
    {
        key: "Tab",
        method: (e: KeyboardEvent) => {
            batchTab(e, '\t');
        },
        prevent: true,
        reject: true,
    },
    {
        key: "Escape",
        method: () => {
            if (isFullScreen.value) {
                isFullScreen.value = false;
            }
        },
    }
])

// 键盘按下事件
const onKeyDown = (e: KeyboardEvent) => {
    for (const shortcutKey of props.shortcutKeys) {
        if (!shortcutKey.key) continue;

        if (judgeKeyForEditorKeyEvent(shortcutKey, e)) {
            if (shortcutKey.prevent) e.preventDefault();
            shortcutKey.method(e);
            if (shortcutKey.reject) return;
        }
    }

    for (const insertUnit of props.insertUnits) {
        if (!insertUnit.key) continue;

        if (judgeKeyForEditorKeyEvent(insertUnit, e)) {
            if (insertUnit.prevent) e.preventDefault();
            pushFlag = "symbol";
            insertIntoTextarea(insertUnit);
            if (insertUnit.reject) return;
        }
    }

    for (const shortcutKey of shortcutKeys) {
        if (!shortcutKey.key) continue;

        if (judgeKeyForEditorKeyEvent(shortcutKey, e)) {
            if (shortcutKey.prevent) e.preventDefault();
            shortcutKey.method(e);
            if (shortcutKey.reject) return;
        }
    }

    if (e.key == 'Backspace' || e.key == 'Delete') {
        pushFlag = 'back'
    } else if (e.key == '(' || e.key == '[' || e.key == '{') {
        e.preventDefault();
        pushFlag = "symbol";
        insertAroundText({before: e.key, after: e.key == '(' ? ")" : e.key == '{' ? '}' : ']'});
    } else if (textarea.value.selectionEnd != textarea.value.selectionStart && (e.key == '"' || e.key == "'")) {
        e.preventDefault();
        pushFlag = "symbol";
        insertAroundText({before: e.key, after: e.key == '"' ? '"' : "'"});
    } else if (e.key.startsWith("Arrow")) {
        pushFlag = 'move'
    } else if (e.key == ' ') {
        pushFlag = 'blank'
    } else if (e.key != 'Shift' && e.key != 'Control' && e.key != 'Alt' && !e.ctrlKey && !e.altKey && !e.shiftKey) {
        pushFlag = 'input'
    }
}

const onDragEnd = () => {
    pushFlag = 'dragend'
}

// 文本联想（括号和引号）
const insertAroundText = (insertText: { before: string, after: string }) => {
    let start = textarea.value.selectionStart;
    let selectEnd = textarea.value.selectionEnd;
    let text = data.text;
    let end: number;
    const {before, after} = insertText;
    text = insertIntoString(before, text, start);
    end = selectEnd + before.length;
    if (after.length > 0) {
        text = insertIntoString(after, text, end);
    }
    data.text = text;

    const keepSelect = textarea.value.selectionStart != textarea.value.selectionEnd;

    pushFlag = 'insertAround'

    nextTick(() => {
        if (keepSelect) {
            textarea.value.selectionStart = start;
            textarea.value.selectionEnd = end + after.length;
        } else {
            textarea.value.selectionStart = start + before.length;
            textarea.value.selectionEnd = start + before.length;
        }
    })
}

// 回车制表
const batchEnter = () => {
    pushFlag = 'enter'

    const start = textarea.value.selectionStart;
    const LeadingSpace = getLeadingSpace(data.text, start)
    data.text = insertIntoString(LeadingSpace, data.text, start);
    nextTick(() => {
        textarea.value.selectionStart = start + LeadingSpace.length;
        textarea.value.selectionEnd = textarea.value.selectionStart;
    })
}

// 批量缩进（Tab）
const batchTab = (e: KeyboardEvent, insertString: string) => {
    pushFlag = 'tab'

    const start = textarea.value.selectionStart;
    const end = textarea.value.selectionEnd;

    if (e.shiftKey) {
        if (textarea.value.selectionStart == textarea.value.selectionEnd) {
            let index = 0;
            for (let i = textarea.value.selectionStart - 1; i >= 0; i--) {
                if (data.text[i] == '\n') {
                    index = i + 1;
                    break;
                }
            }
            const temp = data.text.slice(index, start);
            const newTemp = temp.replace(insertString, '');
            if (temp.length == newTemp.length) return;
            data.text = data.text.slice(0, start - temp.length) + newTemp + data.text.slice(end);
        } else {
            const temp = data.text.slice(start, end);
            const newTemp = temp.replace(insertString, '').replaceAll('\n' + insertString, '\n');
            if (temp.length == newTemp.length) return;
            data.text = data.text.slice(0, start) + newTemp + data.text.slice(start + temp.length);
            nextTick(() => {
                textarea.value.selectionStart = start;
                textarea.value.selectionEnd = start + newTemp.length;
            })
        }
    } else {
        if (textarea.value.selectionStart == textarea.value.selectionEnd) {
            data.text = insertIntoString(insertString, data.text, textarea.value.selectionStart);
            nextTick(() => {
                textarea.value.selectionStart = start + 1;
                textarea.value.selectionEnd = start + 1;
            })
        } else {
            const temp = data.text.slice(start, textarea.value.selectionEnd);
            const newTemp = insertString + temp.replaceAll('\n', '\n' + insertString);
            if (temp.length == newTemp.length) return;
            data.text = data.text.slice(0, start) + newTemp + data.text.slice(start + temp.length);
            nextTick(() => {
                textarea.value.selectionStart = start;
                textarea.value.selectionEnd = start + newTemp.length;
            })
        }
    }
}


// 查找与替换功能
// 用于测算 textarea 当前文本高度的工具盒子
let textareaCountLine = ref();

const searchData = reactive({
    index: -1,
    indexes: <number[]>[],
})

const replaceData = reactive({
    replaceFrom: "",
    replaceTo: "",
})


watch(() => replaceData.replaceFrom, () => {
    if (replaceData.replaceFrom.length <= 0) {
        searchData.index = -1;
        searchData.indexes = [];
        return;
    }
    setSearchData();
})

watch(() => data.text, () => {
    setSearchData();
})

watch(() => isReplace.value, () => {
    setSearchData();
})

watch(() => isPreview.value, () => {
    setSearchData();
})

watch(() => isFullScreen.value, () => {
    setSearchData();
})


const setSearchData = () => {
    searchData.index = -1;
    searchData.indexes = [];
    if (textarea.value == undefined) return;
    textareaCountLine.value.style.width = textarea.value.scrollWidth + 'px';

    if (replaceData.replaceFrom.length <= 0) return;
    if (data.text.length <= 0) return;

    let index = data.text.indexOf(replaceData.replaceFrom, 0);
    let count = 0;
    while (index >= 0) {
        let temp = data.text.indexOf(replaceData.replaceFrom, index);
        if (temp < 0) break;
        if (textarea.value.selectionStart == temp && textarea.value.selectionEnd - textarea.value.selectionStart == replaceData.replaceFrom.length) {
            searchData.index = count;
        }
        searchData.indexes.push(temp);
        index = temp + replaceData.replaceFrom.length;
        count++;
    }
}

// 控制 textarea 进行跳转
const jumpTo = (target: number) => {
    smoothScroll(textarea.value, target)
}

let textareaCountLineStyle = ref("")
let textareaCountLineSubText = ref("")

const searchIndex = ref(0)

watch(() => searchData.index, () => {
    searchIndex.value = searchData.index + 1
})

const searchByIndex = () => {
    const index = searchIndex.value
    if (index <= 0 || index > searchData.indexes.length) {
        searchIndex.value = 0
        return
    }
    searchData.index = index - 1
    searchCurrent()
}

const searchCurrent = () => {
    if (searchData.indexes.length == 0) {
        searchData.index = -1
        return;
    }

    textareaCountLineSubText.value = data.text.substring(0, searchData.indexes[searchData.index]);

    textareaCountLineStyle.value = "width: " + textarea.value.clientWidth + 'px;';

    pushFlag = 'search'

    nextTick(() => {
        textarea.value.focus()

		nextTick(() => {
            textarea.value.selectionStart = searchData.indexes[searchData.index];
            textarea.value.selectionEnd = searchData.indexes[searchData.index] + replaceData.replaceFrom.length;

            if (textareaCountLine.value.scrollHeight > textarea.value.clientHeight / 2.4) {
                jumpTo(textareaCountLine.value.scrollHeight - textarea.value.clientHeight / 2.4);
            } else {
                jumpTo(0);
            }
		})
	})
}

const searchPrevious = () => {
    if (textarea.value == undefined) return;

    if (searchData.indexes.length == 0) {
        searchData.index = -1
        return;
    }

    if (searchData.index > 0) {
        searchData.index--;
    } else {
        searchData.index = searchData.indexes.length - 1
	}
    searchCurrent();
}

const searchNext = () => {
    if (textarea.value == undefined) return;

    if (searchData.indexes.length == 0) {
        searchData.index = -1
		return;
	}

    if (searchData.index < searchData.indexes.length - 1) {
        searchData.index++;
    } else {
        searchData.index = 0
	}
    searchCurrent();
}

const replaceOne = () => {
    if (replaceData.replaceFrom.length <= 0) {
        alert("替换文本不可为空");
        return
    }

    if (searchData.indexes.length == 0) {
        searchData.index = -1
        return;
    }

    const start = searchData.indexes[searchData.index]
	const end = start + replaceData.replaceFrom.length
    data.text = data.text.slice(0, start) + replaceData.replaceTo + data.text.slice(end);
    nextTick(() => {
        textarea.value.selectionStart = start;
        textarea.value.selectionEnd = start + replaceData.replaceTo.length;
        pushFlag = 'replaceOne'
        searchNext();
    })
}

const replaceAll = () => {
    if (replaceData.replaceFrom.length <= 0) {
        alert("替换文本不可为空");
        return
    }

    if (searchData.indexes.length == 0) {
        searchData.index = -1
        return;
    }

    data.text = data.text.replaceAll(replaceData.replaceFrom, replaceData.replaceTo);
    pushFlag = 'replaceAll'
}

let historyInterval: number
let tempText: string
let tempSelectStart: number
let tempSelectEnd: number
let oldPushFlag: string

onMounted(() => {
    historyInterval = setInterval(() => {
        if (tempText != data.text || tempSelectStart != textarea.value.selectionStart || tempSelectEnd != textarea.value.selectionEnd) {
            if (pushFlag == 'undo' || pushFlag == 'redo') {
                return
            }

            if (oldPushFlag != pushFlag) {
                push();
                oldPushFlag = pushFlag
            } else {
                top.value = defaultHistory()
            }

            tempText = data.text
            tempSelectStart = textarea.value.selectionStart
            tempSelectEnd = textarea.value.selectionEnd
        }
    }, 50)
})

onBeforeUnmount(() => {
    clearInterval(historyInterval)
})
</script>

<style lang="scss" scoped>
@import "../asserts/iconfont.css";

.editor {
    --back-ground-color: #f5f5f5;

    padding: 0;
    margin: 0;
    line-height: inherit;
    overflow: visible;

    * {
        box-sizing: border-box;
        margin: 0;
    }

    .hover-color-blue:hover {
        color: #4f92ff;
    }

    ul,
    ol {
        padding: 0;
    }

    li {
        list-style: none;
    }

    input,
    textarea {
        outline: none;
        resize: none;
        border: none;
        border-radius: 0;
        font-family: inherit;
        cursor: text;
        overflow-wrap: break-word;
        word-break: break-all;
        word-wrap: anywhere;
    }
}

.editor.non-full {
    position: relative;
}

.editor.full {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    background-color: var(--back-ground-color);
}

.editor > .container {
    position: relative;
    overflow: hidden;

    > .edit-card,
    > .preview-card {
        display: block;
        padding: 0.5em;
        overflow: auto;
        tab-size: 4;
        font-size: 1em;
        border-radius: 3px;
        line-height: inherit;
        font-family: inherit;
        overflow-x: visible;
        overscroll-behavior-y: contain;
        scrollbar-gutter: stable;
    }
}

.editor.non-full > .container {
    height: calc(99% - 3.5em);

    > .edit-card,
    > .preview-card {
        width: 100%;
        height: 100%;
        border: 1px solid #eee;
        padding-bottom: 4em;
    }
}

.editor.full.pc > .container {
    padding-left: 0.5%;
    height: calc(99vh - 4em);
    display: grid;

    &.edit-preview {
        grid-template-columns: 49% 49%;
        grid-gap: 1%;
    }

    &.edit {
        grid-template-columns: 99%;
    }

    > .edit-card,
    > .preview-card {
        height: calc(100vh - 4.5em);
        background-color: white;
        padding-bottom: 50vh;
    }
}

.editor.full.mobile > .container {
    padding-left: 0.5%;
    height: calc(99vh - 4em);
    display: grid;

    &.edit-preview {
        grid-template-rows: 0 98%;
        grid-gap: 1%;
    }

    &.edit {
        grid-template-rows: 98%;
    }

    > .edit-card,
    > .preview-card {
        background-color: white;
    }
}

.editor {
    .context-menu {
        background-color: var(--back-ground-color);
        font-size: 0.8em;
        width: 30em;
        max-height: 70vh;
        line-height: 1.6em;
        border: 1px solid #ccc;
    }

    .icon-close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.8rem;
        color: #aaa;
    }

    .icon-close:hover {
        color: #D00;
    }
}

.editor.non-full .context-menu {
    z-index: 1;
}

.editor.full .context-menu {
    z-index: 1001;
}

.editor .replace-box {
    > textarea {
        height: 4em;
        margin-right: 0.5em;
        width: 100%;
        border: 1px solid #e5e5e5;
        padding: 0.5em;
    }

	> span {
		cursor: default;
	}
}

.editor .outline-box {
    padding: 1em 0.5em;
    background-color: #fff;
    min-width: 25em;
    max-height: 70vh;
    line-height: 1.6em;
    border: 1px solid #ccc;
    cursor: all-scroll;
    overflow-y: auto;
    overflow-x: hidden;
}

.editor .insert-text {
    display: inline-block;
    font-size: 0.9em;

    > span {
        display: inline-block;
        min-width: 5em;
        padding: 0.2em;
        cursor: default;
    }

    > input {
        margin-left: 0.5em;
        width: 4em;
    }

    > select {
        padding: 0;
        margin-left: 0.5em;
        outline: none;
        border: none;
        border-radius: 0;

        > option {
            padding: 0;
            margin: 0;
            outline: none;
            border: none;
            border-radius: 0;
        }
    }
}

.editor.full > .toolbar {
    margin-left: 0.5em;
}

.editor > .toolbar {
    vertical-align: middle;
    padding: 0;
    margin: 0;
    line-height: 2em;
    cursor: auto;
    list-style: none;

    > .left {
        display: inline-block;
        text-align: left;
        width: 49%;

        > li {
            padding-right: 0.5rem;
        }
    }

    > .right {
        display: inline-block;
        text-align: right;
        width: 49%;

        > li {
            padding-left: 0.5rem;
        }
    }

    > ul > li {
        position: relative;
        display: inline-block;
        font-size: 0.9rem;

        > span.iconfont:before {
            color: #999;
        }

        > span.iconfont:hover:before {
            color: #7a7a7a;
            background-color: #eee;
        }

        > span.iconfont.chosen:before {
            color: #fff;
            background-color: #bcbcbc;
        }
    }
}

.editor > .statistical-list {
    height: 1.6em;
    line-height: 1.6em;
    margin-left: 0.4em;

    > li {
        font-size: 0.8em;
        display: inline-block;
        padding: 0 0.5em;
        color: #333;
    }
}
</style>