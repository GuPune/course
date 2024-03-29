<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
    <div class="card">
      <div class="card-header" style="background-color: #FEF301;text-align: center;font-size: 24px;"> {{ $t("changepassword_title") }}</div>
      <div class="loginarea__wraper">
        
        
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
                placeholder="New Password Again"
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
       <span
                    class="text-xs text-red-500"
                    style="color: red"
               
                    >{{ $t("changepassword_confirm_re") }}</span
                  >
             
        </form>

         <div class="col-12" style="text-align: center">
                <button class="btn" style="width: 30%;background-color: #2AB0E5;" @click="confirm()"><span style="color: white;">{{ $t("save_otp") }}</span></button>
                            </div>
     </div>
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
import Swal from "sweetalert2";
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
    await Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Change Password successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    v$.value.$reset();

store.formreset.user_password = ""
store.formreset.user_confirmPassword = ""
       
    localStorage.removeItem('user_reset');
      router.push("/login");
}

// let login = await authenticateUser(formData);
// if (login === true) {
//       router.push("/");
//     }
}
};



</script>
