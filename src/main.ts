import {createApp} from 'vue'
import App from './App.vue'

import editor from "./index"

createApp(App)
    .use(editor)
    .mount('#app');
