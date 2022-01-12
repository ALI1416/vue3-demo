<template>
  <h2>About1:{{$route.params.id}}</h2>
</template>

<script>
export default {
  name: 'About1',
  mounted() {
    console.log(this.$route)
  }
}
</script>
