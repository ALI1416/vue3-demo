<template>
  <h1>姓：{{ firstName }} 名：{{ lastName }} 姓名：{{ fullName }}</h1>
  <!-- 传递参数和内容 -->
  <HelloWorld :firstName="firstName" :lastName="lastName" class="abc"/>
  <button @click="changeFirstName">姓修改</button>
  <button @click="changeLastName">名修改</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {computed, ref} from 'vue'

export default {
  name: 'App',
  setup() {
    const firstName = ref('Cheng');
    const lastName = ref('Kai');
    const fullName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    function changeFirstName() {
      firstName.value = firstName.value === "Cheng" ? "Feng" : "Cheng";
    }

    function changeLastName() {
      lastName.value = lastName.value === "Kai" ? "KaiXuan" : "Kai";
    }

    return {firstName, lastName, fullName, changeFirstName, changeLastName}
  },
  components: {
    HelloWorld
  }
}
</script>
