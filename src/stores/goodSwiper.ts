import { defineStore } from 'pinia';

export const useGoodSwiperStore = defineStore('goodswiper', {
  state: () => {
    return {
      modal: false,
      topBool: false,
      current: 0,
      total: 0
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    toggleModal() {
      this.modal = !this.modal;
    },
    toggleTopBool(val: boolean) {
      this.topBool = val;
    },
    setCurrentTotal({ current, total }: { current: number; total: number }) {
      this.current = current;
      this.total = total
    }
  },
});