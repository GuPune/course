import { defineStore } from 'pinia';
import axios from 'axios';
import { useEnvStore } from '@/stores/env'
import ApiService from '../services/api.service';

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
 
  state: () => ({
    authenticated: false,
    selectProfile:'profile',
    verify: false,
    loading: false,
    alert :false,
    user_id :null,
    formuser:{
      user_email:null,
      user_firstname:null,
      user_id:null,
      user_lastname:null,
      user_name:null,
      user_phone:null,
      user_type:null,
      user_type_name:null,
    },
    formdetail:{
      verify_account:null,
      identification_number:null,
      user_img:null,
      user_birthday:null,
      user_address:null,
      location:null,
      country:null,
    },
    type:[
      {
        user_type: 1,
        user_type_name:"ผู้ดูแลระบบ",
      },
      {
        user_type: 2,
        user_type_name:"เจ้าหน้าที่",
      },
      {
        user_type: 3,
        user_type_name:"ประชาชน",
      },
     
    ],
    error:{
      status:false,
      message:"Login ไม่สำเร็จ"
    },
  }),
  getters: {
    load(state) {
      return state.loading;
    },
    alertlogin: (state) => {
      return state.error;
    },
  },
  
  actions: {
    
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      try {
        const { data } = await useFetch('/user/login', {
          method: 'post',
          baseURL:useEnvStore().apidev,
          headers: new Headers({
            'Authorization': 'ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p', 
            'Content-Type': 'application/json'
        }), 
          body: {
            "user_name": username,
            "user_password": password
        },
        });

        if (data.value) {
         
          const token = useCookie('token'); // useCookie new hook in nuxt 3
          const user_id = useCookie('user_id'); // useCookie new hook in nuxt 3
          token.value = "ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p"; // set token to cookie
          user_id.value = data.value.user_id; // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
          this.status_login = true;
          this.user_id = data.value.user_id;
          return true;
        }else{
          this.status_login = false;
          this.alert = true; 
          return false;
        }

        // if (response.error.value.statusCode) {
        //   console.log('if 2');
        //   this.status_login = false;

        // }
      

      } catch (error) {
       this.status_login = false;
       return false;
      } finally {
     
      }
    },
    logUserOut() {
      const token = useCookie('token'); 
      const user_id = useCookie('user_id'); 
      this.authenticated = false; 
      this.verify = false; 
      token.value = null; // clear the token cookie
      user_id.value = null;
      this.loading = false;
    },

    async getProfile() {
      console.log(this.user_id);
try {
  const profile = await ApiService.get('/user/get/'+this.user_id).then(response => {
    if(response.data == ''){
      return false;
    }else {
      console.log(response.data.detail);
      const type = this.type.find(el => el.user_type === response.data.user_type);
      this.formuser.user_email = response.data.user_email
      this.formuser.user_firstname = response.data.user_firstname
      this.formuser.user_lastname = response.data.user_lastname
      this.formuser.user_name = response.data.user_name
      this.formuser.user_phone = response.data.user_phone
      this.formuser.user_type = response.data.user_type
      this.formuser.user_id = response.data.user_id
      this.formuser.user_type_name = type?.user_type_name


      this.formdetail.verify_account = response.data.detail.verify_account
      this.formdetail.identification_number = response.data.detail.identification_number
      this.formdetail.user_img = response.data.detail.user_img
      this.formdetail.user_birthday = response.data.detail.user_birthday
      this.formdetail.user_address = response.data.detail.user_address
      this.formdetail.location = response.data.detail.location
      this.formdetail.country = response.data.detail.country
    
      return true;
    }
  });
  return profile
} catch (error) {
  return false;
}
    },


    async SelectProfile(item) {
      this.selectProfile = item
    }   
  },
});

// {"__v_isShallow":false,"__v_isRef":true,"_rawValue":null,"_value":null}