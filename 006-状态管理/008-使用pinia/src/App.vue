<template>
  <!-- 通过 store.变量名 可以读取到数据 -->
  <h3>数量：{{ store.count }}</h3>
  <h3>数量：{{ count }}</h3>
  <button @click="add1">+1</button>
  <button @click="add2">+2</button>
  <button @click="add3">+3</button>
  <hr>
  <ul>
    <li v-for="item in store.list">
      {{ item.name + ':' + item.price + 'x' + item.num + '=' + item.price * item.num }}
    </li>
  </ul>
  <!-- 通过 store.计算属性名 可以读取到数据 -->
  <h3>总价：{{ store.totalPrice }}</h3>
  <h3>总价*2：{{ store.doubleTotalPrice }}</h3>
  <h3>总价*5：{{ store.fiveTotalPrice }}</h3>
  <h3>总价：{{ totalPrice }}</h3>
  <button @click="addGoods1">addGoods1</button>
  <button @click="addGoods2">addGoods2</button>
  <button @click="addGoods3">addGoods3</button>
  <hr>
  <button @click="replaceState">替换store</button>
  <button @click="resetState">重置store</button>
  <hr>
  <!-- 通过 store.方法名 可以调用方法 -->
  <button @click="store.increment">+1</button>
  <button @click="incrementNum">异步+3</button>
</template>

<script setup>
// 导入
import useStore from './store/index'
// pinia工具类：
// storeToRefs：解构
import {storeToRefs} from 'pinia'

const store = useStore()

// 解构
let {count, totalPrice} = storeToRefs(store);

function add1() {
  // 可以直接对store里的数据修改
  store.count++;
}

function add2() {
  // 解构后的数据需要加.value
  count.value += 2;
}

function add3() {
  // 使用$patch修改
  // $patch可以一次修改多个数据，效率高
  store.$patch({
    count: store.count + 3
  })
}

function addGoods1() {
  // 直接修改
  store.list.push({
    name: "watermelon",
    price: 1,
    num: 30,
  });
}

function addGoods2() {
  // 添加一个数组，不推荐这样使用
  store.list.push({
    name: "orange",
    price: 1,
    num: 10,
  });
  store.$patch({
    list: store.list
  })
}

function addGoods3() {
  // $patch可以传入一个state
  store.$patch((state) => {
    state.list.push({
      name: "mango",
      price: 10,
      num: 6,
    })
  })
}

function replaceState() {
  // 替换state
  store.$state = {
    count: 100,
    list: [
      {
        name: "grape",
        price: 8,
        num: 9,
      },
    ]
  }
}

function resetState() {
  // 重置state
  store.$reset();
}

function incrementNum() {
  store.incrementNum(3);
}

// 监听变化(状态，数值)
store.$subscribe(((mutation, state) => {
  console.log(mutation);
  console.log(state);
}))

// 监听动作(动作名，仓库名，参数，执行前回调函数，发生错误回调函数)
store.$onAction(({name, store, args, after, onError}) => {
  console.log(name, store, args);
  // 执行前
  after((result) => {
    console.log('执行前' + result)
  });
  // 发生错误
  onError((error) => {
    console.log('发生错误' + error)
  });
})

</script>
