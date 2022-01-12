<template>
  <h1>姓：{{ firstName }} 名：{{ lastName }} 姓名：{{ fullName }}</h1>
  <HelloWorld/>
  <button @click="changeFirstName">姓修改</button>
  <button @click="changeLastName">名修改</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// provide:提供
import {computed, provide, reactive, toRefs} from 'vue'

export default {
  name: 'App',
  setup() {
    const name = reactive({
      firstName: "Cheng",
      lastName: "Kai",
      fullName: computed(() => {
        return name.firstName + " " + name.lastName;
      })
    })
    // 提供给子组件数据
    provide("name", name);

    function changeFirstName() {
      name.firstName = name.firstName === "Cheng" ? "Feng" : "Cheng";
    }

    function changeLastName() {
      name.lastName = name.lastName === "Kai" ? "KaiXuan" : "Kai";
    }

    return {...toRefs(name), changeFirstName, changeLastName}
  },
  components: {
    HelloWorld
  }
}
</script>
