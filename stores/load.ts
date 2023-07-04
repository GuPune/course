import { defineStore } from 'pinia'



export const LoadingStore = defineStore({
  id: 'load',
  state: () => ({
    isLoading :true,
  }),
  getters: {
    getisLoading: (state) => {
      return state.isLoading;
    },
  }, 
  actions: {
    
  

  

  }
})


