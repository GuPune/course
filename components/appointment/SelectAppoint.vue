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
                    <img  src="https://dot-api.mpwt.link/media_file/file/?f=static/upload/2023/12/files-5p4QjB0exT.jpg"
                     
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
                            {{ format_app(item.ap_date_start) }}
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
   return moment(item).format("DD/MM/YYYY HH:mm");
};

const format_app = (item) => {
   return moment(item).format("HH:mm");
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