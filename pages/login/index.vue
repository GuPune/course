
  

<template>
    <div>

 
      <div class="loginarea">
              <div class="container">
                  <div class="row">
                                 <div class="col-xl-8 col-md-8 offset-md-2" data-aos="fade-up" v-if="useError.alert">
                                    <div class="alert alert-danger" role="alert">
                                     {{alertlogin.message}}
                            </div>
                        </div>
                      <div class="col-xl-8 col-md-8 offset-md-2" data-aos="fade-up">
                          <ul class="nav  tab__button__wrap text-center" id="myTab" role="tablist">
                              <li class="nav-item" role="presentation">
                                  <button class="single__tab__link" v-bind:class="{ active: getisActive }"  @click="store.toggleActiveClass()" data-bs-toggle="tab" data-bs-target="#projects__one" type="button">Login</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                  <button class="single__tab__link" data-bs-toggle="tab" v-bind:class="{ active: !getisActive }" @click="store.toggleActiveClass()" data-bs-target="#projects__two" type="button">Sign up</button>
                              </li>
                          </ul>
                      </div>
  
  
                      <div class="tab-content tab__content__wrapper" id="myTabContent" data-aos="fade-up">

              <Login></Login>
              
  <Register></Register>
  
  
                      </div>

   <Loading v-if="getisLoading"></Loading>
  
  
                  </div>
  
                  <div class=" login__shape__img educationarea__shape_image">
                      <img class="hero__shape hero__shape__1" src="img/education/hero_shape2.png" alt="Shape">
                      <img class="hero__shape hero__shape__2" src="img/education/hero_shape3.png" alt="Shape">
                      <img class="hero__shape hero__shape__3" src="img/education/hero_shape4.png" alt="Shape">
                      <img class="hero__shape hero__shape__4" src="img/education/hero_shape5.png" alt="Shape">
                  </div>


  
              </div>
          </div>
    </div>
  </template>






<script setup>

import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import Loading from '@/components/button/loading.vue';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useRoute } from 'vue-router'
import { useLogin } from '@/stores/login'
import { RegisterStore } from '@/stores/register'
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

const router = useRouter();
const store = useLogin()
const registerload = RegisterStore()
const useError = useAuthStore()

const { getisActive } = storeToRefs(store);

const { alertlogin } = storeToRefs(useError);

const { getisLoading } = storeToRefs(registerload);



const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

// const formData = reactive({
//   email: '',
//   password: '',
//   confirmPassword: null,
// });

useError.alert = false;
const formData = reactive({
  username: 'kminchelle',
  password: '0lelplR',
  confirmPassword: null,
});


const rules = computed(() => {
  return {
    username: {
      required: helpers.withMessage('The email field is required', required),
    //   email: helpers.withMessage('Invalid email format', email),
      minLength: minLength(6),
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, formData);



const login = async () => {



    v$.value.$validate();
  if (!v$.value.$error) {
    await authenticateUser(formData); 
      if (authenticated) {
        router.push('/');
      }
  }
   
 //  v$.value.$validate();
  //await authenticateUser(formData); // call authenticateUser and pass the user object
};




</script>



<style scoped>
.loading-page {
  position: fixed;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
