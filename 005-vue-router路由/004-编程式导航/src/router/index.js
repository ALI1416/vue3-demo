import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    // 给路由起名字
    name: 'index',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about/:id',
    component: About,
  },
  {
    path: '/:path(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
