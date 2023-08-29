<template>
  <div class="tab-pane fade" v-bind:class="{ active: !getisActive, show: !getisActive }" id="projects__two"
    role="tabpanel" aria-labelledby="projects__two">
    <div class="col-xl-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">Sing Up</h5>
          <p class="login__description">Already have an account? <a href="#" data-bs-toggle="modal"
              data-bs-target="#registerModal">Log In</a></p>
        </div>


        <form action="#">
          <div class="row">
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">First Name</label>
                <input class="common__login__input" type="text" placeholder="First Name" v-model="formDataregister.fname"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.fname.$error,
                    'border-[#42d392] ': !v$.fname.$invalid,
                  }" @change="v$.fname.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.fname.$error">{{
                  v$.fname.$errors[0].$message
                }}</span>


              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">Last Name</label>
                <input class="common__login__input" type="text" placeholder="Last Name" v-model="formDataregister.lname"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.lname.$error,
                    'border-[#42d392] ': !v$.lname.$invalid,
                  }" @change="v$.lname.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.lname.$error">{{
                  v$.lname.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">Username</label>
                <input class="common__login__input" type="text" placeholder="Username" v-model="formDataregister.username"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.username.$error,
                    'border-[#42d392] ': !v$.username.$invalid,
                  }" @change="v$.username.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.username.$error">{{
                  v$.username.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">Email</label>
                <input class="common__login__input" type="text" placeholder="Your Email" v-model="formDataregister.email"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.email.$error,
                    'border-[#42d392] ': !v$.email.$invalid,
                  }" @change="v$.email.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.email.$error">{{
                  v$.email.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label">Tel </label>
                <input class="common__login__input" type="text" placeholder="Tel" v-model="formDataregister.tel" :class="{
                  'border-red-500 focus:border-red-500': v$.tel.$error,
                  'border-[#42d392] ': !v$.tel.$invalid,
                }" @change="v$.tel.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.tel.$error">{{
                  v$.tel.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">Password</label>
                <input class="common__login__input" type="password" placeholder="Password"
                  v-model="formDataregister.password" :class="{
                    'border-red-500 focus:border-red-500': v$.email.$error,
                    'border-[#42d392] ': !v$.email.$invalid,
                  }" @change="v$.email.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.password.$error">{{
                  v$.password.$errors[0].$message
                }}</span>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">Re-Enter Password</label>
                <input class="common__login__input" type="password" placeholder="Re-Enter Password"
                  v-model="formDataregister.confirmPassword" :class="{
                    'border-red-500 focus:border-red-500': v$.email.$error,
                    'border-[#42d392] ': !v$.email.$invalid,
                  }" @change="v$.email.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.confirmPassword.$error">{{
                  v$.confirmPassword.$errors[0].$message
                }}</span>
              </div>
            </div>
          </div>

          <div class="login__form d-flex justify-content-between flex-wrap gap-2">
            <div class="form__check">
              <input id="accept_pp" type="checkbox" v-model="formDataregister.accp"> <label for="accept_pp">Accept the
                Terms and Privacy Policy</label>

            </div>





          </div>
          <span class="text-xs text-red-500" style="color:red" v-if="v$.accp.$error">{{ v$.accp.$errors[0].$message
          }}</span>

          <div class="login__button" @click="register()">
            <a class="default__button">Submit</a>
          </div>
        </form>




      </div>
    </div>

  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { RegisterStore } from '@/stores/register'; // import the auth store we just created
import { useRoute } from 'vue-router'
import { useLogin } from '@/stores/login'
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

const router = useRouter();
const store = useLogin()


const { getisActive } = storeToRefs(store);



const { regsiter } = RegisterStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

// const formData = reactive({
//   email: '',
//   password: '',
//   confirmPassword: null,
// });


const formDataregister = reactive({
  username: 'xxxxxx',
  password: '12345678',
  email: 'rrrr@gmail.com',
  fname: 'xxxxxxxx',
  lname: 'xxxxxxxx',
  tel: '0833268813',
  confirmPassword: '12345678',
  accp: null,
});


const rules = computed(() => {
  return {
    fname: {
      required: helpers.withMessage('The First name field is required', required),
      minLength: minLength(6),
    },
    lname: {
      required: helpers.withMessage('The Last name field is required', required),
      minLength: minLength(6),
    },
    username: {
      required: helpers.withMessage('The username field is required', required),
      minLength: minLength(6),
    },
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
    tel: {
      required: helpers.withMessage('The tel field is required', required),
      minLength: minLength(6),
    },
    confirmPassword: {
      required: helpers.withMessage('The password confirmation field is required', required),
      sameAs: helpers.withMessage("Passwords don't match", sameAs(formDataregister.password)),
    },
    accp: {
      required: helpers.withMessage('Accept the Terms and Privacy Policy', required),
      sameAs: helpers.withMessage("Passwords don't xxx", sameAs(true)),
    },

  };
});

const v$ = useVuelidate(rules, formDataregister);



const register = async () => {



  //   v$.value.$validate();
  // if (!v$.value.$error) {
  //   await authenticateUser(formData); 
  //     if (authenticated) {
  //       router.push('/');
  //     }
  // }
  v$.value.$validate();
  if (!v$.value.$error) {
    await regsiter(formDataregister); // call authenticateUser and pass the user object
  }

};




</script>
