// 用户模块
import {COUNT_ADD} from "../mutations-types";

const user = {
  // 数据
  state() {
    return {
      count: 1
    }
  },
  // 计算属性
  getters: {
    // 方法参数第一个是state，第二个是其他getters，第三个是根节点rootState
    countX10(state) {
      return state.count * 10;
    },
    countX100(state, getters, rootState) {
      return getters.countX10 * rootState.num10;
    }
  },
  // 方法
  mutations: {
    // 方法参数第一个是state，第二个是传入的值payload
    increment(state) {
      state.count++;
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
    // 可以使用参数解构，将commit(state,rootState也可以)从context提取出来
    asyncCountAdd2({commit}, payload) {
      setTimeout(() => {
        commit('countAdd', payload)
      }, 200)
    },
    // 返回Promise
    asyncCountAdd3({commit, rootState}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > rootState.num05) {
            commit('countAdd', payload)
            resolve('ok')
          } else {
            reject('err')
          }
        }, 200)
      })
    }
  },
}

export default user
