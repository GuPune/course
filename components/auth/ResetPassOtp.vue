<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">OTP</h5>
          <p class="login__description">
            After click => <a class="btn btn-info" href="#">Get OTP code</a>, We will send OTP Code to your phone number
          </p>
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0">OTP Code</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="Enter your OTP Code"
                v-model="store.formreset.user"
              />
              <p>Didn't receive the OTP? <a href="#">Resend again</a></p>
            </div>
          </div>
          <div class="login__button" @click="reset()">
            <a class="default__button">{{ $t("log_on_title") }}</a>
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


const store = useLogin()
const { Formreset } = storeToRefs(store);

const rules = computed(() => {
  return {
    user: {
      required: helpers.withMessage("Exam code field is required", required),
      minLength: minLength(1),
    },

  };
});

const v$ = useVuelidate(rules, Formreset);

const reset = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
 
  }
};

</script>
