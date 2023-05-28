import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {prismjsPlugin} from "vite-plugin-prismjs"
import {resolve} from 'path'

export default defineConfig({
    // 如果需要打包成lib文件取消注释即可
    build: {
        assetsDir: "assets",
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: "potmot-vue-editor",
            fileName: "potmot-vue-editor"
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },

    plugins: [
        vue(),
        // dts(),
        prismjsPlugin({
            languages: [
                'javascript', 'typescript',
                'css', 'css-extras', 'html', 'less', 'sass', 'scss',
                'svg', 'icon',
                'markup',
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
