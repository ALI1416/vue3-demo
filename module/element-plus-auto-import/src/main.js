import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 全局中文
createApp(App).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
