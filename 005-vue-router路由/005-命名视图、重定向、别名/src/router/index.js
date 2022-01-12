import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Main from '../components/Main.vue'

const routes = [
  {
    name: 'main',
    path: '/',
    // 同级页面展示多个视图，需要多个组件(components有s)
    components: {
      // router-view没有名字时，取default
      default: Main,
      // 视图显示此页面，需要name相同
      home: Home,
      About
    }
  },
  {
    name: 'home',
    path: '/home',
    // 别名
    alias: '/home1',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    // 多个别名
    alias: ['/a1', '/a2'],
    component: About
  },
  {
    path: '/about1',
    // 重定向到指定路径
    redirect: '/about'
  },
  {
    path: '/about2',
    // 重定向到指定名称
    redirect: {name: 'about'}
  },
  {
    path: '/about3/:id',
    // 重定向方法
    redirect: to => {
      return {name: 'about', query: {id: to.params.id}}
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
