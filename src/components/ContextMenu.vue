<script setup lang="ts">
import {vDrag} from "../util/directive/drag";
import {nextTick, onMounted, PropType, reactive, ref, watch} from "vue";

const contextMenu = ref()

const status = reactive({
    visible: true,
})

const props = defineProps({
    position: {
        type: Object as PropType<Position>,
        required: false,
        default: {top: 0, left: 0, zIndex: 1000},
    },
    dragRange: {
        type: Object as PropType<PositionRange>,
        required: false,
    },
    visible: {
        type: Boolean,
        required: false,
        default: true
    },
    title: {
        type: String,
        required: false,
        default: ''
    },
    resetPosition: {
        type: Boolean,
        required: false,
        default: true
    }
})

onMounted(() => {
    setPosition()
})

watch(() => props.visible, () => {
    if (props.visible != status.visible) {
        status.visible = props.visible
        nextTick(() => {
            setPosition()
        })
    }
}, {immediate: true})

const hide = () => {
    status.visible = false
}

const setPosition = () => {
    if (props.resetPosition && contextMenu.value && contextMenu.value instanceof HTMLElement && props.position) {
        if (props.position.top != undefined) {
            contextMenu.value.style.top = props.position.top
        } else {
            contextMenu.value.style.top = 'auto'
        }

        if (props.position.left != undefined) {
            contextMenu.value.style.left = props.position.left
        } else {
            contextMenu.value.style.left = 'auto'
        }

        if (props.position.right != undefined) {
            contextMenu.value.style.right = props.position.right
        } else {
            contextMenu.value.style.right = 'auto'
        }

        if (props.position.bottom != undefined) {
            contextMenu.value.style.bottom = props.position.bottom
        } else {
            contextMenu.value.style.bottom = 'auto'
        }
    }
}

</script>

<template>
    <div v-show="status.visible"
         class="context-menu"
         ref="contextMenu"
         v-drag="props.dragRange">
        <div class="close">
            <slot name="close" :close="hide">
                <span @mousedown.prevent.stop="hide">关闭</span>
            </slot>
        </div>
        <div class="title" v-if="props.title && props.title.length > 0">
            <slot name="title" :title="props.title">
                <div>{{ props.title }}</div>
            </slot>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.context-menu {
    position: absolute;
    padding: 0.5em;
    user-select: none;
    cursor: all-scroll;
    background-color: #fff;

    > .close {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    > .title {
        pointer-events: none;
        font-weight: 600;
    }
}
</style>