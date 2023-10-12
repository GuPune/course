<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">New Password</h5>
          
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0">New Password</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="New Password"
                v-model="store.formreset.user_password"
              />
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user_password.$error"
              >{{ v$.user_password.$errors[0].$message }}</span
            >
            </div>

            <div class="mb-4">
              <label class="form__label mb-0">Confirm New Password</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="Confirm New Password"
                v-model="store.formreset.user_confirmPassword"
              />
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user_confirmPassword.$error"
              >{{ v$.user_confirmPassword.$errors[0].$message }}</span
            >
            </div>
          </div>
          <div class="login__button" @click="confirm()">
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

await store.getProfile()

const rules = computed(() => {
  return {
    user_password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
    user_confirmPassword: {
      required: helpers.withMessage('The password confirmation field is required', required),
     sameAs: helpers.withMessage("Passwords don't match", sameAs(store.formreset.user_password)),
    },
  };
});

const v$ = useVuelidate(rules, Formreset);

const confirm = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
let updatepassword = await store.updatePassword();
console.log(updatepassword);
    }
};

</script>
