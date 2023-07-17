<template>
    <div style="height: 120vh;width: 60vw;padding-top: 50vh;margin: auto;line-height: 1.6em;">
        <div style="height: 60vh;position: relative">
            <MarkdownEditor v-model="text" :start-with-full-screen="true">
            </MarkdownEditor>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import '../../asserts/code.css'
import '../../asserts/markdown.css'
import '../../asserts/code-theme/potmot-light.css'

import MarkdownEditor from "../../components/MarkdownEditor.vue";

const text = ref(`




![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)
![测试用的风景照](https://th.bing.com/th/id/R.a17e13d0b5350a2bfa3c8d09fad6722e?rik=VsvdqtKFAOLnEQ&pid=ImgRaw&r=0)


`)

</script>

