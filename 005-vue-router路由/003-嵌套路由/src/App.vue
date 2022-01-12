<template>
  <router-view></router-view>
  <router-link to="/">访问/</router-link>
  <hr>
  <router-link to="/about/about1">访问/about/about1</router-link>
  <br>
  <router-link to="/about/about2">访问/about/about2</router-link>
  <hr>
  <router-link to="/about/123/about1">访问/about/123/about1</router-link>
  <br>
  <router-link to="/about/123/about2">访问/about/123/about2</router-link>
</template>

<script>
export default {
  name: 'App'
}
</script>
