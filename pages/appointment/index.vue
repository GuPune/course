<template>
  <div>
    <div class="breadcrumbarea">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                
                <span style="font-size: 24px;font-weight: 400;"> {{ $t("page_appoint") }}</span>
              </div>
              <div class="breadcrumb__inner">
                <ul>
                  <li><a href="#">{{ $t("home") }}</a></li>
                  <li>{{ $t("page_appoint") }}</li>
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
      <div class="container-fluid nav-container row justify-content-center py-2 gy-2">
        <div class="col-2 nav-item" style="min-width: 150px;">
          <select class="form-select" aria-label="Default select example" v-model="store.form.ap_learn_type"
            @change="findApp()">
            <option value="1">
           {{ $t("theory") }}
            </option>
            <option value="2">
          {{ $t("practice") }}
            </option>
          </select>
        </div>
        <div class="col-4 nav-item" style="min-width: 150px;" @change="findApp()">
          <select class="form-control" v-model="store.form.dlt_code">
            <option v-for="(item, index) in store.dlt" :key="item.dlt_code" :value="item.dlt_code">
           {{ item.dlt_description_loas }}
            </option>
          </select>
        </div>
      
      </div>
    </nav>

    <div class="container">
      <div class="mt-4 d-flex gap-4 overflow-x-scroll p-2 scrollContainer">
        <div class="dateCard" v-for="(event, index) in store.event">
          <p class="mb-0 btn" @click="findEvent(event.event)">{{ event.event }}</p>
        </div>

      </div>
    </div>

    <SelectAppoint></SelectAppoint>

  
  </div>
  <div class="modal" v-if="store.popupconfirm">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">

        <h5 class="modal-title" id="exampleModalLabel">{{ $t("page_app_resve_t") }}</h5>

      </div>
      <div class="modal-body">
        <p class="">
          {{ $t("page_app_resve_s") }}
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal" @click="closeModal">
          {{ $t("close") }}
        </button>
        <button type="button" class="btn btn-danger" data-remove="task" @click="confirmreve()">
          {{ $t("confirm") }}
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
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();


const auth = useAuthStore();
const store = AppointmentsStore();
const route = useRoute();
const profile = await auth.getProfile();
store.form.date_event = moment().startOf('month').format('YYYY-MM-DD');
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


const confirmreve = async () => {
  let data = await store.saverevs();

  if (data == true) {
    store.popupconfirm = false;
    await Swal.fire({
      position: "top-end",
      icon: "success",
      title: "ບັນທຶກການຈອງສຳເລັດແລ້ວ",
      showConfirmButton: false,
      timer: 1500,
    });
    await store.fetchApppoint()
    await store.fetchApppointRes();
  } else {
    store.popupconfirm = false;
    Swal.fire({
      title: "Unsuccessful!",
      text: "ບັນທຶກການຈອງບໍ່ສຳເລັດ!",
      icon: "error",
    });
  }
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

const findApp = async () => {
  Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
  let data = await store.fetchApppoint();
  if (data == true) {
    setTimeout(() => Swal.close(), 500);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Contact Admin',
      showCancelButton: false, // There won't be any cancel button
      showConfirmButton: false // There won't be any confirm button
    })

  }
};



const findEvent = async (item) => {

  store.form.date_event = item

  store.fetchApppointEvent();

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

.type-image {
  background-color: pink;
  height: 80px;
  width: 120px;
  border-radius: 10px;
  margin-right: 20px;
}

.type-card {
  padding: 20px 20px;
  transition: .4s;
  cursor: pointer;
  border: 1px solid rgb(221, 221, 221);


}

.type-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 8px .2px rgb(221, 221, 221);
}

.type-detail>ul {
  font-size: 12px;
  margin-bottom: 5px;
}

.type-row>.col-lg-6 {
  margin-bottom: 20px;
}

.nav-search {
  z-index: 1;
}

@media (min-width: 701px) {
  .nav-search {
    position: sticky;
    top: 0;
  }

  .main_wrapper {
    overflow: visible !important;
  }
}

@media (max-width: 414px) {
  .nav-item {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}

.dateCard {
  background-color: white;
  border: 1px solid rgb(214, 214, 214);
  /* border-radius: 20px 20px 0px 0px; */
  transition: .2s;
}

.dateCard:hover {
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, .5);
  border-radius: 5px;
  transform: translateY(-5px)
}

.scrollContainer {
  /* Set initial overflow-x to hidden to hide horizontal scrollbar */
  overflow-x: scroll;
}

.scrollContainer::-webkit-scrollbar {
  height: 6px;
}

.scrollContainer::-webkit-scrollbar-track {
  border-radius: 10px;
}

.scrollContainer::-webkit-scrollbar-thumb {
  background-color: rgb(242 39 126);
  border-radius: 100px;
}
</style>