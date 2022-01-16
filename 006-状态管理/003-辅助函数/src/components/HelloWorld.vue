<template>
  <!-- 通过 $store.state.变量名 可以读取到数据 -->
  <h2>数量：{{ $store.state.count }}</h2>
  <h2>数量：{{ count }}</h2>
  <h2>数量：{{ count2 }}</h2>
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
  <button @click="asyncCountAdd_3">+10</button>
  <br>
  <button @click="increment">+1</button>
  <button @click="countAdd(-1)">-1</button>
  <button @click="asyncCountAdd(2)">+2</button>
  <button @click="asyncCountAdd2(-2)">-2</button>
  <button @click="asyncCountAdd_4">+10</button>
</template>

<script>
// 导入辅助函数
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {

  name: 'HelloWorld',
  computed: {
    // $store.state和$store.getters里的数据要放到computed进行解构
    // mapState解构
    ...mapState(['count']),
    ...mapState({
      // 可以改名
      count2: state => state.count
    }),
    // mapGetters解构
    ...mapGetters(['countX10', 'countX100'])
  },
  methods: {
    asyncCountAdd_3() {
      // 接收Promise并进行处理
      this.$store.dispatch('asyncCountAdd3', 10).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    // mutations和actions需要到methods里进行解构
    // 解构mutations
    ...mapMutations(['increment', 'countAdd']),
    // 解构actions
    ...mapActions(['asyncCountAdd', 'asyncCountAdd2', 'asyncCountAdd3']),
    // 调用解构后的actions
    asyncCountAdd_4() {
      // 接收Promise并进行处理
      this.asyncCountAdd3(10).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
  }
}
</script>
