<template>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
  <h1>Hello, World !</h1>
</template>

<script setup>
import CanvasNest from 'canvas-nest.js';
import {onMounted} from 'vue'

const config = {
  color: '255,0,0',
  count: 88,
};

onMounted(() => {
  const cn = new CanvasNest(document.getElementById('app'), config);
  // 销毁
  // cn.destroy();
})

</script>
