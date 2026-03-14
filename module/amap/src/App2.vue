<script lang="ts" setup>
import {Ref, ref} from 'vue'
import coordtransform from 'coordtransform'
import * as geolib from 'geolib'

const beginPosition = ref(false)
const positionInfo: Ref<GeolocationPosition> = ref()
const gcjLongitude = ref()
const gcjLatitude = ref()
const deviation = ref()

async function showPosition() {
  beginPosition.value = true
  positionInfo.value = await getPosition()
  let gcj = coordtransform.wgs84togcj02(positionInfo.value.coords.longitude, positionInfo.value.coords.latitude)
  gcjLongitude.value = gcj[0]
  gcjLatitude.value = gcj[1]
  deviation.value = geolib.getDistance(
      {longitude: positionInfo.value.coords.longitude, latitude: positionInfo.value.coords.latitude},
      {longitude: gcj[0], latitude: gcj[1]},
  )
  beginPosition.value = false
}

async function getPosition(): Promise<GeolocationPosition> {
  if (!navigator.geolocation) {
    throw new Error('您的浏览器不支持定位。')
  }
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position)
        },
        (error) => {
          let errorMsg: string
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMsg = '您拒绝了定位请求，请允许定位权限。'
              break
            case error.POSITION_UNAVAILABLE:
              errorMsg = '位置信息不可用。'
              break
            case error.TIMEOUT:
              errorMsg = '请求超时，请重试。'
              break
            default:
              errorMsg = '未知错误。'
              break
          }
          reject(new Error(errorMsg))
        },
    )
  })
}

</script>

<template>
  <button @click="showPosition">获取位置信息</button>
  <h3>位置信息{{ beginPosition ? '(正在定位中)' : '' }}</h3>
  <p>WGS84经度：{{ positionInfo?.coords?.longitude }}</p>
  <p>WGS84纬度：{{ positionInfo?.coords?.latitude }}</p>
  <p>GCJ02经度：{{ gcjLongitude }}</p>
  <p>GCJ02纬度：{{ gcjLatitude }}</p>
  <p>WGS84与GCJ02偏差：{{ gcjLatitude }}米</p>
  <p>精度：{{ positionInfo?.coords?.accuracy }}米</p>
  <p>海拔：{{ positionInfo?.coords?.altitude }}米</p>
  <p>海拔精度：{{ positionInfo?.coords?.altitudeAccuracy }}米</p>
  <p>方向角度：{{ positionInfo?.coords?.heading }}度</p>
  <p>速度：{{ positionInfo?.coords?.speed }}米/秒</p>
</template>
