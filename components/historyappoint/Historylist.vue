<template>
  <div class="table-responsive shadow-sm rounded">
    <table class="table table-hover mb-0">
      <thead class="table-dark">
        <tr>
          <th scope="col" style="text-align: center">{{ $t("table_id") }}</th>
          <th scope="col" style="text-align: center">{{ $t("table_dlt") }}</th>
          <!-- <th scope="col" style="text-align: center">{{ $t("table_remark") }}</th> -->
          <th scope="col" style="text-align: center">{{ $t("table_type_app") }}</th>
          <th scope="col" style="text-align: center">{{ $t("table_time") }}</th>
          <th scope="col" style="text-align: center">{{ $t("table_action") }}</th>
        </tr>
      </thead>

      <tbody v-if="store.reserve.length > 0">
        <tr v-for="(item, index) in store.reserve">

          
          <th scope="row" style="text-align: center">{{ index + 1 }}</th>
          <!-- <td style="text-align: center">
            {{ item.appointment_detail.dlt_code }}
          </td> -->

          <td>
            <span v-if="locale == 'la'">
              {{
                covertdtl(item.appointment_detail.dlt_code).dlt_description_loas
              }}</span
            >
            <span v-if="locale == 'en'">
              {{
                covertdtl(item.appointment_detail.dlt_code)
                  .dlt_description_english
              }}</span
            >
          </td>
          <!-- <td style="text-align: center">
            {{ item.appointment_detail.ap_remark }}
          </td> -->
          <td style="text-align: center">
            <li v-if="item.appointment_detail.ap_learn_type == 1">
          <span>{{ $t("page_profile_type_test_y") }}</span>
            </li>
              <li v-else>
          <span>{{ $t("page_profile_typepage_profile_type_test_n") }}</span>
            </li>
          </td>
          <td style="text-align: center">
            {{ format(item.appointment_detail.ap_date_start) }} -
            {{ format(item.appointment_detail.ap_date_end) }}
          </td>
              <td style="text-align: center">
          <button type="button" class="btn btn-sm btn-danger" @click="del(item.ap_id,item.ar_id)">{{ $t("table_action_cancel") }}</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="center" style="text-align: center">
            ບໍ່ມີຂໍ້ມູນ
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { AppointmentsStore } from "@/stores/appointment";
import ApiService from "@/services/api.service";
import { Bar } from "vue-chartjs";
import moment from "moment";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const store = AppointmentsStore();

const router = useRouter();

const del = async (ap,ar) => {
  //router.push({ path: '/exam'})

store.checkpopupdel(ap,ar);


 //  store.deleteAppointUser(ap,ar);
};


const format = (item) => {
  return moment(item).format("YYYY-MM-DD HH:mm");
};

const covertdtl = (x) => {
  let item = store.dlt.filter((o) => o.dlt_code == x);
  return item[0];
};


</script>

<style>
.xt3e5 {
  padding: 30px 50px 10px 10px;
}

.hover-button:hover {
  border: 2px solid #b217b4;
  padding: 5px 40px;
}

.sec-l {
  border-style: groove !important;
  border-color: red !important;
  #choice {
    background-color: #4caf50;
    color: white;
    #card-index {
      color: white;
    }
  }
}

.sec-choice {
  border-style: groove !important;
  border-color: red !important;

  #answer {
    background-color: #4caf50;
    color: white;
    #card-index {
      color: white;
    }
  }
}
#answer {
  background-color: #4caf50;
}

.exma {
  background-color: #5f2ded;
  color: white;
}
.send {
  background-color: #e06512;
  color: white;
}
#choice-container {
  /* border: 2px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
#choice {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  transition-duration: 0.4s;
  display: flex;
}
#choice:hover {
  background-color: #4caf50; /* Green */
  color: white;
  #card-index {
    color: white;
  }
}
#choice-card {
  padding: 5px;
  border: unset !important;
}

#answer {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice {
  background-color: rgb(247, 247, 247);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger {
  background-color: rgb(227, 52, 21);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

#answer-card {
  padding: 5px;
  border: unset !important;
}
#card-index {
  margin-right: 10px;
}
</style>
