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
			<template v-for="item in insertUnits">
				<span class="insert-text">
				<span class="hover-color-blue" @mousedown.prevent.stop="insertIntoTextarea(item)"
					  :title='"快捷键[Ctrl + " + item.key + "]"'>
					{{ item.label }}
				</span>
				<template v-for="arg in item.arguments">
					<label>{{ arg.label }}</label>
					<select v-if="'options' in arg" :value="argsMap.get(arg.name).value"
							@change="(e) => {changeSelectArg(arg.name, e)}">
						<option v-for="item in arg.options">{{ item }}</option>
					</select>
					<input v-if="'type' in arg" :type="arg.type" :value="argsMap.get(arg.name).value"
						   @input="(e) => {changeInputArg(arg.name, e)}">
				</template>
				</span>
				<br>
			</template>
		</div>
		<div v-show="getEditToolActive('replace')" class="replace-box floating-card tool-menu" v-drag>
			<span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('replace', false)"/>
			<textarea v-model="data.replaceFrom" placeholder="查找文本"/>
			<br>
			<textarea v-model="data.replaceTo" placeholder="替换文本"/>
			<div style="display: flex; justify-content: space-around">
				<span class="hover-color-blue" @mousedown.prevent.stop="searchNext" style="padding: 0.1em;">↓</span>
				<span class="hover-color-blue" @mousedown.prevent.stop="searchPrevious" style="padding: 0.1em;">↑</span>
				<span> {{ searchData.index + 1 }}/{{ searchData.indexes.length }} </span>
				<span class="hover-color-blue" @mousedown.prevent.stop="replaceOne">替换选中</span>
				<span class="hover-color-blue" @mousedown.prevent.stop="replaceAll">替换全部</span>
			</div>
		</div>
		<div
			v-show="getEditToolActive('preview') && !isFullScreen" v-drag
			class="floating-card preview-card"
			@mouseenter="setHandleScrollFlag('floatPreviewCard')">
			<span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('preview', false)"/>
			<div class="container" ref="floatPreviewCard">
				<MarkdownPreview :markdown-text="data.text"/>
			</div>
		</div>
		<div style="height: 0;width: 0;overflow: hidden;position: fixed;top: 500vh;left: 500vw;">
			<div
				ref="textareaCountLine"
				v-text="data.text.substring(0, searchData.indexes[searchData.index])"
				style="white-space: pre-wrap;overflow-wrap: break-word;padding: 0.5em;width: 100%;border: 1px solid #eee;"/>
		</div>
		<div
			class="container"
			:class="containerClass">
			<textarea
				ref="textarea"
				v-model="data.text"
				:placeholder="props.placeholder"
				class="edit-card"
				@keydown="onKeyDown"
				@keyup="onKeyUp"
				@mousedown="onMouseDown"
				@mouseenter="setHandleScrollFlag('textarea')">
			</textarea>
			<div
				v-show="isFullScreen && isPreview"
				ref="previewCard"
				class="preview-card"
				@mouseenter="setHandleScrollFlag('previewCard')">
				<MarkdownPreview :markdown-text="data.text"></MarkdownPreview>
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
</template>

<script lang="ts">
export default {
	name: 'MarkdownEditor'
}
</script>

<script lang="ts" setup>
import {computed, nextTick, onMounted, PropType, reactive, ref, watch} from "vue";
import {isMobile, vDrag} from "../util/drag";
import {defaultInsertUnits, insertIntoString, getArgsMap} from "../util/insertUnit";
import {InsertUnit} from "../declare/insertUnit";

// 外部传入参数
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
	extraInsertUnits: {
		type: Array as PropType<InsertUnit[]>,
		required: false,
		default: []
	}
})

const emit = defineEmits(['update:modelValue']);

const textarea = ref();
const previewCard = ref();
const floatPreviewCard = ref();

const insertUnits: InsertUnit[] = props.extraInsertUnits.concat(defaultInsertUnits)

const argsMap = getArgsMap(insertUnits);
const changeInputArg = (name: string, e: InputEvent) => {
	argsMap.get(name)!.value = (<HTMLInputElement>e.target).value;
}
const changeSelectArg = (name: string, e: Event) => {
	argsMap.get(name)!.value = (<HTMLSelectElement>e.target).value;
}

class EditTool {
	name: string = "";
	active: boolean = false;
	label: string = "";
	icon: string = "";
	method: Function;

	constructor(name: string, label: string, icon: string, method: Function = () => {
	}) {
		this.name = name;
		this.label = label;
		this.icon = icon;
		this.method = method;
	}

	changeActive() {
		this.active = !this.active;
	}
}

class EditorHistory {
	start: number;
	end: number;
	text: string;
	scrollTop: number;

	constructor(start: number, end: number, text: string, scrollTop: number) {
		this.start = start;
		this.end = end;
		this.text = text;
		this.scrollTop = scrollTop;
	}
}

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

setInterval(setEditData, 100);

// 数据
const data = reactive({
	// 同步滚动条
	handleScrollFlag: "textarea",
	beforeFullScreenTop: 0,

	text: "",
	pushFlag: "",

	// 历史记录相关
	history: <EditorHistory[]>[],
	stackTop: -1,
	replaceFrom: "",
	replaceTo: "",
})

// 工具列表
const editToolList = reactive(<EditTool[]>[
	new EditTool("fullScreen", "全屏/收起全屏", "icon-full-screen", (self: EditTool) => {
		self.changeActive();
	}),
	new EditTool("insert", "快捷插入", "icon-bulletpoint", (self: EditTool) => {
		self.changeActive();
	}),
	new EditTool("replace", "文本查找与替换", "icon-search-list", (self: EditTool) => {
		self.changeActive();
	}),
	new EditTool("preview", "预览", "icon-browse", (self: EditTool) => {
		self.changeActive();
	}),
	new EditTool("redo", "重做", "icon-redo", () => {
		redo();
	}),
	new EditTool("undo", "撤销", "icon-undo", () => {
		pop();
	}),
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

// 核心容器样式类
const containerClass = computed(() => {
	if (!isFullScreen.value) return '';
	if (isPreview.value) return 'edit-preview';
	return 'edit';
})

// 文本插入
const insertIntoTextarea = (insertUnit: InsertUnit) => {
	let start = textarea.value.selectionStart;
	let selectEnd = textarea.value.selectionEnd;
	let text = data.text;
	let end: number;
	const {before, after} = insertUnit.insert(argsMap);
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
	nextTick(() => {
		if (insertUnit.keepSelect) {
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
onMounted(async () => {
	data.text = props.modelValue;
	data.history = [];
	data.stackTop = -1;
	push();

	if (props.startWithFullScreen) {
		isFullScreen.value = true;
		isPreview.value = true;
	}

	await nextTick(() => {
		textarea.value.addEventListener('scroll', () => {
			handleScroll('textarea', textarea.value, previewCard.value);
		});
		previewCard.value.addEventListener('scroll', () => {
			handleScroll('previewCard', previewCard.value, textarea.value);
		});
		textarea.value.addEventListener('scroll', () => {
			handleScroll('textarea', textarea.value, floatPreviewCard.value);
		});
		floatPreviewCard.value.addEventListener('scroll', () => {
			handleScroll('floatPreviewCard', floatPreviewCard.value, textarea.value);
		});
	})
})

watch(() => data.text, () => {
	emit('update:modelValue', data.text);
})

watch(() => isFullScreen.value, async () => {
	if (isFullScreen.value) {
		data.beforeFullScreenTop = document.documentElement.scrollTop;
		isPreview.value = true;
		data.handleScrollFlag = "textarea";
		await nextTick(() => {
			document.body.classList.add("disable-scroll");
			handleScroll('textarea', textarea.value, previewCard.value);
		})
	} else {
		document.body.classList.remove("disable-scroll");
		isPreview.value = false;
		await nextTick(() => {
			document.body.scrollTo(0, data.beforeFullScreenTop);
			handleScroll('textarea', textarea.value, floatPreviewCard.value);
		})
	}
})

// 滚动同步
const handleScroll = (key: string, from: HTMLElement, to: HTMLElement) => {
	if (data.handleScrollFlag !== key) return;
	to.scrollTop = from.scrollTop * (to.scrollHeight - to.offsetHeight) / (from.scrollHeight - from.offsetHeight);
}

const setHandleScrollFlag = (flag: string) => {
	data.handleScrollFlag = flag;
}

// 历史记录
const push = (start: number = textarea.value.selectionStart, end: number = textarea.value.selectionEnd) => {
	if (data.stackTop >= 200) {
		data.history.splice(0, 100);
	}
	data.stackTop++;
	data.history[data.stackTop] = {
		start,
		end,
		text: data.text,
		scrollTop: textarea.value.scrollTop,
	};
}

const replaceTop = (start: number = textarea.value.selectionStart, end: number = textarea.value.selectionStart) => {
	data.history[data.stackTop] = {
		start,
		end,
		text: data.text,
		scrollTop: textarea.value.scrollTop,
	};
}

const clearHistory = () => {
	if (data.stackTop < data.history.length - 1) {
		data.history = data.history.slice(0, data.stackTop + 1);
	}
}

const pop = () => {
	if (data.stackTop >= 1) {
		data.stackTop--;
		const historyTop = data.history[data.stackTop];
		data.text = historyTop.text;
		nextTick(() => {
			textarea.value.selectionStart = historyTop.start;
			textarea.value.selectionEnd = historyTop.end;
			textarea.value.scrollTo(0, historyTop.scrollTop);
		})
	} else {
		alert("无法再次撤销");
	}
}

const redo = () => {
	if (data.stackTop < data.history.length - 1) {
		data.stackTop++;
		let historyTop = data.history[data.stackTop];
		data.text = historyTop.text;
		nextTick(() => {
			textarea.value.selectionStart = historyTop.start;
			textarea.value.selectionEnd = historyTop.end;
			textarea.value.scrollTo(0, historyTop.scrollTop);
		})
	} else {
		alert("已是最新，无法重做");
	}
}

// 文本编辑
// 键盘按下事件
const onKeyDown = (e: KeyboardEvent) => {
	if (e.ctrlKey) {
		if (e.key == 'x' || e.key == 'X') {
			data.pushFlag = "cut";
			setTimeout(push, 200);
		} else if (e.key == 'v' || e.key == 'V') {
			data.pushFlag = "copy";
			setTimeout(push, 200);
		} else if (e.key == 'z' || e.key == 'Z') {
			e.preventDefault();
			data.pushFlag = "symbol";
			if (e.key == 'z') {
				pop();
			} else {
				redo();
			}
		} else if (e.key == 'r' || e.key == 'R') {
			e.preventDefault();
			if (e.key == 'r') {
				data.pushFlag = "symbol";
				data.replaceFrom = data.text.slice(textarea.value.selectionStart, textarea.value.selectionEnd);
				isReplace.value = true;
			} else {
				isReplace.value = false;
			}
		} else {
			for (let i = 0; i < insertUnits.length; i++) {
				if (insertUnits[i].key == e.key) {
					e.preventDefault();
					data.pushFlag = "symbol";
					insertIntoTextarea(insertUnits[i]);
					break;
				}
			}
		}
	} else {
		if (e.key == 'Enter') {
			e.preventDefault();
			data.pushFlag = "blank";
			batchEnter();
		} else if (e.key == 'Ctrl' || e.key == 'Shift' || e.key.startsWith("Arrow") || e.key == 'Enter' || e.key == ' ') {
			return;
		} else if (e.key == 'Escape') {
			if (isFullScreen.value) {
				isFullScreen.value = false;
			}
		} else if (e.key == 'Tab') {
			e.preventDefault();
			data.pushFlag = "blank";
			batchKeydown(e, '\t');
		} else if (e.key == '(' || e.key == '[' || e.key == '{') {
			e.preventDefault();
			data.pushFlag = "symbol";
			let after = "";
			switch (e.key) {
				case "(":
					after = ")";
					break;
				case "[":
					after = "]";
					break;
				case "{":
					after = "}";
					break;
			}
			insertAroundText({before: e.key, after});
		} else if (textarea.value.selectionEnd != textarea.value.selectionStart && (e.key == '"' || e.key == "'")) {
			e.preventDefault();
			data.pushFlag = "symbol";
			let after = "";
			switch (e.key) {
				case "'":
					after = "'";
					break;
				case '"':
					after = '"';
					break;
			}
			insertAroundText({before: e.key, after});
		} else {
			if (data.pushFlag != 'input') {
				clearHistory();
			}
			setTimeout(() => {
				changeFlag("input");
			}, 100);
		}
	}
}

// 键盘抬起事件
const onKeyUp = (e: KeyboardEvent) => {
	if (e.key == 'Enter' || e.key == ' ') {
		changeFlag("blank");
	} else if (e.key.startsWith("Arrow")) {
		changeFlag("jump");
	}
}

// 鼠标按下事件
const onMouseDown = () => {
	setTimeout(() => {
		changeFlag("jump");
	}, 100);
}

// 报持历史操作一致性的触发器，根据输入标志符是否改变判断是否压入历史栈
const changeFlag = (flag: string) => {
	if (data.pushFlag != flag) {
		data.pushFlag = flag;
		push();
	} else {
		replaceTop();
	}
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
				push(start, start);
			})
		} else {
			const temp = data.text.slice(start, end);
			const newTemp = temp.replace(insertString, '').replaceAll('\n' + insertString, '\n');
			if (temp.length == newTemp.length) return;
			data.text = data.text.slice(0, start) + newTemp + data.text.slice(start + temp.length);
			nextTick(() => {
				textarea.value.selectionStart = start;
				textarea.value.selectionEnd = start + newTemp.length;
				push(start, textarea.value.selectionEnd);
			})
		}
	} else {
		if (textarea.value.selectionStart == textarea.value.selectionEnd) {
			data.text = insertIntoString(insertString, data.text, textarea.value.selectionStart);
			nextTick(() => {
				textarea.value.selectionStart = start + 1;
				textarea.value.selectionEnd = start + 1;
				push(start + 1, start + 1);
			})
		} else {
			const temp = data.text.slice(start, textarea.value.selectionEnd);
			const newTemp = insertString + temp.replaceAll('\n', '\n' + insertString);
			if (temp.length == newTemp.length) return;
			data.text = data.text.slice(0, start) + newTemp + data.text.slice(start + temp.length);
			nextTick(() => {
				textarea.value.selectionStart = start;
				textarea.value.selectionEnd = start + newTemp.length;
				push(start, textarea.value.selectionEnd);
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

watch(() => data.replaceFrom, () => {
	setSearchData();
	if (!isReplace) return;
	if (data.replaceFrom.length <= 0) return;
	searchCurrent();
})

watch(() => data.text, () => {
	setSearchData();
})

watch(() => isReplace.value, () => {
	setSearchData();
})

watch(() => isPreview.value, () => {
	setSearchData();
	isReplace.value = false;
})

watch(() => isFullScreen.value, () => {
	setSearchData();
	isReplace.value = false;
})


const setSearchData = () => {
	searchData.index = -1;
	searchData.indexes = [];
	if (textarea.value == undefined) return;
	textareaCountLine.value.style.width = textarea.value.scrollWidth + 'px';

	if (data.replaceFrom.length <= 0) return;
	if (data.text.length <= 0) return;

	let index = data.text.indexOf(data.replaceFrom, 0);
	let count = 0;
	while (index >= 0) {
		let temp = data.text.indexOf(data.replaceFrom, index);
		if (temp < 0) break;
		if (textarea.value.selectionStart == temp && textarea.value.selectionEnd - textarea.value.selectionStart == data.replaceFrom.length) {
			searchData.index = count;
		}
		searchData.indexes.push(temp);
		index = temp + data.replaceFrom.length;
		count++;
	}
}

// 控制 textarea 进行跳转
const jumpTo = (target: number) => {
	textarea.value.scrollTop = target;
}

const searchCurrent = () => {
	setTimeout(() => {
		jumpTo(textareaCountLine.value.scrollHeight - textarea.value.clientHeight / 2.4);
		textarea.value.selectionStart = searchData.indexes[searchData.index];
		textarea.value.selectionEnd = searchData.indexes[searchData.index] + data.replaceFrom.length;
	}, 50)
}

const searchPrevious = () => {
	if (textarea.value == undefined) return;

	if (searchData.index > 0) {
		searchData.index--;
	}

	setTimeout(() => {
		jumpTo(textareaCountLine.value.scrollHeight - textarea.value.clientHeight / 2.4);
		textarea.value.focus();
		textarea.value.selectionStart = searchData.indexes[searchData.index];
		textarea.value.selectionEnd = searchData.indexes[searchData.index] + data.replaceFrom.length;
	}, 50)
}

const searchNext = () => {
	if (textarea.value == undefined) return;

	if (searchData.index < searchData.indexes.length - 1) {
		searchData.index++;
	}

	setTimeout(() => {
		jumpTo(textareaCountLine.value.scrollHeight - textarea.value.clientHeight / 2.4);
		textarea.value.focus();
		textarea.value.selectionStart = searchData.indexes[searchData.index];
		textarea.value.selectionEnd = searchData.indexes[searchData.index] + data.replaceFrom.length;
	}, 50)
}

const replaceOne = () => {
	if (data.text.slice(textarea.value.selectionStart, textarea.value.selectionEnd) == data.replaceFrom) {
		data.text = data.text.slice(0, textarea.value.selectionStart) + data.replaceTo + data.text.slice(textarea.value.selectionEnd);
		push();
	}
}

const replaceAll = () => {
	if (data.replaceFrom.length <= 0) {
		alert("替换文本不可为空");
	} else {
		data.text = data.text.replaceAll(data.replaceFrom, data.replaceTo);
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

.disable-scroll {
	overflow: hidden;

	> ::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
}

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
	> .edit-card {
		width: 100%;
		height: calc(100% - 4em);
		border: 1px solid #eee;
		padding-bottom: 4em;
	}
}

.editor.full {
	&.pc > .container {
		padding-left: 0.5%;
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
			height: calc(100vh - 4em);
			background-color: white;
			padding-bottom: 50vh;
		}
	}

	&.mobile > .container {
		height: calc(99% - 4em);
		padding-left: 0.5%;
		display: grid;

		&.edit-preview {
			grid-template-rows: 49.5% 49%;
			grid-gap: 0.5%;
		}

		&.edit {
			grid-template-rows: 99%;
		}

		> .edit-card,
		> .preview-card {
			background-color: white;
		}
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

	.floating-card.preview-card {
		background-color: #fff;
		border: #aaa 1px solid;
		cursor: all-scroll;
		padding: 0.5em;
		overflow: hidden;

		> .container {
			min-height: 20em;
			width: 35em;
			max-width: 80vw;
			max-height: 60vh;
			margin-top: 1em;
			padding-bottom: 3em;
			overflow: auto;
			border: #eee 1px solid;
		}
	}

	.floating-card.tool-menu {
		background-color: var(--back-ground-color);
		user-select: none;
		padding: 1em 0.5em;
		font-size: 0.8em;
		cursor: all-scroll;
		min-width: 20em;
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

.editor {
	.replace-box {
		padding-top: 2em;

		> textarea {
			height: 4em;
			margin-right: 0.5em;
			width: 100%;
			border: 1px solid #e5e5e5;
			padding: 0.5em;
		}
	}
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