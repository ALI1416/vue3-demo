<template>
  <router-view></router-view>
  <h3>导航到不同位置</h3>
  <!-- 函数调用 -->
  <button @click="index">首页 函数调用 字符串路径</button>
  <br>
  <!-- 直接调用 -->
  <!-- 字符串路径 -->
  <button @click="$router.push('/about/123')">About 直接调用 字符串路径</button>
  <br>
  <!-- 带有路径的对象 -->
  <button @click="$router.push({path:'/'})">首页 带有路径的对象</button>
  <br>
  <!-- 命名路由 -->
  <button @click="$router.push({name:'index'})">首页 命名路由</button>
  <br>
  <!-- 命名路由传参 -->
  <!-- 注意：path和params不能一起使用，否则只取path -->
  <button @click="$router.push({name:'about',params:{id:'abc'}})">About 命名路由传参</button>
  <br>
  <!-- 命名路由传查询参数 -->
  <button @click="$router.push({name:'index',query:{name:'abc'}})">首页 命名路由传查询参数</button>
  <br>
  <!-- 命名路由带hash -->
  <button @click="$router.push({name:'index',hash:'#abc'})">首页 命名路由带hash</button>
  <h3>router-link传参</h3>
  <!-- 需要绑定to才可传参 -->
  <router-link :to="{name:'index'}">首页</router-link>
  <br>
  <router-link :to="{name:'about',params:{id:'abc'}}">About</router-link>
  <h3>替换当前位置</h3>
  <!-- 使用replace替换当前页面，不会在历史记录中添加新记录 -->
  <!-- 在push中replace: true -->
  <button @click="$router.push({path:'/about/222', replace: true})">About 使用push replace</button>
  <br>
  <!-- 直接使用$router.replace -->
  <button @click="$router.replace({path:'/about/333'})">About 使用replace</button>
  <h3>横跨历史</h3>
  <!-- $router.forward() -->
  <button @click="$router.forward()">向前1条历史记录 使用$router.forward()</button>
  <br>
  <!-- $router.go(1) -->
  <button @click="$router.go(1)">向前1条历史记录 使用$router.go(1)</button>
  <br>
  <!-- $router.back() -->
  <button @click="$router.back()">向后1条历史记录 使用$router.back()</button>
  <br>
  <!-- $router.go(-1) -->
  <button @click="$router.go(-1)">向后1条历史记录 使用$router.go(-1)</button>

</template>

<script>
export default {
  name: 'App',
  methods: {
    index() {
      // 使用$router.push来改变路由路径
      // 字符串路径
      this.$router.push('/');
    }
  }
}
</script>
