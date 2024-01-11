<template>
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner">
            <div class="contact__form__heading" data-aos="fade-up">
              <h3 style="text-align: center">  {{ $t("page_verify_step1") }}</h3>
            </div>
            <div class="row">
              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label"> {{ $t("page_verify_iden") }}</label>
               

                  <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.identification_number.$error"
                    >{{ $t("form_d_iden") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.identification_number.$error"
                    >{{ $t("form_d_iden") }}</span
                  >
                </span>
                  <input
                    type="text"
                    name="con_name"
                    id="con_name"
                  
                    placeholder="ໝາຍເລກບັດປະຈຳຕົວ"
                    maxlength="13"
                    v-model="store.formdetail.identification_number"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.identification_number.$error,
                      'border-[#42d392] ': !v$.identification_number.$invalid,
                    }"
                    @change="v$.identification_number.$touch"
                    autocomplete="off" @input="onInput"
                  />
                </div>
              </div>

              

              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label">{{ $t("page_verify_day") }}</label>
                  <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_birthday.$error"
                    >{{ $t("form_d_bird") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_birthday.$error"
                    >{{ $t("form_d_bird") }}</span
                  >
                </span>
                  <input
                    type="date"
                    name="con_email"
                    id="con_email"
                    placeholder="ອີເມວ*"
                    v-model="store.formdetail.user_birthday"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.user_birthday.$error,
                      'border-[#42d392] ': !v$.user_birthday.$invalid,
                    }"
                    @change="v$.user_birthday.$touch"
                    autocomplete="off"
                  />
                </div>
              </div>

    
              <div class="col-xl-12 mb-3" data-aos="fade-up">
                <div class="contact__input__wraper">
             

                  <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_address.$error"
                    >{{ $t("form_d_add") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_address.$error"
                    >{{ $t("form_d_add") }}</span
                  >
                </span>
                  <textarea
                    name="con_message"
                    id="con_message"
                    cols="10"
                    rows="10"
                    placeholder="ທີ່ຢູ່"
                    v-model="store.formdetail.user_address"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.user_address.$error,
                      'border-[#42d392] ': !v$.user_address.$invalid,
                    }"
                    @change="v$.user_address.$touch"
                    autocomplete="off"
                  ></textarea>
                  <div class="contact__icon">
                    <i class="icofont-pen-alt-2"></i>
                  </div>
                </div>
              </div>


              <div class="col-xl-12" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label"> {{ $t("page_user_village") }}</label>
              

                  <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_village.$error"
                    >{{ $t("form_d_vil") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_village.$error"
                    >{{ $t("form_d_vil") }}</span
                  >
                </span>
                  <input
                    type="text"
                    name="con_name"
                    id="con_name"
                  
                    placeholder="ບ້ານ"
                    maxlength="50"
                    v-model="store.formdetail.user_village"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.user_village.$error,
                      'border-[#42d392] ': !v$.user_village.$invalid,
                    }"
                    @change="v$.user_village.$touch"
                    autocomplete="off" 
                  />
                </div>
              </div>

     

              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label">  {{ $t("page_verify_zip") }}  
              <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.location_id.$error"
                    >{{ $t("form_d_zip") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.location_id.$error"
                    >{{ $t("form_d_zip") }}</span
                  >
                </span>
            </label>
                  <!-- <select
                    class="form-control"
                    v-model="store.formdetail.location_id"
                  >
                    <option
                      v-for="(zipcode, index) in store.zipcode"
                      :key="zipcode.id"
                      :value="zipcode.id"
                    >
                      {{ zipcode.zipcode_name }}
                    </option>
                  </select> -->

                  
                </div>
              </div>

                <v-select
  v-model="store.formdetail.location_id"
    :options="store.zipcode"
    label="zipcode_name"
    @input="changedLabel"
     placeholder="ເລືອກ"
     
  ></v-select>

              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label"> {{ $t("page_verify_county") }}    
              <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.country_id.$error"
                    >{{ $t("form_d_cou") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.country_id.$error"
                    >{{ $t("form_d_cou") }}</span
                  >
                </span>
            
            </label>
                  <!-- <select
                    class="form-control"
                    v-model="store.formdetail.country_id"
                  >
                    <option
                      v-for="(country, x) in store.country"
                      :key="country.country_id"
                      :value="country.country_id"
                    >
                      {{ country.country_name_eng }}
                    </option>
                  </select> -->



                </div>
              </div>

                <v-select
  v-model="store.formdetail.country_id"
    :options="store.country"
    label="country_name_eng"
    @input="changedLabelCounrt"
     placeholder="ເລືອກ"

  ></v-select>





              <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_img.$error"
                    >{{ $t("form_d_image") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_img.$error"
                    >{{ $t("form_d_image") }}</span
                  >
                </span>
              <div class="form-group mb-4 mt-3">
                <label for="exampleFormControlFile1"> {{ $t("page_verify_imagepro") }}</label>
                <span
                  class="text-xs text-red-500"
                  style="color: red"
                  v-if="store.imageReq == true"
                >
                  Invalid file selected</span
                >
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  @change="onFileChange"
                  ref="fileupload"
                  accept="image/*"
                />
              </div>
              <div>
                <div class="border rounded p-2 mt-3" id="showimg">
                  <p> {{ $t("page_verify_display_image") }}:</p>
                  <template v-if="store.formdetail.user_img">
                    <div class="row">
                      <div id="image-container" class="col-md-3 col-sm-4 col-6">
                        <div class="image-wrapper">
                          <img
                            :src="coverimage(store.formdetail.user_img)"
                            class="img-fluid"
                          />
                          <button @click="removeImage()" class="delete-button">
                            <i class="bi bi-x-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <!-- <select class="js-example-basic-single" name="state">
  <option value="AL">Alabama</option>

  <option value="WY">Wyoming</option>
</select> -->



 
              <div class="col-xl-12" data-aos="fade-up">
                <div class="contact__button">
                  <button
                    type="submit"
                    value="submit"
                    class="default__button"
                    name="submit"
                    @click="sendotp()"
                  >
                    {{ $t("page_exam_report_del_confirm") }}
                  </button>
                  <p class="form-messege"></p>
                </div>
              </div>
            </div>
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
import { VerifyStore } from "@/stores/verify";
import { useRoute } from "vue-router";
import ApiService  from "../../services/api.service";
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import Swal from "sweetalert2";
import len  from "../../locales/en.json";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();


const router = useRouter();
const store = VerifyStore();
const auth = useAuthStore();
const { getForm } = storeToRefs(store);
const { getUser_id } = storeToRefs(store);
const { Zipcode } = VerifyStore();
const { Country } = VerifyStore();
const { SendOtp } = VerifyStore();
const { SaveUserVerify } = VerifyStore();

store.formdetail.user_id = auth.user_id;
await store.Zipcode();
await store.Country();



const rules = computed(() => {
  return {
    identification_number: {
      required: helpers.withMessage(
        "The identification Number name field is required",
        required
      ),
      minLength: minLength(13),
    },
    user_birthday: {
      required: helpers.withMessage("The Birthday field is required", required),
      minLength: minLength(1),
    },
    user_village: {
      required: helpers.withMessage("Village field is required", required),
      minLength: minLength(1),
    },
    user_address: {
      required: helpers.withMessage("The Address field is required", required),
      minLength: minLength(1),
    },
    country_id: {
      required: helpers.withMessage("Select Country field is required", required),
      minLength: minLength(1),
    },
    location_id: {
      required: helpers.withMessage("Select Location is required", required),
      minLength: minLength(1),
    },
    user_img: {
      required: helpers.withMessage(
        "The Image Profile field is required",
        required
      ),
      minLength: minLength(1),
    },
  };
});

const v$ = useVuelidate(rules, getForm);

const sendotp = async () => {
 v$.value.$validate();

  if (!v$.value.$error) {
    store.formdetail.location_id = store.formdetail.location_id.id
    store.formdetail.country_id = store.formdetail.country_id.country_id
   const savedetail = await SaveUserVerify();
    if (savedetail == true) {
    await SendOtp()
    await router.push("/otpconfirm");
    }else {
      await Swal.fire({
  position: 'top-end',
  icon: "error",
  title: "ໝາຍເລກບັດອາດຈະຄືກັນ.!",
  showConfirmButton: false,
  timer: 1500
})

    }
  }
};

const onInput = async (event) => {
  store.formdetail.identification_number = event.target.value.replace(/\D/g, '');
}


const changedLabel = async (event) => {

store.formszipcode.search = event.target.value
if(event.data == null){
store.formszipcode.search = ""
}
await store.Zipcode()
}

const changedLabelCounrt = async (event) => {

store.formscountry.search = event.target.value
if(event.data == null){
store.formscountry.search = ""
}

await store.Country()

}







// function fromTimeWindow(A) {
//   console.log('fromTimeWindow',len);

//   return 'x'
// }

const onFileChange = async (event) => {
  var input = event.target;
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    // Use FileReader to read the selected image and set it as the source for the <img> tag
    const reader = new FileReader();
    reader.onload = () => {
      //  this.imageUrl = reader.result;
      store.formdetail.user_img = reader.result;
    };
    store.imagelist = input.files[0];
    reader.readAsDataURL(file);
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



const removeImage = async () => {
  store.formdetail.user_img = null;
  const input = document.querySelector('input[type="file"]');
  input.value = "";
};


function coverimage(i) {
  let result = i.slice(0, 6);
  if (result === "static") {
    let im = ApiService.image(i);
    return im;
  } else {
    return i;
  }
}
</script>
<style>
.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
}
#image-container img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}
#image-container .delete-button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border: none;
  padding: 2.5px 5px;
  cursor: pointer;
}
#image-container .image-wrapper {
  position: relative;
  display: inline-block;
  margin: 10px;
  border: 1px solid;
}
#image-container {
  width: fit-content;
  min-width: 200px;
  min-height: 200px;
  max-width: 300px;
  max-height: 300px;
}
#con_email {
  padding-right: 20px;
}

#con_email,
#con_name,
#con_message,
#showimg {
  background-color: white;
}
</style>
