<template>
  原图：
  <img width="32" :src="svgPath"/>
  <br>
  原图转URL：
  <img width="32" :src="urlPath"/>
  <br>
  压缩后转base64：
  <img width="32" :src="'data:image/svg+xml;base64,'+svgBase64"/>
  <br>
  压缩后转URL：
  <img width="32" :src="svgUrl"/>
</template>

<script setup>
import svgo from 'svgo/dist/svgo.browser'
import {ref} from 'vue'

const svgPath = 'img/88.svg'
const urlPath = ref('');
const svgBase64 = ref('');
const svgUrl = ref('');

fetch(svgPath).then(res => res.blob()).then(res => {
  urlPath.value = URL.createObjectURL(res);
})

fetch(svgPath).then(res => res.text()).then(res => {
  // 压缩
  const svg = svgo.optimize(res).data
  // 转base64
  svgBase64.value = btoa(svg)
  // 转URL
  const blob = new Blob([svg], {
    type: 'image/svg+xml'
  })
  svgUrl.value = URL.createObjectURL(blob);
})
</script>
