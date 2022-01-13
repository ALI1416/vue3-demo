<template>
  <h1>About:{{ id }}</h1>
  <router-view></router-view>
</template>

<script>
import {onBeforeRouteLeave, onBeforeRouteUpdate, useRoute} from 'vue-router'

export default {
  name: 'About',
  setup() {
    // 使用useRoute()代替$route
    const route = useRoute()
    const id = route.params.id;
    // 导航守卫
    onBeforeRouteLeave((to, from) => {
      console.log('onBeforeRouteLeave');
    });
    onBeforeRouteUpdate((to, from) => {
      console.log('onBeforeRouteUpdate');
    });
    return {id}
  },
}
</script>
