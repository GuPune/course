<template>
    <div>
    
        <div class="container" style="
    height: 80px;
">
    <section class="d-flex justify-content-center">
      <div class="card" style="width: 50rem;border-style:none;background-color: transparent;">
       
          <div class="row">
            
           
   
            <div class="col-12 col-md-12 col-sm-12 py-3" style="text-align: right">
              <button
                class="btn btn-success btn-appi"
                style="border-radius: 0px;background-color: #2AB0E5;" @click="GotoPage()"
              >
              &laquo; {{ $t("page_appoint_back_list") }}
              </button>
            </div>
          
        </div>
      </div>
    </section>
    <br />
  </div>
  <div class="container">
    <section class="d-flex justify-content-center">
      <div class="card shadow" style="width: 50rem">
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-12">
              <p class="mb-0">{{ $t("page_appoint_reve_detail_title") }}</p>

              <p class="mb-0"><b>{{ $t("page_appoint_full_name") }} : {{auth.formuser.user_prefrix}} {{auth.formuser.user_firstname}} {{auth.formuser.user_lastname}}</b></p>
              <p class="mb-0"><b>{{ $t("page_appoint_passpost") }} : <span v-if="auth.formdetail.identification_number"> {{auth.formdetail.identification_number}}</span></b></p>
              <p class="mb-0"><b>{{ $t("page_appoint_location") }} : Savannakhet</b></p>
            </div>

            <div class="col-12 col-md-12 py-2">
              <p class="text-nowrap mb-0 align-self-center">{{ $t("page_appoint_label") }}</p>
              
            </div>
            <div class="col-12 col-md-12 py-2">
              <p class="text-nowrap mb-0 align-self-center"> {{ $t("page_appoint_type_label") }}</p>
              <select class="form-select" aria-label="Default select example" v-model="store.form.dlt_code"  @change="selectdlt($event)" v-if="locale == 'la'">
                <option selected disabled value="">{{ $t("page_appoint_type_label_select_dlt") }}</option>
                <option  v-for="(item, index) in store.dlt" :value="item.dlt_code">
                    {{item.dlt_code}} : {{item.dlt_description_loas}}
                </option>
              </select>

              <select class="form-select" aria-label="Default select example" v-model="store.form.dlt_code"  @change="selectdlt($event)" v-else="locale == 'en'">
                <option selected disabled value="">{{ $t("page_appoint_type_label_select_dlt") }}</option>
                <option  v-for="(item, index) in store.dlt" :value="item.dlt_code">
                    {{item.dlt_code}} : {{item.dlt_description_english}}
                </option>
              </select>

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.dlt_code.$error"
                    >{{ $t("page_appoint_reve_dlt_alert") }}</span
                  >

               
            </div>

            <div class="col-12 col-md-12 py-2">
              <p class="text-nowrap mb-0 align-self-center">
                {{ $t("page_appoint_time_label") }}
              </p>
              <select class="form-select" aria-label="Default select example"  :disabled="store.disabledselect" v-model="store.form.date_event"  @change="selectevent($event)" >
                <option selected disabled :value="0">{{ $t("page_appoint_type_label_select_event") }}</option>
                <option  v-for="(item, index) in store.event">{{item.event}} 08:00</option>
              </select>

                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.date_event.$error"
                    >{{ $t("page_appoint_reve_events_alert") }}</span
                  >

                
            </div>

            <div class="col-12 col-md-12 py-2" style="text-align: center">
              <button
                class="btn btn-success"
                style="width: 50%; border-radius: 0px" @click="saverer()"
              >
              {{ $t("page_appoint_save_app") }} &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
  </div>
    
   </div>
 </template>
 <script lang="ts" setup>
 
 
 import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
 import { storeToRefs } from "pinia";
 import { defineComponent } from "vue";
 import { AppointmentsStore } from "@/stores/appointment";
 import {
   required,
   email,
   sameAs,
   minLength,
   helpers,
 } from "@vuelidate/validators";
 import Datepicker from "vuejs3-datepicker";
 import { useVuelidate } from "@vuelidate/core";
 import { useRoute } from "vue-router";
 import VueDatePicker from "@vuepic/vue-datepicker";
 import "@vuepic/vue-datepicker/dist/main.css";
 import moment from "moment";
 import Swal from "sweetalert2";
 import { useI18n } from "vue-i18n";
 const { locale, setLocale, t } = useI18n();
 
 const auth = useAuthStore();
const store = AppointmentsStore();
const router = useRouter();
const { getformapp } = storeToRefs(store);

const rules = computed(() => {
  return {
    dlt_code: {
      required: helpers.withMessage('The dtl_code is required', required),
    //   email: helpers.withMessage('Invalid email format', email),
      minLength: minLength(0),
    },
    date_event: {
      required: helpers.withMessage('The time field is required', required),
      minLength: minLength(6),
    },
  };
});
const v$ = useVuelidate(rules, getformapp);

const GotoPage = async () => {
  router.push('/appointment');
};

const selectdlt = async (ev) => {
 Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
 
  store.form.date_event = 0;
  store.form.dlt_code = ev.target.value

  await store.fetchApppoint()

 
  store.disabledselect = false;
  setTimeout(() => Swal.close(), 500);
};
const selectevent = async (ev) => {

    store.form.date_event = await ev.target.value
  await store.fetchApppointEvent()
  
}

const saverer = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {

  let save = await store.saverevs()

  if(save === true){
  //   await Swal.fire({
  //   icon: 'success',
  //   title: 'Appoint Success',
  //   showConfirmButton: false,
  //   timer: 1500
  // })
  await router.push('/appointment');
  }else {
      await Swal.fire({
    icon: 'error',
    title: t('page_appoint_msg_appointment_type_exist'),
    showConfirmButton: false,
    timer: 3000
  })
  }

//await router.push('/appointment');

  }



}
 

 
 </script>
