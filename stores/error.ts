import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const ErrorStore = defineStore({
  id: 'error',
  state: () => ({
    error: null
  }),
  getters: {
   

  },


  actions: {
    async toggleActiveClass() {

    },

   

  },


})


