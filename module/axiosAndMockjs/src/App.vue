<template>
  <button @click="fetchGet">通过fetch发送get请求</button>
  <br>
  <button @click="get">通过axios发送get请求</button>
  <br>
  <button @click="post">通过axios发送post请求，并携带参数</button>
  <br>
  <button @click="axiosCustom">通过axios发送自定义请求</button>
  <br>
  <button @click="axiosAll">通过axios.all并发请求</button>
  <br>
  <button @click="axiosAllSpread">通过axios.all并发请求，使用spread分离结果</button>
  <br>
  <button @click="httpCustom1">自定义网络请求</button>
  <br>
  <button @click="cross">跨域</button>
  <br>
  <button @click="mock">mock</button>
  <br>
  <button @click="mockRegx">mockRegx</button>
</template>

<script setup>
import axios from 'axios'
// 导入自定义网络请求
import {httpCustom} from "./netword/request";

let api = 'http://httpbin.org'

/* 全局配置axios.defaults */
// axios.defaults.timeout=5000
// axios.defaults.baseURL='http://httpbin.org'

// 通过fetch发送get请求
async function fetchGet() {
  const res = await fetch(api + '/get');
  const json = await res.json();
  console.log(res);
  console.log(json);
}

// 通过axios发送get请求
function get() {
  axios.get(api + '/get').then(res => {
    console.log(res);
    // 返回数据在data里面
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
}

// 通过axios发送post请求，并携带参数
function post() {
  axios.post(api + '/post', {
    a: '1',
    b: '2'
  }).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
}

// 通过axios发送自定义请求
function axiosCustom() {
  axios({
    url: api + '/post',
    method: 'post',
    params: {
      a: '1',
      b: '2'
    },
    data: {
      c: '3',
      d: '4'
    }
  }).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
}

// 通过axios.all并发请求
function axiosAll() {
  axios.all([
    axios(api + '/get'),
    axios.post(api + '/post', {
      a: '1',
      b: '2'
    })]).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

// 通过axios.all并发请求，使用spread分离结果
function axiosAllSpread() {
  axios.all([
    axios(api + '/get'),
    axios.post(api + '/post', {
      a: '1',
      b: '2'
    })]).then(axios.spread((res1, res2) => {
    console.log(res1, res2);
  })).catch(err => {
    console.log(err);
  })
}

// 自定义网络请求
function httpCustom1() {
  httpCustom({
    url: '/get'
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

// 跨域请求
function cross() {
  axios.get('/api/web201605/js/herolist.json').then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
}

// 使用mock生成数据
function mock() {
  axios.get('/user/info').then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
}

// mock正则匹配
function mockRegx() {
  axios.get('/admin/login').then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
}

</script>
