<template>
  <!-- .contact__section__end -->


  <!-- contact__form__start -->
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">

      
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner p-5">
            <div class="contact__form__heading" data-aos="fade-up">
              <h4>{{ $t("account_proFile_Info") }}</h4>
            </div>

            <div class="col-xl-12">
              <label class="form__label"
                  >{{ $t("page_profile_iden") }}<span style="color: red"> * </span>
                </label>

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.identification_number.$error"
                    >{{ $t("form_d_iden") }}</span
                  >

                  <div class="contact__input__wraper">
                    <input type="text" class="form-control col" 
                  v-model="store.formdetail.identification_number"
                  :class="{
                        'border-red-500 focus:border-red-500':
                          v$.identification_number.$error,
                        'border-[#42d392] ': !v$.identification_number.$invalid,
                      }"
                      :disabled="store.isDisabled"
                      @change="v$.identification_number.$touch"
                      autocomplete="off"
                      maxlength="20" 
                      @input="onInput"

                  >
                  <!-- :disabled="store.isDisabled" -->
                  </div>
            </div>

            <div class="col-xl-12">
              <label class="form__label"
                  >{{ $t("page_profile_dob") }}<span style="color: red"> * </span>
                </label>
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_birthday.$error"
                    >{{ $t("form_d_dob") }}</span
                  >

                <!-- :disabled="store.isDisabled" -->
                  <div class="contact__input__wraper">
                    <input type="date" class="form-control col" v-model="store.formdetail.user_birthday"
                  :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_birthday.$error,
                        'border-[#42d392] ': !v$.user_birthday.$invalid,
                      }"
                      :disabled="store.isDisabled"
                      @change="v$.user_birthday.$touch"
                      autocomplete="off"
                      maxlength="10" 
                  >
                  </div>
            </div>


            <div class="col-xl-12">
              <label class="form__label"
                  >{{ $t("page_profile_address") }}<span style="color: red"> * </span>
                </label>

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_address.$error"
                    >{{ $t("form_d_add") }}</span
                  >

                <!-- :disabled="store.isDisabled" -->
                  <div class="contact__input__wraper">
                    <textarea v-model="store.formdetail.user_address" class="form-control col" 
                  :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_address.$error,
                        'border-[#42d392] ': !v$.user_address.$invalid,
                      }"
                      :disabled="store.isDisabled"
                      @change="v$.user_address.$touch"
                      autocomplete="off"
                      maxlength="200" 
                      style="height: 100px;"
                      :placeholder="$t('address_placeholder')"
                  ></textarea>
                
                  </div>
            </div>

            <div class="col-xl-12">
              <label class="form__label"
                  >{{ $t("page_profile_vil") }}<span style="color: red"> * </span>
                </label>

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_village.$error"
                    >{{ $t("form_d_vil") }}</span
                  >

                  <div class="contact__input__wraper">
                    <input type="text" class="form-control col" 
                    :disabled="store.isDisabled"
                  v-model="store.formdetail.user_village"
                  :class="{
                        'border-red-500 focus:border-red-500':
                          v$.user_village.$error,
                        'border-[#42d392] ': !v$.user_village.$invalid,
                      }"
                      @change="v$.user_village.$touch"
                      autocomplete="off"
                      maxlength="100" 
                  >
                  <!-- :disabled="store.isDisabled" -->
                  
                  </div>
            </div>


            


            <div class="col-xl-12 mt-4">
              <label class="form__label"
                  >{{ $t("page_profile_district") }}<span style="color: red"> * </span>
                </label>

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.location.$error"
                    >{{ $t("form_d_district") }}</span
                  >

                 
                <v-select :disabled="store.isDisabled"
                  v-model="store.formdetail.location"
                    :options="store.zipcode"
                    @input="changedLabelZip"
                    :placeholder="$t('choose')"
                    label="zipcode_name"
                  >
                  <template #option="{ zipcode_name, province_name }">
                    <b>{{ zipcode_name }} </b> - <em>{{ province_name }}</em>
                  </template>
                </v-select>
            </div>
            <!-- label="zipcode_name"  -->

            


            <div class="col-xl-12 mt-4">
              <label class="form__label"
                  >{{ $t("page_profile_nationality") }}<span style="color: red"> * </span>
                </label>

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.country.$error"
                    >{{ $t("form_d_cou") }}</span
                  >

                  <div class="contact__input__wraper">
                    <!-- <select class="form-control col" v-if="store.country" v-model="store.formdetail.country_id" :disabled="store.isDisabled">
    <option   v-for="(country, x) in store.country" :key="country.country_id" :value="country.country_id">{{country.country_name_eng}}</option>
    </select> -->
                  </div>

                    <v-select :disabled="store.isDisabled"
                  v-model="store.formdetail.country"
                    :options="store.country"
                    label="country_name_eng"
                    @input="changedLabelCounrt"
                    :placeholder="$t('choose')"
                  ></v-select>
            </div>

 

        
            <div class="mt-4 gridarea__wraper gridarea__wraper__2 gridarea__course__list aos-init aos-animate grid_detail" data-aos="fade-up">
              <div class="gridarea__img mb-5">
                <a v-if="store.formdetail.user_img"><img :src="coverimage(store.formdetail.user_img)" alt="grid"></a>
                <a v-else><img src="../../public/images/users/avatar-1.jpg" alt="grid"></a>
              
              </div>
              <!-- :disabled="store.isDisabled" -->
              <button class="changeImg btn btn-info"  @click="changeFile" >
                {{ $t("page_profile_bt_pic") }}
              </button>
              <input type="file" ref="fileInput" style="display: none;">
     
              
            </div>

            <div class="gridarea__content w-100 p-0">
                <div class="gridarea__list row ">
                  <p class="col fw-bold">{{ $t("page_profile_status") }}</p>

                  <div class="col " v-if="store.formdetail.verify_account == 'phone_active'">
                    <span class="badge text-bg-success">
                      {{ $t("phone_active") }}
                    </span>
                  </div>
                  <div class="col " v-if="store.formdetail.verify_account == 'system_unactive'">
                    <span class="badge text-bg-success">
                      {{ $t("system_unactive") }}
                    </span>
                  </div>
                  <div class="col " v-if="store.formdetail.verify_account == 'system_active'">
                    <span class="badge text-bg-success">
                      {{ $t("system_active") }}
                    </span>
                  </div>
                </div>

                

              </div>

              <div class="gridarea__list row  pb-0 pt-5">
                  <!-- <button v-if="
                        store.formdetail.verify_account !== 'system_active' ??
                        disabled
                      "
                      type="button"
                      class="btn btn-primary mt-0" @click="update()">
                      {{ $t("bt_edit") }}
                    </button> -->

                    <button
                      type="button"
                      class="btn btn-primary mt-0"
                      @click="update()"
                      v-if="
                        store.formdetail.verify_account !== 'system_active' ??
                        disabled
                      "
                    >
                    {{ $t("bt_save") }}
                    </button>
                    
                    <div v-else>
                      <p>
                        {{ $t('note_edit_profile') }}
                      </p>
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
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';

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
    country: {
      required: helpers.withMessage("Select Country field is required", required),
      minLength: minLength(1),
    },
    location: {
      required: helpers.withMessage("Select location field is required", required),
      minLength: minLength(1),
    },
    user_village: {
      required: helpers.withMessage(
        "The Identification number field is required",
        required
      ),
      minLength: minLength(1),
    },
    user_address: {
      required: helpers.withMessage(
        "Adress field is required",
        required
      ),
      minLength: minLength(1),
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

    Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
let savedetails = await store.UpdateDetails();

if (savedetails == true) {
   setTimeout(() => Swal.close(), 500);
  await Swal.fire({
    position: "top-end",
    icon: "success",
    title: "ບັນທຶກສຳເລັດແລ້ວ",
    showConfirmButton: false,
    timer: 1500,
  });
} else {
   setTimeout(() => Swal.close(), 500);
   await Swal.fire({
    position: "top-end",
    icon: "error",
    text: "ບໍ່ສຳເລັດ!",
    showConfirmButton: false,
    timer: 1500,
  });
}
 
}



}

const changedLabelCounrt = async (event) => {
store.formscout.search = event.target.value
await store.Country();

}

const changedLabelZip = async (event) => {
store.formszipcode.search = event.target.value
await store.Zipcode();

}

const fileInput = ref(null);
const changeFile = () => {
          // Trigger a click event on the file input element
          fileInput.value.click();
        };
const handleFileChange = async (event) => {
  var input = event.target;
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    var reader = new FileReader();
    reader.onload = (e) => {
      store.formdetail.user_img = e.target.result;
    };
    store.imagelist = input.files[0];
    reader.readAsDataURL(input.files[0]);
  } else {
    // Reset the image URL if the selected file is not an image
    //   this.imageUrl = null;
    const input = document.querySelector('input[type="file"]');
  input.value = "";
    Swal.fire({
      text: 'Upload File Image Only!',
      icon: 'error',
    });
  }
};


const onInput = async (event) => {
    store.formdetail.identification_number = event.target.value.replace(/\D/g, '');
}



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
}
.grid_detail{
  display: block !important;
  background: unset;
  box-shadow: unset;
  position: relative;
}
.changeImg {
  top: 1%;
}
</style>