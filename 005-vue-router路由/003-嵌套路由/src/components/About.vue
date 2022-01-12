<template>
  <h1>About:{{$route.params.id}}</h1>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log(this.$route)
  }
}
</script>
