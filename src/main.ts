import {createApp} from 'vue'
import App from './App.vue'

import './assets/iconfont/iconfont.css'
import './assets/code/code.css'

import editor from "./index"

createApp(App)
    .use(editor)
    .mount('#app')
