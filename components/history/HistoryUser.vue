<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" style="text-align: center;">ลำดับ</th>
          <th scope="col" style="text-align: center;">หลักสูตร</th>
          <th scope="col" style="text-align: center;">จำนวนทำข้อสอบ</th>
          <th scope="col" style="text-align: center;">รายงานสถิติ - ผลสอบ</th>
        </tr>
      </thead>


      <tbody v-if="store.report.length > 0">
        <tr v-for="(item, index) in store.report">
          <th scope="row" style="text-align: center;">{{ index + 1 }}</th>
          <td style="text-align: center;">{{ item.em_name }}</td>
          <td style="text-align: center;">{{ item.total_test }}</td>
          <td style="text-align: center;"><button type="button" class="btn btn-sm btn-primary"
              @click="Fitter(item.em_id)">ดูสถิติการทดสอบ</button></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="center" style="text-align: center;">No data available</td>
        </tr>
      </tbody>
    </table>



  </div>

  {{ store.history }}
  <div class="col-sm-12">
    <table id="example5" class="table table-bordered table-striped dataTable" role="grid"
      aria-describedby="example5_info">
      <thead>
        <tr role="row">
          <th class="sorting_disabled" rowspan="1" colspan="1">ครั้งที่</th>
          <th class="sorting_disabled" rowspan="1" colspan="1">วันที่ทำข้อสอบ</th>
          <th class="sorting_disabled" rowspan="1" colspan="1">แถบวัดคะแนน (100%)</th>
          <th class="sorting_disabled" rowspan="1" colspan="1">เฉลี่ย (100%)</th>
          <th class="sorting_disabled" rowspan="1" colspan="1">คะแนนที่ได้ (50)</th>
        </tr>
      </thead>
    
      <tbody v-if="store.history">
        <tr role="row" class="odd" v-for="(item, index) in store.history">
          <td>
            <center>{{index + 1}}</center>
          </td>
          <td> {{ coverttime(item.crt_date ) }}</td>
          <td>
            <div class="progress progress-xs progress-striped active">
              <div class="progress-bar progress-bar-success" style="width: 5%"></div>
            </div>

          </td>
          <td align="center">0 %</td>
          <td align="center">
            {{item.er_score_total}} </td>

        </tr>
        
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { HistoryStore } from '@/stores/history';
import ApiService from '@/services/api.service';

const store = HistoryStore();
const router = useRouter();

const auth = useAuthStore()
const route = useRoute();
const profile = await auth.getProfile();
store.user_id = auth.user_id

let history_user = await store.HistoryByExam(router.currentRoute.value.params.id);


const Fitter = async (item) => {
  //router.push({ path: '/exam'})

  const id = item;
  router.push({ path: '/history-detail/' + id })
};

function coverttime(date) {
    const datetime = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDatetime = datetime.toLocaleString(undefined, options);
    return formattedDatetime;
}

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
  border: 2px solid #4CAF50;
  transition-duration: 0.4s;
  display: flex;
}

#choice:hover {
  background-color: #4CAF50;
  /* Green */
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
}</style>
