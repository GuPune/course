<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">{{ $t("new_password") }}</h5>
          
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0">{{ $t("new_password_t1") }}</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="New Password"
                v-model="store.formreset.user_password"
              />
             

            <span v-if="locale == 'la'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user_password.$error"
              >{{ $t("new_password_t1") }}</span
            >
            
            </span>
            <span v-if="locale == 'en'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user_password.$error"
              >{{ $t("new_password_t1") }}</span
            >         
            </span>
            </div>

            <div class="mb-4">
              <label class="form__label mb-0">{{ $t("new_password_t2") }}</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="Confirm New Password"
                v-model="store.formreset.user_confirmPassword"
              />
        

            <span v-if="locale == 'la'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user_confirmPassword.$error"
              >{{ $t("new_password_t2") }}</span
            >
            
            </span>
            <span v-if="locale == 'en'">
              <span
              class="text-xs text-red-500"
              style="color: red"
              v-if="v$.user_confirmPassword.$error"
              >{{ $t("new_password_t2") }}</span
            >         
            </span>
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
import { defineComponent, ref, onMounted } from 'vue';
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
const store = useLogin()
const useLog = useAuthStore();
const { Formreset } = storeToRefs(store);
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

onMounted(() => {
  const localStorageValue = ref('')
localStorageValue.value = localStorage.getItem('user_reset')
if(localStorageValue.value == null){
  router.push("/");
}
    });

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

const localStorageValue = ref('')
localStorageValue.value = localStorage.getItem('user_reset')
store.user_id = localStorageValue;
await store.getProfile();
const formData = reactive({
  username: store.formnewpassword.user_name,
  password: store.formreset.user_password,
});
let updatepassword = await store.updatePassword();
if(updatepassword === true)
{
  let login = await authenticateUser(formData);
  if (login === true) {
    localStorage.removeItem('user_reset');
      router.push("/");
    }
}

// let login = await authenticateUser(formData);
// if (login === true) {
//       router.push("/");
//     }
}
};



</script>
