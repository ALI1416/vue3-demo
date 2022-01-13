import {createRouter, createWebHistory} from 'vue-router'

// 打包生成index.js文件
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import NotFound from '../components/NotFound.vue'

// 路由懒加载，不同的模块打包成不同的文件
// 打包生成index.js、Home.js、About.js、NotFound.js文件
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const NotFound = () => import('../components/NotFound.vue')

const routes = [
  {
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
  history: createWebHistory(),
  routes,
})

export default router
