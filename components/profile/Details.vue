<template>
  <!-- .contact__section__end -->


  <!-- contact__form__start -->
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner">
            <div class="contact__form__heading" data-aos="fade-up">
              <h3 class="text-center">{{ $t("account_proFile_Info") }}</h3>
              <!-- <p>Your email address will not be published. Required fields are marked * </p> -->
            </div>

            <div class="row">

              <!-- <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="subject" placeholder="First Name" v-model="store.formuser.user_firstname" disabled>
                                            <div class="contact__icon">
                                              <i class="icofont-businessman"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="phone" placeholder="Last Name" v-model="store.formuser.user_lastname" disabled>
                                            <div class="contact__icon">
                                              <i class="icofont-businessman"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="con_name" id="con_name" placeholder="User Name*" v-model="store.formuser.user_name" disabled>
                                            <div class="contact__icon">
                                                <i class="icofont-businessman"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="con_email" id="con_email" placeholder="Email Address*"  v-model="store.formuser.user_email" disabled>
                                            <div class="contact__icon">
                                                <i class="icofont-envelope"></i>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="subject" placeholder="Write Service Type" v-model="store.formuser.user_phone" disabled>
                                            <div class="contact__icon">
                                              
                                                <i class="icofont-ui-call"></i>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="phone" placeholder="Enter Your Phone" v-model="store.formuser.user_type_name" disabled>
                                            <div class="contact__icon">
                                              <i class="icofont-edit"></i>
                                            </div>
                                        </div>
                                    </div>
                                 -->
              <!-- <div class="col-xl-12" data-aos="fade-up">
                                        <div class="contact__button">

                                            <button type="submit" value="submit" class="default__button" name="submit">Post a Comment</button>

                                            <p class="form-messege"></p>

                                        </div>
                                    </div> -->
            </div>
            <div class="gridarea__wraper gridarea__wraper__2 gridarea__course__list aos-init aos-animate"
              data-aos="fade-up">
              <div class="gridarea__img">
                <a><img :src="coverimage(store.formdetail.user_img)" alt="grid"></a>
              </div>
              <button class="changeImg btn btn-info"  @click="changeFile">Edit
         
              
              </button>
              <input type="file" ref="fileInput" style="display: none;">
     
              <div class="gridarea__content py-2">
                <div class="gridarea__list row border-bottom pb-2">
                  <p class="col fw-bold mb-0">{{ $t("page_profile_iden") }}</p>
                  <input type="text" class="form-control col" 
                  v-model="store.formdetail.identification_number"
                  :class="{
                        'border-red-500 focus:border-red-500':
                          v$.identification_number.$error,
                        'border-[#42d392] ': !v$.identification_number.$invalid,
                      }"
                      @change="v$.identification_number.$touch"
                      autocomplete="off"
                      maxlength="13" 
                      :disabled="store.isDisabled"

                  >
                  <!-- <p class="col">{{store.formdetail.identification_number}}</p> -->

                  <!-- <input type="text" name="phone" placeholder="Enter Your Phone" v-model="store.formdetail.identification_number" > -->
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.identification_number.$error"
                    >{{ v$.identification_number.$errors[0].$message }}</span
                  >
                </div>
                <div class="gridarea__list row border-bottom pb-2">
                  <p class="col fw-bold mb-0">{{ $t("page_profile_day") }}</p>
                  <input type="date" class="form-control col" v-model="store.formdetail.user_birthday"
                  :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_birthday.$error,
                        'border-[#42d392] ': !v$.user_birthday.$invalid,
                      }"
                      @change="v$.user_birthday.$touch"
                      autocomplete="off"
                      maxlength="13" 
                  >
                  <!-- <p class="col">{{store.formdetail.user_birthday}}</p> -->

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_birthday.$error"
                    >{{ v$.user_birthday.$errors[0].$message }}</span
                  >
                </div>
                <div class="gridarea__list row border-bottom pb-2">
                  <p class="col fw-bold mb-0">{{ $t("page_profile_zip") }}</p>
                  <select class="form-control col" v-if="store.country" v-model="store.formdetail.country_id" :disabled="store.isDisabled">
    <option   v-for="(country, x) in store.country" :key="country.country_id" :value="country.country_id">{{country.country_name_eng}}</option>
    </select>
                  <!-- <p class="col">{{store.formdetail.location.zipcode}}</p> -->
                </div>
                <div class="gridarea__list row border-bottom pb-2">
                  <p class="col fw-bold mb-0">{{ $t("page_profile_add_1") }}</p>
                  <!-- <input type="text" class="form-control col" :value="store.formdetail.location.zipcode_name" disabled> -->
                  <select class="form-control col" v-if="store.zipcode" v-model="store.formdetail.location_id" :disabled="store.isDisabled">
    <option   v-for="(zipcode, index) in store.zipcode" :key="zipcode.id" :value="zipcode.id">{{zipcode.zipcode_name}} - {{ zipcode.amphur_name }}</option>
    </select>
                  <!-- <p class="col">{{store.formdetail.location.zipcode_name}}</p> -->
                </div>
                <div class="gridarea__list row border-bottom pb-2">
                  <p class="col fw-bold mb-0">{{ $t("page_profile_add_2") }}</p>
                  <textarea v-model="store.formdetail.user_address" class="form-control col" :disabled="store.isDisabled"
                  :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_address.$error,
                        'border-[#42d392] ': !v$.user_address.$invalid,
                      }"
                      @change="v$.user_address.$touch"
                      autocomplete="off"
                  ></textarea>
             
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_address.$error"
                    >{{ v$.user_address.$errors[0].$message }}</span
                  >
                  <!-- <p class="col">{{store.formdetail.user_address}}</p> -->
                 
                </div>
                <div class="gridarea__list row ">
                  <p class="col fw-bold">{{ $t("page_profile_status") }}</p>


                  <div class="col " v-if="store.formdetail.verify_account == 'phone_active'">
                    <span class="badge text-bg-success">


                      <span v-if="locale == 'la'">{{ $t("phone_active") }}</span>
                      <span v-if="locale == 'en'">{{ $t("phone_active") }}</span>
                      <span v-if="locale == 'th'">{{ $t("phone_active") }}</span>
                    </span>
                  </div>
                  <div class="col " v-if="store.formdetail.verify_account == 'system_unactive'">
                    <span class="badge text-bg-success">

                      <span v-if="locale == 'la'">{{ $t("system_unactive") }}</span>
                      <span v-if="locale == 'en'">{{ $t("system_unactive") }}</span>
                      <span v-if="locale == 'th'">{{ $t("system_unactive") }}</span>
                    </span>
                  </div>
                  <div class="col " v-if="store.formdetail.verify_account == 'system_active'">
                    <span class="badge text-bg-success">


                      <span v-if="locale == 'la'">{{ $t("system_active") }}</span>
                      <span v-if="locale == 'en'">{{ $t("system_active") }}</span>
                      <span v-if="locale == 'th'">{{ $t("system_active") }}</span>
                    </span>
                  </div>
                </div>

                <div class="gridarea__list row border-bottom pb-2">
                  <button v-if="
                        store.formdetail.verify_account !== 'system_active' ??
                        disabled
                      "
                      type="button"
                      class="btn btn-primary mt-0" @click="update()">
                      {{ $t("bt_edit") }}
                    </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch,onMounted } from 'vue'

import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useAuthStore } from '@/stores/auth';
import ApiService from '@/services/api.service';
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { VerifyStore } from "@/stores/verify";
const { locale, setLocale } = useI18n();


const store = useAuthStore();

const router = useRouter();
const { getFormDetails } = storeToRefs(store);

await store.Zipcode();
await store.Country();





const rules = computed(() => {
  return {
    identification_number: {
      required: helpers.withMessage(
        "The Identification number field is required",
        required
      ),
      minLength: minLength(5),
    },
    user_address: {
      required: helpers.withMessage(
        "Adress field is required",
        required
      ),
      minLength: minLength(5),
    },
    user_birthday: {
      required: helpers.withMessage(
        "user_birthday field is required",
        required,
      ),

    },
  };
});
const v$ = useVuelidate(rules, getFormDetails);

function coverimage(i) {
  let result = i.slice(0, 6);
  if (result === "static") {
    let im = ApiService.image(i);
    return im;
  } else {
    return i;
  }
}

onMounted(() => {
      fileInput.value.addEventListener('change', handleFileChange);
    });

const update = async () => {

// await store.UpdateDetails();

 v$.value.$validate();

if (!v$.value.$error) {
let savedetails = await store.UpdateDetails();
console.log(savedetails);
if (savedetails == true) {
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



}
const fileInput = ref(null);
const changeFile = () => {
          // Trigger a click event on the file input element
          fileInput.value.click();
        };
const handleFileChange = async (event) => {
  var input = event.target;

  if (input.files) {
    var reader = new FileReader();
    reader.onload = (e) => {
      store.formdetail.user_img = e.target.result;
    };
    store.imagelist = input.files[0];
    reader.readAsDataURL(input.files[0]);
  }
};

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
    background-color: #4CAF50;
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
    background-color: #4CAF50;
    color: white;

    #card-index {
      color: white;
    }
  }
}

#answer {
  background-color: #4CAF50;

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
  border: 2px solid #4CAF50;
  transition-duration: 0.4s;
  display: flex;
}

#choice:hover {
  background-color: #4CAF50;
  /* Green */
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

.changeImg {
  position: absolute;
  visibility: hidden;
}

.gridarea__wraper:hover>.changeImg {
  visibility: visible;
}</style>
