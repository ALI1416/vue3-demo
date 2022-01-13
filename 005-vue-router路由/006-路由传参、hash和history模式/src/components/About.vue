<template>
  <h1>About:{{$route.params.id}}:{{id}}</h1>
</template>

<script>
export default {
  name: 'About',
  // 可以使用props来接收$route.params里的值
  props:['id']
}
</script>
