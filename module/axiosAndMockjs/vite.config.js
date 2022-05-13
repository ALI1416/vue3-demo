import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 服务器没开启跨域时，前端使用代理也能访问
    proxy: {
      // 代理前缀
      '/api/': {
        // 代理目标地址
        target: 'https://pvp.qq.com',
        // 开启跨域
        changeOrigin: true,
        // 重写URL，把/api/前缀用正则表达式替换掉
        rewrite: path => path.replace(/^\/api\//, '/')
      }
    }
  }
})
