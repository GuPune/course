<template>
   <div v-if="store.reservefisrt" >
 
           <section class="px-4 py-3 border my-4" v-for="(item, index) in store.reservefisrt" :key="index">
    
          <div class="row">

              <div class="col-12 "
                      >
                
                <p class="mb-0"><b>{{ dayforma(item.appointment_detail.ap_date_start) }}</b></p>
                <p class="mb-0"><b>{{ $t("page_appoint_type_code") }} </b> {{ coverdlt(item.appointment_detail.dlt_code) }}</p>
                <p class="mb-0"><b>{{ $t("page_appoint_full_name") }} : {{ auth.formuser.user_prefrix }}. {{ auth.formuser.user_firstname }} {{ auth.formuser.user_lastname }}</b></p>
                <p class="mb-0"><b>{{ $t("page_appoint_passpost") }} :  {{ auth.formdetail.identification_number}}</b></p>
                <p class="mb-0"><b>{{ $t("page_appoint_location") }} : Savannakhet</b></p>
                
              </div>
      
          </div>
          <p class="pt-3" style="font-size:0.8rem;">{{ $t("page_appoint_note") }},</p>
        </section>
   
  </div>
</template>
<script lang="ts" setup>


import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { AppointmentsStore } from "@/stores/appointment";


import { useRoute } from "vue-router";

import moment from "moment";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const auth = useAuthStore();
const store = AppointmentsStore();
const route = useRoute();

const dayforma = (day) => {
  return moment(day).format("DD/MM/yyyy HH:mm");
};

const coverdlt = (code) => {
  let dt = store.dlt.find((item) => item.dlt_code == code );
  return dt.dlt_description_english
};

</script>
<style scoped>
button {
  margin-top: 10px;
}

.nav-search {
  background-color: rgb(242 39 126);
}

.imgcard {
  width: 120px;
  height: 150px;
}
.imgcard > img {
  width: 120px;
  border-radius: 5px;
}

.btnContainer button {
  margin-right: 10px;
  width: 100px;
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

.tooltip-container {
  position: relative;
}

.tooltip-trigger {
  cursor: pointer;
  display: inline-block;
}

.tooltip {
  position: absolute;
  background-color: #333;
  min-width: 300px;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
}
</style>