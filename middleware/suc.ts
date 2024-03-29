import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';
import ApiService from '../services/api.service';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const { verify } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies
  const user_id = useCookie('user_id'); // get token from cookies
  const User = useAuthStore();
  User.user_id = user_id.value;
  

  if (token.value) {
    authenticated.value = true; // update the state to authenticated
    const checkveri = await ApiService.get('/user/get/'+user_id.value);
   if(Object.keys(checkveri.data.detail).length === 0){

    verify.value = false;
    return navigateTo('/verifyconfirm');
  }else {
    if(checkveri.data.detail.verify_account == 'system_active') {
      verify.value = true;
    }else{
   
      verify.value = false;
      return navigateTo('/verifyconfirm');
    }
  }
  }



 

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'login') {
    
    return navigateTo('/');
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'login') {
    authenticated.value = false;
    abortNavigation();
    return navigateTo('/login');
  }
})