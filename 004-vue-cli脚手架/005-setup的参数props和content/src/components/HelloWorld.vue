<template>
  <h2>姓：{{ firstName }} 名：{{ lastName }} 姓名：{{ fullName }}</h2>
</template>

<script>
import {computed, toRefs} from 'vue'

export default {
  name: 'HelloWorld',
  // 声明要接受的参数
  props: ['firstName', 'lastName'],
  // setup可以接收参数props和内容content
  // props需要声明
  // content包括HTML属性attrs、发射事件emit、暴露公共property函数expose、插槽slots等
  setup(props, context) {
    console.log(props);
    console.log(context);
    // props是响应式的，不能使用ES6解构，需借助toRefs
    const {firstName, lastName} = toRefs(props);
    console.log(firstName.value, lastName.value);
    // context可以直接解构
    const {attrs} = context;
    console.log(attrs.class);
    const fullName = computed(() => {
      return firstName.value + " " + lastName.value
    });
    return {firstName, lastName, fullName}
  }
}
</script>
