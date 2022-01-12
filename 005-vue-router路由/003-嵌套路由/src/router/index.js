import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import About1 from '../components/about/About1.vue'
import About2 from '../components/about/About2.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {path: '/', component: Home},
  {
    // 匹配 /about
    path: '/about',
    component: About,
    // 子节点
    children: [
      {
        // 匹配 /about/about1
        path: 'about1',
        component: About1,
      },
      {
        // 匹配 /about/about2
        path: 'about2',
        component: About2,
      },
    ]
  },
  {
    // 匹配 /about/123
    path: '/about/:id',
    component: About,
    // 子节点
    children: [
      {
        // 匹配 /about/123/about1
        path: 'about1',
        component: About1,
      },
      {
        // 匹配 /about/123/about2
        path: 'about2',
        component: About2,
      },
    ]
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
