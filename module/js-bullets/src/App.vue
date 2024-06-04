<template>
  <div id="bullet" style="width:500px;height:50px;border:1px solid"></div>
</template>

<script setup>
import BulletJs from 'js-bullets'
import {onMounted} from 'vue'

onMounted(() => {
  let bullet = new BulletJs('#bullet', {
    pauseOnClick: true,
    pauseOnHover: true
  })
  let msg = [
    '哈哈哈',
    '爱上对方过后就哭了',
    '1234567890'
  ]
  let i = 0
  setInterval(() => {
    bullet.push(msg[i++])
    if (i === msg.length) {
      i = 0
    }
  }, 1000)
})
</script>
