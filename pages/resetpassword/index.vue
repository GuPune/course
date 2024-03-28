
  

<template>
    <div>

 
      <div class="resetpassword">
              <div class="container">
                  <div class="row">
                                 <div class="col-xl-8 col-md-8 offset-md-2" data-aos="fade-up" v-if="store.isAlertFindUser">
                                    <div class="alert alert-danger" role="alert" style="text-align: center;">
                                      ບໍ່ສາມາດຊອກຫາບັນຊີໄດ້
                            </div>
                        </div>
                      <div class="tab-content tab__content__wrapper" id="myTabContent" data-aos="fade-up">
              <ResetPassword v-if="store.isResetPassword"></ResetPassword>

              <ResetPasswordOTP v-if="store.isResetPasswordOTP"></ResetPasswordOTP>
                      </div>

  
  
                  </div>


  
              </div>
          </div>
          <br>
    </div>
  </template>






<script setup>


import ResetPassword from '@/components/auth/Reset.vue';
import ResetPasswordOTP from '@/components/auth/ResetPassOtp.vue';

import Loading from '@/components/button/loading.vue';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useRoute } from 'vue-router'
import { useLogin } from '@/stores/login'
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

const router = useRouter();

const store = useLogin()


store.isResetPassword = true;
store.isResetPasswordOTP = false;
store.isAlertFindUser = false
store.formreset.otp = null;
store.formreset.user = null;
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
