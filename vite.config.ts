import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {prismjsPlugin} from "vite-plugin-prismjs";

// @ts-ignore
import {languageList} from "./src/constant/LanguageList";

export default defineConfig({
    plugins: [
        vue(),
        prismjsPlugin({
            languages: languageList,
            css: false,
        }),
    ],
    base: "./"
})
