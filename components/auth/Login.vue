<template>
  <div
    class="tab-pane fade"
    v-bind:class="{ active: getisActive, show: getisActive }"
    id="projects__one"
    role="tabpanel"
    aria-labelledby="projects__one"
  >
    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">{{ $t("login") }}</h5>
          <p class="login__description">
            {{ $t("log_on_longtitle") }}
            
          </p>
        </div>
        <form action="#"> 
          <div class="login__form">
            <label class="form__label">{{ $t("username") }} {{ $t("or") }} {{ $t("email") }}  {{ $t("or") }} {{ $t("tel") }}</label>
            <input
              class="common__login__input"
              type="text"
              placeholder="ຊື່ຜູ້ໃຊ້"
              v-model="formData.username"
              :class="{
                'border-red-500 focus:border-red-500': v$.username.$error,
                'border-[#42d392] ': !v$.username.$invalid,
              }"
              @change="v$.username.$touch"
              autocomplete="off"
            />

            <span v-if="locale == 'la'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.username.$error"
              >{{ $t("form_login_user") }}</span
            >
            
            </span>
            <span v-if="locale == 'en'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.username.$error"
              >{{ $t("form_login_user") }}</span
            >
                      
            </span>
             <span v-if="locale == 'th'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.username.$error"
              >{{ $t("form_login_user") }}</span
            >
              
            </span>
          </div>
          <div class="login__form">
            <label class="form__label">{{ $t("password") }}</label>
            <input
              class="common__login__input"
              type="password"
              placeholder="ລະຫັດຜ່ານ"
              v-model="formData.password"
              id="password"
              name="password"
              :class="{
                ' border-red-500 focus:border-red-500': v$.password.$error,
                'border-[#42d392]': !v$.password.$invalid,
              }"
              @change="v$.password.$touch"
            />
      
            <span v-if="locale == 'la'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.password.$error"
              >{{ $t("form_login_pass") }}</span
            >
            
            </span>
            <span v-if="locale == 'en'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.password.$error"
              >{{ $t("form_login_pass") }}</span
            >
                      
            </span>
             <span v-if="locale == 'th'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.password.$error"
              >{{ $t("form_login_pass") }}</span
            >
              
            </span>
            <div id="emailHelp" class="form-text"><nuxt-link to="/resetpassword">{{ $t("forget_pass") }}</nuxt-link></div>
          </div>
          <div
            class="login__form d-flex justify-content-between flex-wrap gap-2"
          >
        </div>

        
          <div class="login__button" @click="login()">
            <a class="default__button">{{ $t("log_on_title") }}</a>
          </div>
        </form>
        <!--   
                                      <div class="login__social__option">
                                          <p>or Log-in with</p>
  
                                
                                      </div>
                                      <div class="login__button"  @click="login()">
                                              <a class="default__button" style="width: 100%;">OTP</a>
                                          </div>
   -->
      </div>

       <!-- <v-select v-model="store.selectedOption" :options="store.books" label="title"></v-select>

       {{store.selectedOption}} -->
    </div>
  </div>
</template>
<script setup>

import "vue-select/dist/vue-select.css";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { useRoute } from "vue-router";
import { useLogin } from "@/stores/login";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();

const router = useRouter();
const store = useLogin();
const useError = useAuthStore();

const { getisActive } = storeToRefs(store);
const { alertlogin } = storeToRefs(useError);

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

// const formData = reactive({
//   email: '',
//   password: '',
//   confirmPassword: null,
// });


const options = [{country: 'Canada', code: 'CA'},];

const formData = reactive({
  username: "",
  password: "",
  confirmPassword: null,
});

// onMounted(() => {
//  this.select2 = $(this.$el)
//       .find('select')
//       .select2({
//         placeholder: "xxx",
       
//         data: store.options
//       })
//       .on('select2:select select2:unselect', ev => {
//         this.$emit('update:modelValue', this.select2.val());
//         this.$emit('select', ev['params']['data']);
//       });
//     this.setValue(this.modelValue);
 
// });





const rules = computed(() => {
  return {
    username: {
      required: helpers.withMessage("The Username field is required", required),
      //   email: helpers.withMessage('Invalid email format', email),
      minLength: minLength(4),
    },
    password: {
      required: helpers.withMessage("The password field is required", required),
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const login = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    let login = await authenticateUser(formData);
    if (login === true) {
      const profile = await useError.getProfile();
if((useError.formdetail.verify_account == null) || (useError.formdetail.verify_account == 'phone_unactive')) {
  router.push("/verifyconfirm");
}else {
  router.push("/");
}
        

      console.log(profile)
    //  router.push("/verifyconfirm");
    }

  //  setTimeout(function() {
  //   if (login === true) {
  //     router.push("/");
  //   }
  //   }, 1000);
  
  }

  //  v$.value.$validate();
  //await authenticateUser(formData); // call authenticateUser and pass the user object
};
</script>
