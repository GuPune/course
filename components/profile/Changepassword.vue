<template>
  <div
    class="tab-pane fade show"
    id="projects__one"
    role="tabpanel"
    aria-labelledby="projects__one"
  >
    <div class="col-xl-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">{{ $t("changepassword_title") }}</h5>
          <p class="login__description">
            {{ $t("changepassword_title") }}
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            ></a>
          </p>
        </div>

        <form action="#">
          <div class="row">
           
           {{ stores.changepassword }}
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("changepassword_old") }}<span style="color: red"> * </span></label
                >

                <input
                  class="common__login__input"
                  type="text"
                  placeholder="Password Old"
                  v-model="stores.changepassword.curent_password"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.curent_password.$error,
                    'border-[#42d392] ': !v$.curent_password.$invalid,
                  }"
                  @change="v$.curent_password.$touch"
                  autocomplete="off"
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.curent_password.$error"
                    >{{ $t("changepassword_old") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.curent_password.$error"
                    >{{ $t("changepassword_old") }}</span
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
                  placeholder="Password New"
                  v-model="stores.changepassword.new_password"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.new_password.$error,
                    'border-[#42d392] ': !v$.new_password.$invalid,
                  }"
                  @change="v$.new_password.$touch"
                  autocomplete="off"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.new_password.$error"
                    >{{ $t("form_register_lname") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.new_password.$error"
                    >{{ $t("form_register_lname") }}</span
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
                  placeholder="Password Confirm"
                  v-model="stores.changepassword.confirm_new_password"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.confirm_new_password.$error,
                    'border-[#42d392] ': !v$.confirm_new_password.$invalid,
                  }"
                  @change="v$.confirm_new_password.$touch"
                  autocomplete="off"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.confirm_new_password.$error"
                    >{{ $t("form_register_users") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.confirm_new_password.$error"
                    >{{ $t("form_register_users") }}</span
                  >
                </span>
              </div>
            </div>
         
          </div>

         

          <div class="login__button" @click="savechangepassword()">
            <a class="default__button">{{ $t("singup_title") }}</a>
          </div>
        </form>
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
      minLength: minLength(1),
    },
    new_password: {
      required: helpers.withMessage(
        "Field is required",
        required
      ),
      minLength: minLength(1),
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
console.log(savepassword);
if(savepassword === true){
  await Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Change Password successfully",
      showConfirmButton: false,
      timer: 1500,
    });
}

}
 
}


  
 
</script>
