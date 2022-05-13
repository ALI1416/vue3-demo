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
import {onMounted, ref} from 'vue'

const svgPath = 'img/88.svg'
const urlPath = ref('');
const svgBase64 = ref('');
const svgUrl = ref('');

async function load() {
  // 抓取原图
  const blob = await fetch(svgPath).then(res => res.blob());
  const text = await blob.text();

  // 转URL
  urlPath.value = URL.createObjectURL(blob);
  // svg压缩
  const svg = svgo.optimize(text).data
  // svg压缩后转base64
  svgBase64.value = btoa(svg)
  // svg压缩后转URL
  const blobSvg = new Blob([svg], {
    type: 'image/svg+xml'
  })
  svgUrl.value = URL.createObjectURL(blobSvg);
}

onMounted(() => {
  load();
})
</script>
