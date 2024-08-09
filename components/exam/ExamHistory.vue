<template>
    <div v-if="store.history.length > 0">

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
    <tr v-for="(item, index) in store.history" :key="index">
      <th scope="row">{{index + 1}}</th>
      <td>  {{item.dlt_code}} : {{item.course_name_lo}}</td>
      <td> {{item.er_score_total}} /  {{item.er_question_total}}  </td>
      <td> {{item.status}} </td>
      <td>{{item.em_time}}</td>
      <td> {{item.er_use_time}}</td>
      <td>{{item.er_start_time}} </td>
    </tr>
  </tbody>
</table>

    </div>


</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';
  import { ExamTestPostStore } from '@/stores/examtest';
import  ApiService  from '@/services/api.service';
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const router = useRouter();
const store = ExamPostStore()


</script>

 <style>

</style>