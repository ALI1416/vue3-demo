<template>
  <router-view></router-view>
  <h3>导航到不同位置</h3>
  <button @click="index">首页</button>
  <br>
  <button @click="about">About/123</button>
  <br>
  <button @click="about2">About/456</button>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: 'App',
  setup() {
    // 使用useRouter()代替$router
    const router = useRouter()

    function index() {
      router.push('/')
    }

    function about() {
      router.push({path: '/about/123'})
    }

    function about2() {
      router.push({path: '/about/456'})
    }

    return {index, about, about2}
  },
}
</script>
