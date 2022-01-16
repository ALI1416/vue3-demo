<template>
  <!-- 通过 $store.state.模块名.变量名 可以读取到数据 -->
  <h2>数量：{{ $store.state.user.count }}</h2>
  <h2>数量：{{ count }}</h2>
  <h2>数量：{{ count2 }}</h2>
  <h2>数量：{{ count3 }}</h2>
  <!-- 通过 $store.getters['模块名/方法名'] 来调用计算属性 -->
  <h2>数量x10：{{ $store.getters['user/countX10'] }}</h2>
  <h2>数量x10：{{ countX10 }}</h2>
  <h2>数量x100：{{ $store.getters['user/countX100'] }}</h2>
  <h2>数量x100：{{ countX100 }}</h2>
  <!-- 通过 $store.commit('模块名/方法名',参数) 来调用方法 -->
  <button @click="$store.commit('user/increment')">+1</button>
  <button @click="$store.commit('user/countAdd',-1)">-1</button>
  <!-- 通过 $store.dispatch('模块名/方法名',参数) 来调用异步方法 -->
  <button @click="$store.dispatch('user/asyncCountAdd',2)">+2</button>
  <button @click="$store.dispatch('user/asyncCountAdd2',-2)">-2</button>
  <button @click="asyncCountAdd_3">+10</button>
  <br>
  <button @click="increment">+1</button>
  <button @click="countAdd(-1)">-1</button>
  <button @click="asyncCountAdd(2)">+2</button>
  <button @click="asyncCountAdd2(-2)">-2</button>
  <button @click="asyncCountAdd_4">+10</button>
  <br>
  <button @click="print">打印$store</button>
</template>

<script>
// 导入辅助函数
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    // $store.state和$store.getters里的数据要放到computed进行解构
    // mapState解构(模块名,[要解构的值])
    ...mapState('user', ['count']),
    ...mapState({
      // 可以改名
      count2: state => state.user.count
    }),
    ...mapState('user', {
      // 可以指定模块，并改名
      count3: state => state.count
    }),
    // mapGetters解构(模块名,[要解构的值])
    ...mapGetters('user', ['countX10', 'countX100'])
  },
  methods: {
    print() {
      console.log(this.$store)
    },
    asyncCountAdd_3() {
      // 接收Promise并进行处理
      this.$store.dispatch('user/asyncCountAdd3', 10).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    // mutations和actions需要到methods里进行解构
    // 解构mutations(模块名,[要解构的值])
    ...mapMutations('user', ['increment', 'countAdd']),
    // 解构actions(模块名,[要解构的值])
    ...mapActions('user', ['asyncCountAdd', 'asyncCountAdd2', 'asyncCountAdd3']),
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
