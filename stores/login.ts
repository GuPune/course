import { defineStore } from 'pinia'



export const useLogin = defineStore({
  id: 'login',
  state: () => ({
    isActive :true,
    isActiveSig :false,
    isLoading :false,
    form: {
        username: "",
        password: "",
    },
  }),
  getters: {
    getisActive: (state) => {
      return state.isActive;
    },
    getisLoading: (state) => {
      return state.isLoading;
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


