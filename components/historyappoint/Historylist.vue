<template>


 <div class="table-responsive shadow-sm rounded">
  <table class="table  table-hover mb-0">
  <thead class="table-dark">
    <tr>
      <th scope="col" style="text-align: center;">ลำดับ</th>
      <th scope="col" style="text-align: center;">หลักสูตร</th>
      <th scope="col" style="text-align: center;">จำนวนทำข้อสอบ</th>
      <th scope="col" style="text-align: center;">รายงานสถิติ - ผลสอบ</th>
    </tr>
  </thead>

  <tbody v-if="store.reserve.length > 0">
    <tr v-for="(item,index) in store.reserve" >
      <th scope="row" style="text-align: center;" >{{ index + 1 }}</th>
      <td style="text-align: center;">x</td>
      <td style="text-align: center;">x</td>
      <td style="text-align: center;">
        <button type="button" class="btn btn-sm btn-primary">x</button>
      </td>
    </tr>
  </tbody>
  <tbody v-else>
    <tr>
          <td colspan="5" class="center" style="text-align: center;">No data available</td>
        </tr>
  </tbody>
</table>
</div>



</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { AppointmentsStore } from '@/stores/appointment';
import  ApiService  from '@/services/api.service';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);



const store = AppointmentsStore();
const router = useRouter();

const Fitter = async (item) => {
 //router.push({ path: '/exam'})

  const id = item;
 router.push({ path: '/history-detail/'+id})
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
    background-color: #4CAF50;
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
    background-color: #4CAF50;
    color: white;
    #card-index {
      color: white;
    }
  }
}
#answer {
    background-color: #4CAF50;
  
  }

.exma{
  background-color: #5f2ded;
    color: white;
}
.send{
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
  border: 2px solid #4CAF50;
  transition-duration: 0.4s;
  display: flex;
}
#choice:hover {
  background-color: #4CAF50; /* Green */
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

.answer-choice{
  background-color: rgb(247, 247, 247); 
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success{
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger{
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
