<template>
  <h2>About2:{{$route.params.id}}</h2>
</template>

<script>
export default {
  name: 'About2',
  mounted() {
    console.log(this.$route)
  }
}
</script>
