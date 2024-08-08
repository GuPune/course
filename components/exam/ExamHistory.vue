<template>
    <div>
        <h5>Theory Test History</h5>        
       <table class="table">
  <thead class="thead-inverse">
    <tr>
      <th>#</th>
      <th>ສຳລັບຫຼັກສູດ</th>
      <th>ຜົນຄະແນນ</th>
      <th>ຜ່ານ? </th>
      <th> ເວລາກຳນົດ (ນາທີ)  </th>
      <th> ເວລາໃຊ້ຈິງ(ນາທີ)       </th>
      <th> ເວລາໄດ້ຜົນ </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> B : Car with four-wheels</td>
      <td> 23 / 25  </td>
      <td> ຜ່ານ</td>
      <td>25:00</td>
      <td> 22:58</td>
      <td> 2024-03-01 18:23:22 </td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td> B : Car with four-wheels</td>
      <td> 23 / 25  </td>
      <td> ຜ່ານ</td>
      <td>25:00</td>
      <td> 22:58</td>
      <td> 2024-03-01 18:23:22 </td>
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