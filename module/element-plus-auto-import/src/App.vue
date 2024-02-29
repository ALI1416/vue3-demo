<template>
  <!-- 国际化：中文 -->
  <el-config-provider :locale="zhCn">
    <Main/>
  </el-config-provider>
</template>

<script lang="ts" setup>
import Main from "./Main.vue";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
