import {createApp} from 'vue'
import App from './App.vue'
import store from "./store";

// 挂载store
createApp(App).use(store).mount('#app')
