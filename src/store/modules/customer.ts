import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    refreshFlag: 0 // 版本号，变化就触发刷新
  }),
  actions: {
    triggerRefresh() {
      this.refreshFlag = Date.now()
    }
  }
})
