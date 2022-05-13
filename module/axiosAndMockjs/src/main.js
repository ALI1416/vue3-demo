import {createApp} from 'vue'
import App from './App.vue'
// mock需要导入后才能运行
import './mock/index.js'

createApp(App).mount('#app')
