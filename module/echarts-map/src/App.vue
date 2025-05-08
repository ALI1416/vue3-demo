<script lang="ts" setup>
import type {EChartsType} from 'echarts/core'
import * as echarts from 'echarts/core'
import {GeoComponent, GridComponent, TitleComponent, TooltipComponent, VisualMapComponent} from 'echarts/components'
import {BarChart, MapChart} from 'echarts/charts'
import {CanvasRenderer} from 'echarts/renderers'
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {UniversalTransition} from 'echarts/features'

echarts.use([
  CanvasRenderer,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  GridComponent,
  MapChart,
  BarChart
])

let main = ref()
let myChart: EChartsType

const map = ref('中华人民共和国')
const product = ref('全部产品')
const date = ref('本年')

const modeIsMap = ref(true)

function modeClick() {
  modeIsMap.value = !modeIsMap.value
  if (modeIsMap.value) {
    myChart.setOption(mapOption, true)
  } else {
    let mapData = mapOption.series.data
    barOption.yAxis.data = mapData.map((v: any) => v.name)
    barOption.series.data = mapData.map((v: any) => v.value)
    myChart.setOption(barOption, true)
  }
}

function mapChange() {
  console.log('地图切换', map.value, product.value, date.value)
  getData()
}

function productChange(productName: string) {
  product.value = productName
  console.log('产品切换', map.value, product.value, date.value)
  getData()
}

function dateChange(dateName: string) {
  date.value = dateName
  console.log('时间切换', map.value, product.value, date.value)
  getData()
}

function getData() {
  console.log('获取接口数据', map.value, product.value, date.value)
  let features = echarts.getMap(map.value).geoJson.features
  let data: any[] = []
  for (let feature of features) {
    data.push({
      name: feature.properties.name,
      value: Math.trunc(1000 + Math.random() * 1000)
    })
  }
  data.sort((v1, v2) => v1.value - v2.value)
  mapOption.series.data = data
  let values: number[] = data.map(v => v.value)
  visualMap.max = (Math.trunc(Math.max(...values) / 100) + 1) * 100
  visualMap.min = (Math.trunc(Math.min(...values) / 100) - 1) * 100
  myChart.setOption(mapOption)
}

onMounted(() => {
  myChart = echarts.init(main.value)
  myChart.showLoading()
  axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json').then(res => {
    myChart.hideLoading()
    echarts.registerMap('中华人民共和国', res.data)
    myChart.setOption(mapOption)
    mapChange()
  })
  // 点击国家省份，进入到省份
  myChart.on('dblclick', (e: any) => {
    // 国家
    if (modeIsMap.value && mapOption.series.map === '中华人民共和国') {
      let properties = echarts.getMap('中华人民共和国').geoJson.features.findLast((v: any) => v.properties.name === e.data.name).properties
      map.value = properties.name
      if (echarts.getMap(properties.name)) {
        // 已经加载过该省份地图
        mapOption.series.name = properties.name
        mapOption.series.map = properties.name
        // 地图居中
        mapOption.series.center = null
        // 还原缩放
        mapOption.series.zoom = 1
        myChart.setOption(mapOption)
        mapChange()
      } else {
        // 还未加载该省份地图
        myChart.showLoading()
        axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${properties.adcode}_full.json`).then(res => {
          myChart.hideLoading()
          echarts.registerMap(properties.name, res.data)
          mapOption.series.name = properties.name
          mapOption.series.map = properties.name
          mapOption.series.center = null
          mapOption.series.zoom = 1
          myChart.setOption(mapOption)
          mapChange()
        })
      }
    }
  })
  // 点击省份空白，退出到国家
  myChart.getZr().on('dblclick', (e) => {
    // 空白
    if (modeIsMap.value && !e.target) {
      console.log(123)
      // 省份
      if (mapOption.series.map !== '中华人民共和国') {
        map.value = '中华人民共和国'
        mapOption.series.name = '中华人民共和国'
        mapOption.series.map = '中华人民共和国'
        mapOption.series.center = null
        mapOption.series.zoom = 1
        myChart.setOption(mapOption)
        mapChange()
      }
    }
  })
})

const visualMap: any = {
  left: 'right',
  realtime: false,
  calculable: true,
  inRange: {
    color: ['lightskyblue', 'yellow', 'orangered']
  }
}

const mapOption: any = {
  tooltip: {},
  visualMap: visualMap,
  series: {
    name: '中华人民共和国',
    type: 'map',
    map: '中华人民共和国',
    roam: true,
    label: {
      show: true
    },
    emphasis: {
      itemStyle: {
        areaColor: '#6cf'
      }
    },
    select: {
      itemStyle: {
        areaColor: '#6cf'
      }
    }
  }
}

const barOption: any = {
  grid: {
    top: 70,
    bottom: 0,
    left: 120,
    right: 0
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  visualMap: visualMap,
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category'
  },
  series: {
    type: 'bar',
    encode: {
      x: 1,
      y: 0
    },
    emphasis: {
      itemStyle: {
        color: '#6cf'
      }
    }
  }
}

// 重新调整尺寸(200毫秒防抖)
let timer: number | undefined = undefined
window.onresize = () => {
  if (!timer) {
    timer = setTimeout(() => {
      timer = undefined
      myChart.resize()
    }, 200)
  }
}
</script>

<template>
  <div ref="main" style="width:90vw;height:90vh"></div>
  <div style="z-index:2;top:5px;left:5px;position:absolute">
    <h2 style="margin:0">{{ map }}{{ date }}{{ product }}</h2>
    <button @click="modeClick">{{ modeIsMap ? '切换为柱状图显示' : '切换为地图显示' }}</button>
    <div v-show="modeIsMap">
      <ul>
        <li><label><input type="radio" @change="productChange('全部产品')" name="product" checked/>全部产品</label></li>
        <li><label><input type="radio" @change="productChange('产品1')" name="product"/>产品1</label></li>
        <li><label><input type="radio" @change="productChange('产品2')" name="product"/>产品2</label></li>
        <li><label><input type="radio" @change="productChange('产品3')" name="product"/>产品3</label></li>
      </ul>
      <ul>
        <li><label><input type="radio" @change="dateChange('本年')" name="date" checked/>本年</label></li>
        <li><label><input type="radio" @change="dateChange('本月')" name="date"/>本月</label></li>
        <li><label><input type="radio" @change="dateChange('本周')" name="date"/>本周</label></li>
        <li><label><input type="radio" @change="dateChange('本日')" name="date"/>本日</label></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 5px;
}
</style>
