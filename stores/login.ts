import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const useLogin = defineStore({
  id: 'login',
  state: () => ({
    isActive :true,
    isActiveSig :false,
    isLoading :false,
    isActiveBar :false,
    isResetPassword :true,
    isResetPasswordOTP :false,
    isAlertFindUser :false,
    form: {
        username: "",
        password: "",
    },

  formnewpassword: {
    user_firstname: "",
    user_lastname: "",
    user_name: "",
    user_email: "",
    user_type: 3,
    user_phone: "",
    user_password: "",
    active: 1,
    user_confirmPassword: "",
  },
    formreset: {
      user: "",
      otp:""
  },
  user_id:null

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
    },

    async checkUser() {
      
     try {
      const checkuser = await ApiService.get('/user/only/detail/'+this.formreset.user).then(response => {
       if(response.data){
        this.user_id = response.data[0].user_id;
        return true
       }else {
        return false
       }
      });
      return checkuser
    } catch (error) {
      return false;
    }
    },

    async getOtp() {
   
      const data = await ApiService.get('/user/otp/' + this.user_id).then(response => {
  
      });
      return true;
    },

    async verifyOTP() {
  
      const otp  = { otp_code: this.formreset.otp, user_id: this.user_id}; 
      // const send = await ApiService.put('/user/verify_otp', otp).then(response => {


      // });

      try {
        const send = await ApiService.put('/user/verify_otp', otp).then(response => {
        
          if(response.status === 200){
            const user_reset = localStorage.setItem('user_reset', this.user_id)
            return true;
          }else{
            return false;
          }
        });
        return send
      } catch (error) {
        return false;
      }

     return send;
    },

    async updatePassword() {
      const resetpass  = { user_name: this.formnewpassword.user_name,
        user_firstname: this.formnewpassword.user_firstname,
        user_phone: this.formnewpassword.user_phone,
        user_lastname: this.formnewpassword.user_lastname,
        user_email: this.formnewpassword.user_email,
        user_password: this.formreset.user_password,
        user_type:3,
        active:1}; 

        try {
          const data = await ApiService.put('/user/update/' + this.user_id, resetpass).then(response => {
            if(response.status === 200){
              return true;
            }else{
              return false;
            }
          });
          return data
        } catch (error) {
          return false;
        }
      
     return true;
    },


    async getProfile() {
      try {
        const profile = await ApiService.get('/user/get/'+this.user_id).then(response => {
          if(response.data == ''){
            return false;
          }else {
        
  
      this.formnewpassword.user_firstname = response.data.user_firstname
      this.formnewpassword.user_lastname = response.data.user_firstname
      this.formnewpassword.user_name = response.data.user_firstname
      this.formnewpassword.user_email = response.data.user_email
      this.formnewpassword.user_type = response.data.user_type
      this.formnewpassword.user_phone = response.data.user_phone
      this.formnewpassword.active = 1
            return true;
          }
        });
        return profile
      } catch (error) {
        return false;
      }
          },


  

  }
})


