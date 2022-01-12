import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import About2 from '../components/About2.vue'
import About3 from '../components/About3.vue'
import About4 from '../components/About4.vue'
import About5 from '../components/About5.vue'
import About6 from '../components/About6.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  // `/` 匹配根目录
  {path: '/', component: Home},
  {
    // 使用`:参数名`来匹配动态路由
    // 例如：可匹配 /about/123,/about/123/,/about/abc,/about/abc/
    // 不可匹配 /a,/about,/about/,/about/abc/def
    path: '/about/:id',
    component: About
  },
  {
    // 参数名后紧跟正则表达式，使用正则表达式匹配路由
    // `(\d+)`代表只能是数字，其中`\\`是`\`的转义
    // 例如：可匹配 /about2/123,/about2/123/
    // 不可匹配 /about2/abc
    path: '/about2/:id(\\d+)',
    component: About2
  },
  {
    // 参数后紧跟*，代表可以匹配0个或多个部分
    // 例如：可匹配 /about3,/about3/123,/about3/123/456
    path: '/about3/:id*',
    component: About3
  },
  {
    // 参数后紧跟+，代表可以匹配1个或多个部分
    // 例如：可匹配 /about4/123,/about4/123/456
    // 不可匹配 /about4
    path: '/about4/:id+',
    component: About4
  },
  {
    // 参数后紧跟?，代表可以匹配0个或1个部分
    // 例如：可匹配 /about5,/about5/123
    // 不可匹配 /about5/123/456
    path: '/about5/:id?',
    component: About5
  },
  {
    // 使用组合匹配
    // 只能匹配1个或多个数字部分
    // 例如：可匹配 /about6/123,/about6/123/456
    // 不可匹配 /about6,/about6/123/abc
    path: '/about6/:id(\\d+)+',
    component: About6
  },
  {
    // 404页面
    // 匹配所有路径
    path: '/:path(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
