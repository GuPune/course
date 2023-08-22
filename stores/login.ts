import { defineStore } from 'pinia'



export const useLogin = defineStore({
  id: 'login',
  state: () => ({
    isActive :true,
    isActiveSig :false,
    isLoading :false,
    isActiveBar :false,
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
    getisActiveBar: (state) => {
      return state.isActiveBar;
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


