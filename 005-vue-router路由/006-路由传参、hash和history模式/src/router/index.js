import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Main from "../components/Main.vue";

const routes = [
  {
    name: 'main',
    path: '/',
    components: {
      default: Main,
      home: Home,
      About
    },
    // 命名视图，必须定义每一个props
    props: {default: false, home: false, About: true}
  },
  {
    path: '/home',
    component: Home,
    // 函数模式，访问/home?id=aaa时，通过props传递id
    props: route => ({id: route.query.id})
  },
  {
    path: '/about/:id',
    component: About,
    // 使用props来传递$route.params的值
    props: true
  },
]

const router = createRouter({
  // 使用history模式(推荐)
  history: createWebHistory(),
  routes,
})
export default router
