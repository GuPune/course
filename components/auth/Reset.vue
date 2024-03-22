<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
   
      <div class="card-header " style="background-color: #FEF301;text-align: center;font-size: 24px;"> ລືມລະຫັດຜ່ານ, ຂໍຕັ້ງລະຫັດຜ່ານໃໝ່</div>
      <div class="loginarea__wraper">
        <div class="login__heading">
    
          <p class="login__description">
            ກະລຸນາປ້ອນຂໍ້ມູນຂອງບັນຊີຂອງທ່ານ
          </p>
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <label class="form__label mb-0" style="text-align: center;">username ຫຼື ເບີໂທໃນຮູບແບບ 20xxxxxxxx ຫຼື email</label>
              <input
                class="common__login__input"
                type="text"
                placeholder="username / ເບີໂທໃນຮູບແບບ 20xxxxxxxx / email"
                v-model="store.formreset.user"
              />
              <span style="font-size: 14px;">* ລະບົບຈະສົ່ງລະຫັດ OTP ໄປເບີໂທ ເພື່ອຢືນຢັນ, ແລ້ວຈະອະນຸຍາດໃຫ້ທ່ານຕັ້ງລະຫັດຜ່ານໃໝ່
            </span>
             
            
            </div>
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
       

          <div class="login__heading"  @click="reset()">
        
        <button type="button" class="btn" style="width: 30%;background-color: #2AB0E5;color: white;border: none; border-radius:0px;">ສົ່ງຂໍລະຫັດ OTP</button>
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
