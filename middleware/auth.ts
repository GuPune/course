import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';
import ApiService from '../services/api.service';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';



export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const { verify } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies
  const user_id = useCookie('user_id'); // get token from cookies
  const loggedIn = useCookie('loggedIn'); // get token from cookies
  const User = useAuthStore();
  User.user_id = user_id.value;


  //  if (!loggedIn.value) {
  //   const token = useCookie('token'); 
  //   const user_id = useCookie('user_id'); 
  //   authenticated.value = false;
  //   token.value = null; // clear the token cookie
  //   user_id.value = null;
    
  //   abortNavigation();
  //   return navigateTo('/login');
  //  }

  if (token.value) {
    authenticated.value = true; // update the state to authenticated
    const checkveri = await ApiService.get('/user/get/'+user_id.value).catch(({ response }) => {
     router.push('/maintenance'); // Replace with your error page route
    //  return navigateTo('/maintenance');
    });



   if(Object.keys(checkveri.data.detail).length === 0){
    verify.value = false;
    return navigateTo('/verifyconfirm');
  }else {
    if((checkveri.data.detail.verify_account == 'phone_active') || (checkveri.data.detail.verify_account == 'system_active') || (checkveri.data.detail.verify_account == 'system_unactive')) {
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