import {createApp} from 'vue'
import App from './App.vue'
// 国际化：中文 导入的包
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 国际化：中文
createApp(App).use(ElementPlus, {locale: zhCn,}).mount('#app')
// createApp(App).mount('#app')
