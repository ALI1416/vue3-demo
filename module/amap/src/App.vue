<script lang="ts" setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import {onMounted} from 'vue'

// 文档
// https://lbs.amap.com/api/javascript-api-v2/summary
// https://lbs.amap.com/api/javascript-api-v2/documentation

let map: any
let AMap: any
let startIcon: any
let endMarker: any

declare global {
  /**
   * 高德地图安全配置
   */
  namespace _AMapSecurityConfig {
    /**
     * 安全密钥
     */
    let securityJsCode: string
  }
}

globalThis._AMapSecurityConfig = {
  // 安全密钥
  securityJsCode: '1',
}

async function initMap() {
  AMap = await AMapLoader.load({
    // Web端开发者Key
    key: '1',
    // JSAPI版本
    version: '2.0',
    // 插件
    plugins: [
      'AMap.Scale',
      'AMap.ToolBar',
      'AMap.ControlBar',
      'AMap.MapType',
      'AMap.HawkEye',
      'AMap.Geolocation',
    ],
  })

  map = new AMap.Map(
      // 地图容器id
      'container',
      {
        // 3D地图模式
        viewMode: '3D',
        // 地图级别
        zoom: 15,
        // 地图中心点位置
        // 坐标拾取器 https://lbs.amap.com/tools/picker
        center: [116.587116, 35.415117],
      })
  // 地图类型
  map.addControl(new AMap.MapType())
  // 鹰眼
  map.addControl(new AMap.HawkEye({
    position: {bottom: '20px', left: '0px'},
    // 展开
    opened: true,
  }))
  // 比例尺
  map.addControl(new AMap.Scale({position: {bottom: '20px', left: '160px'}}))
  // 旋转
  map.addControl(new AMap.ControlBar({position: {bottom: '150px', right: '0px'}}))
  // 定位
  const geolocation = new AMap.Geolocation({
    position: {bottom: '100px', right: '30px'},
    // 高精度定位
    enableHighAccuracy: true,
    // 定位超时时间(毫秒)
    timeout: 10000,
    // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见
    zoomToAccuracy: true,
  })
  map.addControl(geolocation)
  // 缩放
  map.addControl(new AMap.ToolBar({position: {bottom: '20px', right: '30px'}}))
  // 文本
  const text = new AMap.Text({
    text: '政府',
    position: [116.587116, 35.415117],
    style: {
      'background-color': 'red',
    },
  })
  text.setMap(map)
  // 点标记
  // 起点
  startIcon = new AMap.Icon({
    // 图标尺寸
    size: [25, 34],
    // 图标的取图地址
    image: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
    // 图标所用图片大小
    imageSize: [135, 40],
    // 图标取图偏移量
    imageOffset: [-9, -3],
  })
  // 终点
  const endIcon = new AMap.Icon({
    size: [25, 34],
    image: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
    imageSize: [135, 40],
    imageOffset: [-95, -3],
  })
  endMarker = new AMap.Marker({
    position: [116.587116, 35.415117],
    icon: endIcon,
    offset: [-13, -30],
  })
  map.add(endMarker)

  // 定位
  // https://lbs.amap.com/api/javascript-api-v2/documentation#geolocationcallback
  geolocation.getCurrentPosition(function (status: 'complete' | 'error', result: any) {
    if (status === 'complete') {
      onComplete(result)
    } else {
      onError(result)
    }
  })
}

function onComplete(data: any) {
  console.log('定位失败', data)
  // alert('定位失败' + JSON.stringify(data))
  const startMarker = new AMap.Marker({
    position: [data.position.lng, data.position.lat],
    icon: startIcon,
    offset: [-13, -30],
  })
  map.add(startMarker)
  let p1 = startMarker.getPosition()
  let p2 = endMarker.getPosition()
  // 线
  const line = new AMap.Polyline()
  line.setPath([p1, p2])
  line.setMap(map)
  let textPos = p1.divideBy(2).add(p2.divideBy(2))
  let distance = Math.round(p1.distance(p2))
  // 显示距离
  const distanceText = new AMap.Text({
    text: distance + '米',
    position: textPos,
  })
  distanceText.setMap(map)
  map.setFitView()
}

function onError(data: any) {
  console.log('定位失败', data)
  alert('定位失败' + JSON.stringify(data))
  map.setCenter([116.587116, 35.415117])
  map.setFitView()
}

onMounted(() => {
  initMap()
})
</script>

<template>
  <div id="container"></div>
</template>

<style>
#container {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  outline: none;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}
</style>
