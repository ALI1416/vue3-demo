<template>
  <router-view></router-view>
  <router-view name="home"></router-view>
  <router-view name="About"></router-view>
  <router-link to="/">首页</router-link>
  <br>
  <router-link to="/home?id=aaa">Home?id=aaa</router-link>
  <br>
  <router-link to="/about/abc">About/abc</router-link>
</template>

<script>
export default {
  name: 'App'
}
</script>
