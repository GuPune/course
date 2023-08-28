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
    verify: false,
    loading: false,
    alert :false,
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
       //   localStorage.setItem('user', JSON.stringify(data.value))
          // token.value = data?.value?.token; // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
          this.status_login = true;
        const checkveri = await ApiService.get('/user/get/'+data.value.user_id);
        console.log(checkveri.data)
        // const data = await ApiService.get('/user/get/90').then(response => {
        
          //   console.log(Object.keys(response.data.detail).length);
       
          // });
          // if(Object.keys(response.data.detail).length === 0){
         
          // }else {
           
          // }
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
      } finally {
     
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      this.loading = false;
    },
  },
});

// {"__v_isShallow":false,"__v_isRef":true,"_rawValue":null,"_value":null}