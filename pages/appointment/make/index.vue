<template>
  <div style="background-color: var(--dotColor)">
    <div class="container py-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="breadcrumb__content__wraper" data-aos="fade-up">
            <div class="breadcrumb__title">
              <h3 class="heading">Make Appointments</h3>
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

 

  <div class="container" style="
    height: 80px;
">
    <section class="d-flex justify-content-center">
      <div class="card" style="width: 50rem;border-style:none;background-color: transparent;">
       
          <div class="row">
            
           
   
            <div class="col-12 col-md-12 py-3" style="text-align: right">
              <button
                class="btn btn-success"
                style="width: 50%; border-radius: 0px;background-color: #2AB0E5;"
              >
                 Back to Apoontment list
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
              <p>Information to be used for making appointment is:</p>

              <p><b>Full name : Mr. Somsak Jangdaboud</b></p>
              <p><b>Citizen ID / Passport Number: 1234567890123</b></p>
              <p><b>Location: Savanakhet</b></p>
            </div>

   <div class="col-12 col-md-12 py-2">
              <p class="text-nowrap mb-0 align-self-center">Please select your preferred time.</p>
              
            </div>
            <div class="col-12 col-md-12 py-2">
              <p class="text-nowrap mb-0 align-self-center">Type:</p>
              <select class="form-select" aria-label="Default select example">
                <option selected   v-for="(item, index) in store.dlt" >{{item.dlt_description_english}}</option>
              </select>
            </div>

            <div class="col-12 col-md-12 py-2">
              <p class="text-nowrap mb-0 align-self-center">
                Appointment time:
              </p>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="col-12 col-md-12 py-2" style="text-align: center">
              <button
                class="btn btn-success"
                style="width: 50%; border-radius: 0px"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
  </div>

  <!-- Modal -->


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

import moment from "moment";
import Swal from "sweetalert2";
import CurrentApp from '@/components/appointment/CurrentApp.vue';
import PassApp from '@/components/appointment/PassApp.vue';
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();



const auth = useAuthStore();
const store = AppointmentsStore();
const route = useRoute();
</script>


<style>
.appcontent {
  min-height: 400px;
}
.card {
  margin: 0px 250px 0px 250px;
}
@media screen and (max-width: 1199px) {
  .card {
    margin: 0px 150px 0px 150px;
  }
}
@media screen and (max-width: 991px) {
  .card {
    margin: 0px 100px 0px 100px;
  }
}
@media screen and (max-width: 767px) {
  .card {
    margin: 0px 0px 0px 0px;
  }
}
</style>