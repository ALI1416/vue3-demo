import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
// 全部样式表
import 'element-plus/dist/index.css'
// 国际化：中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(ElementPlus, {
    locale: zhCn
}).mount('#app')
