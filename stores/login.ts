import { defineStore } from 'pinia'



export const useLogin = defineStore({
  id: 'login',
  state: () => ({
    isActive :true,
    isActiveSig :false,
    form: {
        username: "",
        password: "",
    },
  }),
  getters: {
    getisActive: (state) => {
      return state.isActive;
    },

  
  }, 
  actions: {
    async fetchLog() {


    },
    async toggleActiveClass() {
      
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }

  

  }
})


