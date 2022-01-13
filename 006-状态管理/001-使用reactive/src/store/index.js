import {reactive} from 'vue'

const store = {
  // 使用响应式对象reactive来保存全局状态
  state: reactive({
    msg: 'message'
  }),
  // 设置
  setMsg(value) {
    this.state.msg = value;
  }
}

export default store
