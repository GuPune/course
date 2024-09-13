




<template>
  <div>
    <div style="background-color: var(--dotColor)">
      <div class="container py-3 mb-2">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <h3 class="heading">Account Detail</h3>
              <div class="breadcrumb__inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="coursearea">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="contact__section" data-aos="fade-up">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-6 col-xl-6 col-lg-6 your-element">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-7">
                        <div class="blog__details__content__wraper">
                        
                          <div v-if="auth.profile_by_one[0].user_img">
                            <img
                              :src="coverimage(auth.profile_by_one[0].user_img)"
                              alt="blog"
                              width="300"
                              height="250"
                            />
                          </div>
                          <div v-else>
                            <img
                              src="../../assets/img/person-avatar.jpg"
                              alt="blog"
                            />
                          </div>
                          <div class="blog__details__content"></div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-5">
                        <span>
                          <input
                            type="file"
                            ref="fileInputFont"
                            style="display: none"
                          />
                          <button
                            class="changeImg btn btn-primary"
                            @click="changeFont"
                          >
                          {{$t('profile_button_upload')}}
                            
                          </button>
                        </span>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-lg"
                        >
                          {{ auth.profile_by_one[0].user_prefrix }}
                          {{ auth.profile_by_one[0].user_firstname }}
                          {{ auth.profile_by_one[0].user_lastname }}
                        </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-lg"
                        >
                          {{ auth.profile_by_one[0].user_full_name }}
                        </label>
                      </div>
                      <br />
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="col-12 col-sm-6 col-xl-12 col-lg-12">
                          <div class="row">
                            <div class="col-3 col-sm-12 col-md-2">
                              <label
                                for="company-name"
                                class="col-sm-12 col-form-label col-form-label-lg"
                              >
                              {{$t('profile_tel')}}
                              </label>
                            </div>
                            <div class="col-6 col-sm-12 col-md-5">
                              <label
                                for="company-name"
                                class="col-sm-12 col-form-label col-form-label-lg"
                              >
                                {{
                                  chtelformate(
                                    auth.profile_by_one[0].user_phone
                                  )
                                }}
                              </label>
                            </div>
                            <div
                              class="col-3 col-sm-12 col-md-3"
                              style="color: green"
                            >
                              <label
                                for="company-name"
                                class="col-sm-12 col-form-label col-form-label-lg"
                              >
                                ຢືນຢັນແລ້ວ
                              </label>
                            </div>
                            <div class="col-12 col-sm-12 col-md-2">
                              <button
                                type="button"
                                class="btn btn-primary"
                                @click="ModalChangeTel()"
                             style="width: 100%;">
                             {{$t('profile_button_changetel')}}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-6 col-xl-12 col-lg-12">
                       
                        <div class="row">
                          <div class="col-3 col-sm-12 col-md-2">
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-lg"
                            >
                            {{$t('profile_email')}}
                            </label>
                          </div>
                          <div class="col-6 col-sm-12 col-md-5">
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-lg"
                            >
                              {{ auth.profile_by_one[0].user_email }}
                            </label>
                          </div>
                          <div
                            class="col-3 col-sm-12 col-md-3"
                            style="color: red"
                          >
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-lg"
                            >
                              ບໍ່ຢືນຢັນ
                            </label>
                          </div>
                          <div class="col-12 col-sm-12 col-md-2">
                            <!-- <button type="button" class="btn btn-primary"    style="width: 100%;">
                              {{$t('profile_button_changeemail')}}
                              
                            </button> -->
                          </div>
                        </div>
                      </div>


                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-lg"
                        >
                        {{$t('profile_usersname')}} {{ auth.profile_by_one[0].user_name }}
                        </label>
                      </div>

            
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 col-xl-6">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-12">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-lg"
                        >
                   {{$t('profile_status_label')}}

                          <span
                            v-if="
                              auth.profile_by_one[0].verify_account ==
                              'phone_active'
                            "
                            style="color: #ffa927"
                          >
                            ຢືນຢັນ OTP ສໍາເລັດ
                          </span>

                          <span
                            v-else-if="
                              auth.profile_by_one[0].verify_account ==
                              'phone_unactive'
                            "
                            style="color: red"
                          >
                            ຢືນຢັນ OTP ບໍ່ຖືກຕ້ອງ
                          </span>
                          <span
                            v-else-if="
                              auth.profile_by_one[0].verify_account ==
                              'system_active'
                            "
                            style="color: green"
                          >
                            ຢືນຢັນຕົວຕົນແລ້ວ
                          </span>
                          <span
                            v-else-if="
                              auth.profile_by_one[0].verify_account ==
                              'system_unactive'
                            "
                            style="color: red"
                          >
                            ຢືນຢັນຂໍ້ມູນທີ່ບໍ່ຖືກຕ້ອງ
                          </span>
                        </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          {{$t('profile_passport')}}
                        </label>
                      </div>
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          {{ auth.profile_by_one[0].identification_number }}
                        </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                         {{$t('profile_passport_exp')}}
                        </label>
                      </div>
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          {{ auth.profile_by_one[0].exp_date }}
                        </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                        {{$t('profile_birthday')}}
                        </label>
                      </div>
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          {{ auth.profile_by_one[0].user_birthday }}
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                         {{$t('profile_coutr')}}
                        </label>
                      </div>
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          ລາວ
                        </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                        {{$t('profile_address')}}
                        </label>
                      </div>
                      <div class="col-6 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          {{ auth.profile_by_one[0].user_address }}
                        </label>
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          {{ auth.profile_by_one[0].zipcode_name }} -
                          {{ auth.profile_by_one[0].province_name }}
                        </label>
                      </div>
                    </div>

                    <div
                      class="row"
                      v-if="auth.profile_by_one[0].passpost_image"
                    >
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                        {{$t('profile_image')}}
                        </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <div class="form-group row">
                          <img
                            :src="
                              coverimage(auth.profile_by_one[0].passpost_image)
                            "
                            class="img-fluid"
                            width="80"
                            height="80"
                          />
                        </div>
                      </div>
                    </div>
                    <br />

                    <div class="row" v-if="auth.profile_by_one[0].real_image">
                      <div class="col-12 col-sm-12 col-md-6"></div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <div class="form-group row">
                          <img
                            :src="coverimage(auth.profile_by_one[0].real_image)"
                            class="img-fluid"
                            width="80"
                            height="80"
                          />
                        </div>
                      </div>
                    </div>
                    <br />

                    <div class="row" v-if="auth.comment.length > 0">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          ຄຳເຫັນ:
                        </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                          v-for="(item, index) in auth.comment"
                          :key="item.ap_id"
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-md"
                        >
                          {{ item.comment_details }}
                        </label>
                      </div>
                    </div>
                    <!-- v-if="auth.profile_by_one[0].status == 'N' || auth.profile_by_one[0].status == '' " -->
                    <div class="row">
                      <div
                        class="col-12 col-sm-12 col-lg-12"
                        @click="MyAddprove()"
                        v-if="(((auth.profile_by_one[0].verify_account == 'phone_active') || (auth.profile_by_one[0].verify_account == 'system_unactive')) && ((auth.profile_by_one[0].status == '') || (auth.profile_by_one[0].status == 'N')))"
                      >
                        <button
                          type="button"
                          class="btn btn-primary"
                          style="width: 100%"
                        >
                          ສົ່ງຂ້ມູນ ເພື່ອຢືນຢັນຕົວຕົນ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    

        <div class="row">
          <div class="col-xl-12">
            <div class="contact__section" data-aos="fade-up">
              <div class="container">
                <div class="row" >
                  <div class="col-12 col-sm-12 col-xl-12 col-lg-12" v-if="auth.login_last[0]">
                    <label
                      for="company-name"
                      class="col-sm-12 col-form- label col-form-label-sm"
                    >
                      Last login: {{auth.login_last[0].login_date}}
                    </label>
                  </div>
                  <div class="col-12 col-sm-12 col-xl-12 col-lg-12"  v-if="auth.update_last[0]">
                    <label
                      for="company-name"
                      class="col-sm-12 col-form-label col-form-label-sm"
                    >
                      Last Data update: {{auth.update_last[0].update_data}}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" v-if="auth.mod_change_tel">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">{{$t('profile_tel_change_new')}}</h1>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-4 col-form-label"
            >{{$t('profile_tel_change_new_label')}}</label
          >
          <input
            type="text"
            class="form-control"
            placeholder="20xxxxxxxx"
            maxlength="10"
            v-model="auth.formachangtel.changeiden"
            autocomplete="off"
            @input="filterInput"
            @change="v$.changeiden.$touch"
          />
        </div>

        <span
          class="text-xs text-red-500"
          style="color: red"
    
          >{{$t('profile_button_change_tel_alert')}}</span
        >
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-primary" @click="CheckTel()">
       
          {{$t('profile_button_change_select_tel')}}
        </button>
      </div>
    </div>
  </div>


  
  <div class="modal" v-if="auth.mod_change_email">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">{{$t('profile_labe_email')}}</h1>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-4 col-form-label"
            >{{$t('profile_labe_email_text')}}</label
          >
          <input
            type="email"
            class="form-control"
            placeholder="XXXX@XXXXXX.XX"
            maxlength="30"
            v-model="auth.email"
            autocomplete="off"
             
          />
        </div>

        <span v-if="auth.changeformemail"
          class="text-xs text-red-500"
          style="color: red"
    
          >{{$t('profile_button_change_email_alert_formate')}}</span
        >
        <span v-if="auth.chaeckemailtaken"
          class="text-xs text-red-500"
          style="color: red"
    
          >{{$t('profile_button_change_email_alert_same')}}</span
        >

        <span v-if="auth.changeemailvalid"
          class="text-xs text-red-500"
          style="color: red"
    
          >{{$t('profile_button_change_email_alert_valid')}}</span
        >
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-primary" @click="CheckEmail()">
       
          {{$t('profile_button_change_select_tel')}}
        </button>
      </div>
    </div>
  </div>

  <div class="modal" v-if="auth.mod_otp_change_email">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">{{$t('profile_labe_otp')}}</h1>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-12 col-form-label" style="text-align: center;"
            >{{$t('profile_labe_otp_text')}}
              <span> 856{{ auth.formachangtel.changeiden }}</span></label
          >
     
        </div>

        <div class="form-group d-flex justify-content-center">
          <div class="otp-inputs">
            <input
            class="otp-input" type="text" v-model="auth.otp[0]" @input="moveFocus(1)" ref="input1"   @click="preventDoubleClick"
                            maxlength="1"  />
                             <input class="otp-input" v-model="auth.otp[1]" @input="moveFocus(2)" ref="input2" @click="preventDoubleClick"
                            type="text" id="input2" maxlength="1"  /> 
                            <input class="otp-input"
                           type="text" id="input3" maxlength="1"    v-model="auth.otp[2]" @input="moveFocus(3)" ref="input3" @click="preventDoubleClick"/>
                             <input class="otp-input"  type="text" id="input4"  v-model="auth.otp[3]" @input="moveFocus(4)" ref="input4"  @click="preventDoubleClick"
                        maxlength="1"  /> 
                        <input class="otp-input"  type="text" id="input5"  v-model="auth.otp[4]" @input="moveFocus(5)" ref="input5"  @click="preventDoubleClick"
                        maxlength="1"  /> 
                        <input class="otp-input"  type="text" id="input6"  v-model="auth.otp[5]"  ref="input6"  
                        maxlength="1" @click="preventDoubleClick" /> 
    </div>

 
        
              </div>
              <span v-if="auth.Isotpconfirm"
          class="text-xs text-red-500"
          style="color: red"
         
          >{{$t('profile_labe_otp_alert_min2')}}</span
        >

              <span v-if="auth.otpisactivechange == false" 
          class="text-xs text-red-500"
          style="color: red"
         
          >{{$t('profile_labe_otp_alert_min1')}}</span
        >
<br>

<div class="form-group row">
      <button type="button" class="btn btn-primary" @click="SaveOTP()">
        {{$t('profile_labe_otp_save')}}
    </button>
    </div>
    <br>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-12 col-form-label" style="text-align: center;"
            >
            ບໍ່ໄດ້ຮັບລະຫັດ? ສົ່ງໃໝ່ອີກຄັ້ງ
            </label
          >
        </div>
      </div>
    </div>
  </div>
  

  <div class="modal" v-if="auth.mod_otp_change">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">{{$t('profile_labe_otp')}}</h1>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-12 col-form-label" style="text-align: center;"
            >{{$t('profile_labe_otp_text')}}
              <span> 856{{ auth.formachangtel.changeiden }}</span></label
          >
     
        </div>

        <div class="form-group d-flex justify-content-center">
          <div class="otp-inputs">
            <input
            class="otp-input" type="text" v-model="auth.otp[0]" @input="moveFocus(1)" ref="input1"   @click="preventDoubleClick"
                            maxlength="1"  />
                             <input class="otp-input" v-model="auth.otp[1]" @input="moveFocus(2)" ref="input2" @click="preventDoubleClick"
                            type="text" id="input2" maxlength="1"  /> 
                            <input class="otp-input"
                           type="text" id="input3" maxlength="1"    v-model="auth.otp[2]" @input="moveFocus(3)" ref="input3" @click="preventDoubleClick"/>
                             <input class="otp-input"  type="text" id="input4"  v-model="auth.otp[3]" @input="moveFocus(4)" ref="input4"  @click="preventDoubleClick"
                        maxlength="1"  /> 
                        <input class="otp-input"  type="text" id="input5"  v-model="auth.otp[4]" @input="moveFocus(5)" ref="input5"  @click="preventDoubleClick"
                        maxlength="1"  /> 
                        <input class="otp-input"  type="text" id="input6"  v-model="auth.otp[5]"  ref="input6"  
                        maxlength="1" @click="preventDoubleClick" /> 
    </div>

 
        
              </div>
              <span v-if="auth.Isotpconfirm"
          class="text-xs text-red-500"
          style="color: red"
         
          >{{$t('profile_labe_otp_alert_min2')}}</span
        >

              <span v-if="auth.otpisactivechange == false" 
          class="text-xs text-red-500"
          style="color: red"
         
          >{{$t('profile_labe_otp_alert_min1')}}</span
        >
<br>

<div class="form-group row">
      <button type="button" class="btn btn-primary" @click="SaveOTP()">
        {{$t('profile_labe_otp_save')}}
    </button>
    </div>
    <br>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-12 col-form-label" style="text-align: center;"
            >
            ບໍ່ໄດ້ຮັບລະຫັດ? ສົ່ງໃໝ່ອີກຄັ້ງ
            </label
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});

import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { HistoryStore } from "@/stores/history";
import ApiService from "@/services/api.service";
import { useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import Swal from "sweetalert2";
import { ref } from 'vue';


const inputRef = ref(null)
const otp = ref(['', '', '', '', '', ''])
const auth = useAuthStore();

const router = useRouter();

await auth.fetchUsersByOne();
await auth.fetchUsersByOneComment();

await auth.UpdateLogData();
await auth.UpdateLogLogin();




const { getFormChangeTel } = storeToRefs(auth);

const input1 = ref(null);
    const input2 = ref(null);
    const input3 = ref(null);
    const input4 = ref(null);
    const input5 = ref(null);
    const input6 = ref(null);

onMounted(() => {
  fileInputFont.value.addEventListener("change", changeFileFont);
});

const rules = computed(() => {
  return {
    changeiden: {
      required: helpers.withMessage("The tel field is required", required),
      minLength: minLength(9),
    },
  };
});

const v$ = useVuelidate(rules, getFormChangeTel);

const fileInputFont = ref(null);

const changeFont = () => {
  // Trigger a click event on the file input element
  fileInputFont.value.click();
};

const changeFileFont = async (event) => {
  var inputs = event.target;
  const file = event.target.files[0];

  if (file && file.type.startsWith("image/")) {
    auth.user_image = inputs.files[0];
    await auth.UploadProfile();
    await auth.UpdateProfileImage();
   // await auth.fetchUsersByOne();
    await auth.UpdateLogDataInsert()
  } else {
    Swal.fire({
      text: "Upload File Image Only!",
      icon: "error",
    });
  }
};

const MyAddprove = async () => {
  router.push("/profile/account");
};


const moveFocus = (next) => {
      if (next === 1) {
        
        input2.value.focus();
        input2.value.select()  
      } else if (next === 2) {
        input3.value.focus();
        input3.value.select()  
      } else if (next === 3) {
        input4.value.focus();
        input4.value.select(); 
      } else if (next === 4) {
        input5.value.focus();
        input5.value.select();
      } else if (next === 5) {
        input6.value.focus();
        input6.value.select();
      }
};
const preventDoubleClick = (event) => {
  // ป้องกันการเลือกข้อความเมื่อคลิกสองครั้ง

  event.target.select()  // เลือกข้อความทั้งหมดใน input

}


const Reload = async () => {
  await auth.fetchUsersByOne();
  await auth.fetchUsersByOneComment();
};

const filterInput = async (event) => {
  // stores.form.user_phone = event.target.value.replace(/\D/g, "");

  const key = event.data;
  if (event.data === " ") {
    auth.formachangtel.changeiden = auth.formachangtel.changeiden.substring(
      0,
      auth.formachangtel.changeiden.length - 1
    );
    return;
  }
  if (auth.formachangtel.changeiden.charAt(0) !== "2") {
    auth.formachangtel.changeiden = "";
    return;
  }
  if (
    auth.formachangtel.changeiden.charAt(1) !== "" &&
    auth.formachangtel.changeiden.charAt(1) !== "0"
  ) {
    auth.formachangtel.changeiden = "2";
    return;
  }
  auth.formachangtel.changeiden = event.target.value.replace(/\D/g, "");
};

const ModalChangeTel = async (event) => {
  auth.mod_change_tel = true;
};
const ModalChangeTelClose = async (event) => {
  auth.mod_change_tel = false;
};



const CheckEmail = async (event) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 

  ///////////////////เช็ค ค่าว่างก่อน
  if(auth.email == ''){
    auth.changeemailvalid = true;
    auth.chaeckemailtaken = false;
    auth.changeformemail = false;
    return false;
  }


 ///////////////////เช็ค Foramte
  if (!emailPattern.test(auth.email)) {
   auth.changeformemail = true;
   auth.changeemailvalid = false;
    auth.chaeckemailtaken = false;
   return false;
  }


  let checkemail = await auth.CheckEmail();
  if (checkemail == false) {
   auth.changeformemail = false;
   auth.changeemailvalid = false;
    auth.chaeckemailtaken = true;
   return false;
  }else {
    auth.changeformemail = false;
    auth.changeemailvalid = false;
    auth.chaeckemailtaken = false;

    auth.mod_otp_change_email = true;
    auth.mod_change_email = false;
  }

  
}
const CheckTel = async (event) => {
  v$.value.$validate();
  if (!v$.value.$error) {
    let checktel = await auth.CheckTel();
    if (checktel == false) {
      await Swal.fire({
        position: "top-end",
        icon: "error",
        title: "This number is your current number!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let checkteldata = await auth.CheckTelData();
      if (checkteldata == false) {
        await Swal.fire({
          position: "top-end",
          icon: "error",
          title: "This number is already active!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        await auth.GetOtpTel();
        await auth.SwitchModal();
        input1.value.focus();
        //   auth.mod_otp_change = true;
      }
    }
  }
};

const SaveOTP = async (event) => {


  for (let i = 0; i < auth.otp.length; i++) {
        if(auth.otp[i] == ''){
          auth.otpisactivechange = false;
            break;
        }
        auth.otpisactivechange = true;
    }
    if (auth.otpisactivechange == true) {
      let otpconfirm = await auth.VerityOtpTel();
  if (otpconfirm == true) {
    
    let updatetel = await auth.UpdateTel();
    
    await auth.UpdateLogData();
    auth.Isotpconfirm = false;
    auth.mod_otp_change = false;
    auth.profile_by_one[0].user_phone = auth.formachangtel.changeiden;

  } else {
    auth.Isotpconfirm = true;
  }

    }

};

function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}

function chtelformate(te) {
  let tel = "825 " + te;
  return tel;
}
</script>
<style scoped>
.your-element {
  border-right: 2px solid rgb(241, 241, 241);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  width: 50%;
}

button {
  margin-top: 10px;
}
.pcard {
  cursor: pointer;
}

.otp-inputs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.otp-input {
  width: 50px;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}



@media only screen and (max-width: 600px) {

  .modal-content {
  background-color: white;
  padding: 20px;
  width: 80%;
}
}
</style>