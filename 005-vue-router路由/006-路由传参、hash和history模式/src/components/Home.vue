<template>
  <h1>Home:{{$route.params.id}}:{{id}}</h1>
</template>

<script>
export default {
  name: 'Home',
  props:['id']
}
</script>
