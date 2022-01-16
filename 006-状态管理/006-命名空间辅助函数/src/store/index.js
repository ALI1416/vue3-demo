import {createStore} from 'vuex'
import user from "./modules/user";

// 创建一个新的store实例
const store = createStore({
  // 模块
  modules: {
    user
  }
})

export default store
