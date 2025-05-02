<script lang="ts" setup>
import type {EChartsType} from 'echarts/core'
import * as echarts from 'echarts/core'
import {GeoComponent, TitleComponent, TooltipComponent, VisualMapComponent} from 'echarts/components'
import {MapChart} from 'echarts/charts'
import {CanvasRenderer} from 'echarts/renderers'
import {onMounted, ref} from 'vue'
import axios from 'axios'

echarts.use([
  VisualMapComponent,
  GeoComponent,
  TooltipComponent,
  TitleComponent,
  MapChart,
  CanvasRenderer,
])

let main = ref()
let myChart: EChartsType

onMounted(() => {
  myChart = echarts.init(main.value)
  myChart.showLoading()
  axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json').then(res => {
    myChart.hideLoading()
    echarts.registerMap('100000', res.data)
    myChart.setOption(option)
  })
  // 点击国家省份，进入到省份
  myChart.on('dblclick', (e) => {
    console.log(e.data.name)
    // 国家
    if (option.series[0].map === '100000') {
      let adcode: string = String(echarts.getMap('100000').geoJson.features.findLast(a => a.properties.name === e.data.name).properties.adcode)
      axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${adcode}_full.json`).then(res => {
        echarts.registerMap(adcode, res.data)
        option.series[0].map = adcode
        myChart.setOption(option)
      })
    }
  })
  // 点击省份空白，退出到国家
  myChart.getZr().on('dblclick', (e) => {
    // 空白
    if (!e.target) {
      console.log('空白')
      // 省份
      if (option.series[0].map !== '100000') {
        option.series[0].map = '100000'
        myChart.setOption(option)
      }
    }
  })
})

const option = {
  title: {
    text: '中国'
  },
  tooltip: {},
  visualMap: {
    left: 'right',
    realtime: false,
    calculable: true,
    min: 1000,
    max: 3000,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered']
    },
  },
  series: [
    {
      name: '中国',
      type: 'map',
      map: '100000',
      roam: true,
      label: {
        show: true
      },
      data: [
        {name: '山东省', value: 2000}
      ]
    }
  ]
}
</script>

<template>
  <div ref="main" style="width: 1000px;height: 800px"></div>
</template>
