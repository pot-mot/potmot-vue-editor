<template>
	<div :class="[isFullScreen?'full':'non-full']" class="editor"
		 :style="'line-height: ' + props.lineHeight + 'px;'">
		<ul class="toolbar">
			<li v-for="tool in editToolList">
				<span
					@mousedown.prevent.stop="tool.method(tool)"
					:title="tool.label"
					class="iconfont"
					:class="[
						tool.active ? 'chosen' : '',
						tool.icon,
					]"/>
			</li>
		</ul>
		<div v-show="getEditToolActive('insert')" class="floating-card tool-menu" v-drag>
			<span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('insert', false)"/>
			<template v-for="item in insertTextList">
				<span class="insert-text">
					<span class="hover-color-blue" @mousedown.prevent.stop="insertToText(item)">
						{{ item.label + '[' + item.key + ']' }}
					</span>
					<template v-if="item.name === 'title'">
						<label>级别</label>
						<input v-model="insertTextParams.titleLevel" type="number">
					</template>
					<template v-else-if="item.name === 'form'">
						<label>行数</label>
						<input v-model="insertTextParams.tableWidth" type="number">
						<label>列数</label>
						<input v-model="insertTextParams.tableHeight" type="number">
					</template>
					<template v-else-if="item.name === 'list'">
						<label>项数</label>
						<input v-model="insertTextParams.listLength" type="number">
						<label>首项</label>
						<input v-model="insertTextParams.listStart" type="number">
					</template>
					<template v-else-if="item.name === 'code'">
						<label>语言</label>
						<input v-model="insertTextParams.codeLanguage" style="width: 6em;" type="text">
					</template>
					<template v-else-if="item.name === 'warning'">
						<label>颜色</label>
						<input v-model="insertTextParams.warningColor" style="width: 6em;" type="text">
					</template>
				</span>
				<br/>
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
				<span> {{searchData.index + 1}}/{{searchData.indexes.length}} </span>
				<span class="hover-color-blue" @mousedown.prevent.stop="replaceOne">替换选中</span>
				<span class="hover-color-blue" @mousedown.prevent.stop="replaceAll">替换全部</span>
			</div>
		</div>
		<div
			v-show="getEditToolActive('preview') && !isFullScreen"
			class="floating-card show-card"
			v-drag
			@mouseenter="setHandleScrollFlag('floatShowCard')">
			<span class="iconfont icon-close" @mousedown.prevent.stop="setEditToolActive('preview', false)"/>
			<div class="container" ref="floatShowCard">
				<MarkdownCard :markdown-text="data.text"/>
			</div>
		</div>
		<textarea
			ref="textarea"
			v-model="data.text"
			:placeholder="props.placeholder"
			class="edit-card"
			:class="[!isPreview && isFullScreen ? 'full-width' : '']"
			@keydown="onKeyDown"
			@keyup="onKeyUp"
			@mousedown="onMouseDown"
			@mouseenter="setHandleScrollFlag('textarea')"/>
		<div style="height: 0;width: 0;overflow: hidden;position: fixed;top: 500vh;left: 500vw;">
			<div
				ref="textareaCountLine"
				v-text="data.text.substring(0, searchData.indexes[searchData.index])"
				style="white-space: pre-wrap;overflow-wrap: break-word;padding: 0.5em;width: 100%;border: 1px solid #eee;"/>
		</div>

		<div
			v-show="isPreview && isFullScreen"
			ref="showCard"
			class="show-card"
			@mouseenter="setHandleScrollFlag('showCard')">
			<MarkdownCard :markdown-text="data.text"/>
		</div>
		<ul class="statistical-list" v-if="textarea !== undefined">
			<li>字数 {{ data.text.length }}</li>
			<li>
				{{ statisticalData.startLineNumber.y + 1 }}:{{ statisticalData.startLineNumber.x }}
				<template v-if="statisticalData.selectLength > 0">
					至 {{ statisticalData.endLineNumber.y + 1 }}:{{ statisticalData.endLineNumber.x }}
				</template>
			</li>
			<li>选中 {{ statisticalData.selectLength }}</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, reactive, ref, watch} from "vue";
import MarkdownCard from "./MarkdownCard.vue";

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

class InsertTool {
	name: string;
	key: string;
	label: string;
	method: () => InsertText;
	replace: boolean;
	keepSelect: boolean;

	constructor(name: string, key: string, label: string, method: () => InsertText, replace: boolean = false, keepSelect: boolean = false) {
		this.name = name;
		this.key = key;
		this.label = label;
		this.method = method;
		this.replace = replace;
		this.keepSelect = keepSelect;
	}
}

class InsertText {
	before: string;
	after: string;

	constructor(before: string = "", after: string = "") {
		this.before = before;
		this.after = after;
	}
}

const vDrag = {
	mounted(el: HTMLDivElement) {
		el.onmousedown = (e) => {
			if (e.target != el) return;
			e.preventDefault();

			// 鼠标按下的位置
			const mouseXStart = e.clientX;
			const mouseYStart = e.clientY;
			// 当前滑块位置
			const rectLeft = el.offsetLeft;
			const rectTop = el.offsetTop;
			document.onmousemove = (e) => {
				// 鼠标移动的位置
				const mouseXEnd = e.clientX;
				const mouseYEnd = e.clientY;
				const moveX = mouseXEnd - mouseXStart + rectLeft;
				const moveY = mouseYEnd - mouseYStart + rectTop;
				el.style.top = moveY + "px";
				el.style.left = moveX + "px";
			};
			document.onmouseup = () => {
				document.onmousemove = null;
			};
		}
	}
}

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
	lineHeight: {
		type: Number,
		required: false,
		default: 25.6,
	}
})

const emit = defineEmits(['update:modelValue']);

const textarea = ref();
const showCard = ref();
const floatShowCard = ref();

const statisticalData = reactive({
	selectLength: 0,
	startLineNumber: {x: 0, y: 0},
	endLineNumber: {x: 0, y: 0},
})

const setEditData = () => {
	if (textarea.value) {
		statisticalData.startLineNumber = getPlace(textarea.value.selectionStart, data.text);
		statisticalData.endLineNumber = getPlace(textarea.value.selectionEnd, data.text);
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

const insertTextParams = reactive({
	tableWidth: 3, tableHeight: 2,
	titleLevel: 3,
	listLength: 3, listStart: 1,
	codeLanguage: "bash",
	warningColor: "red",
})

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

// 展示列表
const insertTextList: InsertTool[] = reactive([
	new InsertTool("title", '#', "标题", () => {
		insertTextParams.titleLevel = limit(insertTextParams.titleLevel, 1, 5);

		let returnText = ""
		for (let i = 0; i < insertTextParams.titleLevel; i++) {
			returnText += "#";
		}

		return new InsertText(returnText + " ")
	}),
	new InsertTool("code", '`', "代码块", () => {
		return new InsertText("```" + insertTextParams.codeLanguage + "\n", "\n```",);
	}),
	new InsertTool("form", '|', "表格", () => {
		let formLineText = "|";
		let formFormatText = "|";
		let whiteSpace = "  ";

		insertTextParams.tableHeight = limit(insertTextParams.tableHeight, 1, 99);
		insertTextParams.tableWidth = limit(insertTextParams.tableWidth, 1, 15);

		for (let i = 0; i < insertTextParams.tableHeight; i++) {
			formLineText += (whiteSpace + "|");
			formFormatText += " --- |";
		}
		formLineText += "\n";
		formFormatText += "\n";

		let returnText = formLineText.slice(2) + formFormatText;

		for (let i = 0; i < insertTextParams.tableWidth; i++) {
			returnText += formLineText;
		}

		return new InsertText("| ", returnText);
	}),
	new InsertTool("list", '%', "列表", () => {
		insertTextParams.listLength = limit(insertTextParams.listLength, 1, 99);
		insertTextParams.listStart = limit(insertTextParams.listStart, 0, 10000);
		let returnText = "\n";
		for (let i = 0; i < insertTextParams.listLength - 1; i++) {
			returnText += (i + insertTextParams.listStart + 1) + ". \n";
		}
		return new InsertText(insertTextParams.listStart + ". 列表文本", returnText)
	}),
	new InsertTool("break", 'Enter', "换行", () => {
		return new InsertText("<br>");
	}),
	new InsertTool("link", '@', "链接", () => {
		return new InsertText("[](", ")");
	}),
	new InsertTool("quote", '>', "引用", () => {
		return new InsertText(">  \n", "\n");
	}),
	new InsertTool("warning", '!', "标亮", () => {
		return new InsertText("<span style='color: " + insertTextParams.warningColor + ";'>", "</span>");
	}),
])

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
			handleScroll('textarea', textarea.value, showCard.value);
		});
		showCard.value.addEventListener('scroll', () => {
			handleScroll('showCard', showCard.value, textarea.value);
		});
		textarea.value.addEventListener('scroll', () => {
			handleScroll('textarea', textarea.value, floatShowCard.value);
		});
		floatShowCard.value.addEventListener('scroll', () => {
			handleScroll('floatShowCard', floatShowCard.value, textarea.value);
		});
	})
})

const insertIntoString = (inserter: string, target: string, start: number, end: number = start): string => {
	return target.slice(0, start) + inserter + target.slice(end);
}

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
			handleScroll('textarea', textarea.value, showCard.value);
		})
	} else {
		document.body.classList.remove("disable-scroll");
		isPreview.value = false;
		await nextTick(() => {
			document.body.scrollTo(0, data.beforeFullScreenTop);
			handleScroll('textarea', textarea.value, floatShowCard.value);
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
const onKeyDown = (e: KeyboardEvent) => {
	if (e.ctrlKey) {
		if (e.key == 'x') {
			data.pushFlag = "cut";
			setTimeout(push, 50);
		} else if (e.key == 'v') {
			data.pushFlag = "copy";
			setTimeout(push, 50);
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
			for (let i = 0; i < insertTextList.length; i++) {
				if (insertTextList[i].key == e.key) {
					e.preventDefault();
					data.pushFlag = "symbol";
					insertToText(insertTextList[i]);
					break;
				}
			}
		}
	} else {
		if (e.key == 'Ctrl' || e.key == 'Shift' || e.key.startsWith("Arrow") || e.key == 'Enter' || e.key == ' ') {
			return;
		} else if (e.key == 'Escape') {
			if (isFullScreen.value) {
				isFullScreen.value = false;
			}
		} else if (e.key == 'Tab') {
			e.preventDefault();
			data.pushFlag = "blank";
			batchKeydown(e, '\t');
		} else if (e.key == '(' || e.key == '[' || e.key == '{' || e.key == '"' || e.key == "'") {
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

const onKeyUp = (e: KeyboardEvent) => {
	if (e.key == 'Enter' || e.key == ' ') {
		changeFlag("blank");
	} else if (e.key.startsWith("Arrow")) {
		changeFlag("jump");
	}
}

const onMouseDown = () => {
	setTimeout(() => {
		changeFlag("jump");
	}, 100);
}

const changeFlag = (flag: string) => {
	if (data.pushFlag != flag) {
		data.pushFlag = flag;
		push();
	} else {
		replaceTop();
	}
}

// 根据函数触发添加至文本中
const insertToText = (editItem: InsertTool) => {
	let start = textarea.value.selectionStart;
	let selectEnd = textarea.value.selectionEnd;
	let text = data.text;
	let end: number;
	const {before, after} = editItem.method();
	if (editItem.replace) {
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
		if (editItem.keepSelect) {
			textarea.value.selectionStart = start;
			textarea.value.selectionEnd = end + after.length;
		} else {
			textarea.value.selectionStart = start + before.length;
			textarea.value.selectionEnd = start + before.length;
		}
		push();
	})
}

const insertAroundText = (insertText: InsertText) => {
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


// 查找与替换
let textareaCountLine = ref();

const searchData = reactive({
	index: 0,
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
	searchData.index = 0;
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
		count ++;
	}
}

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
		searchData.index --;
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
		searchData.index ++;
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

const getPlace = (start: number, text: string): { x: number, y: number } => {
	let x = 0;
	for (let i = start - 1; i > 0; i--) {
		if (text[i] == '\n') {
			break;
		}
		x++;
	}
	let y = 0;
	for (let i = start - 1; i > 0; i--) {
		if (text[i] == '\n') {
			y++;
		}
	}
	return {x, y};
}

const limit = (input: number, min: number, max: number): number => {
	if (input > max) return max;
	if (input < min) return min;
	return input;
}
</script>

<style>
.disable-scroll {
	overflow: hidden;
}

.disable-scroll > ::-webkit-scrollbar {
	width: 0;
	height: 0;
}

.editor {
	--back-ground-color: #f5f5f5;
	padding: 0;
	margin: 0;
}

.editor * {
	box-sizing: border-box;
	margin: 0;
	cursor: default;
}

.editor ul,
.editor ol {
	padding: 0;
}

.editor li {
	list-style: none;
}

.editor input,
.editor textarea {
	outline: none;
	resize: none;
	border: none;
	border-radius: 0;
	font-family: inherit;
	cursor: text;
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
	overflow-x: auto;
	overflow-y: hidden;
	z-index: 10;
	background-color: var(--back-ground-color);
	white-space: nowrap;
}

.editor > .show-card,
.editor > .edit-card {
	display: block;
	padding: 0.5em;
	overflow: auto;
	tab-size: 4;
	font-size: 1em;
	border-radius: 3px;
	line-height: inherit;
	font-family: inherit;
}

.editor.non-full > .edit-card {
	width: 100%;
	height: calc(100% - 3rem);
	overflow-x: hidden;
	overflow-y: scroll;
	border: 1px solid #eee;
}

.editor.full > .edit-card,
.editor.full > .show-card {
	display: inline-block;
	vertical-align: top;
	width: 49%;
	min-width: 40em;
	margin-left: 0.65%;
	tab-size: 4;
	height: calc(100vh - 4em);
	background-color: white;
	padding-bottom: 50vh;
}

.editor.full > .edit-card.full-width {
	width: 98.5%;
}

.editor > .toolbar {
	vertical-align: middle;
	padding: 0;
	margin: 0;
}

.editor > .toolbar > li {
	position: relative;
}

.editor.full > .toolbar {
	margin-left: 0.5em;
}

.editor .floating-card {
	z-index: 11;
	position: absolute;
}

.editor .floating-card.show-card {
	background-color: #fff;
	border: #aaa 1px solid;
	cursor: all-scroll;
	padding: 0.2em 0.5em 0 0.5em;
	overflow-x: hidden;
}

.editor .floating-card.show-card > .container {
	min-height: 20em;
	min-width: 20em;
	max-height: 60vh;
	max-width: 60vw;
	margin-top: 1em;
	padding-bottom: 3em;
	overflow: auto;
}

.editor .floating-card.tool-menu {
	background-color: var(--back-ground-color);
	user-select: none;
	padding: 0.5em;
	font-size: 0.8em;
	cursor: all-scroll;
	min-width: 20em;
	line-height: 1.6em;
	border: 1px solid #ccc;
}

.editor .floating-card .icon-close {
	position: absolute;
	top: 0;
	right: 0;
	font-size: 0.8rem;
	color: #aaa;
}

.editor .floating-card .icon-close:hover {
	color: #D00;
}

.editor .replace-box {
	padding-top: 2em;
}

.editor .replace-box > textarea {
	height: 4em;
	margin-right: 0.5em;
	width: 100%;
	border: 1px solid #e5e5e5;
	padding: 0.5em;
}

.editor .insert-text {
	display: inline-block;
	font-size: 0.9em;
}

.editor .insert-text > span {
	display: inline-block;
	min-width: 5em;
	padding: 0.2em;
	cursor: default;
}

.editor .insert-text > input {
	margin-left: 0.5em;
	width: 4em;
}

.editor ul.toolbar {
	cursor: auto;
}

.editor ul.toolbar > li {
	display: inline-block;
	font-size: 0.9rem;
	padding-right: 0.5rem;
}

.editor ul.toolbar > li > span.iconfont:before {
	color: #999;
}

.editor ul.toolbar > li > span.iconfont:hover:before {
	color: #7a7a7a;
	background-color: #eee;
}

.editor ul.toolbar > li > span.iconfont.chosen:before {
	color: #fff;
	background-color: #bcbcbc;
}

.editor .hover-color-blue:hover {
	color: #4f92ff;
}

.editor ul.statistical-list > li {
	display: inline-block;
	padding: 0 0.5em;
	font-size: 0.9em;
	color: #333;
}
</style>