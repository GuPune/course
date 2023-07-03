import { defineStore } from 'pinia';
import axios from 'axios';
import { useEnvStore } from '@/stores/env'

interface UserPayloadInterface {
  username: string;
  password: string;
}





export const useAuthStore = defineStore('auth', {
 
  state: () => ({
    authenticated: false,
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
   

      const { error, data, statusCode }: any = await useFetch('/auth/login', {
        method: 'post',
        baseURL:useEnvStore().apidev,
        headers: { 'Content-Type': 'application/json' },
        body: {
          username,
          password,
        },
      });
    
      if (data.value) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = data?.value?.token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      }
      if (!data.value) {
        this.error.status = true;
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