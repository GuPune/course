import { defineStore } from 'pinia'

interface SelectnewInterface {
  selectnew: string;
}


export const newsPostStore = defineStore({
  id: 'news',
  state: () => ({
    isActiveNews:true,
    selectnew:"t"
  }),
  getters: {
    getisActiveNews: (state) => {
      return state.isActiveNews;
    },
    getselectNews: (state) => {
      return state.selectnew;
    },
   
  }, 
  actions: {
    
    async toggleActiveClass() {
    
      if (!this.isActiveNews) {
        this.isActiveNews = true;
      } else {
        this.isActiveNews = false;
      }
    },
    async toggleActiveClassselect({ selectnew }: SelectnewInterface) {

   console.log(selectnew);

   this.selectnew = selectnew;
    }

    
  
  }
})


