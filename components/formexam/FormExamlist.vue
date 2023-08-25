<template>
  <div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent" v-if="store.exam_complete != 1">
    <div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }" id="projects__one"
      role="tabpanel" aria-labelledby="projects__one">
      <div class="row">
        <div class="blogarea__2">
          <div class="row">
            <div class="col-xl-8 col-lg-8">
              <div class="blog__details__content__wraper" v-if="store.listttt" v-for="(x, index) in store.listttt">
                <div class="row">
                  <div class="col-xl-11 col-lg-11 col-sm-6">
                    <h4 class="sidebar__title aos-init aos-animate" data-aos="fade-up">
                      <i class="icofont-book-alt"></i> หลักสูตร : {{ store.em_name }} {{ store.total }} {{ store.t }}
                    </h4>
                  </div>
                  <div class="col-xl-1 col-lg-1 col-sm-6">
                    <h6>
                      {{ store.ind + 1 }} / {{ store.total }}
                    </h6>
                  </div>
                </div>
                <div class="course__details__wraper aos-init aos-animate" data-aos="fade-up">
                  <ul style="width: 100%">
                    <h2> ข้อ {{ store.ind + 1 }} : {{ x.eq_name }}</h2>
                  </ul>
                </div>
                <div class="course__details__wraper aos-init aos-animate" data-aos="fade-up" id="choice-container">
                  <ul v-for="(a, ins) in x.choices" v-bind:class="{ 'sec-l': a.ec_id == x.ec_id }"
                    style="border-style: groove;" @click="choosechoice(a.ec_id, index)" id="choice-card">
                    <div id="choice">
                      <li id="card-index">{{ ins + 1 }}.</li>
                      <hr />
                      <span>{{ a.ec_name }}</span>
                    </div>
                  </ul>
                </div>
                <div class="main__pagination__wrapper" data-aos="fade-up">
                  <ul class="main__page__pagination">
                    <li @click="previodd(x.eq_id)"><a><i class="icofont-double-left"></i></a></li>
                    <li @click="nextt(x.eq_id)"><a><i class="icofont-double-right"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4">
              <div class="blogsidebar__content__wraper__2 aos-init aos-animate" data-aos="fade-up">
                <ul class="course__details__populer__list">
                  <li>
                    <p style="color: #cf1111;">Remaining: {{ store.hours }} Hours {{ store.minutes }} Minutes {{
                      store.seconds }} Seconds </p>
                  </li>
                </ul>
              </div>
              <div class="blogsidebar__content__wraper__2 aos-init aos-animate" data-aos="fade-up">
                <ul class="recent__list">
                  <li>
                    <div class="recent__img">
                      <a href="#">
                        <img src="../../assets/img/blog/blog_11.png" alt="sidbar" />
                      </a>
                    </div>
                    <div class="recent__text">
                      <div class="recent__date">
                        <a>ชื่อจริง: ร้อยตรี ครรชิต ชัยกิจ</a>
                      </div>
                      <div class="recent__date">
                        <a>รหัสบัตร ประชาชน: 0812630907</a>
                      </div>
                      <div class="recent__date">
                        <a>สถานะการทำข้อสอบ: ทดลองสอบ</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="populer__tag__list">
                  <ul>
                    <li style="width: 47%" @click="example();" class="exma"><a>วิธีทำ</a></li>
                    <li style="width: 47%" class="send" @click="send();"><a>สรุป/ส่งคำตอบ</a></li>
                  </ul>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6" v-if="store.examination" v-for="(x, index) in store.examination">
                    ข้อ {{ index + 1 }}
                    <li v-for="(a, index) in x.choices">
                      <span style="color: red" v-if="a.ec_id == x.ec_id">
                        {{ a.ec_index }}
                      </span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div v-if="getisConfirm" class="modal">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Are you sure?</h4>
      </div>
      
      <div class="modal-body">
        <div class="row">
          <div class="col-xs-12">
            <p>Do you really want to delete these records? This process cannot be undone.</p>
          </div>


        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="Hide()">ปิด</button>
        <button type="button" class="btn btn-danger" @click="Confirm()">ยืนยัน</button>
      </div>


    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";


import { ExamTestPostStore } from '@/stores/examtest';
import ApiService from '@/services/api.service';

const store = ExamTestPostStore();
const { getisActiveCourse } = storeToRefs(store);
const { getisConfirm } = storeToRefs(store);

const { Updatechoice } = ExamTestPostStore(); //Action
const { Next } = ExamTestPostStore(); //Action
const { Previod } = ExamTestPostStore(); //Action




const router = useRouter();
//let start = await store.Start();
// const number = 2; // Define the 'number' property
// const end = await store.End();

// const computedProperty = computed(() => {
//     return store.timerCount
// })

// watch(computedProperty, (time) => {   //// countime
//  // store.UpdateTime();
//   if(time == 0){
//     router.push({ path: '/exam'})
//   }
// })



function image(i) {
  let im = ApiService.image(i);
  return im;
}

const choosechoice = async (choices, index) => {
  let upchoice = await Updatechoice(choices);
  await store.fetchExamTest();
  await nextt(index);
};

const example = async () => {
  store.isActive = true;
};



const send = async () => {
  // let send = await store.sendexam();
  // await store.fetchExamTest();
  store.isconfirm = true;
};

const Hide = async () => {
  store.isconfirm = false;
};
const Confirm = async () => {
    let send = await store.sendexam();
  await store.fetchExamTest();
  store.isconfirm = false;
};

const previodd = async (index) => {
  if (store.ind > 0) {
    await Previod(index);
  }
};
const nextt = async (index) => {
  if (store.maxNext > store.ind) {
    await Next(index);
  }
  // await Next(index);
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
