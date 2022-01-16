import {createStore} from 'vuex'
// 导入mutations常量
import {COUNT_ADD} from "./mutations-types";

// 创建一个新的store实例
const store = createStore({
  // 数据
  state() {
    return {
      count: 10
    }
  },
  // 计算属性
  getters: {
    // 方法参数第一个是state，第二个是其他getters
    countX10(state) {
      return state.count * 10;
    },
    countX100(state, getters) {
      return getters.countX10 * 10;
    }
  },
  // 方法
  mutations: {
    // 方法参数第一个是state，第二个是传入的值payload
    increment(state) {
      state.count++
    },
    // 使用常量定义方法名
    [COUNT_ADD](state, payload) {
      state.count += payload;
    }
  },
  // 异步方法
  actions: {
    // 方法参数第一个是context($store)，第二个是传入的值payload
    asyncCountAdd(context, payload) {
      // 延迟200ms
      setTimeout(() => {
        context.commit('countAdd', payload)
      }, 200)
    },
    // 可以使用参数解构，将commit(state也可以)从context提取出来
    asyncCountAdd2({commit}, payload) {
      setTimeout(() => {
        commit('countAdd', payload)
      }, 200)
    },
    // 返回Promise
    asyncCountAdd3({commit}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            commit('countAdd', payload)
            resolve('ok')
          } else {
            reject('err')
          }
        }, 200)
      })
    }
  },
  // 模块
  modules: {}
})

export default store
