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
  <p ref="p">翻转后的名：{{ reverseLastName }}</p>
  <!-- 使用$emit触发自定义事件 -->
  <HelloWorld @some-event='someEventCallback'/>
  <p>{{ someEventValue }}</p>
</template>

<!--script setup语法糖，不用return-->
<script setup>
import {computed, onMounted, reactive, ref, toRefs, watch, watchEffect, watchPostEffect} from 'vue'
import HelloWorld from "./components/HelloWorld.vue";

// 定义值，使用ref函数，参数是变量的值
const num = ref(0);

// ref模板引用：获取该对象
const p = ref(null)

// 获取子组件传值
defineEmits(['someEvent'])
const someEventValue = ref(0)
function someEventCallback(n) {
  console.log(n)
}

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

// toRefs不再好用
const {firstName, lastName, reverseLastName} = toRefs(name)

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
// 智能监听(vue更新后执行)
watchPostEffect(() => {
  console.log('智能监听(vue更新后执行)name.first', name.firstName);
})
onMounted(() => {
  // 打印p对象
  console.log(p.value)
})
</script>
