import {http, HttpResponse} from 'msw'
import {faker} from '@faker-js/faker'

/* mock和请求处理器 */

// 生成模拟用户数据
function createMockUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  }
}

export const handlers = [
  // 获取用户列表
  http.get('/mk/users', () => {
    const list = Array.from({length: 5}, createMockUser)
    return HttpResponse.json({
      code: 0,
      message: '成功',
      data: list,
    })
  }),
  // 获取用户
  http.get('/mk/user/:id?', ({params}) => {
    let id = params.id
    if (!id) {
      return HttpResponse.json({
        code: 404,
        message: '用户不存在',
        data: null,
      }, {
        status: 404,
      })
    }
    const user = createMockUser
    user.id = id
    return HttpResponse.json({
      code: 0,
      message: '成功',
      data: user,
    })
  }),
  // 新增用户
  http.post('/mk/user', async ({request}) => {
    const body = await request.json()
    return HttpResponse.json({
      code: 0,
      message: '创建成功',
      data: {id: faker.string.uuid(), ...body},
    })
  }),
  // 修改用户
  http.patch('/mk/user', async ({request}) => {
    const body = await request.json()
    return HttpResponse.json({
      code: 0,
      message: '修改成功',
      data: body,
    })
  }),
  // 删除用户
  http.delete('/mk/user/:id?', async ({params}) => {
    let id = params.id
    return HttpResponse.json({
      code: 0,
      message: '删除成功',
      data: {id: id},
    })
  }),
]
