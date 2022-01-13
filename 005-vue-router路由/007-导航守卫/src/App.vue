<template>
  <h1>Hello App!</h1>
  <router-link to="/">Home</router-link>
  <br>
  <router-link to="/about">About</router-link>
  <br>
  <router-link to="/about?id=aaa">About?id=aaa</router-link>
  <br>
  <router-link to="/about?id=bbb">About?id=bbb</router-link>
  <br>
  <router-link to="/about?id=ccc">About?id=ccc</router-link>
  <br>
  <router-link to="/about?id=ddd">About?id=ddd</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
