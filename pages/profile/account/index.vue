<template>
  <div style="background-color: var(--dotColor)">
    <div class="container py-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="breadcrumb__content__wraper" data-aos="fade-up">
            <div class="breadcrumb__title">
              <h3 class="heading">Update Account Detail</h3>
            </div>
            <div class="breadcrumb__inner">
              <ul>
                <li>
                  <a href="#">{{ $t("home") }}</a>
                </li>
                <li>{{ $t("page_appoint") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-sm py-3 py-md-4 py-lg-5 appcontent">
    <div class="loginarea__wraper pt-1 pb-3">

        <div class="row mt-3">
          <div class="col-xl-2">
            <div class="login__form">
              <label class="form__label">{{ $t("form_name_title") }}<span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  ></label>
       
              <select
                class="common__login__input px-2 form-control"
                aria-label="Default select example" v-model="store.formaddprove.user_prefrix"
              >
                <option selected value="" disabled>
                  {{ $t("choose") }}
                </option>
                <option value="ທ້າວ">{{ $t("than") }}</option>
                <option value="ນາງ">{{ $t("nang") }}</option>
              </select>
              <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_prefrix.$error"
                    >{{ $t("profile_alert_title") }}</span
                  >
            </div>
          </div>
          <div class="col-xl-5">
            <div class="login__form">
              <label class="form__label">{{ $t("fname") }}   <span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  ></label>
              <input
                class="common__login__input form-control"
                type="text"
                :placeholder="$t('fname')"
                maxlength="20"
                 v-model="store.formaddprove.first_name"
                 :class="{
                    'border-red-500 focus:border-red-500': v$.first_name.$error,
                    'border-[#42d392] ': !v$.first_name.$invalid,
                  }"
                  @change="v$.first_name.$touch"
              />
                <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.first_name.$error"
                    >{{ $t("form_d_first_name") }}</span
                  >
            </div>
          </div>
          <div class="col-xl-5">
            <div class="login__form">
              <label class="form__label">{{ $t("lname") }}<span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  ></label>
              <input
                class="common__login__input form-control"
                type="text"
                :placeholder="$t('lname')"
                maxlength="20"
                v-model="store.formaddprove.last_name"
                 :class="{
                    'border-red-500 focus:border-red-500': v$.last_name.$error,
                    'border-[#42d392] ': !v$.last_name.$invalid,
                  }"
                  @change="v$.last_name.$touch"
              />
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.last_name.$error"
                    >{{ $t("form_d_last_name") }}</span
                  >
            </div>
          </div>
          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("full_name_update_acc_label") }}
                <span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  >
              </label>
              <input
                class="common__login__input form-control"
                type="text"
                :placeholder="$t('full_name_update_acc_pehol')"
                v-model="store.formaddprove.full_name"
                 :class="{
                    'border-red-500 focus:border-red-500': v$.full_name.$error,
                    'border-[#42d392] ': !v$.full_name.$invalid,
                  }"
                  @change="v$.full_name.$touch"
              />
              <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.full_name.$error"
                    >{{ $t("form_d_full_name") }}</span
                  >
            </div>
          </div>

          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("passport_update_acc_label") }}<span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  >
              </label>
              <input
                class="common__login__input form-control"
                type="text"
                :placeholder="$t('passport_update_acc_pehol')"

                v-model="store.formaddprove.identification_number"
                 :class="{
                    'border-red-500 focus:border-red-500': v$.identification_number.$error,
                    'border-[#42d392] ': !v$.identification_number.$invalid,
                  }"
                  @change="v$.identification_number.$touch"
              />

                   <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.identification_number.$error"
                    >{{ $t("form_d_iden") }}</span
                  >
            </div>
          </div>

          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("exp_update_acc_label") }}<span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  >
              </label>
     <VueDatePicker  :format="format"

     v-model="store.formaddprove.expire"  :enable-time-picker="false"
               :placeholder="$t('exp_update_acc_pehol')"
               ></VueDatePicker>

              
            </div>
                     <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.expire.$error"
                    >{{ $t("form_d_exp") }}</span
                  >
          </div>

          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("bird_update_acc_label") }}<span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  >
              </label>
      
               <VueDatePicker  :format="format"
                 v-model="store.formaddprove.user_birthday"  :enable-time-picker="false"
               :placeholder="$t('bird_update_acc_pehol')"
               ></VueDatePicker>
                        <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_birthday.$error"
                    >{{ $t("form_d_bird") }}</span
                  >
            </div>
          </div>

          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("add_update_acc_label") }}<span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  >
              </label>
              <input
                class="common__login__input form-control"
                type="text"
                :placeholder="$t('add_update_acc_pehol')"

                v-model="store.formaddprove.user_address"
                 :class="{
                    'border-red-500 focus:border-red-500': v$.user_address.$error,
                    'border-[#42d392] ': !v$.user_address.$invalid,
                  }"
                  @change="v$.user_address.$touch"
              />

          

                          <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_address.$error"
                    >{{ $t("form_d_add") }}</span
                  >
            </div>
          </div>

          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("home_update_acc_label") }} <span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  >
              </label>
              <input
                class="common__login__input form-control"
                type="text"
                :placeholder="$t('home_update_acc_pehol')"

                v-model="store.formaddprove.user_village"
                 :class="{
                    'border-red-500 focus:border-red-500': v$.user_village.$error,
                    'border-[#42d392] ': !v$.user_village.$invalid,
                  }"
                  @change="v$.user_village.$touch"
              />
               <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_village.$error"
                    >{{ $t("form_d_vil") }}</span
                  >
            </div>
          </div>

          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label">{{
                $t("prov_update_acc_label")
              }} <span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  ></label>
              <!-- <select
                class="common__login__input px-2"
                aria-label="Default select example"
              >
                <option selected :value="null" disabled>
                  {{ $t("choose") }}
                </option>
               <option  v-for="(item, index) in store.zipcode">{{item.zipcode_name}} - {{item.province_name}}</option>
              </select> -->

                             <v-select

    :options="store.zipcode"
    label="item_data"

     placeholder="ເລືອກ"
     v-model="store.formaddprove.location_id"
     :reduce="item_data => item_data.id" 
  ></v-select>
  <span
                    class="text-xs text-red-500 form-control"
                    style="color: red"
                    v-if="v$.location_id.$error"
                    >{{ $t("form_d_district") }}</span
                  >
            </div>
          </div>

          <div class="col-xl-12 mt-3">
            <div class="login__form">
              <label class="form__label">{{
                $t("cou_update_acc_label")
              }}</label>
              <select v-model="store.formaddprove.country_id"
                class="common__login__input px-2 form-control"
                aria-label="Default select example"  disabled
              >
                <option selected :value="null" disabled>
                  {{ $t("choose") }}
                </option>
              <option  v-for="(item, index) in store.country" :value="item.country_id">{{item.country_name_eng}}</option>
              </select>
            </div>
          </div>

          <!-- <div class="col-xl-2">
            <div class="login__form">
              <label class="form__label">ຮູບບັດ / Passport</label>
          
            </div>
          </div>

                     <div class="col-xl-3">
            <div class="login__form">
             
              <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
            </div>
          </div>

              
                  <div class="col-xl-6">
            <div class="login__form">
              <label class="form__label">ຮູບຕົວຈິງ</label>
            
            </div>
          </div> -->
        </div>
        <br />
       
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
              <span>ຮູບບັດ / Passport <span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  ></span>
               <span style="float: inline-end;">
         
                <input type="file" ref="fileInputFont" style="display: none;">
        <button class="changeImg btn btn-success"  @click="changeFont" >
                Browse
              </button>
              
              </span>
               
             
              </div>

                 <div class="card-body">
                 <p class="card-text">
                  ຕ້ອງເປັນຮູບທີ່ແຈ້ງດີ ສາມາດອ່ານຄຳສັບຢູ່ໜ້າບັດໄດ້.
                </p>
               
              </div>


              <div class="card-body" v-if="store.image_pas">
               <img class="aboutimg__1" :src="coverimage(store.image_pas)" alt="aboutimg" style="
    width: 100%;
">
        
              </div>
              <div class="card-body" v-else>
               <img class="aboutimg__1" src="../../../assets/img/ppt.JPG" alt="aboutimg" style="
    width: 100%;
">
        
              </div>
          
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                 <span>ຮູບຕົວຈິງ</span><span
                    class="text-xs text-red-500"
                    style="color: red"
                
                    >*</span
                  >
               <span style="float: inline-end;">
                <input type="file" ref="fileInputBack" style="display: none;">
        <button class="changeImg btn btn-success"  @click="changeBack" >
                Browse
              </button>
            
               </span>
               
              </div>

             <div class="card-body">
                    <p class="card-text">
                  ຖ່າຍຮູບຕົນເອງ ພ້ອມກັບບັດປະຈຳຕົວ / passport. ຮູບຕ້ອງແຈ້ງດີ,
                  ບໍ່ມີຜູ້ອື່ນຢູ່ດ້ານຫຼັງ.
                </p>
               
              </div>
      
  <div class="card-body" v-if="store.image_real">
               <img class="aboutimg__1" :src="coverimage(store.image_real)" alt="aboutimg" style="
    width: 100%;
">
        
              </div>
              <div class="card-body" v-else>
               <img class="aboutimg__1" src="../../../assets/img/ppt.JPG" alt="aboutimg" style="
    width: 100%;
">
        
              </div>
            </div>
          </div>
        </div>
<br>
        <div class="login__button" style="text-align: center">
          <button  @click="update()"
            type="button"
            class="btn btn-primary"
            style="
              width: 30%;
              background-color: #2ab0e5;
              color: white;
              border: none;
              border-radius: 0px;
            "
          >
            {{ $t("singup_title") }}
          </button>
        </div>
      
    </div>
  </div>
  <div class="container">
    <p>
      Note: For information about standard procedure to get driving license,
      please click here:
      <span><a href="" class="text-primary">Driving license prodedure</a></span>
    </p>
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
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import moment from 'moment-timezone';
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { VerifyStore } from "@/stores/verify";
const { locale, setLocale , t} = useI18n();
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});

const store = useAuthStore();

const router = useRouter();
const { getFormProve } = storeToRefs(store);

await store.Zipcode();
await store.Country();
await store.ManageProfile();


onMounted(() => {
  fileInputFont.value.addEventListener('change', changeFileFont);
  fileInputBack.value.addEventListener('change', changeFileBack);
  
      store.zipcode.map(function (x){
      return x.item_data = x.zipcode_name + ' - ' + x.province_name;
    });
 });

 
const rules = computed(() => {
  return {
      user_prefrix: {
      required: helpers.withMessage(
        "The User name field is required",
        required
      ),
      minLength: minLength(1),
    },
    first_name: {
      required: helpers.withMessage(
        "The Identification number field is required",
        required
      ),
      minLength: minLength(5),
    },
    last_name: {
      required: helpers.withMessage(
        "The Identification number field is required",
        required
      ),
      minLength: minLength(5),
    },
    full_name: {
      required: helpers.withMessage(
        "The Identification number field is required",
        required
      ),
      minLength: minLength(5),
    },
    identification_number: {
      required: helpers.withMessage(
        "The Identification number field is required",
        required
      ),
      minLength: minLength(5),
    },

    location_id: {
      required: helpers.withMessage("Select location field is required", required),
      minLength: minLength(1),
    },

    user_village: {
      required: helpers.withMessage(
        "The village field is required",
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
    expire: {
      required: helpers.withMessage(
        "expire field is required",
        required,
      ),
    },


    


  };
});

const v$ = useVuelidate(rules, getFormProve);

function coverimage(i) {
  let result = i.slice(0, 6);
  if (result === "static") {
    let im = ApiService.image(i);
    return im;
  } else {
    return i;
  }
}
const date = ref(new Date());
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const update = async () => {

// await store.UpdateDetails();

 v$.value.$validate();

 if(!store.image_pas){
  Swal.fire({
          title:  t('pass_update_fail'),
          icon: 'error',
        });
return false;
 }
 if(!store.image_real){
  Swal.fire({
          title:  t('real_update_fail'),
          icon: 'error',
        });
  return false;
  }
if (!v$.value.$error) {
let  updateprofile = await store.UpdateAddVeriry();
if(updateprofile == true){
      Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
  
// let save = await store.UpdateCheckAddVeriry();



 setTimeout(() => Swal.close(), 500);
}
  //   Swal.fire({
  //   allowEscapeKey: false,
  //   allowOutsideClick: false,
  //   didOpen: () => {
  //     Swal.showLoading()
  //   },
  // });

 
}



}





const fileInputFont = ref(null);
const fileInputBack = ref(null);

const changeFont = () => {

// Trigger a click event on the file input element
fileInputFont.value.click();
};

const changeBack = () => {

// Trigger a click event on the file input element
fileInputBack.value.click();
};

const changeFileFont = async (event) => {
  var inputs = event.target;
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    // Use FileReader to read the selected image and set it as the source for the <img> tag
    // const reader = new FileReader();
    // reader.onload = () => {
    //   store.passpost_image = reader.result;
    // };
    // store.image_pas = inputs.files[0];
    // reader.readAsDataURL(file);

    store.passpost_image = inputs.files[0];
   // console.log(store.passpost_image);
   store.UploadImage();
  
  } else {

    Swal.fire({

      text: 'Upload File Image Only!',
      icon: 'error',

    });

  }
};


const changeFileBack = async (event) => {
  var inputs = event.target;
  const file = event.target.files[0];


  if (file && file.type.startsWith('image/')) {
    // Use FileReader to read the selected image and set it as the source for the <img> tag
    // const reader = new FileReader();
    // reader.onload = () => {
    //   store.passpost_image = reader.result;
    // };
    // store.image_pas = inputs.files[0];
    // reader.readAsDataURL(file);

    store.real_image = inputs.files[0];


   store.UploadImage2();
  
  } else {

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
.appcontent {
  min-height: 400px;
}

.make-app-form {
  width: 50%;
}
@media screen and (max-width: 1199px) {
  .make-app-form {
    width: 70%;
  }
}
@media screen and (max-width: 991px) {
  .make-app-form {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .make-app-form {
    width: 100%;
  }
}

.file-input-container {
    display: flex;
    align-items: center;
}

.file-input {
    display: none; /* Hide the real file input */
}

.file-input-label {
    background-color: #4CAF50; /* Green background */
    color: white;              /* White text */
    padding: 10px 20px;        /* Add some padding */
    border-radius: 5px;        /* Rounded corners */
    cursor: pointer;           /* Pointer on hover */
    margin-right: 10px;        /* Space between button and file name */
    font-size: 16px;           /* Increase font size */
}

.file-input-label:hover {
    background-color: #45a049; /* Darker green on hover */
}

.file-name {
    font-size: 16px;           /* Font size for file name */
    color: #333;               /* Dark color for file name text */
}
</style>