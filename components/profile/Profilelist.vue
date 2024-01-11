<template>
  <!-- .contact__section__end -->

  <!-- contact__form__start -->
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner">
            <div class="contact__form__heading" data-aos="fade-up">
              <h3>{{ $t("account_proFile_User") }}</h3>


              <!-- <p>Your email address will not be published. Required fields are marked * </p> -->
            </div>
            <form
              id="contact-form"
              class="contact-form"
              action="mail.php"
              method="post"
            >
  
              <div class="row">
                <div class="col-xl-2" data-aos="fade-up">
                  <div class="contact__input__wraper">
                 
                    <select
                  class="ceslr"
                  aria-label="Default select example"
                  v-model="store.formuser.user_prefrix"
                >
              
                  <option disabled>
                    {{ $t("choose") }}
                  </option>
                  <option value="ທ້າວ">{{ $t("than") }}</option>
                  <option value="ນາງ">{{ $t("nang") }}</option>
                </select>

                   
                  </div>
       

                  <div v-if="locale == 'la'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("profile_alert_name") }}</span
                  >
                 </div>

                 <div v-if="locale == 'th'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("profile_alert_name") }}</span
                  >
                 </div>

                 <div v-if="locale == 'en'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("profile_alert_name") }}</span
                  >
                 </div>
                </div>
                <div class="col-xl-5" data-aos="fade-up">
                  <div class="contact__input__wraper">
                 
                    <input
                      type="text"
                      name="subject"
                      placeholder="ຊື່​ແທ້"
                      v-model="store.formuser.user_firstname"
                  
                           :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_firstname.$error,
                        'border-[#42d392] ': !v$.user_firstname.$invalid,
                      }"
                      @change="v$.user_firstname.$touch"
                      autocomplete="off"
                      maxlength="10" 
 :disabled="store.isDisabled"
        
                    />
                    <div class="contact__icon">
                      <i class="icofont-businessman"></i>
                    </div>
                  </div>
       

                  <div v-if="locale == 'la'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("profile_alert_name") }}</span
                  >
                 </div>

                 <div v-if="locale == 'th'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("profile_alert_name") }}</span
                  >
                 </div>

                 <div v-if="locale == 'en'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_firstname.$error"
                    >{{ $t("profile_alert_name") }}</span
                  >
                 </div>
                </div>

                <div class="col-xl-5" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <input
                      type="text"
                      name="phone"
                      placeholder="ນາມ​ສະ​ກຸນ"
                      v-model="store.formuser.user_lastname"
                    :disabled="store.isDisabled"

                         :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_lastname.$error,
                        'border-[#42d392] ': !v$.user_lastname.$invalid,
                      }"
                      @change="v$.user_lastname.$touch"
                      autocomplete="off"
                      maxlength="10"
                    />
                    <div class="contact__icon">
                      <i class="icofont-businessman"></i>
                    </div>
                  </div>
          

                  <div v-if="locale == 'la'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_lastname.$error"
                    >{{ $t("profile_alert_lname") }}</span
                  >
                 </div>

                 <div v-if="locale == 'th'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_lastname.$error"
                    >{{ $t("profile_alert_lname") }}</span
                  >
                 </div>

                 <div v-if="locale == 'en'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_lastname.$error"
                    >{{ $t("profile_alert_lname") }}</span
                  >
                 </div>
                </div>

                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <input
                      type="text"
                      name="con_name"
                      id="con_name"
                      placeholder="ຊື່ຜູ້ໃຊ້*"
                      v-model="store.formuser.user_name"
                     :disabled="store.isDisabled"

                             :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_name.$error,
                        'border-[#42d392] ': !v$.user_name.$invalid,
                      }"
                      @change="v$.user_name.$touch"
                      autocomplete="off"
                      maxlength="10"
                    />
                    <div class="contact__icon">
                      <i class="icofont-businessman"></i>
                    </div>
                  </div>
                

                  <div v-if="locale == 'la'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_name.$error"
                    >{{ $t("profile_alert_usersname") }}</span
                  >
                 </div>

                 <div v-if="locale == 'th'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_name.$error"
                    >{{ $t("profile_alert_usersname") }}</span
                  >
                 </div>

                 <div v-if="locale == 'en'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_name.$error"
                    >{{ $t("profile_alert_usersname") }}</span
                  >
                 </div>
                </div>

                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <input
                      type="text"
                      name="con_email"
                      id="con_email"
                      placeholder="ອີເມວ*"
                      v-model="store.formuser.user_email"
                  :disabled="store.isDisabled"

                       
                    />
                    <div class="contact__icon">
                      <i class="icofont-envelope"></i>
                    </div>
                  </div>

                  
                
                </div>

                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <input
                      type="text"
                      name="subject"
                      placeholder="85620xxxxxxxx"
                      v-model="store.formuser.user_phone"
                   :disabled="store.isDisabled"
                         :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_phone.$error,
                        'border-[#42d392] ': !v$.user_phone.$invalid,
                      }"
                      @change="v$.user_phone.$touch"
                      autocomplete="off"
                      maxlength="10"
                    />
                    <div class="contact__icon">
                      <i class="icofont-ui-call"></i>
                    </div>
                  </div>
        
                  <div v-if="locale == 'la'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_phone.$error"
                    >{{ $t("profile_alert_phone") }}</span
                  >
                 </div>

                 <div v-if="locale == 'th'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_phone.$error"
                    >{{ $t("profile_alert_phone") }}</span
                  >
                 </div>

                 <div v-if="locale == 'en'">
                    <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_phone.$error"
                    >{{ $t("profile_alert_phone") }}</span
                  >
                 </div>
                </div>

                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <input
                      type="text"
                      name="Text"
                      placeholder="Enter Your Phone"
                      v-model="store.formuser.user_type_name"
                      disabled

                    
                    />
                    <div class="contact__icon">
                      <i class="icofont-edit"></i>
                    </div>
                  </div>
             
                </div>


                <div class="col-xl-12" data-aos="fade-up">
                  <div class="contact__button">
                    <!-- <div class="col-auto nav-item">
          <button type="button" class="btn btn-primary mt-0" @click="find()">
            {{ $t("page_app_search_app") }}
          </button>
        </div> -->
                    <button
                      type="button"
                      class="btn btn-primary mt-0"
                      @click="save()"
                      v-if="
                        store.formdetail.verify_account !== 'system_active' ??
                        disabled
                      "
                    >
                    {{ $t("bt_edit") }}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { useAuthStore } from "@/stores/auth";
import ApiService from "@/services/api.service";
import Swal from "sweetalert2";
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

const store = useAuthStore();
const router = useRouter();

const verify = store.formdetail.verify_account;

if(verify == 'system_active'){
  store.isDisabled = true
}

const { getForm } = storeToRefs(store);
const save = async () => {
  v$.value.$validate();

  if (!v$.value.$error) {
    let saveprofile = await store.UpdateProfile();

    if (saveprofile == true) {
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Saved successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Unsuccessful!",
        text: "Failed to save!",
        icon: "error",
      });
    }
  }
};


const rules = computed(() => {
  return {
    user_name: {
      required: helpers.withMessage(
        "The User name field is required",
        required
      ),
      minLength: minLength(1),
    },

    user_firstname: {
      required: helpers.withMessage(
        "The First Name field is required",
        required
      ),
      minLength: minLength(1),
    },
    user_lastname: {
      required: helpers.withMessage(
        "The Last Name field is required",
        required
      ),
      minLength: minLength(1),
    },

    user_phone: {
      required: helpers.withMessage("The tel field is required", required),
      minLength: minLength(1),
    },

    // user_email: {
    //   required: helpers.withMessage(
    //     "The password confirmation field is required",
    //     required
    //   ),
    //   email: helpers.withMessage("Invalid email format", email),
    // },
    // user_address: {
    //   required: helpers.withMessage('The Address field is required', required),
    //   minLength: minLength(6),
    // },
    // user_birthday: {
    //   required: helpers.withMessage('The Birthday field is required', required),
    //   minLength: minLength(6),
    // },
  };
});

const v$ = useVuelidate(rules, getForm);
</script>

<style>
.xt3e5 {
  padding: 30px 50px 10px 10px;
}

.hover-button:hover {
  border: 2px solid #b217b4;
  padding: 5px 40px;
}

.sec-l {
  border-style: groove !important;
  border-color: red !important;
  #choice {
    background-color: #4caf50;
    color: white;
    #card-index {
      color: white;
    }
  }
}

.sec-choice {
  border-style: groove !important;
  border-color: red !important;

  #answer {
    background-color: #4caf50;
    color: white;
    #card-index {
      color: white;
    }
  }
}
#answer {
  background-color: #4caf50;
}

.exma {
  background-color: #5f2ded;
  color: white;
}
.send {
  background-color: #e06512;
  color: white;
}
#choice-container {
  /* border: 2px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
#choice {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  transition-duration: 0.4s;
  display: flex;
}
#choice:hover {
  background-color: #4caf50; /* Green */
  color: white;
  #card-index {
    color: white;
  }
}
#choice-card {
  padding: 5px;
  border: unset !important;
}

#answer {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice {
  background-color: rgb(247, 247, 247);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger {
  background-color: rgb(227, 52, 21);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

#answer-card {
  padding: 5px;
  border: unset !important;
}
#card-index {
  margin-right: 10px;
}

.ceslr {
    height: 60px;
    width: 100%;
    padding-left: 27px;
    border: 1px solid var(--borderColor2);
    margin-bottom: 30px;
    border-radius: var(--borderRadius);
    background: transparent;
    color: var(--contentColor);
}
</style>
