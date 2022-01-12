<template>
  <router-view></router-view>
  <!-- 命名视图，name需要和组件名字相同，没有该组件时不渲染 -->
  <router-view name="home"></router-view>
  <router-view name="About"></router-view>
  <h3>命名视图</h3>
  <router-link to="/">首页</router-link>
  <br>
  <router-link to="/home">Home</router-link>
  <br>
  <router-link to="/about">About</router-link>
  <h3>重定向</h3>
  <router-link to="/about1">About1</router-link>
  <br>
  <router-link to="/about2">About2</router-link>
  <br>
  <router-link to="/about3/123">About3/123</router-link>
  <h3>别名</h3>
  <router-link to="/home1">Home1</router-link>
  <br>
  <router-link to="/a1">a1</router-link>
  <br>
  <router-link to="/a2">a2</router-link>
</template>

<script>
export default {
  name: 'App'
}
</script>
