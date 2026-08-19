import {createApp} from 'vue'
import App from './App.vue'

async function prepareApp() {
  // 只在开发环境启动msw
  if (import.meta.env.DEV) {
    try {
      const {startWorker} = await import('./mocks/browser')
      await startWorker()
    } catch (e) {
      console.error('msw启动失败:', e)
    }
  }
}

try {
  await prepareApp()
  createApp(App).mount('#app')
} catch (e) {
  console.log('vue启动失败', e)
}
