<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3.0 + Vite"/>
  <button @click="get">请求</button>
  <button @click="cross">跨域</button>
  <button @click="mock">mock</button>
  <button @click="mockRegx">mockRegx</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    let api = 'http://httpbin.org'

    // 通过axios发送get请求
    function get() {
      axios.get(api + '/get').then(res => {
        console.log(res);
        // 返回数据在data里面
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }

    // 跨域请求
    function cross() {
      axios.get('/api/web201605/js/herolist.json').then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }

    // 使用mock生成数据
    function mock() {
      axios.get('/user/info').then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }

    // mock正则匹配
    function mockRegx() {
      axios.get('/admin/login').then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }

    return {get, cross, mock, mockRegx}
  }
}
</script>
