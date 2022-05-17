import {defineStore} from 'pinia'

const otherStore = defineStore('other-store', {
  state: () => ({
    num: 5,
  }),
})

export default otherStore
