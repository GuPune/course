<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">{{ $t("forget_pass_title") }}</h5>
          <p class="login__description">
            {{ $t("forget_pass_title_2") }}
          </p>
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0">{{ $t("page_verify_iden") }} && {{ $t("tel") }} && {{ $t("email") }}</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="ບັດ​ປະ​ຈໍາ​ຕົວ ຫຼື ເບີ​ໂທລະ​ສັບ ຫຼື ອີເມວ"
                v-model="store.formreset.user"
              />
              <span v-if="locale == 'la'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user.$error"
              >{{ $t("form_reset_pass") }}</span
            >
            
            </span>
            <span v-if="locale == 'en'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user.$error"
              >{{ $t("form_reset_pass") }}</span
            >         
            </span>
            
            </div>
          </div>
          <div class="login__button" @click="reset()">
            <a class="default__button">{{ $t("get_otp") }}</a>
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
const router = useRouter();
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const store = useLogin()
const { Formreset } = storeToRefs(store);

const rules = computed(() => {
  return {
    user: {
      required: helpers.withMessage("field is required", required),
      minLength: minLength(1),
    },
  };
});

const v$ = useVuelidate(rules, Formreset);

const reset = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {

  let check_user = await store.checkUser();
  if(check_user == true){
store.isAlertFindUser = false;
store.isResetPassword = false;
store.isResetPasswordOTP = true;
  }else{
    store.isAlertFindUser = true;
  }
// store.isResetPassword = false;
// store.isResetPasswordOTP = true;
  }
};

</script>
