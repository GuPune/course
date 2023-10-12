<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">Reset Password</h5>
          <p class="login__description">
            Enter this form associated with your account to reset your password.
          </p>
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0">{{ $t("page_verify_iden") }}</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="ID card number"
              />
            </div>
            <div class="mb-4">
              <label class="form__label mb-0">{{ $t("tel") }}</label>
              <input
                class="common__login__input"
                type="number"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label class="form__label mb-0">{{ $t("email") }}</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="login__button" @click="login()">
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

</script>
