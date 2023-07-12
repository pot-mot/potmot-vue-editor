<template>
	<div class="editor"
		 :class="[isFullScreen? 'full':'non-full', isMobile? 'mobile': 'pc']"
		 :style="isFullScreen ? '' : {width: props.width, height: props.height}">
		<ToolBar class="toolbar" :tools="editTools">
			<template #insert>
				<ul>
					<li v-for="item in props.insertUnits" class="insert-text">
                        <span ignore-v-drag
							  class="hover-color-blue" @mousedown.prevent.stop="insertIntoTextarea(item, undefined)"
							  :title='formatTriggers(item).join("\n")'
							  v-text="item.label"/>
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
					</li>
				</ul>
			</template>
			<template #replace>
				<textarea v-adapt v-model="replaceData.replaceFrom" class="replace-box" placeholder="查找文本"/>
				<textarea v-adapt v-model="replaceData.replaceTo" class="replace-box" placeholder="替换文本"/>
				<div class="replace-operation" ignore-v-drag>
					<span class="hover-color-blue" @mousedown.prevent.stop="searchNext">下一个</span>
					<span style="display: inline-block;width: 1em;"></span>
					<span class="hover-color-blue" @mousedown.prevent.stop="searchPrevious">上一个</span>
					<span style="display: inline-block;width: 1em;"></span>
					<span class="hover-color-blue" @mousedown.prevent.stop="searchByIndex">跳转到</span>
					<input type="number" style="width: 4em;" @keydown.prevent.self.enter="searchByIndex"
						   v-model="searchIndex">
					<span style="display: inline-block; min-width: 3em;">/{{ searchData.indexes.length }}</span>
					<span class="hover-color-blue" @mousedown.prevent.stop="replaceOne">替换当前</span>
					<span style="display: inline-block;width: 1em;"></span>
					<span class="hover-color-blue" @mousedown.prevent.stop="replaceAll">替换全部</span>
				</div>
			</template>
			<template #outline>
				<slot name="outline" :target="previewCard">
					<MarkdownOutline :target="previewCard" :suspend="!isOutline" ignore-v-drag></MarkdownOutline>
				</slot>
			</template>
		</ToolBar>
		<div class="container" :class="containerClass">
			<textarea
				:style="[!isFullScreen && isPreview ? 'position: absolute; visibility: hidden;':'']"
				ref="textarea"
				v-model="text"
				:placeholder="props.placeholder"
				class="edit-card"
				@scroll="syncScroll(textarea, previewCard)"
				@keydown.self="onKeyDown"
				@mousedown.self="onMouseDown"
				@mouseup.self="onMouseUp"
				@select.self="onSelect"
				@dragend.self="onDragEnd">
			</textarea>
			<div ref="previewCard"
				 class="preview-card"
				 @scroll="syncScroll(previewCard, textarea)">
				<slot name="preview" :text="text">
					<MarkdownPreview :markdown-text="text" :suspend="!isPreview"></MarkdownPreview>
				</slot>
			</div>
		</div>
		<slot name="footer" :textarea="textarea" :data="statisticalData">
			<ul class="statistical-list" v-if="textarea !== undefined">
				<li>字数 {{ text.length }}</li>
				<li>
					{{ statisticalData.startPlace.y }}:{{ statisticalData.startPlace.x }}
					<span v-show="statisticalData.selectLength > 0">
					至 {{ statisticalData.endPlace.y }}:{{ statisticalData.endPlace.x }}
				</span>
				</li>
				<li v-show="statisticalData.selectLength > 0">选中 {{ statisticalData.selectLength }}</li>
			</ul>
		</slot>

		<div ref="searchCalculate"
			 class="search-calculate-box"
			 v-text="searchCalculateSubText"
			 :style="searchCalculateStyle">
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownEditor'
}
</script>

<script lang="ts" setup>
import {computed, nextTick, onMounted, PropType, reactive, Ref, ref, watch} from "vue";
import {debounce} from "lodash";

import {isMobile} from "../utils/common/platform";
import {smoothScroll} from "../utils/common/scroll";

import {vAdapt} from "../directives/adapt";

import type {EditorShortcutKey, EditTool, InsertUnit} from "../declare/EditorUtil";

import {judgeKeyEventTrigger, judgeKeyEventTriggers} from "../utils/editor/editorEvent";
import {getArgsMap} from "../utils/editor/insertUtil";

import MarkdownOutline from "./MarkdownOutline.vue";
import MarkdownPreview from "./MarkdownPreview.vue";
import ToolBar from "./toolBar/ToolBar.vue";

import {useHistoryStack} from "../hooks/editor/editHistory";
import {useStatistics} from "../hooks/editor/statistics";
import {useExtendInput} from "../hooks/editor/inputAction";
import {extendInsertUnits, markdownInsertUnits} from "../constants/insertUnits";
import {now} from "../tests/time";
import {formatTriggers} from "../utils/editor/insertUnitUtils";

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
		default: [...markdownInsertUnits, ...extendInsertUnits]
	},

	startWithFullScreen: {
		type: Boolean,
		required: false,
		default: false,
	},

	historyStep: {
		type: Number,
		required: false,
		default: 50,
	},
})

// 盒型数据
const textarea = ref();
const previewCard = ref();

// 当前操作类别
let historyType = "init";

// 组件初始化
onMounted(() => {
	nextTick(push)
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
const text = ref("")

const emit = defineEmits(['update:modelValue']);

watch(() => props.modelValue, () => {
	if (text.value != props.modelValue) {
		text.value = props.modelValue
		historyType = 'outside' + now()
	}
}, {immediate: true})

watch(() => text.value, () => {
	emit('update:modelValue', text.value)
	nextTick(push)
})

// 统计数据
const {statisticalData} = useStatistics(() => textarea.value)

// 工具列表
const editTools = reactive(<EditTool[]>[
	<EditTool>{
		name: "insert",
		label: "快捷插入",
		icon: "icon-bulletpoint",
		active: false,
		contextMenu: true,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		name: "replace",
		label: "文本查找与替换",
		icon: "icon-search-list",
		active: false,
		contextMenu: true,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		name: "undo",
		label: "撤销",
		icon: "icon-undo",
		active: false,
		contextMenu: false,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: () => {
			historyType = "undo";
			undo();
		}
	},
	<EditTool>{
		name: "redo",
		label: "重做",
		icon: "icon-redo",
		active: false,
		contextMenu: false,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: () => {
			historyType = "redo";
			redo();
		}
	},

	<EditTool>{
		name: "outline",
		label: "预览大纲",
		icon: "icon-file-tree",
		active: false,
		contextMenu: true,
		show: () => isPreview.value,
		position: "right",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		name: "preview",
		label: "预览",
		icon: "icon-browse",
		active: false,
		contextMenu: false,
		show: () => true,
		position: "right",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		name: "fullScreen",
		label: "全屏/收起全屏",
		icon: "icon-full-screen",
		active: false,
		contextMenu: false,
		show: () => true,
		position: "right",
		method: (self: EditTool) => {
			self.active = !self.active
		},
	},
])

const {batchTab, batchEnter, completeAround} = useExtendInput(() => textarea.value, (newValue) => {
	text.value = newValue
})

const toolMap = computed(() => {
	const map = new Map<string, EditTool>()
	editTools.forEach(item => map.set(item.name, item))
	return map
})

const getEditToolActive = (key: string): boolean => {
	if (!toolMap.value.has(key)) return false
	return toolMap.value.get(key)!.active
}

const setEditToolActive = (key: string, newValue: boolean): void => {
	if (!toolMap.value.has(key)) return
	const item = toolMap.value.get(key)!
	item.active = newValue
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
		isPreview.value = !isMobile.value;
		document.documentElement.classList.add('hideScroll')
		beforeFullScreenTop = document.documentElement.scrollTop;
	} else {
		isPreview.value = false;
		document.documentElement.classList.remove('hideScroll')
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

const isOutline = computed({
	get() {
		return getEditToolActive('outline');
	},
	set(newValue: boolean) {
		setEditToolActive('outline', newValue);
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

const insertIntoTextarea = (insertUnit: InsertUnit, key?: string) => {
	const history = insertUnit.insert(argsMap.value, textarea.value, key)
	historyType = history.type
	changeHook(history)
}

/**
 * 滚动同步
 */
let scrollSyncFlag = false

const syncScroll = (from: HTMLElement, to: HTMLElement) => {
	if (scrollSyncFlag) return
	scrollSyncFlag = true
	to.scrollTop = from.scrollTop * (to.scrollHeight - to.offsetHeight) / (from.scrollHeight - from.offsetHeight)
	setTimeout(() => {
		scrollSyncFlag = false
	}, 20)
}

watch(() => isPreview.value, () => {
	if (isPreview.value) {
		syncScroll(textarea.value, previewCard.value);
	} else if (!isFullScreen.value && !isMobile.value) {
		syncScroll(previewCard.value, textarea.value);
	}
})

const changeHook = (history: EditorHistory) => {
	text.value = history.text
	nextTick(() => {
		textarea.value.selectionStart = history.start
		textarea.value.selectionEnd = history.end
		textarea.value.scrollTo(0, history.scrollTop)
	})
}

const pushDefault = () => {
	return {
		start: textarea.value ? textarea.value.selectionStart : 0,
		end: textarea.value ? textarea.value.selectionEnd : 0,
		text: text.value,
		scrollTop: textarea.value ? textarea.value.scrollTop : 0,
		type: historyType
	}
}

const {
	redo,
	undo,
	push,
	top,
	setTop,
} = useHistoryStack(
	changeHook,
	pushDefault,
	() => {
		alert("已是最后，无法继续撤销")
	},
	() => {
		alert("已是最新，无法继续重做")
	},
);

onMounted(() => {
	// 当输入法切换结束，保存历史记录（即保存中文输入）
	textarea.value.addEventListener('compositionend', () => {
		setTop()
	})
})

// 文本编辑快捷键
const shortcutKeys = reactive(<EditorShortcutKey[]>[
	{
		key: ['x', 'X'],
		ctrl: true,
		method: () => {
			historyType = "cut"
		}
	},
	{
		key: ['v', 'V'],
		ctrl: true,
		method: () => {
			historyType = "copy"
		}
	},
	{
		key: ['z'],
		ctrl: true,
		method: () => {
			historyType = "undo"
			undo()
		},
		prevent: true,
		reject: true,
	},
	{
		key: ['y', 'Z'],
		ctrl: true,
		method: () => {
			historyType = "redo"
			redo()
		},
		prevent: true,
		reject: true,
	},
	{
		key: ['r', 'f'],
		ctrl: true,
		method: () => {
			replaceData.replaceFrom = text.value.slice(textarea.value.selectionStart, textarea.value.selectionEnd)
			isReplace.value = true
		},
		prevent: true,
		reject: true,
	},
	{
		key: "Enter",
		method: () => {
			historyType = 'enter'
			batchEnter()
		},
		prevent: true,
		reject: true,
	},
	{
		key: "Tab",
		method: (e: KeyboardEvent) => {
			historyType = 'tab'
			batchTab(e)
		},
		prevent: true,
		reject: true,
	},
	{
		key: "Escape",
		method: () => {
			if (isFullScreen.value) {
				isFullScreen.value = false
			}
		},
	}
])

// 键盘按下事件
const onKeyDown = (e: KeyboardEvent) => {
	for (const shortcutKey of props.shortcutKeys) {
		if (!shortcutKey.key) continue

		if (judgeKeyEventTrigger(shortcutKey, e)) {
			if (shortcutKey.prevent) e.preventDefault();
			shortcutKey.method(e);
			if (shortcutKey.reject) return
		}
	}

	for (const insertUnit of props.insertUnits) {
		if (insertUnit.triggers.length == 0) continue

		if (judgeKeyEventTriggers(insertUnit.triggers, e)) {
			if (insertUnit.prevent) e.preventDefault()
			historyType = "insert" + new Date().getUTCMilliseconds()
			insertIntoTextarea(insertUnit, e.key)
			if (insertUnit.reject) return
		}
	}

	for (const shortcutKey of shortcutKeys) {
		if (!shortcutKey.key) continue

		if (judgeKeyEventTrigger(shortcutKey, e)) {
			if (shortcutKey.prevent) e.preventDefault()
			shortcutKey.method(e)
			if (shortcutKey.reject) return
		}
	}

	if (e.altKey || e.ctrlKey || e.metaKey || e.key == 'Control' || e.key == 'Alt') return

	if (['(', '[', '{'].includes(e.key)) {
		historyType = "bracket: " + e.key
		e.preventDefault()
		const map = new Map<string, string>([['(', ')'], ['[', ']'], ['{', '}']])
		completeAround({before: e.key, after: map.get(e.key)!})
	} else if ([')', ']', '}'].includes(e.key)) {
		historyType = "bracket: " + e.key
		if (textarea.value.selectionEnd != textarea.value.selectionStart) {
			e.preventDefault()
			const map = new Map<string, string>([[')', '('], [']', '['], ['}', '{']])
			completeAround({before: map.get(e.key)!, after: e.key})
		}
	} else if (['"', "'", '`', '*', '_', '='].includes(e.key)) {
		historyType = "quotation: " + e.key
		if (textarea.value.selectionEnd != textarea.value.selectionStart) {
			e.preventDefault()
			completeAround({before: e.key, after: e.key})
		}
	} else if (e.key.startsWith("Arrow")) {
		setTimeout(pushMoveOrSelect, 0)
	} else if (e.key == ' ') {
		historyType = 'blank'
	} else if (e.key == 'Backspace' || e.key == 'Delete') {
		historyType = e.key
	} else {
		historyType = 'common'
	}
}

const pushMoveOrSelect = () => {
	if (!textarea.value) return

	let oldStart = top().start
	let oldEnd = top().end

	if (textarea.value.selectionStart == oldStart && textarea.value.selectionEnd == oldEnd) return

	nextTick(() => {
		if (textarea.value.selectionStart != textarea.value.selectionEnd) {
			historyType = 'select'
			push()
		} else {
			historyType = 'move'
			push()
		}
	})
}

const onMouseDown = () => {
	pushMoveOrSelect()
}

const onMouseUp = () => {
	pushMoveOrSelect()
}

const onSelect = () => {
	pushMoveOrSelect()
}

const onDragEnd = () => {
	historyType = 'dragend'
}

// 查找与替换功能
// 用于测算 textarea 当前文本高度的工具盒子
let searchCalculate = ref();

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

watch(() => text.value, () => {
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


const setSearchData = debounce(() => {
	searchData.index = -1;
	searchData.indexes = [];
	if (textarea.value == undefined) return;
	searchCalculate.value.style.width = textarea.value.scrollWidth + 'px';

	if (replaceData.replaceFrom.length <= 0) return;
	if (text.value.length <= 0) return;

	let index = text.value.indexOf(replaceData.replaceFrom, 0);
	let count = 0;
	while (index >= 0) {
		let temp = text.value.indexOf(replaceData.replaceFrom, index);
		if (temp < 0) break;
		if (textarea.value.selectionStart == temp && textarea.value.selectionEnd - textarea.value.selectionStart == replaceData.replaceFrom.length) {
			searchData.index = count;
		}
		searchData.indexes.push(temp);
		index = temp + replaceData.replaceFrom.length;
		count++;
	}
}, 200)

// 控制 textarea 进行跳转
const jumpTo = (target: number) => {
	smoothScroll(textarea.value, target)
}

let searchCalculateStyle = ref("")
let searchCalculateSubText = ref("")

const searchIndex = ref(0)

watch(() => searchData.index, () => {
	searchIndex.value = searchData.index + 1
})

const searchCurrent = () => {
	if (searchData.indexes.length == 0) {
		searchData.index = -1
		return;
	}

	searchCalculateSubText.value = text.value.substring(0, searchData.indexes[searchData.index]);

	searchCalculateStyle.value = "width: " + textarea.value.clientWidth + 'px;';

	historyType = 'find'

	nextTick(() => {
		textarea.value.focus()

		nextTick(() => {
			textarea.value.selectionStart = searchData.indexes[searchData.index];
			textarea.value.selectionEnd = searchData.indexes[searchData.index] + replaceData.replaceFrom.length;

			if (searchCalculate.value.scrollHeight > textarea.value.clientHeight / 2.4) {
				jumpTo(searchCalculate.value.scrollHeight - textarea.value.clientHeight / 2.4);
			} else {
				jumpTo(0);
			}
		})
	})
}

const searchByIndex = () => {
	const index = searchIndex.value
	if (index <= 0 || index > searchData.indexes.length) {
		searchIndex.value = 0
		return
	}
	searchData.index = index - 1

	searchCurrent()
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
	text.value = text.value.slice(0, start) + replaceData.replaceTo + text.value.slice(end);
	nextTick(() => {
		textarea.value.selectionStart = start;
		textarea.value.selectionEnd = start + replaceData.replaceTo.length;
		historyType = 'replaceOne'
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

	text.value = text.value.replaceAll(replaceData.replaceFrom, replaceData.replaceTo);
	historyType = 'replaceAll'
}
</script>

<style lang="scss">
.hideScroll {
	overflow-y: hidden;
}
</style>

<style lang="scss" scoped>
.editor {
	--back-ground-color: #f5f5f5;

	padding: 0;
	margin: 0;
	overflow: visible;

	line-height: 1.7em;

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
		padding: 0.5rem;
		overflow: auto;
		tab-size: 4;
		font-size: 1em;
		line-height: inherit;
		font-family: inherit;
		overflow-x: visible;
		overscroll-behavior-y: contain;
		scrollbar-gutter: stable;
		height: 100%;
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

.editor.full > .container {
	height: calc(99vh - 4em);
	display: grid;
	grid-template-rows: 100%;
	grid-column-gap: 0.6%;
	padding: 0 0.6%;

	> .edit-card,
	> .preview-card {
		background-color: white;
		padding-bottom: 50vh;
	}
}

.editor.full.pc > .container {
	&.edit-preview {
		grid-template-columns: 1fr 1fr;
	}

	&.edit {
		grid-template-columns: 1fr;
	}
}

.editor.full.mobile > .container {
	&.edit-preview {
		grid-template-columns: 0 100%;

		> .edit-card {
			padding: 0.5em;
			margin: 0;
		}
	}

	&.edit {
		grid-template-columns: 100%;

		> .preview-card {
			padding: 0.5em;
			margin: 0;
		}
	}
}

.editor {
	:deep(.context-menu) {
		background-color: var(--back-ground-color);
		font-size: 0.8rem;
		border: 1px solid #ccc;
		border-radius: 3px;
		line-height: 1.6rem;
	}

	&.non-full :deep(.context-menu) {
		z-index: 1;
	}

	&.full :deep(.context-menu) {
		z-index: 1001;
	}

	&.pc :deep(.context-menu) {
		width: min(60vw, 30rem);
		max-height: min(70vh, 30rem);
	}

	&.mobile :deep(.context-menu) {
		width: min(90vw, 30rem);
		max-height: min(70vh, 30rem);
	}
}

.editor .insert-text {
	white-space: nowrap;

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

.editor .replace-box {
	min-height: 4em;
	max-height: 13em;
	line-height: 1.6em;
	width: 100%;
	border: 1px solid #e5e5e5;
	padding: 0.5em;
}

.editor .replace-operation {
	display: inline-block;
	cursor: default;

	> span {
		cursor: default;
	}
}

.editor {
	&.non-full > .toolbar {
		padding: 0.2% 1px;
	}

	&.full > .toolbar {
		padding: 0.2% 0.6% 0.2% 0.6%;
	}

	&.full.mobile > .toolbar {
		padding: 0.6%;
	}
}

.editor > .statistical-list {
	height: 1.6rem;
	line-height: 1.6rem;
	margin-left: 0.4rem;

	> li {
		font-size: 0.8rem;
		display: inline-block;
		padding: 0 0.5rem;
		color: #333;
	}
}

.editor > .search-calculate-box {
	pointer-events: none;
	position: fixed;
	left: -1000vh;
	top: -1000vw;
	visibility: hidden;
	white-space: pre-wrap;
	overflow-wrap: break-word;
	padding: 0.5em;
	border: 1px solid #eee;
}
</style>