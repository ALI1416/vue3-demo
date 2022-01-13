<template>
  <h2>{{ state.msg }}</h2>
  <button @click="changeMsg">切换</button>
</template>

<script>
import {inject, toRefs} from 'vue'

export default {
  name: 'HelloWorld',
  setup() {
    // 注入全局状态
    const store = inject('store')
    const {state} = toRefs(store);

    function changeMsg() {
      store.setMsg(this.state.msg === 'msg' ? 'hello' : 'msg');
    }

    return {state, changeMsg}
  }
}
</script>
