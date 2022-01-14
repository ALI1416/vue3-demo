// 需要在main.js中导入才能运行
import Mock from 'mockjs'

// mock设置
Mock.setup({
  // 请求返回时间200-600ms
  timeout: '200-600'
})

// 创建请求
Mock.mock(
    // 请求地址
    '/user/info',
    // 请求方式
    'get',
    // 返回数据
    () => {
      return {
        firstName: 'Cheng',
        lastName: 'Kai'
      }
    }
)

Mock.mock(
    // 正则匹配前缀为/admin/
    /^\/admin\/.*/,
    'get',
    () => {
      return {
        firstName: 'A',
        lastName: 'Li'
      }
    }
)
