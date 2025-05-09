<script lang="ts" setup>
import type {EChartsType} from 'echarts/core'
import * as echarts from 'echarts/core'
import {GeoComponent, GridComponent, TooltipComponent, VisualMapComponent} from 'echarts/components'
import {BarChart, MapChart} from 'echarts/charts'
import {CanvasRenderer} from 'echarts/renderers'
import {onMounted, ref} from 'vue'
import axios from 'axios'

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
  getData()
}

function productChange(productName: string) {
  product.value = productName
  getData()
}

function dateChange(dateName: string) {
  date.value = dateName
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

  // 双击国家省份，进入到省份
  let clickMapCount = 0
  myChart.on('click', (e: any) => {
    // 移动端双击无效，使用单击模拟双击
    let now = Date.now()
    if (now - clickMapCount < 300) {
      mapDoubleClick(e)
      clickMapCount = 0
    } else {
      clickMapCount = now
    }
  })

  // 双击省份空白，退出到国家
  let clickBlankCount = 0
  myChart.getZr().on('click', (e) => {
    let now = Date.now()
    if (now - clickBlankCount < 300) {
      blankDoubleClick(e)
      clickBlankCount = 0
    } else {
      clickBlankCount = now
    }
  })
})

/**
 * 双击地图
 */
function mapDoubleClick(e: any) {
  // 国家省份
  if (modeIsMap.value && mapOption.series.map === '中华人民共和国') {
    let properties = echarts.getMap('中华人民共和国').geoJson.features.findLast((v: any) => v.properties.name === e.data.name).properties
    map.value = properties.name
    if (echarts.getMap(map.value)) {
      // 已经加载过该省份地图
      mapOption.series.name = mapOption.series.map = map.value
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
        echarts.registerMap(map.value, res.data)
        mapOption.series.name = mapOption.series.map = map.value
        mapOption.series.center = null
        mapOption.series.zoom = 1
        myChart.setOption(mapOption)
        mapChange()
      })
    }
  }
}

/**
 * 双击空白
 */
function blankDoubleClick(e: any) {
  // 省份空白
  if (modeIsMap.value && !e.target && mapOption.series.map !== '中华人民共和国') {
    map.value = '中华人民共和国'
    mapOption.series.name = mapOption.series.map = map.value
    mapOption.series.center = null
    mapOption.series.zoom = 1
    myChart.setOption(mapOption)
    mapChange()
  }
}

const visualMap: any = {
  left: 'right',
  realtime: false,
  calculable: true,
  inRange: {
    color: ['lightskyblue', 'yellow', 'orangered']
  },
  outOfRange: {
    color: '#eee'
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
    bottom: 30,
    left: 140,
    right: 90
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
    label: {
      show: true,
      position: 'right'
    },
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
  <div ref="main" style="width:100vw;height:100vh"></div>
  <div style="z-index:2;top:0;left:0;position:absolute;width:100vw">
    <div style="display:flex;flex-direction:column">
      <h2 style="text-align:center">{{ map }}{{ date }}{{ product }}</h2>
      <div style="display:flex" :style="{'justify-content':modeIsMap?'space-between':'flex-end'}">
        <div v-show="modeIsMap">
          <ul>
            <li><label><input type="radio" @change="productChange('全部产品')" name="product" checked/>全部产品</label>
            </li>
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
        <button style="width:10em;height:2em" @click="modeClick">{{
            modeIsMap ? '切换为柱状图显示' : '切换为地图显示'
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  display: inline-block;
  margin: 5px;
}
</style>
