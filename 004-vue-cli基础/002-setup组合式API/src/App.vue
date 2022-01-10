<template>
  <h1>普通：{{ count }}</h1>
  <button @click="countAdd">+1</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countAdd() {
      this.count++;
    }
  },
  components: {
    HelloWorld
  },
}
</script>
