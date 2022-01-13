<template>
  <h1>{{ state.msg }}</h1>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 导入store
import store from "./store";
import {provide, toRefs} from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const {state} = toRefs(store);
    // 提供全局状态
    provide('store', store)
    return {state}
  }
}
</script>
