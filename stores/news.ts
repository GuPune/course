import { defineStore } from 'pinia'



export const newsPostStore = defineStore({
  id: 'news',
  state: () => ({
    isActiveNews:true
  }),
  getters: {
    getisActiveNews: (state) => {
      return state.isActiveNews;
    },
   
  }, 
  actions: {
    
    async toggleActiveClass() {
      
      if (!this.isActiveNews) {
        this.isActiveNews = true;
      } else {
        this.isActiveNews = false;
      }
    }

    
  
  }
})


