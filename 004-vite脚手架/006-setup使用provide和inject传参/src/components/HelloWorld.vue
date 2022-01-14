<template>
  <h2>姓：{{ firstName }} 名：{{ lastName }} 姓名：{{ fullName }}</h2>
</template>

<script>
// inject:注入
import {computed, inject, toRefs} from 'vue'

export default {
  name: 'HelloWorld',
  setup() {
    // 注入来自父组件的数据
    const name = inject("name");
    // 必须使用toRefs解构
    const {firstName, lastName} = toRefs(name);
    const fullName = computed(() => {
      return firstName.value + " " + lastName.value
    });
    return {firstName, lastName, fullName}
  }
}
</script>
