import axios from 'axios'

// 自定义网络请求
export function httpCustom(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 8000
  })

  // request拦截的作用：
  // 1、config有信息不符合服务器要求
  // 2、网络请求时，界面显示请求图标
  // 3、携带一些信息，比如token

  // request拦截器(配置，发送失败信息)
  instance.interceptors.request.use(config => {
    console.log('request发送成功拦截', config);
    // 拦截后还要返回
    return config;
  }, err => {
    console.log('request发送失败拦截', err);
  })
  // response拦截器(返回结果，返回的错误信息)
  instance.interceptors.response.use(res => {
    console.log('response接收成功拦截', res);
    // 拦截后还要返回(只返回data就可以，其他的是axios的信息)
    return res.data;
  }, err => {
    console.log('response接收错误拦截', err);
  })
  // 返回Promise
  return instance(config);
}
