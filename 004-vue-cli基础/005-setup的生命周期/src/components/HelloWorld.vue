<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  setup() {
    // 所有的onXx都在xx前执行
    // onBeforeMount在beforeMount前
    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    // onMounted在mounted前
    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })
  },
  beforeCreate() {
    console.log('beforeCreate实例创建前');
  },
  created() {
    console.log('created实例创建完成后');
  },
  beforeMount() {
    console.log('beforeMount实例挂载前');
  },
  mounted() {
    console.log('mounted实例挂载完成后');
  },
  beforeUpdate() {
    console.log('beforeUpdate渲染更新前');
  },
  updated() {
    console.log('updated渲染更新完成后');
  },
  beforeUnmount() {
    console.log('beforeUnmount组件卸载前');
  },
  unmounted() {
    console.log('unmounted组件卸载完成后');
  }
}
</script>
