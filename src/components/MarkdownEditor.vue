<template>
	<div class="editor"
		 :class="[isFullScreen? 'full':'non-full', isMobile? 'mobile': 'pc']"
		 :style="isFullScreen ? '' : {width: props.width, height: props.height}">
		<ToolBar class="toolbar" :tools="editTools">
			<template #insert>
				<ul>
					<li v-for="item in props.insertUnits" class="insert-text">
                        <span ignore-drag
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
				<textarea v-input-extension v-adapt="{min: 2, max: 6}" v-model="replaceData.replaceFrom"
						  class="replace-box" placeholder="查找文本"/>
				<textarea v-input-extension v-adapt="{min: 2, max: 6}" v-model="replaceData.replaceTo"
						  class="replace-box" placeholder="替换文本"/>
				<div class="replace-operation" ignore-drag>
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
					<MarkdownOutline :target="previewCard" :suspend="!isOutline" ignore-drag></MarkdownOutline>
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
				@scroll="syncScroll(textarea, previewCard)">
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

import {vAdapt} from "../directives/vAdapt";
import {vInputExtension} from "../directives/vInputExtension";

import type {ShortcutKey, EditTool, InsertUnit} from "../declare/EditorUtil";

import {getArgsMap} from "../utils/editor/insertUtils";

import MarkdownOutline from "./MarkdownOutline.vue";
import MarkdownPreview from "./MarkdownPreview.vue";
import ToolBar from "./toolBar/ToolBar.vue";

import {useStatistics} from "../hooks/useStatistics";
import {useInputExtension} from "../hooks/useInputExtension";
import {extendInsertUnits, markdownInsertUnits} from "../utils/insertUnits";
import {now} from "../tests/time";
import {formatTriggers} from "../utils/editor/insertUnitUtils";
import {useSvgIcon} from "../hooks/useSvgIcon";
import {updateTextarea} from "../utils/common/textarea";
import {batchEnter} from "../utils/editor/inputExtension";
import {getLeadingMarks} from "../utils/common/text";

// 元素
const textarea = ref();
const previewCard = ref();

/**
 * 文本与统计数据
 */
//region Text Data
const text = ref("")

const {statisticalData} = useStatistics(() => textarea.value)
//endregion

/**
 * 外部传入参数
 */
//region Props
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
		type: Array as PropType<ShortcutKey[]>,
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
})
//endregion

/**
 * 工具栏与状态
 */
//region Tool List and Status
const editTools = reactive(<EditTool[]>[
	<EditTool>{
		triggers: [],
		name: "insert",
		label: "快捷插入",
		icon: "more",
		active: false,
		contextMenu: true,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		triggers: [],
		name: "replace",
		label: "文本查找与替换",
		icon: "search",
		active: false,
		contextMenu: true,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		triggers: [],
		name: "undo",
		label: "撤销",
		icon: "undo",
		active: false,
		contextMenu: false,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: () => {
			setHistoryType("undo" + now())
			undo()
		}
	},
	<EditTool>{
		triggers: [],
		name: "redo",
		label: "重做",
		icon: "redo",
		active: false,
		contextMenu: false,
		show: () => isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value),
		position: "left",
		method: () => {
			setHistoryType("redo" + now())
			redo();
		}
	},

	<EditTool>{
		triggers: [],
		name: "outline",
		label: "预览大纲",
		icon: "outline",
		active: false,
		contextMenu: true,
		show: () => isPreview.value,
		position: "right",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		triggers: [],
		name: "preview",
		label: "预览",
		icon: "preview",
		active: false,
		contextMenu: false,
		show: () => true,
		position: "right",
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	<EditTool>{
		triggers: [],
		name: "fullScreen",
		label: "全屏/收起全屏",
		icon: "fullScreen",
		active: false,
		contextMenu: false,
		show: () => true,
		position: "right",
		method: (self: EditTool) => {
			self.active = !self.active
		},
	},
])

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

// 组件初始化全屏
onMounted(() => {
	if (props.startWithFullScreen) {
		isFullScreen.value = true;
		isPreview.value = true;
	}
})

useSvgIcon(editTools.map(item => item.icon))

// 核心容器样式类
const containerClass = computed(() => {
	if (!isFullScreen.value) return '';
	if (isPreview.value) return 'edit-preview';
	return 'edit';
})

//endregion

/**
 * 文本插入工具与历史记录
 */
//region Insert Tool and History
const argsMap = ref(new Map<string, Ref>)

argsMap.value = getArgsMap(props.insertUnits)

const changeInputArg = (name: string, e: InputEvent) => {
	argsMap.value.get(name)!.value = (<HTMLInputElement>e.target).value;
}
const changeSelectArg = (name: string, e: Event) => {
	argsMap.value.get(name)!.value = (<HTMLSelectElement>e.target).value;
}

const insertIntoTextarea = (insertUnit: InsertUnit, e?: KeyboardEvent) => {
	const history = insertUnit.insert(argsMap.value, textarea.value, e)
	setHistoryType(history.type)
	changeHook(history)
}

const changeHook = (history: EditorHistory) => {
	updateTextarea(textarea.value, history)
}

// 文本编辑快捷键
const shortcutKeys = reactive(<ShortcutKey[]>[
	...props.shortcutKeys,
	<ShortcutKey>{
		trigger: {
			key: ['Enter']
		},
		method: (e: KeyboardEvent) => {
			push(batchEnter(textarea.value, e, getLeadingMarks))
		},
		prevent: true,
		reject: true,
	},
	<ShortcutKey>{
		trigger: {
			key: ['r', 'f'],
			ctrl: true
		},
		method: () => {
			replaceData.replaceFrom = text.value.slice(textarea.value.selectionStart, textarea.value.selectionEnd)
			isReplace.value = true
		},
		prevent: true,
		reject: true,
	},
	<ShortcutKey>{
		trigger: {
			key: "Escape"
		},
		method: () => {
			if (isFullScreen.value) {
				isFullScreen.value = false
			}
		},
	}
])

const {
	redo,
	undo,
	push,
	top,
	setHistoryType,
} = useInputExtension(
	() => {
		return textarea.value
	},
	shortcutKeys,
	props.insertUnits,
	argsMap.value,
)
//endregion

/**
 * 查找与替换功能
 */
//region Search And Replace
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

	setHistoryType('find' + now())

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
		textarea.value.selectionStart = start
		textarea.value.selectionEnd = start + replaceData.replaceTo.length
		setHistoryType('replaceOne' + now())
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
		return
	}

	text.value = text.value.replaceAll(replaceData.replaceFrom, replaceData.replaceTo)
	setHistoryType('replaceAll' + now())
}
//endregion

/**
 * 滚动同步
 */
//region Scroll Sync
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
//endregion

/**
 * 同步 v-model 的文本变更
 */
//region Sync vModel
const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, () => {
	if (text.value != props.modelValue) {
		text.value = props.modelValue
		setHistoryType('outside' + now())
		nextTick(push)
	}
}, {immediate: true})

watch(() => text.value, () => {
	emit('update:modelValue', text.value)
})
//endregion
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
		position: relative;

		display: block;
		padding: 0.5rem;

		tab-size: 4;
		font-size: 1em;
		line-height: inherit;
		font-family: inherit;

		overflow-y: auto;
		overflow-x: hidden;
		overscroll-behavior-y: contain;
		scrollbar-gutter: stable;

		height: 100%;
	}

	> .preview-card {
		padding-left: 1em;
		padding-right: 1em;
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
		padding-left: 1px;
		padding-right: 1px;
	}

	&.full > .toolbar {
		padding-left: 0.6%;
		padding-right: 0.6%;
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