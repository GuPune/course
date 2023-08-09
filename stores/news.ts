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
    newstranone:[],
    newscivilone:[],
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
    },
    async FetchNewTransId(id) {

    for (var i = 0, len = this.newstran.length; i < len; i++) {
      if(this.newstran[i].new_id = id){
        this.newstranone = this.newstran[i]
        break;
      }
  } 

    },
    async FetchNewsCivilId(id) {
      for (var i = 0, len = this.newscivil.length; i < len; i++) {
        if(this.newscivil[i].new_id = id){
          this.newscivilone = this.newscivil[i]
          break;
        }
    } 
    
    }


  }
})


