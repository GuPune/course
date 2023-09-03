<template>
  <div class="tab-pane fade show" id="projects__one"
    role="tabpanel" aria-labelledby="projects__one">
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
                <label class="form__label">{{ $t("fname") }}</label>
                <input class="common__login__input" type="text" placeholder="ชื่อจริง" v-model="stores.form.user_firstname"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_firstname.$error,
                    'border-[#42d392] ': !v$.user_firstname.$invalid,
                  }" @change="v$.user_firstname.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.user_firstname.$error">{{
                  v$.user_firstname.$errors[0].$message
                }}</span>


              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">{{ $t("lname") }}</label>
                <input class="common__login__input" type="text" placeholder="นามสกุล" v-model="stores.form.user_lastname"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_lastname.$error,
                    'border-[#42d392] ': !v$.user_lastname.$invalid,
                  }" @change="v$.user_lastname.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.user_lastname.$error">{{
                  v$.user_lastname.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">{{ $t("username") }}</label>
                <input class="common__login__input" type="text" placeholder="ยูสเชอร" v-model="stores.form.user_name"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_name.$error,
                    'border-[#42d392] ': !v$.user_name.$invalid,
                  }" @change="v$.user_name.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.user_name.$error">{{
                  v$.user_name.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">{{ $t("email") }}</label>
                <input class="common__login__input" type="text" placeholder="อีเมล" v-model="stores.form.user_email"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_email.$error,
                    'border-[#42d392] ': !v$.user_email.$invalid,
                  }" @change="v$.user_email.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.user_email.$error">{{
                  v$.user_email.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label">{{ $t("tel") }} </label>
                <input class="common__login__input" type="text" placeholder="เบอรโทร" v-model="stores.form.user_phone" :class="{
                  'border-red-500 focus:border-red-500': v$.user_phone.$error,
                  'border-[#42d392] ': !v$.user_phone.$invalid,
                }" @change="v$.user_phone.$touch" autocomplete="off" @input="filterInput">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.user_phone.$error">{{
                  v$.user_phone.$errors[0].$message
                }}</span>

              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">{{ $t("password") }}</label>
                <input class="common__login__input" type="password" placeholder="รหัสผ่าน"
                  v-model="stores.form.user_password" :class="{
                    'border-red-500 focus:border-red-500': v$.user_password.$error,
                    'border-[#42d392] ': !v$.user_password.$invalid,
                  }" @change="v$.user_password.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.user_password.$error">{{
                  v$.user_password.$errors[0].$message
                }}</span>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">{{ $t("confirmpassword") }}</label>
                <input class="common__login__input" type="password" placeholder="ยืนยันรหัสผ่าน"
                  v-model="stores.form.user_confirmPassword" :class="{
                    'border-red-500 focus:border-red-500': v$.user_confirmPassword.$error,
                    'border-[#42d392] ': !v$.user_confirmPassword.$invalid,
                  }" @change="v$.user_confirmPassword.$touch" autocomplete="off">
                <span class="text-xs text-red-500" style="color:red" v-if="v$.user_confirmPassword.$error">{{
                  v$.user_confirmPassword.$errors[0].$message
                }}</span>
              </div>
            </div>
          </div>

          <div class="login__form d-flex justify-content-between flex-wrap gap-2">
            <div class="form__check">
               <input id="accept_pp" type="checkbox" v-model="stores.form.accp"> <label for="accept_pp">Accept the
                Terms and Privacy Policy</label>
            </div>
          </div>
            <span class="text-xs text-red-500" style="color:red" v-if="v$.accp.$error">{{ v$.accp.$errors[0].$message
          }}</span>
          <div class="login__button" @click="register()">
            <a class="default__button">{{ $t("singup_title") }}</a>
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
import { required, email, sameAs, minLength, helpers,numeric } from '@vuelidate/validators';
import Swal from 'sweetalert2';

const router = useRouter();
const store = useLogin()
const stores = RegisterStore()


   
const { getisActive } = storeToRefs(store);
const { formDataregister } = storeToRefs(stores);


const { regsiter } = RegisterStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const { ResetForm } = RegisterStore();//Action

const rules = computed(() => {
  return {
    user_firstname: {
      required: helpers.withMessage('The First name field is required', required),
      minLength: minLength(6),
    },
    user_lastname: {
      required: helpers.withMessage('The Last name field is required', required),
      minLength: minLength(6),
    },
    user_name: {
      required: helpers.withMessage('The username field is required', required),
      minLength: minLength(6),
    },
    user_email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    user_password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
    user_phone: {
      required: helpers.withMessage('The tel field is required', required),
      
      minLength: minLength(6),
    },
    user_confirmPassword: {
      required: helpers.withMessage('The password confirmation field is required', required),
     sameAs: helpers.withMessage("Passwords don't match", sameAs(stores.form.user_password)),
    },
    accp: {
      required: helpers.withMessage('Accept the Terms and Privacy Policy', required),
      sameAs: helpers.withMessage("Passwords don't xxx", sameAs(true)),
    },

  };
});

const v$ = useVuelidate(rules, formDataregister);



const filterInput = async (event) => {
   stores.form.user_phone = event.target.value.replace(/\D/g, '');

}
const register = async () => {

  v$.value.$validate();
  if (!v$.value.$error) {
   const regis = await regsiter(formDataregister); // call authenticateUser and pass the user object
   if(regis == true){
     await Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'สมัครสมาชิกเรียบร้อย',
  showConfirmButton: false,
  timer: 1500
})
 await ResetForm();
router.push('/login');
   }else{
    Swal.fire({
        title: 'ไม่สำเร็จ!',
        text: 'สมัครสมาชิกไม่สำเร็จ!',
        icon: 'error',
        
      });

   }
   
  
  }

};




</script>
