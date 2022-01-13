import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
  {path: '/', component: Home},
  {
    path: '/about',
    component: About,
    // 路由独享守卫
    beforeEnter: (to, from) => {
      console.log('路由独享守卫');
      return true
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 全局前置守卫
// to:要去哪个路由,from:来自哪个路由,next(可选,不推荐使用,如果使用了next则不能使用return):导航到下一个目标
router.beforeEach((to, from) => {
  console.log(from);
  console.log(to);
  if (to.query.id === 'aaa') {
    // 当return false时，取消导航
    return false
  } else if (to.query.id === 'bbb') {
    // 当return true或没有return时，导航到下一个目标
    return true
  } else if (to.query.id === 'ccc') {
  } else if (to.query.id === 'ddd') {
    // 返回一个路由对象
    return {query: {id: 'd'}}
  }
})

export default router
