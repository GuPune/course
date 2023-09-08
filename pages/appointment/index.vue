<template>
  <div>
    <div class="breadcrumbarea">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <h2 class="heading">History</h2>
              </div>
              <div class="breadcrumb__inner">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li>Appointment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shape__icon__2">
        <img class="shape__icon__img shape__icon__img__1" src="../../assets/img/herobanner/herobanner__1.png"
          alt="photo" />
        <img class="shape__icon__img shape__icon__img__2" src="../../assets/img/herobanner/herobanner__2.png"
          alt="photo" />
        <img class="shape__icon__img shape__icon__img__3" src="../../assets/img/herobanner/herobanner__3.png"
          alt="photo" />
        <img class="shape__icon__img shape__icon__img__4" src="../../assets/img/herobanner/herobanner__4.png"
          alt="photo" />
      </div>
    </div>
    <nav class="navbar bg-body-tertiary nav-search">
      <div class="container-fluid row justify-content-center py-2">
        <div class="col-2">
          <VueDatePicker v-model="store.form.date_event" :format="format_start" required></VueDatePicker>
          <!-- <label for="startDate">Start Date</label> -->
        </div>
        <div class="col-2">
          <!-- <label for="startDate">Start Date</label> -->

          <select class="form-select" aria-label="Default select example" v-model="store.form.ap_learn_type">
            <option value="1">ทฤษฎี</option>
            <option value="2">ปฏิบัติ</option>
          </select>
        </div>
        <div class="col-4">
          <select class="form-control" v-model="store.form.dlt_code">
            <option v-for="(item, index) in store.dlt" :key="item.dlt_code" :value="item.dlt_code">
              {{ item.dlt_description }}
            </option>
          </select>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-light mt-0" @click="find()">
            ค้นหา
          </button>
        </div>
      </div>
    </nav>

  <SelectAppoint></SelectAppoint>
  </div>
  <div class="modal" v-if="store.popupconfirm">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-trash-2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <h5 class="modal-title" id="exampleModalLabel">ต้องการจองรายการนี้?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="">
          หากคุณจองรายการนี้ รายการนั้นจะจองซ้ำไม่ได้จนกว่าจะ ยกเลิก
          คุณแน่ใจหรือไม่ว่าต้องการดำเนินการต่อ?
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal" @click="closeModal">
          ปิด
        </button>
        <button type="button" class="btn btn-danger" data-remove="task" @click="confirmreve()">
          ยืนยัน
        </button>
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
 import SelectAppoint from '@/components/appointment/SelectAppoint.vue';

const auth = useAuthStore();
const store = AppointmentsStore();
const route = useRoute();
const profile = await auth.getProfile();
await store.fetchApppoint()
const { FormSearch } = storeToRefs(store);


const date = ref(new Date());
const choose = async (item) => {
  const profile = await auth.SelectProfile(item);
};
store.user_id = auth.user_id;

await store.fetchApppointRes();
const closeModal = async () => {
  store.popupconfirm = false;
};



const rules = computed(() => {
  return {
    em_code: {
      required: helpers.withMessage("Exam code field is required", required),
      minLength: minLength(1),
    },
    em_name: {
      required: helpers.withMessage("Exam Name field is required", required),
      minLength: minLength(1),
    },
    em_description: {
      required: helpers.withMessage(
        "Exam Description field is required",
        required
      ),
      minLength: minLength(1),
    },
    em_random_amount: {
      required: helpers.withMessage("Exam Amount field is required", required),
      minLength: minLength(1),
    },
    em_time: {
      pattern: /^(2[0-3]|[0-1]?[\d]):[0-5][\d]:[0-5][\d]$/,
      required: helpers.withMessage("em_time", required),
    },
  };
});

const v$ = useVuelidate(rules, FormSearch);

const find = async () => {
  store.fetchApppoint();
};




const format_start = (date) => {
  store.form.date_event = moment(date).format("YYYY-MM-DD");
  return moment(date).format("YYYY-MM-DD");
};
</script>
<style>
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
</style>