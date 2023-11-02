<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">{{ $t("otp") }}</h5>
          <p class="login__description">
            {{ $t("after_click") }} <a class="btn btn-info" href="#" @click="getotp()">{{ $t("get_otp") }}</a>{{ $t("title_con_otp") }}
          </p>
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0">{{ $t("otp_code") }}</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="Enter your OTP Code"
                v-model="store.formreset.otp"
              
              />

           

            <span v-if="locale == 'la'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.otp.$error"
              >{{ $t("form_reset_pass_otp") }}</span
            >
            
            </span>
            <span v-if="locale == 'en'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.otp.$error"
              >{{ $t("form_reset_pass_otp") }}</span
            >         
            </span>
              <!-- <p>Didn't receive the OTP? <a href="#">Resend again</a></p> -->
            </div>
          </div>
          <div class="login__button" @click="sendotp()">
            <a class="default__button">{{ $t("forget_pass_title") }}</a>
          </div>
        </form>
    
      </div>
    </div>
 
</template>

<script setup>
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
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const router = useRouter();
const store = useLogin()
const { Formreset } = storeToRefs(store);

const rules = computed(() => {
  return {
    otp: {
      required: helpers.withMessage("OTP code field is required", required),
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, Formreset);
const reset = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
 
  }
};

const getotp = async () => {
let otp = await store.getOtp();
};

const sendotp = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
 
    let sendotp = await store.verifyOTP();
 
    if(sendotp === true){
      router.push("/newspassword");
    }else {

      Swal.fire({
      title: "Unsuccessful!",
      text: "Failed to confirm OTP!",
      icon: "error",
    });

    }

   // router.push("/newspassword");

  }
};



</script>
