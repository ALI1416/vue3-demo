import {createApp} from 'vue'
import App from './App.vue'
// 导入pinia
import {createPinia} from "pinia";

createApp(App).use(createPinia()).mount('#app')
