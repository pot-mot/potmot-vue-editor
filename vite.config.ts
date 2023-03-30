import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {prismjsPlugin} from "vite-plugin-prismjs"
import dts from 'vite-plugin-dts'
import {resolve} from 'path'

// @ts-ignore
import {languageList} from "./src/constant/LanguageList";

export default defineConfig({
    // 如果需要打包成lib文件取消注释即可
    // build: {
    //     lib: {
    //         entry: resolve(__dirname, 'src/index.ts'),
    //         name: "potmot-vue-editor",
    //         fileName: "potmot-vue-editor"
    //     },
    //     rollupOptions: {
    //         external: ['vue'],
    //         output: {
    //             globals: {
    //                 vue: 'Vue'
    //             }
    //         }
    //     }
    // },

    plugins: [
        vue(),
        dts(),
        prismjsPlugin({
            languages: languageList,
            css: false,
        }),
    ],
    base: "./"
})
