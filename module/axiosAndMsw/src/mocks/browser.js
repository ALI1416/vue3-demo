import {setupWorker} from 'msw/browser'
import {handlers} from './handlers'

/* 创建浏览器环境实例 */
const worker = setupWorker(...handlers)

/**
 * 启动函数
 */
export function startWorker() {
  return worker.start({
    // 如何处理未匹配到handler的请求
    // bypass:放行，让请求正常发送到真实服务器
    // warn:控制台打印警告
    onUnhandledRequest: 'bypass',
    // 指定mockServiceWorker.js的路径
    // 需要执行 npx msw init public/ --save 来生成mockServiceWorker.js文件
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
    // 关闭静默模式
    quiet: false,
  })
}

export {worker}
