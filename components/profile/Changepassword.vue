<template>
  <div
    class="tab-pane fade show"
    id="projects__one"
    role="tabpanel"
    aria-labelledby="projects__one"
  >
    <div class="col-xl-8 offset-md-2">
      <div class="card">
      <div class="card-header" style="background-color: #FEF301;text-align: center;font-size: 24px;"> {{ $t("changepassword_title") }}</div>
      <div class="loginarea__wraper">
        <div class="login__heading">
  
          <p class="login__description">
            {{ $t("changepassword_title1UserLogin") }}
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            ></a>
          </p>
        </div>

        <form>
          <div class="row">
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("changepassword_old") }}<span style="color: red"> * </span></label
                >

                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ລະຫັດຜ່ານເກົ່າ"
                  v-model="stores.changepassword.curent_password"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.curent_password.$error,
                    'border-[#42d392] ': !v$.curent_password.$invalid,
                  }"
                  @change="v$.curent_password.$touch"
                  autocomplete="off"
                  @input="filterInputPassCurrent"
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.curent_password.$error"
                    >{{ $t("changepassword_old_re") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.curent_password.$error"
                    >{{ $t("changepassword_old_re") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("changepassword_new") }}<span style="color: red"> * </span></label
                >
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ລະຫັດຜ່ານໃໝ່"
                  v-model="stores.changepassword.new_password"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.new_password.$error,
                    'border-[#42d392] ': !v$.new_password.$invalid,
                  }"
                  @change="v$.new_password.$touch"
                  autocomplete="off"
                  @input="filterInputPassCurrentNew"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.new_password.$error"
                    >{{ $t("changepassword_new_re") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.new_password.$error"
                    >{{ $t("changepassword_new_re") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("changepassword_confirm")
                  }}<span style="color: red"> * </span></label
                >
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ຢືນຢັນລະຫັດຜ່ານ"
                  v-model="stores.changepassword.confirm_new_password"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.confirm_new_password.$error,
                    'border-[#42d392] ': !v$.confirm_new_password.$invalid,
                  }"
                  @change="v$.confirm_new_password.$touch"
                  autocomplete="off"
                  @input="filterInputPassCurrentNewCon"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.confirm_new_password.$error"
                    >{{ $t("changepassword_confirm_re") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.confirm_new_password.$error"
                    >{{ $t("changepassword_confirm_re") }}</span
                  >
                </span>
              </div>
            </div>

          </div>
      <br>
   
        </form>
        <div class="col-12" style="text-align: center">
                <button class="btn" style="width: 30%;background-color: #2AB0E5;" @click="savechangepassword()"><span style="color: white;">{{ $t("singup_title") }}</span></button>
                            </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { RegisterStore } from "@/stores/register"; // import the auth store we just created
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
  numeric,
} from "@vuelidate/validators";

import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const router = useRouter();

const stores = useAuthStore();



const { getFormChangepassword } = storeToRefs(stores);


const rules = computed(() => {
  return {
    curent_password: {
      required: helpers.withMessage(
        "Field is required",
        required
      ),
      minLength: minLength(6),
    },
    new_password: {
      required: helpers.withMessage(
        "Field is required",
        required
      ),
      minLength: minLength(6),
    },
    confirm_new_password: {
      required: helpers.withMessage(
        "The password confirmation field is required",
        required
      ),
      sameAs: helpers.withMessage(
        "Passwords don't match",
        sameAs(stores.changepassword.new_password)
      ),
    },
   
  };
});

const v$ = useVuelidate(rules, getFormChangepassword);


const savechangepassword = async () => {
  v$.value.$validate();

  if (!v$.value.$error) {
let savepassword = await stores.Changepassword();

if(savepassword === true){
  await Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Change Password successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    v$.value.$reset();


    await stores.ResetFormPassword();

localStorage.removeItem('user_reset')
router.push("/login");
}else {

  await Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Change Password unsuccessfully",
      showConfirmButton: false,
      timer: 1500,
    });


}

}
 
}

const filterInputPassCurrent = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        stores.changepassword.curent_password = stores.changepassword.curent_password.substring(0, stores.changepassword.curent_password.length - 1);
        return;
      }
};

const filterInputPassCurrentNew = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        stores.changepassword.new_password = stores.changepassword.new_password.substring(0, stores.changepassword.new_password.length - 1);
        return;
      }
};

const filterInputPassCurrentNewCon = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        stores.changepassword.confirm_new_password = stores.changepassword.confirm_new_password.substring(0, stores.changepassword.confirm_new_password.length - 1);
        return;
      }
};


  
 
</script>
