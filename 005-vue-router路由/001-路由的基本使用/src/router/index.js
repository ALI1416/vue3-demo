import {createRouter, createWebHashHistory} from 'vue-router'

// 导入路由组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 定义路由信息
const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
]

// 路由配置
const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes,
})

export default router
