<template>
	<Teleport :disabled="!isFullScreen" to="body">
		<div class="editor" ref="editor"
			 :class="[isFullScreen? 'full':'non-full', isMobile? 'mobile': 'pc', colorTheme, ...props.class]"
			 :style="[isFullScreen ? (isMobile ? {height: mobileFullHeight} : {}) : {width: props.width, height: props.height}, props.style]">
			<ToolBar ref="topToolBar" v-if="textarea !== undefined" :tools="toolList" :positions="['LT', 'RT']"
					 @click-tool="clickTool">
				<template #insert>
					<ul>
						<li v-for="item in insertUnits" class="insert-text">
                        	<span class="hover-color"
								  @mousedown.prevent.stop="insertIntoTextarea(item, undefined)"
								  :title='formatTriggers(item).join("\n")'
								  v-text="item.label">
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
						</li>
					</ul>
				</template>
				<template #replace>
					<textarea v-input-extension v-adapt="{min: 2, max: 6}" v-model="replaceFrom" ref="replaceFromBox"
							  class="replace-box" placeholder="查找文本"/>
					<textarea v-input-extension v-adapt="{min: 2, max: 6}" v-model="replaceTo" ref="replaceToBox"
							  class="replace-box" placeholder="替换文本"/>
					<div class="replace-operation">
						<span class="hover-color" @mousedown.prevent.stop="searchNext">下一个</span>
						<span style="display: inline-block;width: 1em;"></span>
						<span class="hover-color" @mousedown.prevent.stop="searchPrevious">上一个</span>
						<span style="display: inline-block;width: 1em;"></span>
						<span class="hover-color" @mousedown.prevent.stop="searchByIndex">跳转到</span>
						<input type="number" style="width: 4em;" @keydown.prevent.self.enter="searchByIndex"
							   v-model="searchIndex">
						<span style="display: inline-block; min-width: 3em;">/{{ searchList.length }}</span>
						<span class="hover-color" @mousedown.prevent.stop="replaceOne">替换当前</span>
						<span style="display: inline-block;width: 1em;"></span>
						<span class="hover-color" @mousedown.prevent.stop="replaceAll">替换全部</span>
					</div>
				</template>
				<template #outline>
					<slot name="outline" :target="previewCard">
						<MarkdownOutline v-if="previewCard" :target="previewCard"
										 :suspend="!isOutline"></MarkdownOutline>
					</slot>
				</template>
			</ToolBar>
			<div ref="container" class="container" :class="containerClass">
				<div class="edit-card"
					 :style="[!isFullScreen && isPreview ? 'position: absolute; visibility: hidden;':'']">
					<textarea
						ref="textarea"
						v-model="text"
						:placeholder="placeholder"
						:disabled="disabled"
						:class="[isWrap ? 'wrap' : 'no-wrap', disabled? 'disabled' : '']">
					</textarea>
				</div>
				<div ref="previewCard"
					 class="preview-card">
					<slot name="preview" :text="text">
						<MarkdownPreview :markdown-text="text" :suspend="!isPreview"></MarkdownPreview>
					</slot>
				</div>
			</div>
			<ToolBar ref="bottomToolBar" :tools="toolList" :positions="['LB', 'RB']" @click-tool="clickTool">
				<template #statisticalDataContent>
					<ul class="statistical-list">
						<li>字数 {{ text.length }}</li>
						<li>
							{{ statisticalData.startPlace.y }}:{{ statisticalData.startPlace.x }}
							<span v-show="statisticalData.selectLength > 0">
								至 {{ statisticalData.endPlace.y }}:{{ statisticalData.endPlace.x }}
							</span>
						</li>
						<li v-show="statisticalData.selectLength > 0">选中 {{ statisticalData.selectLength }}</li>
					</ul>
				</template>
				<template #history>
					<ul style="height: 100%; overflow-x: hidden; overflow-y: auto;" v-keep-bottom="undoStack">
						<li v-for="item in undoStack"
							style="white-space: nowrap; overflow: hidden; max-width: 100%; height: 1.5em;">
							{{ item.type }}
						</li>
					</ul>
				</template>
			</ToolBar>
		</div>
	</Teleport>
</template>

<script lang="ts">
export default {
	name: 'MarkdownEditor'
}
</script>

<script lang="ts" setup>
import {computed, ComputedRef, nextTick, onMounted, PropType, reactive, Ref, ref, watch} from "vue";

import {resetScroll, setSyncScroll} from "../utils/common/scroll";
import type {ShortcutKey, InsertUnit} from "../declare/InsertUtil";
import {getArgsMap} from "../utils/editor/insertUtils";

import MarkdownOutline from "./MarkdownOutline.vue";
import MarkdownPreview from "./MarkdownPreview.vue";
import ToolBar from "./toolBar/ToolBar.vue";

import {vAdapt} from "../directives/vAdapt";
import {vInputExtension} from "../directives/vInputExtension";
import {vKeepBottom} from "../directives/vKeepBottom";

import {useTextareaStatistics} from "../hooks/useTextareaStatistics";
import {useInputExtension} from "../hooks/useInputExtension";
import {useSyncScroll} from "../hooks/useSyncScroll";

import {extendInsertUnits, markdownInsertUnits} from "../core/insertUnits";

import {isMobile} from "../utils/common/platform";
import {now} from "../utils/common/time";
import {formatTriggers} from "../utils/editor/insertUnitUtils";
import {complexEnter, complete} from "../utils/editor/inputExtension";
import {updateTextarea} from "../utils/common/textarea";
import {createNextTableLine, getLeadingMarks, judgeTableLine} from "../utils/markdown/break";
import {
	lockScroll,
	unlockScroll,
	ScrollData, getDocumentScroll,
} from "../utils/common/document";
import {useSearchAndReplace} from "../hooks/useSearchAndReplace";
import {EditTool, EditToolConfig} from "../declare/EditTool";
import {usePreferredDark} from "@vueuse/core";
import {useMobileFullHeight} from "../hooks/useMobileFullHeight";
import {completeHistory} from "../utils/editor/history";
import {exeToolClick} from "../utils/editor/editTool";

// DOM 元素 Ref
const editor: Ref<HTMLDivElement | null | undefined> = ref();
const container: Ref<HTMLDivElement | null | undefined> = ref();
const textarea: Ref<HTMLTextAreaElement | null | undefined> = ref();
const previewCard: Ref<HTMLDivElement | null | undefined> = ref();
const topToolBar = ref();
const bottomToolBar = ref();
const replaceFromBox: Ref<HTMLTextAreaElement | null | undefined> = ref();
const replaceToBox: Ref<HTMLTextAreaElement | null | undefined> = ref();

/**
 * 文本数据
 */
const text = ref("");

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
	disabled: {
		type: Boolean,
		required: false,
		default: false,
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
	style: {
		type: Object as PropType<Partial<CSSStyleDeclaration>>,
		required: false,
	},
	class: {
		type: Array as PropType<string[]>,
		required: false,
		default: [],
	},

	toolbar: {
		type: Array as PropType<EditToolConfig[]>,
		required: false,
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
});
//endregion

/**
 * 工具栏与状态
 */
//region Tool and Status
const isFullScreen = ref(false);

const isReplace = ref(false);

const isPreview = ref(false);

const isOutline = ref(false);

const isWrap = ref(true);

const isSyncScroll = ref(true);

const isEdit: ComputedRef<boolean> = computed(() => {
	if (props.disabled) return false;
	return isMobile.value ? (!isPreview.value) : (isFullScreen.value || !isPreview.value);
});

const mobileFullHeight = useMobileFullHeight();
const preferredDark = usePreferredDark();
const colorTheme = computed(() => preferredDark.value ? "dark" : "light");

const toolList = reactive(<EditTool[]>[
	{
		name: "insert",
		label: "快捷插入",
		active: ref(false),
		icon: "more",
		show: isEdit,
		position: "LT",
		contextMenu: {
			position: {},
			visible: false,
		},
	},
	{
		name: "replace",
		label: "文本查找与替换",
		active: isReplace,
		icon: "search",
		show: isEdit,
		position: "LT",
		contextMenu: {
			position: {},
			visible: false,
		},
	},
	{
		name: "undo",
		label: "撤销",
		icon: "undo",
		disable: computed(() => undoStack.value.length <= 1),
		show: isEdit,
		position: "LT",
		onClick: () => {
			setHistoryType("undo");
			undo();
			nextTick(() => {
				if (textarea.value) textarea.value.focus();
			});
		}
	},
	{
		name: "redo",
		label: "重做",
		icon: "redo",
		disable: computed(() => redoStack.value.length <= 0),
		show: isEdit,
		position: "LT",
		onClick: () => {
			setHistoryType("redo");
			redo();
			nextTick(() => {
				if (textarea.value) textarea.value.focus();
			});
		}
	},

	{
		name: "statisticalData",
		label: "统计数据",
		show: true,
		position: "LB",
	},

	{
		name: "wrap",
		label: "换行",
		icon: "wrap",
		active: isWrap,
		show: true,
		position: "RB"
	},
	{
		name: "history",
		label: "操作历史",
		icon: "history",
		active: ref(false),
		show: true,
		position: "RB",
		contextMenu: {
			position: {},
			visible: false,
		},
	},
	{
		name: "colorTheme",
		label: "主题",
		icon: colorTheme,
		active: preferredDark,
		show: true,
		position: "RB",
	},
	{
		name: "syncScroll",
		label: "滚动同步",
		icon: computed(() => isSyncScroll.value ? 'lock' : 'unlock'),
		active: isSyncScroll,
		show: true,
		position: "RB",
	},

	{
		name: "outline",
		label: "预览大纲",
		icon: "outline",
		active: isOutline,
		show: isPreview,
		position: "RT",
		contextMenu: {
			position: {},
			visible: false,
		},
	},
	{
		name: "preview",
		label: "预览",
		icon: computed(() => isPreview.value ? 'eye' : 'eyeClose'),
		active: isPreview,
		show: true,
		position: "RT",
	},
	{
		name: "fullScreen",
		label: "全屏/收起全屏",
		icon: ref("fullScreen"),
		active: isFullScreen,
		show: true,
		position: "RT",
	},
]);

let contextMenuPositionTop: string = 'auto';
let contextMenuPositionLeft: string = 'auto';
let contextMenuPositionBottom: string = 'auto';
let contextMenuPositionRight: string = 'auto';

const {statisticalData} = useTextareaStatistics(textarea);

const getPosition = (tool: EditTool): Position => {
	switch (tool.position) {
		case "LT":
			return {left: contextMenuPositionLeft, top: contextMenuPositionTop};
		case "LB":
			return {left: contextMenuPositionLeft, bottom: contextMenuPositionBottom};
		case "RT":
			return {right: contextMenuPositionRight, top: contextMenuPositionTop};
		case "RB":
			return {right: contextMenuPositionRight, bottom: contextMenuPositionBottom};
	}
	return {};
}

onMounted(() => {
	watch(() => isFullScreen.value, () => {
		nextTick(() => {
			if (!editor.value || !topToolBar.value || !topToolBar.value.element) return {};
			const {
				marginTop: mt1,
				paddingTop: pt1,
				height: h1,
				paddingBottom: pb1,
				marginBottom: mb1
			} = window.getComputedStyle(topToolBar.value.element);
			const {
				marginTop: mt2,
				paddingTop: pt2,
				height: h2,
				paddingBottom: pb2,
				marginBottom: mb2
			} = window.getComputedStyle(bottomToolBar.value.element);
			contextMenuPositionLeft = '0';
			contextMenuPositionRight = '0';
			contextMenuPositionTop = `calc(${[mt1, pt1, h1, pb1, mb1].join(" + ")})`;
			contextMenuPositionBottom = `calc(${[mt2, pt2, h2, pb2, mb2].join(" + ")})`;
			toolList.forEach(tool => {
				if (tool.contextMenu) tool.contextMenu.position = getPosition(tool);
			});
		});
	}, {immediate: true});
});

const clickTool = (tool: EditTool) => {
	exeToolClick(tool);
}

// 组件初始化全屏
onMounted(() => {
	if (props.startWithFullScreen) {
		isFullScreen.value = true;
		isPreview.value = true;
	}
});

let oldScrollData: ScrollData = getDocumentScroll();

onMounted(() => {
	watch(() => isFullScreen.value, (newValue) => {
		// 因为使用 teleport, 所以需要手动重置滚动高度
		resetScroll(textarea.value);
		resetScroll(previewCard.value);

		if (newValue) {
			isPreview.value = !isMobile.value;
			oldScrollData = lockScroll();
		} else {
			isPreview.value = false;
			unlockScroll(oldScrollData)
		}
	}, {immediate: true});
})

let lastScroll: Ref<HTMLElement | null | undefined> | undefined = undefined;

/**
 * 滚动同步
 */
onMounted(() => {
	const result = useSyncScroll([textarea.value, previewCard.value], () => !isSyncScroll.value);
	lastScroll = result.lastScroll;
});

const setSyncScrollTop = () => {
	if (!isSyncScroll.value) return;

	// 仅切换至预览，全屏的手机端时，将 textarea 同步为 preview
	if (!isPreview.value && !isFullScreen.value && !isMobile.value) {
		setSyncScroll(previewCard.value, textarea.value);
	} else if (lastScroll && lastScroll.value) {
		setSyncScroll(lastScroll.value, textarea.value, previewCard.value);
	} else {
		setSyncScroll(textarea.value, previewCard.value);
	}
}

watch(() => isSyncScroll.value, () => {
	setSyncScrollTop();
});

watch(() => isPreview.value, () => {
	setSyncScrollTop();
});

// 容器样式类
const containerClass = computed(() => {
	if (!isMobile.value && isFullScreen.value && isPreview.value) return 'edit-preview';
	if (isPreview.value) return 'preview';
	return 'edit';
});
//endregion

/**
 * 文本插入工具与历史记录
 */
//region Insert Tool and History
const argsMap = ref(new Map<string, Ref>);

argsMap.value = getArgsMap(props.insertUnits);

const changeInputArg = (name: string, e: InputEvent) => {
	argsMap.value.get(name)!.value = (<HTMLInputElement>e.target).value;
}
const changeSelectArg = (name: string, e: Event) => {
	argsMap.value.get(name)!.value = (<HTMLSelectElement>e.target).value;
}

const insertIntoTextarea = (insertUnit: InsertUnit, e?: KeyboardEvent) => {
	if (!textarea.value) return;
	const history = completeHistory(insertUnit.insert(argsMap.value, textarea.value, e), pushDefault());
	setHistoryType(history.type);
	smoothChangeHook(history);
}

const changeHook = (history: EditorHistory) => {
	if (!textarea.value) return;
	updateTextarea(textarea.value, history);
}

const smoothChangeHook = (history: EditorHistory) => {
	if (!textarea.value) return;
	updateTextarea(textarea.value, history, false);
	textarea.value.scrollTo({top: history.scrollTop, left: history.scrollLeft});
}

// 文本编辑快捷键
const shortcutKeys = reactive(<ShortcutKey[]>[
	...props.shortcutKeys,
	<ShortcutKey>{
		trigger: {
			key: ["=", '_', '~', '*', '^'],
		},
		onEmit: (e: KeyboardEvent) => {
			if (!textarea.value) return;
			if (textarea.value.selectionStart != textarea.value.selectionEnd) {
				e.preventDefault();
				setHistoryType('complete' + e.key + now());
				push(complete(textarea.value, {before: e.key, after: e.key}));
			}
		},
		reject: true,
	},
	<ShortcutKey>{
		trigger: {
			key: ['Enter']
		},
		onEmit: (e: KeyboardEvent) => {
			if (!textarea.value) return;
			setHistoryType('enter' + now());
			if (e.altKey || e.ctrlKey || e.metaKey) {
				push(complexEnter(textarea.value));
			} else {
				const start = textarea.value.selectionStart
				if (judgeTableLine(text.value, start)) {
					push(createNextTableLine(text.value, start));
				} else {
					push(complexEnter(textarea.value, getLeadingMarks));
				}
			}
		},
		prevent: true,
		reject: true,
	},
	<ShortcutKey>{
		trigger: {
			key: 'F3',
		},
		onEmit: (e: KeyboardEvent) => {
			if (e.shiftKey) {
				searchPrevious();
			} else {
				searchNext();
			}
		},
		prevent: true,
		reject: true,
	},
	<ShortcutKey>{
		trigger: {
			key: ['r', 'f'],
			ctrl: true
		},
		onEmit: (e: KeyboardEvent) => {
			if (!textarea.value) return;
			replaceFrom.value = text.value.slice(textarea.value.selectionStart, textarea.value.selectionEnd);
			isReplace.value = true;
			nextTick(() => {
				if (e.key == 'r' && replaceFrom.value.length > 0 && replaceToBox.value) {
					replaceToBox.value.focus();
				} else if (e.key == 'f' && replaceFrom.value.length == 0 && replaceFromBox.value) {
					replaceFromBox.value.focus();
				}
			})
		},
		prevent: true,
		reject: true,
	},
	<ShortcutKey>{
		trigger: {
			key: "Escape"
		},
		onEmit: () => {
			if (isFullScreen.value) {
				isFullScreen.value = false;
				return;
			}
			if (isPreview.value) {
				isPreview.value = false;
				return;
			}
		},
	}
]);

const {
	undoStack,
	redoStack,
	redo,
	undo,
	push,
	top,
	historyType,
	setHistoryType,
	pushDefault,
} = useInputExtension(
	() => {
		return textarea.value
	},
	shortcutKeys,
	props.insertUnits,
	argsMap.value,
);
//endregion

/**
 * 查找与替换功能
 */
//region Search And Replace
const {
	searchIndex,
	searchList,
	searchByIndex,
	searchPrevious,
	searchNext,

	replaceFrom,
	replaceTo,
	replaceAll,
	replaceOne,

} = useSearchAndReplace(
	textarea,
	text,
	(history) => {
		if (!textarea.value) return;
		textarea.value.focus();
		push(history, smoothChangeHook);
	},
	(history) => {
		if (!textarea.value) return;
		textarea.value.focus();
		push(history, smoothChangeHook);
	},
	(history) => {
		if (!textarea.value) return;
		textarea.value.focus();
		push(history, smoothChangeHook);
	}
);
//endregion

/**
 * 同步 v-model 的文本变更
 */
//region Sync vModel
const emit = defineEmits(['update:modelValue']);

watch(() => props.modelValue, () => {
	if (text.value != props.modelValue) {
		text.value = props.modelValue;
		nextTick(() => {
			setHistoryType('outside' + now());
			push()
		})
	}
}, {immediate: true});

watch(() => text.value, () => {
	emit('update:modelValue', text.value);
});
//endregion

//region Expose
defineExpose({
	editor,
	container,
	textarea,
	previewCard,
	topToolBar,
	bottomToolBar,

	toolList,

	isFullScreen,
	isReplace,
	isPreview,
	isOutline,
	isSyncScroll,
	colorTheme,
	isWrap,
	setSyncScrollTop,

	undoStack,
	redoStack,
	redo,
	undo,
	push,
	top,
	historyType,
	setHistoryType,
	changeHook,
	pushDefault,
	searchIndex,
	searchList,
	replaceFrom,
	replaceTo,
	statisticalData,
	shortcutKeys,
	insertUnits: props.insertUnits,
	argsMap,
});
//endregion
</script>

<style lang="scss" scoped>
.editor {
	box-sizing: border-box;

	color: var(--editor-default-color);

	margin: 0;
	overflow: visible;

	line-height: 1.7em;

	transition: 0.5s;

	::selection {
		color: var(--editor-selection-color);
		background-color: var(--editor-selection-back-color);
	}

	::-webkit-scrollbar {
		width: var(--editor-scroll-size);
		height: var(--editor-scroll-size);
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--editor-scroll-color);
		border-radius: calc(var(--editor-scroll-size) / 2);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: var(--editor-scroll-hover-color);
	}

	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	* {
		color: var(--editor-default-color);
		box-sizing: border-box;
		margin: 0;
	}

	.hover-color:hover {
		color: var(--editor-hover-color);
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
		word-break: break-word;
		word-wrap: anywhere;
	}

	input:hover,
	textarea:hover {
		box-shadow: var(--editor-input-shadow);
		-webkit-box-shadow: var(--editor-input-shadow);
	}
}

.editor.non-full {
	position: relative;
	background-color: var(--editor-non-full-back-color);
	padding: 0;
}

.editor.full {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10000;
	background-color: var(--editor-full-back-color);
	padding: 0 0.5em;
}

.editor.mobile {
	padding: 0;
}

.editor > .container {
	position: relative;
	overflow: hidden;

	display: grid;
	grid-column-gap: 0.6%;

	> .edit-card,
	> .preview-card {
		position: relative;

		display: block;

		tab-size: 4;
		font-size: 1em;
		line-height: inherit;
		font-family: inherit;

		height: 100%;

		border: 1px solid var(--editor-border-color);
		background-color: var(--editor-region-back-color);
	}

	> .edit-card > textarea {
		height: 100%;
		width: 100%;
		background-color: transparent;
		font: inherit;
		line-height: inherit;
		box-shadow: none;
		-webkit-box-shadow: none;
		padding-top: 0.5em;
		padding-left: 0.5em;

		&.wrap {
			padding-right: 0.5em;
			overflow-x: hidden;
		}

		&.no-wrap {
			overflow-x: auto;
			white-space: nowrap;
		}

		&.disabled {
			cursor: not-allowed;
			opacity: 0.9;
		}
	}

	> .preview-card {
		padding-left: 1em;
		padding-right: 0.5em;
		white-space: normal;
		overflow-y: auto;
		overscroll-behavior-y: contain;
		scrollbar-gutter: stable;
	}

	&.edit {
		grid-template-rows: 100%;
		grid-template-columns: 1fr;

		> .preview-card {
			display: none;
		}
	}

	&.edit-preview {
		grid-template-columns: 1fr 1fr;
	}

	&.preview {
		grid-template-rows: 100%;
		grid-template-columns: 1fr;

		> .edit-card {
			display: none;
		}
	}
}

.editor.non-full > .container {
	height: calc(100% - 4rem);

	> .edit-card,
	> .preview-card {
		padding-bottom: 4em;
	}
}

.editor.full > .container {
	height: calc(100vh - 4em);

	> .edit-card > textarea {
		padding-bottom: 50vh;
	}

	> .preview-card {
		padding-bottom: 50vh;
	}
}

.editor {
	:deep(.context-menu) {
		background-color: var(--editor-context-menu-back-color);
		font-size: 0.8rem;
		border: 1px solid var(--editor-context-menu-border-color);
		border-radius: 3px;
		line-height: 1.6rem;

		input,
		textarea,
		select {
			border: 1px solid var(--editor-tool-input-border-color);
			background-color: var(--editor-tool-input-back-color);
		}
	}

	&.non-full :deep(.context-menu) {
		z-index: 1;
	}

	&.full :deep(.context-menu) {
		z-index: 10001;
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
		margin-right: 0.5em;
		width: 4em;
	}

	> select {
		padding: 0;
		margin-left: 0.5em;
		outline: none;
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
	padding: 0.5em;
	white-space: pre;
	scrollbar-gutter: stable;
}

.editor .replace-operation {
	display: inline-block;
	cursor: default;

	> span {
		cursor: default;
	}
}

.editor .statistical-list {
	display: inline-block;
	white-space: nowrap;
	height: 1.6em;
	line-height: 1.6em;

	> li {
		font-size: 0.8rem;
		display: inline-block;
		padding-right: 0.5rem;
	}
}
</style>