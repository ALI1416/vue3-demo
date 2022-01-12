<template>
  <h1>Hello App!</h1>
  <!-- router-link 组件导航，to指定链接地址，将渲染成a标签 -->
  <router-link to="/">Go to Home</router-link>
  <br>
  <router-link to="/about">Go to About</router-link>
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
