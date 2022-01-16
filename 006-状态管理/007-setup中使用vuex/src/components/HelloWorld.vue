<template>
  <!-- 通过 $store.state.变量名 可以读取到数据 -->
  <h2>数量：{{ $store.state.count }}</h2>
  <h2>数量：{{ count }}</h2>
  <!-- 通过 $store.getters.方法名 来调用计算属性 -->
  <h2>数量x10：{{ $store.getters.countX10 }}</h2>
  <h2>数量x10：{{ countX10 }}</h2>
  <h2>数量x100：{{ $store.getters.countX100 }}</h2>
  <h2>数量x100：{{ countX100 }}</h2>
  <!-- 通过 $store.commit(方法名,参数) 来调用方法 -->
  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('countAdd',-1)">-1</button>
  <!-- 通过 $store.dispatch(方法名,参数) 来调用异步方法 -->
  <button @click="$store.dispatch('asyncCountAdd',2)">+2</button>
  <button @click="$store.dispatch('asyncCountAdd2',-2)">-2</button>
  <button @click="asyncCountAdd3">+10</button>
  <br>
  <button @click="increment()">+1</button>
  <button @click="countAdd(-1)">-1</button>
  <button @click="asyncCountAdd(2)">+2</button>
  <button @click="asyncCountAdd2(-2)">-2</button>
  <button @click="asyncCountAdd4">+10</button>
</template>

<script>
import {computed} from 'vue'
// 导入useStore
import {useStore} from 'vuex'

export default {
  name: 'HelloWorld',
  setup() {
    const store = useStore();
    // state和getters里的数据要放到computed进行处理
    const count = computed(() => store.state.count);
    const countX10 = computed(() => store.getters.countX10);
    const countX100 = computed(() => store.getters.countX100);

    // mutations和actions直接调用即可
    function increment() {
      store.commit('increment')
    }

    function countAdd(value) {
      store.commit('countAdd', value)
    }

    function asyncCountAdd(value) {
      store.dispatch('asyncCountAdd', value)
    }

    function asyncCountAdd2(value) {
      store.dispatch('asyncCountAdd2', value)
    }

    function asyncCountAdd4() {
      // 接收Promise并进行处理
      store.dispatch('asyncCountAdd3', 10).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }

    return {count, countX10, countX100, increment, countAdd, asyncCountAdd, asyncCountAdd2, asyncCountAdd4}
  },
  methods: {
    asyncCountAdd3() {
      // 接收Promise并进行处理
      this.$store.dispatch('asyncCountAdd3', 10).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }

}
</script>
