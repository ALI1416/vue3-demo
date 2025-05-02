<template>
  <div ref="main" style="width: 800px;height: 400px"></div>
</template>

<script setup>
// 全部导入：打包后1050k+
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'

let main = ref()
let myChart

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(main.value)
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})
</script>
