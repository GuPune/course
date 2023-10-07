import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';
import ApiService from '../services/api.service';


export default defineNuxtRouteMiddleware(async (to, from) => {
 
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const { verify } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies
    const user_id = useCookie('user_id'); // get token from cookies
    const loggedIn = useCookie('loggedIn'); // get token from cookies
   
    if (!loggedIn.value) {
        const token = useCookie('token'); 
    const user_id = useCookie('user_id'); 
  authenticated.value = false;
  token.value = null; // clear the token cookie
  user_id.value = null;
  
 // abortNavigation();
 // return navigateTo('/login');
 }
})