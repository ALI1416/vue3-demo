import {createApp} from 'vue'
import App from './App.vue'
// 导入路由
import Router from './router/index.js'

// 使用use来使用路由
createApp(App).use(Router).mount('#app')
