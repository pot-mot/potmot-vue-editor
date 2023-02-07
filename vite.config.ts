import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {prismjsPlugin} from "vite-plugin-prismjs";

export default defineConfig({
    plugins: [
        vue(),
        prismjsPlugin({
            languages: ['javascript','typescript','cpp','c','csharp','bash','go','rust','css','git','json','java','nginx','sql','vim','yaml','yml','html'],
            css: false,
        }),
    ],
    base: "./"
})
