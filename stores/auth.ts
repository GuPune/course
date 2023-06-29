import { defineStore } from 'pinia';
import axios from 'axios';
import apiClient from '~/services/api.service';


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
    count:11
  }),
  getters: {
    load(state) {
      return state.loading;
    },
    alertlogin: (state) => {
      return state.error;
    }
  },
  
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3

this.error.status = true;
      // const { error, data, statusCode }: any = await useFetch('https://dummyjson.com/auth/login', {
      //   method: 'post',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: {
      //     username,
      //     password,
      //   },
      // });
      // if (data.value) {
      //   const token = useCookie('token'); // useCookie new hook in nuxt 3
      //   token.value = data?.value?.token; // set token to cookie
      //   this.authenticated = true; // set authenticated  state value to true
      // }
      // if (!data.value) {
      //   this.loading = true;
      // }

 

 
 

    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      this.loading = false;
    },
    ab() {
      this.loading = true;
     },
  },
});

// {"__v_isShallow":false,"__v_isRef":true,"_rawValue":null,"_value":null}