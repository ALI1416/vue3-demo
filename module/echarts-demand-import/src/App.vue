<template>
  <div ref="main" style="width: 800px;height: 400px"></div>
</template>

<script setup>
// 手动按需导入：打包后530k+
// 引入echarts核心模块，核心模块提供了echarts使用必须要的接口
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import {BarChart} from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为Component
import {DatasetComponent, GridComponent, TitleComponent, TooltipComponent, TransformComponent} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import {LabelLayout, UniversalTransition} from 'echarts/features'
// 引入Canvas渲染器，注意引入CanvasRenderer或者SVGRenderer是必须的一步
import {CanvasRenderer} from 'echarts/renderers'
import {onMounted, ref} from 'vue'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

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
