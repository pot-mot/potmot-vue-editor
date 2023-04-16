<template>
	<div :class="[isFullScreen?'full':'non-full', isMobile()? 'mobile': 'pc']" class="editor">
		<ul class="toolbar">
			<li v-for="tool in editToolList">
				<span
					@mousedown.prevent.stop="tool.method(tool)"
					:title="tool.label"
					class="iconfont"
					:class="[tool.active ? 'chosen' : '',tool.icon]">
				</span>
			</li>
		</ul>
		<div v-show="getEditToolActive('insert')" class="floating-card tool-menu" v-drag>
			<span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('insert', false)"/>
			<template v-for="item in props.insertUnits">
				<span class="insert-text">
				<span class="hover-color-blue" @mousedown.prevent.stop="insertIntoTextarea(item)"
					  :title='item.key ? item.key + (item.ctrl? " + Ctrl":"") + (item.shift? " + Shift":"") + (item.alt? " + Alt":"") : "无快捷键"'>
					{{ item.label }}
				</span>
				<template v-for="arg in item.arguments">
					<label>{{ arg.label }}</label>
					<select v-if="'options' in arg" :value="argsMap.get(arg.name).value"
							@change="(e) => {changeSelectArg(arg.name, e)}">
						<option v-for="item in arg.options">{{ item }}</option>
					</select>
					<input v-else-if="'type' in arg" :type="arg.type" :value="argsMap.get(arg.name).value"
						   :maxlength="arg.inputLength? arg.inputLength : 100"
						   :style="arg.styleWidth ? 'width: ' + arg.styleWidth : ''"
						   @input="(e) => {changeInputArg(arg.name, e)}">
				</template>
				</span>
				<br>
			</template>
		</div>
		<div v-show="getEditToolActive('replace')" class="replace-box floating-card tool-menu" v-drag>
			<span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('replace', false)"/>
			<textarea v-model="replaceData.replaceFrom" placeholder="查找文本"/>
			<br>
			<textarea v-model="replaceData.replaceTo" placeholder="替换文本"/>
			<div style="display: flex; justify-content: space-around">
				<span class="hover-color-blue" @mousedown.prevent.stop="searchNext" style="padding: 0.1em;">↓</span>
				<span class="hover-color-blue" @mousedown.prevent.stop="searchPrevious" style="padding: 0.1em;">↑</span>
				<span> {{ searchData.index + 1 }}/{{ searchData.indexes.length }} </span>
				<span class="hover-color-blue" @mousedown.prevent.stop="replaceOne">替换选中</span>
				<span class="hover-color-blue" @mousedown.prevent.stop="replaceAll">替换全部</span>
			</div>
		</div>
		<div v-show="getEditToolActive('outline')" class="outline-box floating-card" v-drag>
			<span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('outline', false)"/>
			<MarkdownOutline
				:target="previewCard"
				:click="() => {scrollKey = 'preview'}">
			</MarkdownOutline>
		</div>
		<div class="container" :class="containerClass">
			<textarea
				:style="[!isFullScreen && isPreview ? 'position: absolute; visibility: hidden;':'']"
				ref="textarea"
				v-model="data.text"
				:placeholder="props.placeholder"
				class="edit-card"
				@keydown="onKeyDown"
				@mouseup="onMouseUp"
				@mouseover="() => {scrollKey = 'textarea'}">
			</textarea>
			<div
				ref="previewCard"
				class="preview-card"
				@mouseover="() => {scrollKey = 'preview'}">
				<MarkdownPreview :markdown-text="data.text"></MarkdownPreview>
			</div>
			<div
				ref="textareaCountLine"
				style="visibility: hidden;white-space: pre-wrap;overflow-wrap: break-word;padding: 0.5em;border: 1px solid #eee;"
				v-text="textareaCountLineSubText"
				:style="textareaCountLineStyle">
			</div>
		</div>
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
	</div>

	<div v-if="props.debug">
		<div>当前类别：{{ pushFlag }}</div>
		<div v-if="historyData.stack.length > 0">当前栈顶：{{ historyData.stackTop }} "{{ top.text }}"</div>
		<ul v-for="(item, index) in historyData.stack">
			<li>{{ index }} "{{ item.text }}" start: {{ item.start }} end: {{ item.end }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownEditor'
}
</script>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onMounted, PropType, reactive, Ref, ref, watch} from "vue";
import {isMobile, vDrag} from "../util/drag";
import {insertIntoString, getArgsMap} from "../util/insertUtils";
import {htmlInsertUnits, markdownInsertUnits, simpleInsertUnits} from "../util/insertUnits";
import type {EditorShortcutKey, EditTool, InsertUnit} from "../declare/EditorUtil";
import {useHistoryStack} from "../util/history";
import {judgeKeyForEditorKeyEvent} from "../util/EditorEvent";

/**
 * 外部传入参数
 *
 * placeholder 占位字符串
 * startWithFullScreen 是否以全屏启动
 * shortcutKeys 覆盖快捷键
 * insertUnits 拓展插入单元
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
	startWithFullScreen: {
		type: Boolean,
		required: false,
		default: false,
	},
	shortcutKeys: {
		type: Array as PropType<EditorShortcutKey[]>,
		required: false,
		default: []
	},
	insertUnits: {
		type: Array as PropType<InsertUnit[]>,
		required: false,
		default: [...markdownInsertUnits, ...simpleInsertUnits, ...htmlInsertUnits]
	},
	debug: {
		type: Boolean,
		required: false,
		default: false,
	}
})

// 盒型数据
const textarea = ref();
const previewCard = ref();

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
const statisticalData = reactive({
	selectLength: 0,
	startPlace: {x: 1, y: 1},
	endPlace: {x: 1, y: 1},
})

// 设置统计数据，需要和定时器一起使用
const setEditData = () => {
	if (textarea.value) {
		statisticalData.startPlace = getPlace(textarea.value.selectionStart, data.text);
		if (textarea.value.selectionStart == textarea.value.selectionEnd) {
			statisticalData.endPlace = statisticalData.startPlace;
		} else {
			statisticalData.endPlace = getPlace(textarea.value.selectionEnd, data.text);
		}
		statisticalData.selectLength = textarea.value.selectionEnd - textarea.value.selectionStart;
	}
}

let editEditInterval = 0;

onMounted(() => {
	setEditData();
	editEditInterval = setInterval(setEditData, 100);
})

onBeforeUnmount(() => {
	clearInterval(editEditInterval)
})

// 工具列表
const editToolList = reactive(<EditTool[]>[
	{
		name: "fullScreen",
		label: "全屏/收起全屏",
		icon: "icon-full-screen",
		active: false,
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	{
		name: "insert",
		label: "快捷插入",
		icon: "icon-bulletpoint",
		active: false,
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	{
		name: "replace",
		label: "文本查找与替换",
		icon: "icon-search-list",
		active: false,
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	{
		name: "preview",
		label: "预览",
		icon: "icon-browse",
		active: false,
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	{
		name: "outline",
		label: "大纲",
		icon: "icon-file-tree",
		active: false,
		method: (self: EditTool) => {
			self.active = !self.active
		}
	},
	{
		name: "undo",
		label: "撤销",
		icon: "icon-undo",
		active: false,
		method: () => {
			undo();
		}
	},
	{
		name: "redo",
		label: "重做",
		icon: "icon-redo",
		active: false,
		method: () => {
			redo();
		}
	}
])

const getEditToolActive = (key: string) => {
	for (const item of editToolList) {
		if (item.name == key) {
			return item.active;
		}
	}
	return false;
}

const setEditToolActive = (key: string, newValue: boolean) => {
	for (const item of editToolList) {
		if (item.name == key) {
			item.active = newValue;
			break;
		}
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
		scrollKey.value = "edit"
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
		end = selectEnd + before.length;
	}
	if (after.length > 0) {
		text = insertIntoString(after, text, end);
	}
	data.text = text;
	pushFlag.value = "insert";
	nextTick(() => {
		if (insertUnit.keepSelect && start != selectEnd) {
			textarea.value.selectionStart = start;
			textarea.value.selectionEnd = end + after.length;
		} else {
			textarea.value.selectionStart = start + before.length;
			textarea.value.selectionEnd = start + before.length;
		}
		push();
	})
}

// 组件初始化
onMounted(() => {
	data.text = props.modelValue;

	if (props.startWithFullScreen) {
		isFullScreen.value = true;
		isPreview.value = true;
	}
})

/**
 * 滚动同步
 */
let scrollKey = ref("textarea")

const handleScroll = (from: HTMLElement, to: HTMLElement) => {
	to.scrollTop = from.scrollTop * (to.scrollHeight - to.offsetHeight) / (from.scrollHeight - from.offsetHeight);
}

watch(() => isPreview.value, async (newValue) => {
	if (isMobile()) {
		scrollKey.value = newValue ? 'preview' : 'edit';
	}
})

let scrollKeyInterval = 0

onMounted(() => {
	scrollKeyInterval = setInterval(() => {
		if (!textarea.value || !previewCard.value ||
			textarea.value.scrollHeight <= textarea.value.clientHeight ||
			previewCard.value.scrollHeight <= textarea.value.clientHeight
		) return;
		if (scrollKey.value == 'textarea') handleScroll(textarea.value, previewCard.value);
		else if (scrollKey.value == 'preview') handleScroll(previewCard.value, textarea.value);
	}, 20)
})

onBeforeUnmount(() => {
	clearInterval(scrollKeyInterval)
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
	(historyTop: EditorHistory) => {
		data.text = historyTop.text;
		nextTick(() => {
			textarea.value.selectionStart = historyTop.start;
			textarea.value.selectionEnd = historyTop.end;
			textarea.value.scrollTo(0, historyTop.scrollTop);
		})
	},
	() => {
	},
	() => {
		alert("已是最后，无法继续撤销");
	},
	() => {
		alert("已是最新，无法继续重做");
	},
	defaultHistory,
);

// 当前操作类别
let pushFlag = ref("jump");

onMounted(() => {
	top.value = defaultHistory();

	textarea.value.addEventListener('compositionend', () => {
		top.value = defaultHistory();
	})
})

// 报持历史操作一致性的触发器，根据输入标志符是否改变判断是否压入历史栈
const flagPush = (flag: string) => {
	if (pushFlag.value != flag) {
		pushFlag.value = flag;
		push();
	} else {
		top.value = defaultHistory();
	}
}

// 文本编辑
const shortcutKeys = reactive(<EditorShortcutKey[]>[
	{
		key: ['x', 'X'],
		ctrl: true,
		method: () => {
			pushFlag.value = "cut";
			setTimeout(push, 200);
		}
	},
	{
		key: ['v', 'V'],
		ctrl: true,
		method: () => {
			pushFlag.value = "copy";
			setTimeout(push, 200);
		}
	},
	{
		key: ['z', 'Z'],
		ctrl: true,
		method: (e: KeyboardEvent) => {
			pushFlag.value = "symbol";
			if (e.key == 'z') {
				undo();
			} else {
				redo();
			}
		},
		prevent: true,
		reject: true,
	},
	{
		key: ['r', 'f'],
		ctrl: true,
		method: () => {
			pushFlag.value = "replace";
			replaceData.replaceFrom = data.text.slice(textarea.value.selectionStart, textarea.value.selectionEnd);
			isReplace.value = true;
		},
		prevent: true,
		reject: true,
	},
	{
		key: "Enter",
		method: () => {
			pushFlag.value = "blank";
			batchEnter();
		},
		prevent: true,
		reject: true,
	},
	{
		key: "Tab",
		method: (e: KeyboardEvent) => {
			pushFlag.value = "tab";
			batchKeydown(e, '\t');
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
			pushFlag.value = "symbol";
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
		setTimeout(() => {
			flagPush("back");
		}, 40);
	} else if (e.key == '(' || e.key == '[' || e.key == '{') {
		e.preventDefault();
		pushFlag.value = "symbol";
		insertAroundText({before: e.key, after: e.key == '(' ? ")" : e.key == '{' ? '}' : ']'});
	} else if (textarea.value.selectionEnd != textarea.value.selectionStart && (e.key == '"' || e.key == "'")) {
		e.preventDefault();
		pushFlag.value = "symbol";
		insertAroundText({before: e.key, after: e.key == '"' ? '"' : "'"});
	} else if (e.key.startsWith("Arrow")) {
		setTimeout(() => {
			flagPush("jump");
		}, 40);
	} else if (e.key == ' ') {
		setTimeout(() => {
			flagPush("blank");
		}, 40);
	} else if (e.key != 'Shift' && e.key != 'Control' && e.key != 'Alt' && !e.ctrlKey && !e.altKey && !e.shiftKey) {
		setTimeout(() => {
			flagPush("input");
		}, 40);
	}
}

// 鼠标按下事件
const onMouseUp = () => {
	setTimeout(() => {
		flagPush("jump");
	}, 40);
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

	nextTick(() => {
		if (keepSelect) {
			textarea.value.selectionStart = start;
			textarea.value.selectionEnd = end + after.length;
		} else {
			textarea.value.selectionStart = start + before.length;
			textarea.value.selectionEnd = start + before.length;
		}
		push();
	})
}

// 复制前段文本缩进并插入（Enter）
const batchEnter = () => {
	const start = textarea.value.selectionStart;
	let enterWithBlank = "\n";
	let index = start;
	if (data.text[index] == '\n') {
		index--;
	}
	// 向前读取前一行的回车
	while (data.text[index] != '\n' && index > 0) {
		index--;
	}
	if (index != 0) {
		index++;
	}
	// 读到第二个回车时向后读取 tab 和 blank
	for (; index < data.text.length && index < start; index++) {
		if (data.text[index] == ' ' || data.text[index] == '\t') {
			enterWithBlank += data.text[index];
		} else {
			break;
		}
	}
	data.text = insertIntoString(enterWithBlank, data.text, start);
	nextTick(() => {
		textarea.value.selectionStart = start + enterWithBlank.length;
		textarea.value.selectionEnd = textarea.value.selectionStart;
		push();
	})
}

// 批量输入同个按键（Tab）
const batchKeydown = (e: KeyboardEvent, insertString: string) => {
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
			nextTick(() => {
				push({
					start: start,
					end: start,
					scrollTop: textarea.value.scrollTop,
					text: data.text,
				});
			})
		} else {
			const temp = data.text.slice(start, end);
			const newTemp = temp.replace(insertString, '').replaceAll('\n' + insertString, '\n');
			if (temp.length == newTemp.length) return;
			data.text = data.text.slice(0, start) + newTemp + data.text.slice(start + temp.length);
			nextTick(() => {
				textarea.value.selectionStart = start;
				textarea.value.selectionEnd = start + newTemp.length;
				push({
					start: start,
					end: textarea.value.selectionEnd,
					scrollTop: textarea.value.scrollTop,
					text: data.text,
				});
			})
		}
	} else {
		if (textarea.value.selectionStart == textarea.value.selectionEnd) {
			data.text = insertIntoString(insertString, data.text, textarea.value.selectionStart);
			nextTick(() => {
				textarea.value.selectionStart = start + 1;
				textarea.value.selectionEnd = start + 1;
				push({
					start: start + 1,
					end: start + 1,
					scrollTop: textarea.value.scrollTop,
					text: data.text,
				});
			})
		} else {
			const temp = data.text.slice(start, textarea.value.selectionEnd);
			const newTemp = insertString + temp.replaceAll('\n', '\n' + insertString);
			if (temp.length == newTemp.length) return;
			data.text = data.text.slice(0, start) + newTemp + data.text.slice(start + temp.length);
			nextTick(() => {
				textarea.value.selectionStart = start;
				textarea.value.selectionEnd = start + newTemp.length;
				push({
					start: start,
					end: textarea.value.selectionEnd,
					scrollTop: textarea.value.scrollTop,
					text: data.text,
				});
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
	setSearchData();
	if (!isReplace) return;
	if (replaceData.replaceFrom.length <= 0) return;
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
	textarea.value.scrollTop = target;
}

let textareaCountLineStyle = ref("")
let textareaCountLineSubText = ref("")

const searchCurrent = (
	jumpEnd: Function = () => {
		textarea.value.focus()
	}
) => {
	textareaCountLineSubText.value = data.text.substring(0, searchData.indexes[searchData.index]);

	textareaCountLineStyle.value = "width: " + textarea.value.clientWidth + 'px;';

	setTimeout(() => {
		scrollKey.value = 'textarea';

		if (textareaCountLine.value.scrollHeight > textarea.value.clientHeight / 2.4) {
			jumpTo(textareaCountLine.value.scrollHeight - textarea.value.clientHeight / 2.4);
		} else {
			jumpTo(0);
		}
		jumpEnd();
		textarea.value.selectionStart = searchData.indexes[searchData.index];
		textarea.value.selectionEnd = searchData.indexes[searchData.index] + replaceData.replaceFrom.length;
	}, 100 + data.text.length/2000)
}

const searchPrevious = () => {
	if (textarea.value == undefined) return;

	if (searchData.index > 0) {
		searchData.index--;
	}
	searchCurrent();
}

const searchNext = () => {
	if (textarea.value == undefined) return;

	if (searchData.index < searchData.indexes.length - 1) {
		searchData.index++;
	}
	searchCurrent();
}

const replaceOne = () => {
	if (data.text.slice(textarea.value.selectionStart, textarea.value.selectionEnd) == replaceData.replaceFrom) {
		data.text = data.text.slice(0, textarea.value.selectionStart) + replaceData.replaceTo + data.text.slice(textarea.value.selectionEnd);
		push();
	}
}

const replaceAll = () => {
	if (replaceData.replaceFrom.length <= 0) {
		alert("替换文本不可为空");
	} else {
		data.text = data.text.replaceAll(replaceData.replaceFrom, replaceData.replaceTo);
		nextTick(() => {
			push();
		})
	}
}

// 获取文本位置
const getPlace = (start: number, text: string): { x: number, y: number } => {
	let x = 0;
	let y = 1;
	if (text[start] == "\n") {
		start--;
		x++;
	}
	for (let i = start; i >= 0; i--) {
		if (text[i] == '\n') {
			break;
		}
		x++;
	}
	for (let i = start; i >= 0; i--) {
		if (text[i] == '\n') {
			y++;
		}
	}
	return {y, x};
}
</script>

<style lang="scss">
@import "../asserts/iconfont/iconfont.css";

.editor {
	--back-ground-color: #f5f5f5;
	padding: 0;
	margin: 0;
	line-height: inherit;
	overflow: visible;

	* {
		box-sizing: border-box;
		margin: 0;
		cursor: default;
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
	width: 100%;
	height: 100%;
}

.editor.full {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: 10;
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
		overflow-y: scroll;
		overflow-x: visible;
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
		grid-template-columns: 49.5% 49%;
		grid-gap: 0.5%;
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
		grid-template-rows: 0 100%;
		grid-gap: 0.5%;
	}

	&.edit {
		grid-template-rows: 100%;
	}

	> .edit-card,
	> .preview-card {
		background-color: white;
	}
}

.editor > .toolbar {
	vertical-align: middle;
	padding: 0;
	margin: 0;
	line-height: 2em;

	> li {
		position: relative;
	}
}

.editor.full > .toolbar {
	margin-left: 0.5em;
}

.editor {
	.floating-card {
		position: absolute;

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

	.floating-card.tool-menu {
		background-color: var(--back-ground-color);
		user-select: none;
		padding: 1em 0.5em;
		font-size: 0.8em;
		cursor: all-scroll;
		min-width: 20em;
		max-height: 70vh;
		line-height: 1.6em;
		border: 1px solid #ccc;
	}
}

.editor.non-full .floating-card {
	z-index: 1;
}

.editor.full .floating-card {
	z-index: 11;
}

.editor .replace-box {
	padding-top: 2em;

	> textarea {
		height: 4em;
		margin-right: 0.5em;
		width: 100%;
		border: 1px solid #e5e5e5;
		padding: 0.5em;
	}
}

.editor .outline-box {
	padding: 1em 0.5em;
	background-color: #fff;
	width: 25em;
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


.editor ul.toolbar {
	cursor: auto;

	> li {
		display: inline-block;
		font-size: 0.9rem;
		padding-right: 0.5rem;

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

.editor {
	> .statistical-list {
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
}
</style>