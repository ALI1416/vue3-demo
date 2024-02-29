<template>
  <!-- 国际化：中文 -->
  <el-config-provider :locale="zhCn">

    <HelloWorld/>

    <el-row class="mb-4">
      <el-button @click="error">Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle/>
      <el-button type="primary" :icon="Edit" circle/>
      <el-button type="success" :icon="Check" circle/>
      <el-button type="info" :icon="Message" circle/>
      <el-button type="warning" :icon="Star" circle/>
      <el-button type="danger" :icon="Delete" circle/>
    </el-row>

    <el-calendar v-model="value"/>

  </el-config-provider>
</template>

<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
import {ref} from 'vue'

// 自动导入 js 130k+ css 30k+
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {Check, Delete, Edit, Message, Search, Star} from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus'
// 使用了 ElMessage 非HTML组件 需要手动导入样式
import 'element-plus/es/components/message/style/css'

const value = ref(new Date())

function error() {
  ElMessage.error('Oops, this is a error message.')
}
</script>
