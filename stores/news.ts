import { defineStore } from 'pinia'
import axios from 'axios';
import apiClient from '~/services/api.service';


export const NewsPostStore = defineStore({
  id: 'news',
  state: () => ({
    isActiveNews,
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