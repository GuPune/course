<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">OTP</h5>
          <p class="login__description">
            Enter this form associated with your account to reset your password.
          </p>
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0">{{ $t("page_verify_iden") }} && {{ $t("tel") }} && {{ $t("email") }}</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="ID card number"
                v-model="store.formreset.user"
              />
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
