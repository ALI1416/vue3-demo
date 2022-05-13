<template>
  <!-- 通过 $store.state.模块名.变量名 可以读取到数据 -->
  <!-- 由于模块化后state已经加上模块名了，所有没有变化 -->
  <h2>数量：{{ $store.state.user.count }}</h2>
  <!-- 通过 $store.getters['模块名/方法名'] 来调用计算属性 -->
  <h2>数量x10：{{ $store.getters['user/countX10'] }}</h2>
  <h2>数量x100：{{ $store.getters['user/countX100'] }}</h2>
  <!-- 通过 $store.commit('模块名/方法名',参数) 来调用方法 -->
  <button @click="$store.commit('user/increment')">+1</button>
  <button @click="$store.commit('user/countAdd',-1)">-1</button>
  <!-- 通过 $store.dispatch('模块名/方法名',参数) 来调用异步方法 -->
  <button @click="$store.dispatch('user/asyncCountAdd',2)">+2</button>
  <button @click="$store.dispatch('user/asyncCountAdd2',-2)">-2</button>
  <button @click="asyncCountAdd3">+10</button>
  <br>
  <button @click="print">打印$store</button>
</template>

<script>

export default {
  name: 'HelloWorld',
  methods: {
    print() {
      console.log(this.$store)
    },
    asyncCountAdd3() {
      // 接收Promise并进行处理
      this.$store.dispatch('user/asyncCountAdd3', 10).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }

}
</script>
