<template>
  <h1>姓：{{ firstName }} 名：{{ lastName }} 姓名：{{ fullName }}</h1>
  <!-- 传递参数和内容 -->
  <HelloWorld :firstName="firstName" :lastName="lastName" class="abc"/>
  <button @click="changeFirstName">姓修改</button>
  <button @click="changeLastName">名修改</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      firstName: "Cheng",
      lastName: "Kai",
    }
  },
  methods: {
    changeFirstName() {
      this.firstName = this.firstName === "Cheng" ? "Feng" : "Cheng";
    },
    changeLastName() {
      this.lastName = this.lastName === "Kai" ? "KaiXuan" : "Kai";
    }
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  },
  components: {
    HelloWorld
  }
}
</script>
