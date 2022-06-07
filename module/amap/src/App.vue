<template>
  <div id="container"></div>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import {onMounted, shallowRef} from "vue";

const map = shallowRef(null);

function initMap() {
  AMapLoader.load({
    // 申请好的Web端开发者Key，首次调用load时必填
    key: "6eaaf987a8c3d0a7c8871958345013e9",
    // 指定要加载的JSAPI的版本，缺省时默认为1.4.15
    version: "2.0",
    // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    // https://lbs.amap.com/api/jsapi-v2/guide/webcli/map-vue1
    // https://lbs.amap.com/api/jsapi-v2/guide/overlays/toolbar
    // https://lbs.amap.com/api/jsapi-v2/documentation#control
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.ControlBar', 'AMap.MapType', 'AMap.HawkEye', 'AMap.Geolocation'],
  }).then((AMap) => {
    map.value = new AMap.Map(
        // 设置地图容器id
        "container", {
          // 是否为3D地图模式
          viewMode: "3D",
          // 初始化地图级别
          zoom: 15,
          // 初始化地图中心点位置
          center: [116.587116, 35.415117],
        });
    // 比例尺
    map.value.addControl(new AMap.Scale({position: {bottom: '20px', left: '180px'}}));
    // 视野级别缩放
    map.value.addControl(new AMap.ToolBar({position: {bottom: '20px', right: '30px'}}));
    // 旋转、倾斜、复位
    map.value.addControl(new AMap.ControlBar({position: {bottom: '150px', right: '0px'}}));
    // 地图类型切换
    map.value.addControl(new AMap.MapType());
    // 鹰眼
    map.value.addControl(new AMap.HawkEye({position: {bottom: '20px', left: '0px'}, isOpen: true}));
    // 定位
    map.value.addControl(new AMap.Geolocation({position: {bottom: '100px', right: '30px'}}));
  }).catch(e => {
    console.log(e);
  })
}

onMounted(() => {
  initMap();
})
</script>

<style>
#container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 800px;
}
</style>