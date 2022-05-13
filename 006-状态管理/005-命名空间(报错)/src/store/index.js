import {createStore} from 'vuex'
// 导入用户模块
import user from "./modules/user";

// 创建一个新的store实例
const store = createStore({
  state() {
    return {
      num05: 0.5,
      num10: 10
    }
  },
  // 模块
  modules: {
    // 用户模块
    user
  }
})

export default store
