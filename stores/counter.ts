import { defineStore } from 'pinia';



export const useCounterStore = defineStore('counter.', {
  state: () => ({
    count: 1,
    n: 2,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {

     this.count++;
    },
  },
})