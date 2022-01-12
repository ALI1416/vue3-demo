<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld v-if="isHelloShow" msg="Hello Vue 3.0 + Vite"/>
  <h1>{{ msg }}</h1>
  <button @click="msgClick">点击切换</button>
  <br>
  <button @click="isHelloShow=!isHelloShow">点击切换显示</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello',
      isHelloShow: true
    }
  },
  methods: {
    msgClick() {
      this.msg = this.msg === 'Hello' ? 'World' : 'Hello';
    }
  },
  components: {
    HelloWorld
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
