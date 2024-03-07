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
    // check if value exists
    // todo verify if token is valid, before updating the state
    authenticated.value = true; // update the state to authenticated

    const checkveri = await ApiService.get('/user/get/'+user_id.value);

    if(Object.keys(checkveri.data.detail).length === 0){
      verify.value = false;
    }else {
      if((checkveri.data.detail.verify_account == 'phone_active') ) {
      
      verify.value = false;
     // return navigateTo('/');
      }else{
    verify.value = true;
       return navigateTo('/');
      }
    }

  }
  if (!token.value && to?.name !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }
})

const obj = [
  {
    user_type: 1,
    user_type_name:"ຜູ້​ບໍ​ລິ​ຫານ",
  },
  {
    user_type: 2,
    user_type_name:"ເຈົ້າໜ້າທີ່",
  },
  {
    user_type: 3,
    user_type_name:"ປະຊາກອນ",
  },
 
];