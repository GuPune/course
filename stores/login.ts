import { defineStore } from 'pinia'



export const useLogin = defineStore({
  id: 'login',
  state: () => ({
    isActive :true,
    isActiveSig :false,
    isLoading :false,
    isActiveBar :false,
    isResetPassword :false,
    isResetPasswordOTP :true,
    form: {
        username: "",
        password: "",
    },
    formreset: {
      user: "",
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
    Formreset: (state) => {
      return state.formreset;
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


