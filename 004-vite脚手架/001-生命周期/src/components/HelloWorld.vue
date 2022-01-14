<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
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
  /*生命周期钩子函数*/
  beforeCreate() {
    console.log('实例创建前');
  },
  created() {
    console.log('实例创建完成后');
  },
  beforeMount() {
    console.log('实例挂载前');
  },
  mounted() {
    console.log('实例挂载完成后');
  },
  beforeUpdate() {
    console.log('渲染更新前');
  },
  updated() {
    console.log('渲染更新完成后');
  },
  beforeUnmount() {
    console.log('组件卸载前');
  },
  unmounted() {
    console.log('组件卸载完成后');
  }
}
</script>
