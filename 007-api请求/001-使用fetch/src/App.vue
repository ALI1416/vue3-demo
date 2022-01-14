<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3.0 + Vite"/>
  <button @click="get">请求</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    let api = 'http://httpbin.org'

    function get() {
      // es6可以通过fetch来请求
      fetch(api + '/get').then(res => res.json()).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }

    return {get}
  }
}
</script>
