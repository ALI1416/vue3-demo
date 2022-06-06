import {defineStore} from 'pinia'
// 导入其他仓库
import useOtherStore from './other-store'

// 第一个参数是仓库名称，第二个是数据
const store = defineStore('main', {
  // 数据
  state: () => ({
    count: 2,
    list: [
      {
        name: "apple",
        price: 2,
        num: 3,
      },
      {
        name: "banana",
        price: 3,
        num: 5,
      },
      {
        name: "peach",
        price: 6,
        num: 1,
      },
    ]
  }),
  // 计算属性：有缓存
  getters: {
    // 可以接收参数state
    totalPrice(state) {
      return state.list.reduce((pre, item) => {
        return pre + item.price * item.num
      }, 0)
    },
    doubleTotalPrice() {
      // 通过this访问其他getter(不要加括号)
      return this.totalPrice * 2;
    },
    fiveTotalPrice() {
      // 访问其他仓库的数据
      const otherStore = useOtherStore();
      return this.totalPrice * otherStore.num;
    }
  },
  // 动作：同步异步都可以
  actions: {
    increment() {
      // 通过this访问其他数据
      this.count++
    },
    async incrementNum(num) {
      // 异步
      const res = await fetch('http://httpbin.org/get');
      const json = await res.json();
      console.log(json);
      this.count += num;
    },
  }
})

export default store
