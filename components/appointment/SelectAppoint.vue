<template>
  <div>
    <div class="coursearea">
      <div class="container tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-d1"
          role="tabpanel"
          aria-labelledby="pills-d1-tab"
          tabindex="0"
        >
          <!-- <div class="col-lg-3 col-md-4 col-sm-12">
            <select class="form-select" aria-label="Default select example" v-model="store.form.ap_learn_type">
              <option value="1">{{new Date().toLocaleDateString()}}</option>
              <option value="2">{{new Date().toLocaleDateString()}}</option>
            </select>
          </div> -->
          <div class="row" v-if="store.appgroup.length > 0">
            <div class="col-xl-12">
              <div class="card p-4 mb-4">
                <div class="d-flex flex-row mb-4">
                  <div class="imgcard">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                  <div class="ms-5">
                    <h3 v-if="locale == 'la'">{{ store.appointment.dlt_des_la }}</h3>
                    <h3 v-if="locale == 'en'">{{ store.appointment.dlt_des_en }}</h3>
                    <h3 v-if="locale == 'th'">{{ store.appointment.dlt_des }}</h3>

                    <p class="m-0"> {{ $t("page_app_search_type") }} : {{ store.appointment.ap_learn }}</p>
                    <p class="m-0"> {{ $t("page_app_search_date") }}: {{store.form.date_event}}</p>
                    <p> {{ $t("page_app_search_round") }}: {{store.appgroup.length}}</p>
                  </div>
                </div>
                <div class="border-top">
                  <p class="mb-0 mt-2">{{ $t("page_app_search_round_app") }}:</p>
                  <div class="btnContainer container">
                    <li
                      v-for="(item, index) in store.appgroup"
                      :key="item.ap_id"
                    >
                      <div v-if="store.reserve.findIndex((x) => x.ap_id === item.ap_id) !== -1">
                        <div class="tooltip-container">
                          <div class="tooltip-trigger">
                            <button
                              type="button"
                              class="btn btn-success"
                              @mouseover="store.showTooltip = true"
                              @mouseout="store.showTooltip = false"
                          
                            >
                            {{ $t("page_app_search_round_resvse") }}
                            </button>
                          </div>
                          <div class="tooltip" v-if="store.showTooltip">
                            {{ $t("page_app_search_round_t") }} {{ format(item.ap_date_start) }} - {{ format(item.ap_date_end) }}
                          </div>
                        </div>
                      </div>
                      <div v-else>


                        


                          <div class="tooltip-container" v-if="item.total_reserve == item.ap_quota">
                          <div class="tooltip-trigger">
                            <button
                              type="button"
                              class="btn btn-danger"
                              @mouseover="store.showTooltip = true"
                              @mouseout="store.showTooltip = false"
                          
                            >
                            {{ $t("page_app_search_round_full") }}
                            </button>
                          </div>
                          <div class="tooltip" v-if="store.showTooltip">
                            {{ $t("page_app_search_round_t") }}  {{ format(item.ap_date_start) }} - {{ format(item.ap_date_end) }}
                          </div>
                        </div>



                        <div v-else>
                        <div class="tooltip-container">
                          <div class="tooltip-trigger">
                            <button
                              type="button"
                              class="btn btn-primary"
                              @mouseover="store.showTooltip = true"
                              @mouseout="store.showTooltip = false"
                              @click="resv(item.ap_id)"
                          
                            >
                            {{ format_app(item.format_app) }}
                            </button>
                          </div>
                          <div class="tooltip" v-if="store.showTooltip">
                            {{ $t("page_app_search_round_t") }}  {{ format(item.ap_date_start) }} - {{ format(item.ap_date_end) }}
                          </div>
                        </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>



           <div class="row" v-else>
            <div class="col-xl-12">
              <div class="card p-4 mb-4">
                <div class="d-flex flex-row mb-4">
                     <div class="ms-5">
                    <h3>  {{ $t("page_app_search_not_round") }} </h3>
                  </div>
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
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const auth = useAuthStore();
const store = AppointmentsStore();
const route = useRoute();
const profile = await auth.getProfile();
await store.fetchApppoint();
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

const resv = async (id) => {
  store.popupconfirm = true;
  store.ap_id = id;
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

const findindex = async (a) => {
  // var index = store.reserve.findIndex(item => item.ap_id === a);

  // if(index != -1){

  //   return false;
  // }else {
  //   return true;
  // }
  return false;
};

const format_start = (date) => {
  store.form.date_event = moment(date).format("YYYY-MM-DD");
  return moment(date).format("YYYY-MM-DD");
};

const format = (item) => {
   return moment(item).utc().format("DD/MM/YYYY HH:mm");
};

const format_app = (item) => {
   return moment(item).utc().format("HH:mm");
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