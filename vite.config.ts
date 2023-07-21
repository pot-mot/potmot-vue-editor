import {defineConfig} from 'vite'

import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// import dts from 'vite-plugin-dts'

// 代码上色
import {prismjsPlugin} from "vite-plugin-prismjs"

export default defineConfig({
    build: {
        assetsDir: "assets",
        // 如果需要打包成lib文件取消注释即可
        // --- 从这里开始 ---
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: "potmot-vue-editor",
            fileName: "potmot-vue-editor"
        },
        rollupOptions: {
            external: ['vue', new RegExp('/src/test/.*')],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
        // --- 到此为止 ---
    },

    plugins: [
        vue(),
        // dts(),
        prismjsPlugin({
            languages: [
                'javascript', 'typescript',
                'css', 'css-extras', 'html', 'less', 'sass', 'scss',
                'svg', 'icon',
                'markup', "markdown", "md",
                'http', 'uri', 'url',
                'c', 'cpp', 'cmake', 'objc',
                'rust',
                'go',
                'php', 'phpdoc',
                'perl',
                'java', 'javadoc', 'groovy', 'kotlin', 'kt', 'kts', 'scala',
                'latex', 'tex', 'matlab',
                'sql', 'graphql', 'mongodb',
                'erlang',
                'lua',
                'python', 'py', 'django', 'jinja2',
                'csharp', 'dotnet',
                'cobol',
                'makefile',
                'json', 'json5', 'jsonp',
                'xml', 'yaml', 'yml', 'ini', 'toml',
                'bash', 'shell', 'batch',
                'docker', 'dockerfile',
                'git',
                'vim',
                'dns-zone',
                'log',
                'qml',
                'scheme',
                'swift'
            ],
            css: false,
        }),
    ],
    base: "./"
})
