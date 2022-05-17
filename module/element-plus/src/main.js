import {createApp} from 'vue'
import App from './App.vue'
// element-plus全部导入，打包后1100k+
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 默认英语，导入汉语包
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(ElementPlus, {locale: zhCn}).mount('#app')
