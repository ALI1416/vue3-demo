<template>
  <h3>数字：{{ num }}</h3>
  <button @click="num--">-1</button>
  <button @click="numAdd">+1</button>
  <h3>对象</h3>
  <!-- 可以直接调用：对象.属性 -->
  <p>姓：{{ name.firstName }} 名：{{ name.lastName }}</p>
  <!-- 解构后可以直接用属性调用 -->
  <p>姓：{{ firstName }} 名：{{ lastName }}</p>
  <button @click="changeFirstName">姓修改</button>
  <button @click="changeLastName">名修改</button>
  <p>翻转后的名：{{ reverseLastName }}</p>
</template>

<script>
// ref:值
// reactive:对象
// toRefs:解构对象
// computed:计算属性
// watch:监听
// watchEffect:智能监听
import {ref, reactive, toRefs, computed, watch, watchEffect} from 'vue'

export default {
  name: 'App',
  setup() {
    // 定义值，使用ref函数，参数是变量的值
    const num = ref(0);

    // 定义函数
    function numAdd() {
      // ref定义的值，在value里面，需要解构；但是{{}}里就不需要解构，他会自动解构
      num.value++;
    }

    // 定义变量
    const name = reactive({
      firstName: "Cheng",
      lastName: "Kai",
      // 直接使用计算属性
      reverseLastName: computed(() => {
        return name.lastName.split('').reverse().join('');
      })
    })

    function changeLastName() {
      // 对象可以直接修改
      name.lastName = name.lastName === "Kai" ? "KaiXuan" : "Kai";
    }

    function changeFirstName() {
      name.firstName = name.firstName === "Cheng" ? "Feng" : "Cheng";
    }

    // 监听：监听的值,(新值,旧值)=>{执行的操作}
    watch(num, (newValue, oldValue) => {
      console.log('监听num', newValue, oldValue);
    })
    // 监听多个：[监听的值],(新值,旧值)=>{执行的操作}
    watch([num, name], (newValue, oldValue) => {
      console.log('监听多个[num, name]', newValue, oldValue);
    })
    // 智能监听(仅当操作里的数据有改变时，才会执行)
    watchEffect(() => {
      console.log('智能监听name.first', name.firstName);
    })

    // 定义完后需要导出才能使用
    // ...toRefs()解构对象成单独属性
    return {num, numAdd, name, ...toRefs(name), changeLastName, changeFirstName}
  },

}
</script>
