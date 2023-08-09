import { defineStore } from 'pinia'
import ApiService from '../services/api.service';
interface SelectnewInterface {
  selectnew: string;
}


export const newsPostStore = defineStore({
  id: 'news',
  state: () => ({
    isActiveNews:true,
    selectnew:"t",
    newstran:[],
    newscivil:[],
    newstranscount:null,
    newscivilcount:null,
    formsearchnews: {
      page: 1,
      per_page: 200,
      search: '',
    },
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
   this.selectnew = selectnew;
    },

    async FetchNesTrans() {
      const data = await ApiService.post('/news/list?news_type=1', this.formsearchnews).then(response => {
        this.newstran = response.data.data
        this.newstranscount = response.data.data.length
        return true;
      });
    },

    async FetchNesCivil() {
      const data = await ApiService.post('/news/list?news_type=2', this.formsearchnews).then(response => {
        this.newscivil = response.data.data
        this.newscivilcount = response.data.data.length
        return true;
      });
    }

    

    
  
  }
})


