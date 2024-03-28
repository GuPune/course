<template>
  <div
    class="tab-pane fade show"
    id="projects__one"
    role="tabpanel"
    aria-labelledby="projects__one"
  >
  <div class="col-xl-8 offset-md-2">
  <div class="card">
  <div class="card-header " style="background-color: #FEF301;text-align: center;font-size: 24px;">{{ $t("page_register") }}</div>
  <div>
    <div class="loginarea__wraper">
        <div class="login__heading">
          
          <p class="login__description">
   
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            ></a>
          </p>
        </div>

        <form action="#">
          <div class="row">
           
            <div class="col-xl-2">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("form_name_title") }}<span style="color: red"> * </span></label
                >

                <select
                  class="common__login__input"
                  aria-label="Default select example"
                  v-model="stores.form.user_prefrix"
                >
                  <option selected :value="null" disabled>
                    {{ $t("choose") }}
                  </option>
                  <option value="ທ້າວ">{{ $t("than") }}</option>
                  <option value="ນາງ">{{ $t("nang") }}</option>
                </select>

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_prefrix.$error"
                    >{{ $t("choose") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_prefrix.$error"
                    >{{ $t("choose") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("fname") }}</label
                >

                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ຊື່​"
                  v-model="stores.form.user_firstname"
                  maxlength="20" 
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_firstname.$error,
                    'border-[#42d392] ': !v$.user_firstname.$invalid,
                  }"
                  @change="v$.user_firstname.$touch" 
                  @input="filterInputFirstname"
                  autocomplete="off"
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("form_register_fname") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("form_register_fname") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("lname") }}</label
                >
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ນາມ​ສະ​ກຸນ"
                  v-model="stores.form.user_lastname"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_lastname.$error,
                    'border-[#42d392] ': !v$.user_lastname.$invalid,
                  }"
                  @change="v$.user_lastname.$touch"
                  autocomplete="off"
                  maxlength="20" 
                  @input="filterInputLasttname"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_lastname.$error"
                    >{{ $t("form_register_lname") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_lastname.$error"
                    >{{ $t("form_register_lname") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("username")
                  }}</label
                >
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ເລືອກຊື່ຜູ້ໃຊ້ username ທີ່ບໍ່ຊ້ຳ"
                  v-model="stores.form.user_name"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_name.$error,
                    'border-[#42d392] ': !v$.user_name.$invalid,
                  }"
                  @change="v$.user_name.$touch"
                  autocomplete="off"
                  maxlength="20" 
                  @input="filterInputUser"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_name.$error"
                    >{{ $t("form_register_users") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_name.$error"
                    >{{ $t("form_register_users") }}</span
                  >
                </span>
              </div>
            </div>
            <!-- <div class="col-xl-6">
              <div class="login__form">
                <label class="form__label">{{ $t("email") }}</label>
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ອີເມວ"
                  v-model="stores.form.user_email"
                  maxlength="20" 
                />
              </div>
            </div> -->
          
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("password")
                  }}</label
                >
                <input
                  class="common__login__input"
                  type="password"
                  placeholder="ລະຫັດຜ່ານ ຢ່າງນ້ອຍ 6 ຕົວອັກສອນ"
                  v-model="stores.form.user_password"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_password.$error,
                    'border-[#42d392] ': !v$.user_password.$invalid,
                  }"
                  maxlength="20" 
                  @change="v$.user_password.$touch"
                  autocomplete="off"
                  @input="filterInputUserPass"
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_password.$error"
                    >{{ $t("form_register_pass") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_password.$error"
                    >{{ $t("form_register_pass") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("confirmpassword")
                  }}</label
                >
                <input
                  class="common__login__input"
                  type="password"
                  placeholder="ໃສ່ລະຫັດຜ່ານ ອີກຄັ້ງ"
                  v-model="stores.form.user_confirmPassword"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_confirmPassword.$error,
                    'border-[#42d392] ': !v$.user_confirmPassword.$invalid,
                  }"
                  @change="v$.user_confirmPassword.$touch"
                  autocomplete="off"
                  maxlength="20" 
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_confirmPassword.$error"
                    >{{ $t("form_register_pass_con") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_confirmPassword.$error"
                    >{{ $t("form_register_pass_con") }}</span
                  >
                </span>
              </div>
            </div>
          </div>

          <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("tel") }}
                </label>
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="20XXXXXXXX"
                  v-model="stores.form.user_phone"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_phone.$error,
                    'border-[#42d392] ': !v$.user_phone.$invalid,
                  }"
                  maxlength="10" 
                  @change="v$.user_phone.$touch"
                  autocomplete="off"
                  @input="filterInput"
                />
                <span style="color: red;font-size: 14px;"> * ກະລຸນາພິມເບີໂທໃນຮູບແບບເລິ່ມຕົ້ນດ້ວຍ 20 ຕາມດ້ວຍເລກແປດໂຕ. (ໃຊ້ໄດ້ສະເພາະເບີມືຖືຂອງລາວ) ລະບົບຈະສົ່ງລະຫັດ ເພື່ອຢືນຢັນເບີໂທ  </span>
   
              </div>
              <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_phone.$error"
                    >{{ $t("form_register_phone") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_phone.$error"
                    >{{ $t("form_register_phone") }}</span
                  >
                </span>
              
            </div>

          <div
            class="login__form d-flex justify-content-between flex-wrap gap-2"
          >
            <div class="form__check">
              <input
                id="accept_pp"
                type="checkbox"
                v-model="stores.form.accp"
              />
          
              <span >ຂ້າພະເຈົ້າຍ້ອມຮັບ</span> <span style="color: #0AA7FF;"> Term and Policy </span>
              <!-- {{ $t("page_register_acc") }}  -->
            </div>
          </div>
          <span
            class="text-xs text-red-500"
            style="color: red"
            v-if="v$.accp.$error"
          >
            <span v-if="locale == 'la'">
              {{ $t("page_register_acc") }}
            </span>

            <span v-if="locale == 'en'">
              {{ $t("page_register_acc") }}
            </span>
          </span>

          <div class="login__button" @click="register()" style="
    text-align: center;
">
        
            <button type="button" class="btn btn-primary" style="width: 30%;background-color: #2AB0E5;color: white;border: none; border-radius:0px;">{{ $t("singup_title") }}</button>
          </div>
        </form>
      </div>
  </div>
  
</div>
</div>
<br>
    <!-- <div class="col-xl-8 offset-md-2">
      <div class="loginarea__wraper">
        <div class="login__heading">
          <h5 class="login__title">{{ $t("page_register") }}</h5>
          <p class="login__description">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            ></a>
          </p>
        </div>

        <form action="#">
          <div class="row">
           
            <div class="col-xl-2">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("form_name_title") }}<span style="color: red"> * </span></label
                >

                <select
                  class="common__login__input"
                  aria-label="Default select example"
                  v-model="stores.form.user_prefrix"
                >
                  <option selected :value="null" disabled>
                    {{ $t("choose") }}
                  </option>
                  <option value="ທ້າວ">{{ $t("than") }}</option>
                  <option value="ນາງ">{{ $t("nang") }}</option>
                </select>

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_prefrix.$error"
                    >{{ $t("choose") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_prefrix.$error"
                    >{{ $t("choose") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("fname") }}<span style="color: red"> * </span></label
                >

                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ຊື່​ແທ້"
                  v-model="stores.form.user_firstname"
                  maxlength="20" 
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_firstname.$error,
                    'border-[#42d392] ': !v$.user_firstname.$invalid,
                  }"
                  @change="v$.user_firstname.$touch" 
                  @input="filterInputFirstname"
                  autocomplete="off"
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("form_register_fname") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("form_register_fname") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("lname") }}<span style="color: red"> * </span></label
                >
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ນາມ​ສະ​ກຸນ"
                  v-model="stores.form.user_lastname"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_lastname.$error,
                    'border-[#42d392] ': !v$.user_lastname.$invalid,
                  }"
                  @change="v$.user_lastname.$touch"
                  autocomplete="off"
                  maxlength="20" 
                  @input="filterInputLasttname"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_lastname.$error"
                    >{{ $t("form_register_lname") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_lastname.$error"
                    >{{ $t("form_register_lname") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("username")
                  }}<span style="color: red"> * </span></label
                >
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="ເລືອກຊື່ຜູ້ໃຊ້ username ທີ່ບໍ່ຊ້ຳ"
                  v-model="stores.form.user_name"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_name.$error,
                    'border-[#42d392] ': !v$.user_name.$invalid,
                  }"
                  @change="v$.user_name.$touch"
                  autocomplete="off"
                  maxlength="20" 
                  @input="filterInputUser"
                />
                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_name.$error"
                    >{{ $t("form_register_users") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_name.$error"
                    >{{ $t("form_register_users") }}</span
                  >
                </span>
              </div>
            </div>
        
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("password")
                  }}<span style="color: red"> * </span></label
                >
                <input
                  class="common__login__input"
                  type="password"
                  placeholder="ລະຫັດຜ່ານ ຢ່າງນ້ອຍ 6 ຕົວອັກສອນ"
                  v-model="stores.form.user_password"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_password.$error,
                    'border-[#42d392] ': !v$.user_password.$invalid,
                  }"
                  maxlength="20" 
                  @change="v$.user_password.$touch"
                  autocomplete="off"
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_password.$error"
                    >{{ $t("form_register_pass") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_password.$error"
                    >{{ $t("form_register_pass") }}</span
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("confirmpassword")
                  }}<span style="color: red"> * </span></label
                >
                <input
                  class="common__login__input"
                  type="password"
                  placeholder="ໃສ່ລະຫັດຜ່ານ ອີກຄັ້ງ"
                  v-model="stores.form.user_confirmPassword"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      v$.user_confirmPassword.$error,
                    'border-[#42d392] ': !v$.user_confirmPassword.$invalid,
                  }"
                  @change="v$.user_confirmPassword.$touch"
                  autocomplete="off"
                  maxlength="20" 
                />

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_confirmPassword.$error"
                    >{{ $t("form_register_pass_con") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_confirmPassword.$error"
                    >{{ $t("form_register_pass_con") }}</span
                  >
                </span>
              </div>
            </div>
          </div>

          <div class="col-xl-12">
              <div class="login__form">
                <label class="form__label"
                  >{{ $t("tel") }}
                </label>
                <input
                  class="common__login__input"
                  type="text"
                  placeholder="20XXXXXXXX"
                  v-model="stores.form.user_phone"
                  :class="{
                    'border-red-500 focus:border-red-500': v$.user_phone.$error,
                    'border-[#42d392] ': !v$.user_phone.$invalid,
                  }"
                  maxlength="8" 
                  @change="v$.user_phone.$touch"
                  autocomplete="off"
                  @input="filterInput"
                />
                <span style="color: red"> * ກະລຸນາພິມເບີໂທໃນຮູບແບບເລິ່ມຕົ້ນດ້ວຍ 20 ຕາມດ້ວຍເລກແປດໂຕ. (ໃຊ້ໄດ້ສະເພາະເບີມືຖືຂອງລາວ) ລະບົບຈະສົ່ງລະຫັດ ເພື່ອຢືນຢັນເບີໂທ  </span>
   
              </div>
              <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_phone.$error"
                    >{{ $t("form_register_phone") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_phone.$error"
                    >{{ $t("form_register_phone") }}</span
                  >
                </span>
              
            </div>

          <div
            class="login__form d-flex justify-content-between flex-wrap gap-2"
          >
            <div class="form__check">
              <input
                id="accept_pp"
                type="checkbox"
                v-model="stores.form.accp"
              />
              <label for="accept_pp">ຂ້າພະເຈົ້າຍ້ອມຮັບ Term and Policy </label>
           
            </div>
          </div>
          <span
            class="text-xs text-red-500"
            style="color: red"
            v-if="v$.accp.$error"
          >
            <span v-if="locale == 'la'">
              {{ $t("page_register_acc") }}
            </span>

            <span v-if="locale == 'en'">
              {{ $t("page_register_acc") }}
            </span>
          </span>

          <div class="login__button" @click="register()">
            <a class="default__button">{{ $t("singup_title") }}</a>
            
          </div>
        </form>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
::placeholder {
  color: #B9B9A8;
}


</style>

<script setup>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { RegisterStore } from "@/stores/register"; // import the auth store we just created
import { useRoute } from "vue-router";
import { useLogin } from "@/stores/login";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
  numeric,
} from "@vuelidate/validators";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const router = useRouter();
const store = useLogin();
const stores = RegisterStore();

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { getisActive } = storeToRefs(store);
const { formDataregister } = storeToRefs(stores);

const { regsiter } = RegisterStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const { ResetForm } = RegisterStore(); //Action

const rules = computed(() => {
  return {
    user_prefrix: {
      required: helpers.withMessage(
        "Field is required",
        required
      ),
      minLength: minLength(1),
    },
    user_firstname: {
      required: helpers.withMessage(
        "The First name field is required",
        required
      ),
      minLength: minLength(1),
    },
    user_lastname: {
      required: helpers.withMessage(
        "The Last name field is required",
        required
      ),
      minLength: minLength(1),
    },
    user_name: {
      required: helpers.withMessage("The username field is required", required),
      minLength: minLength(1),
    },

    user_password: {
      required: helpers.withMessage("The password field is required", required),
      minLength: minLength(6),
    },
    user_phone: {
      required: helpers.withMessage("The tel field is required", required),

      minLength: minLength(6),
    },
    user_confirmPassword: {
      required: helpers.withMessage(
        "The password confirmation field is required",
        required
      ),
      sameAs: helpers.withMessage(
        "Passwords don't match",
        sameAs(stores.form.user_password)
      ),
    },
    accp: {
      required: helpers.withMessage(
        "Accept the Terms and Privacy Policy",
        required
      ),
      sameAs: helpers.withMessage(
        "Accept the Terms and Privacy Policy",
        sameAs(true)
      ),
    },
  };
});



const v$ = useVuelidate(rules, formDataregister);

const filterInput = async (event) => {
  // stores.form.user_phone = event.target.value.replace(/\D/g, "");


  const key = event.data;
      if (event.data === ' ') {
        stores.form.user_phone= stores.form.user_phone.substring(0, stores.form.user_phone.length - 1);
        return;
      }
      if (stores.form.user_phone.charAt(0) !== '2') {
        stores.form.user_phone = stores.form.user_phone.substring(0, stores.form.user_phone.length - 1);
        return;
      } 
      if ((stores.form.user_phone.charAt(1) !== '') && (stores.form.user_phone.charAt(1) !== '0')) {
       stores.form.user_phone = stores.form.user_phone.substring(0, stores.form.user_phone.length - 1);
        return;
      } 
  stores.form.user_phone = event.target.value.replace(/\D/g, "");
};
const filterInputUser = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        stores.form.user_name = stores.form.user_name.substring(0, stores.form.user_name.length - 1);
        return;
      }
      stores.form.user_name = event.target.value.replace(/[!@#$%^&*(),.?":{}|<>]/g, '');
};

const filterInputFirstname = async (event) => {
      const key = event.data;
      if (event.data === ' ') {
        stores.form.user_firstname = stores.form.user_firstname.substring(0, stores.form.user_firstname.length - 1);
        return;
      }
      stores.form.user_firstname = event.target.value.replace(/[!@#$%^&*(),.?":{}|<>]/g, '');

};
const filterInputLasttname = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        stores.form.user_lastname = stores.form.user_lastname.substring(0, stores.form.user_lastname.length - 1);
        return;
      }
      stores.form.user_lastname = event.target.value.replace(/[!@#$%^&*(),.?":{}|<>]/g, '');
};

const filterInputUserPass = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        stores.form.user_password = stores.form.user_password.substring(0, stores.form.user_password.length - 1);
        return;
      }
};

const filterInputCgNameA = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        store.formDataCondit.cc_value_a = store.formDataCondit.cc_value_a.substring(0, store.formDataCondit.cc_value_a.length - 1);
        return;
      }
      if (store.formDataCondit.cc_value_a.charAt(0) === '0') {
        store.formDataCondit.cc_value_a = store.formDataCondit.cc_value_a.substring(0, store.formDataCondit.cc_value_a.length - 1);
        return;
  } 
    store.formDataCondit.cc_value_a = event.target.value.replace(/\D/g, "");
};



const register = async () => {
  v$.value.$validate();
    if (!v$.value.$error) {
     const regis = await regsiter(formDataregister); // call authenticateUser and pass the user object
     if(regis == true){
       await Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'ສະໝັກສະມາຊິກສຳເລັດແລ້ວ.',
    showConfirmButton: false,
    timer: 1500
  })

  const formData = reactive({
    username: stores.form.user_name,
    password: stores.form.user_password,
    confirmPassword: null,
  });

  let login = await authenticateUser(formData);

  await ResetForm();
  //  router.push('/verifyconfirm');
   router.push('/otpconfirm');
     }else{
      Swal.fire({
          title: 'Unsuccessful!',
          text: 'Unsuccessful registration!',
          icon: 'error',

        });

     }

    }
};
</script>
