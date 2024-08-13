<template>
    <div v-if="store.historys.length > 0">

        <h5>{{ $t("page_theory_test_his") }}</h5>        
       <table class="table">
  <thead class="thead-inverse">
    <tr>
      <th>#</th>
      <th>{{ $t("page_theory_test_div") }}</th>
      <th>{{ $t("page_theory_test_score") }}</th>
      <th>{{ $t("page_theory_test_pass") }}</th>
      <th>{{ $t("page_theory_test_time_test") }}</th>
      <th>{{ $t("page_theory_test_time_user") }}</th>
      <th>{{ $t("page_theory_test_time_at") }} </th>
    </tr>
  </thead>  
  <tbody>
    <tr v-for="(item, index) in store.paginatedData" :key="index">
      <th scope="row">{{index + 1}}</th>
      <td>  {{item.dlt_code}} : {{item.course_name_lo}}</td>
      <td> {{item.er_score_total}} /  {{item.er_question_total}}  </td>
      <td> 
        <span v-if="item.status == 'fail'" style="color: red;">{{ $t("page_exam_report_status_fail") }}</span>
        <span v-else style="color: green;">{{ $t("page_exam_report_status_passt") }}</span>
      </td>
      <td>{{item.em_time}}</td>
      <td> {{item.er_use_time}}</td>
      <td>{{item.er_start_time}} </td>
    </tr>
  </tbody>
</table>







  

    </div>
    <div class="col-xl-4">

        </div>

        <div class="col-xl-4">
          <div class="dt--pagination" v-if="totalPages > 1">
        <div class="dataTables_paginate paging_simple_numbers" id="zero-config_paginate">
          <ul class="pagination" style="
    /* width: 100%; */
    margin-left: 80px;
    margin-right: 80px;
">
            <li class="paginate_button page-item previous" id="zero-config_previous"   @click="Pred"   :disabled="store.currentPage === 1">
              <a href="#" aria-controls="zero-config" data-dt-idx="0" tabindex="0" class="page-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-arrow-left">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg></a>
            </li>
            <li class="paginate_button page-item " v-for="page in store.totalPages" :key="page" disabled>
              <a href="#" aria-controls="zero-config" data-dt-idx="1" tabindex="0" class="page-link" style="
    color: black;
"
              >
            
              <span v-if="store.currentPage == page" style="color: red;"> {{ page }}</span>
              <span v-else style="color: black;"> {{ page }}</span>
              </a>
            </li>
            <li class="paginate_button page-item next" id="zero-config_next"  @click="Next" :disabled="store.currentPage === totalPages"><a href="#" aria-controls="zero-config"
                data-dt-idx="4" tabindex="0" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg></a></li>
          </ul>
        </div>
      </div>
  </div>

  <div class="col-xl-4">

        </div>
       

</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';

import { ExamPostStore } from '@/stores/exam';
import  ApiService  from '@/services/api.service';
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const router = useRouter();
const store = ExamPostStore()
const { totalPages } = storeToRefs(store);
const { paginatedData } = storeToRefs(store);

const Next = async () => {
  await store.nextPage();
};
const Pred = async () => {
  await store.prevPage();
};


</script>

 <style scoped>

</style>