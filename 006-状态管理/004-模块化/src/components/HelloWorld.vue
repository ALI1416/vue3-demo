<template>
  <!-- 通过 $store.state.模块名.变量名 可以读取到数据(需要加模块名) -->
  <h2>数量：{{ $store.state.user.count }}</h2>
  <!-- 通过 $store.getters.方法名 来调用计算属性(不用加模块名) -->
  <h2>数量x10：{{ $store.getters.countX10 }}</h2>
  <h2>数量x100：{{ $store.getters.countX100 }}</h2>
  <!-- 通过 $store.commit(方法名,参数) 来调用方法(不用加模块名) -->
  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('countAdd',-1)">-1</button>
  <!-- 通过 $store.dispatch(方法名,参数) 来调用异步方法(不用加模块名) -->
  <button @click="$store.dispatch('asyncCountAdd',2)">+2</button>
  <button @click="$store.dispatch('asyncCountAdd2',-2)">-2</button>
  <button @click="asyncCountAdd3">+10</button>
  <br>
  <button @click="print">打印$store</button>
</template>

<script>

export default {
  name: 'HelloWorld',
  methods: {
    print(){
      console.log(this.$store)
    },
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
