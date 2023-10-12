<template>

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
            <label class="form__label">{{ $t("username") }}</label>
            <input
              class="common__login__input"
              type="text"
              placeholder="Your username"
            />
          </div>
          <div
            class="login__form d-flex justify-content-between flex-wrap gap-2"
          >
        
      
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
