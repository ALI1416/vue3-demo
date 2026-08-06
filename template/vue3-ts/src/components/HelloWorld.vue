<script setup lang="ts">
import {useCounterStore} from '@/stores/counter.ts'

const counterStore = useCounterStore()
</script>

<template>
  <h2>Hello, World!</h2>
  <h3>{{ counterStore.count }}</h3>
  <h3>{{ counterStore.doubleCount }}</h3>
  <button @click="counterStore.increment()">+1</button>
</template>

<style scoped>

</style>
