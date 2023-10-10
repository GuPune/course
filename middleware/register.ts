import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';
import ApiService from '../services/api.service';
import Cookies from 'js-cookie';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const { verify } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies
  const user_id = useCookie('user_id'); // get token from cookies
  const loggedIn = useCookie('loggedIn'); // get token from cookies
  const User = useAuthStore();
  User.user_id = user_id.value;

;
  if (token.value) {
    return navigateTo('/');
  }
})