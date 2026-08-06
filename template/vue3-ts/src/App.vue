<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import {RouterView, useRouter} from 'vue-router'

const router = useRouter()
</script>

<template>
  <HelloWorld/>
  <hr>
  <RouterLink to="/">Home</RouterLink>
  <button @click="router.push('/about')">About</button>
  <hr>
  <RouterView/>
</template>

<style scoped>

</style>
