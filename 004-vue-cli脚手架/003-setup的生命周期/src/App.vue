<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld v-if="isHelloShow" msg="Hello Vue 3.0 + Vite"/>
  <br>
  <button @click="isHelloShow=!isHelloShow">点击切换显示</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      isHelloShow: true
    }
  },
  components: {
    HelloWorld
  }
}
</script>
