<template>
  <el-calendar v-model="value" :range="[new Date(2022, 1, 6), new Date(2022, 1, 26)]"/>
</template>

<script setup>
import {ref} from 'vue'

const value = ref(new Date(2022, 1, 22))
</script>
