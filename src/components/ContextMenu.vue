<script setup lang="ts">
import {vDrag} from "../util/drag";
import {nextTick, PropType, reactive, ref, watch} from "vue";

const contextMenu = ref()

const status = reactive({
    visible: false,
})

const props = defineProps({
    width: {
        type: String,
        required: false,
        default: '160px',
    },
    height: {
        type: String,
        required: false,
        default: 'auto',
    },
    position: {
        type: Object as PropType<Position>,
        required: false,
        default: {top: 0, left: 0},
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

watch(() => props.visible, () => {
    if (props.visible) {
        status.visible = props.visible
        nextTick(() => {
            resetPosition()
        })
    }
})

const hide = () => {
    status.visible = false
}

const resetPosition = () => {
    if (props.resetPosition && contextMenu.value && contextMenu.value instanceof HTMLElement && props.position) {
        if (props.position.top) contextMenu.value.style.top = props.position.top
        if (props.position.left) contextMenu.value.style.left = props.position.left
        if (props.position.right) contextMenu.value.style.right = props.position.right
        if (props.position.bottom) contextMenu.value.style.bottom = props.position.bottom
    }
}

</script>

<template>
    <div v-show="status.visible"
         :style="{...props.position, width: props.width, height: props.height}"
         class="context-menu"
         ref="contextMenu"
         v-drag>
        <span class="iconfont icon-close" @mousedown.prevent.stop="hide"/>
        <div v-if="props.title && props.title.length > 0" class="title">{{ props.title }}</div>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.context-menu {
    position: absolute;

    > .icon-close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.8rem;
        color: #aaa;
    }

    > .icon-close:hover {
        color: #D00;
    }

    > .title {
        font-weight: 600;
    }
}
</style>