<template>
  <h1>About:{{$route.params.id}}</h1>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    // 使用this.$route获取当前路由信息
    console.log(this.$route)
  }
}
</script>
