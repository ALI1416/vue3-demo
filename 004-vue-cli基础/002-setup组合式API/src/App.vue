<template>
  <h1>普通方法：</h1>
  <h3>计数：{{ count }}</h3>
  <button @click="count--">-1</button>
  <button @click="countAdd">+1</button>
  <h1>组合式API方法：</h1>
  <h3>计数：{{ num }}</h3>
  <button @click="num--">-1</button>
  <button @click="numAdd">+1</button>
</template>

<script>
// 导入setup所需函数，从vue中
// ref:值
import {ref} from 'vue'

export default {
  name: 'App',
  data() {
    console.log('data')
    return {
      count: 0
    }
  },
  methods: {
    countAdd() {
      this.count++;
    }
  },
  // 使用setup来实现计数+1
  // setup方法在beforeCreate前调用，然后再data方法
  setup() {
    console.log('setup')
    // 定义值，使用ref函数，参数是变量的值
    const num = ref(0);

    // 定义函数
    function numAdd() {
      // ref定义的值，在value里面，需要解构；但是{{}}里就不需要解构，他会自动解构
      num.value++;
    }

    // 定义完后需要导出才能使用
    return {num, numAdd}
  },
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
}
</script>
