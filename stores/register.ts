import { defineStore } from 'pinia'
import ApiService from '../services/api.service';





export const RegisterStore = defineStore({
  id: 'register',
  state: () => ({
    isLoading: false,
    filteredText:"",
    form: {
      user_prefrix: null,
      user_firstname: "",
      user_lastname: "",
      user_name: "",
      user_email: "",
      user_type: 3,
      user_phone: "",
      user_password: "",
      active: 1,
      user_confirmPassword: "",
      accp: null,
    },
  }),
  getters: {

    getisLoading: (state) => {
      return state.isLoading;
    },
    formDataregister: (state) => {
      return state.form;
    },



  },
  actions: {

    async regsiter() {
    
      try {
        const data = await ApiService.post('/user/create', this.form).then(response => {
          if (response.data == "") {
            return false;
          } else {
            return true;
          }
        });
        return data
      } catch (error) {
        return false;
      } finally {

      }

    },

    async ResetForm() {
this.form.user_firstname = "";
this.form.user_lastname = "";
this.form.user_name = "";
this.form.user_email = "";
this.form.user_type = 3;
this.form.user_phone = "";
this.form.user_password = "";
this.form.active = 1;
this.form.user_confirmPassword = "";
this.form.accp = null;
 
    },

    async FitterString(value) {
      const filteredValue = value.replace(/[^\w\s]/gi, '');
    }
  }
})


