<template>
  <div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent">
    <div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }" id="projects__one"
      role="tabpanel" aria-labelledby="projects__one">
      <div class="row">
        <div class="blogarea__2">
          <div class="row">
            <div class="col-xl-8 col-lg-8">
              <!-- <div class="blog__content__wraper__2 aos-init aos-animate" data-aos="fade-up">
                            <div class="blogarea__text__wraper__2">
                                <div class="blogarea__heading__2">
                                    <h3><a href="blog-details.html">Delivering What Consumers Really Value?</a></h3>
                                </div>
                                <div class="blogarea__paragraph">
                                    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of On the other hand, organizations have the need for integrating in IT departments</p>
                                </div>
                            </div>
                        </div> -->
<!-- {{store.listexamqu}} -->
              <div class="blog__details__content__wraper" v-if="store.listttt" v-for="(x, index) in store.listttt">
                <h4 class="sidebar__title aos-init aos-animate" data-aos="fade-up">
                  
                 <i class="icofont-book-alt"></i> หลักสูตร : รถยนต์ (อังกฤษ) 
                </h4>
                <div class="course__details__wraper aos-init aos-animate" data-aos="fade-up">
                  <ul style="width: 100%">
                    <h2>{{ x.eq_name }} {{ x.eq_id }}</h2>
                  </ul>
                </div>

                <div class="course__details__wraper aos-init aos-animate" data-aos="fade-up">
                  <ul v-for="(a, ins) in x.choices" v-bind:class="{ 'sec-l': a.ec_index === x.answer }" style="border-style: groove;"
                    @click="choosechoice(a.ec_index, x.eq_id,index)">
                    <li>{{ ins + 1 }}.</li>
                    <hr />
                    <span>{{ a.ec_name }}</span>
                    <hr v-if="number % 2 === 0" />
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
                    <p style="color: #cf1111;">Remaining: {{ store.hours }} Hours {{ store.minutes }} Minutes {{ store.seconds }} Seconds  </p>
                    <!-- <button type="button" class="btn btn-primary" :disabled="store.counting" @click="startCountdown">
    <vue-countdown v-if="store.counting" :time="60000" @end="onCountdownEnd" v-slot="{ totalSeconds }">Fetch again {{ totalSeconds }} seconds later</vue-countdown>
    <span v-else>Fetch Verification Code</span>
  </button> -->
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
                    <li style="width: 47%"  @click="example();" class="exma"><a>วิธีทำ</a></li>
                    <li style="width: 47%" class="send"><a>สรุป/ส่งคำตอบ</a></li>
                  </ul>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6" v-if="store.listexamqu" v-for="(x, index) in store.listexamqu">
                    ข้อ {{ index + 1 }}
                    <del style="color: red" v-if="x.answer">
                      {{ x.answer }}
                    </del>
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
import { ref, computed, watch } from 'vue'
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";


import { ExamTestPostStore } from '@/stores/examtest';
import  ApiService  from '@/services/api.service';

const store = ExamTestPostStore();
const { getisActiveCourse } = storeToRefs(store);

const { Updatechoice } = ExamTestPostStore(); //Action
const { Next } = ExamTestPostStore(); //Action
const { Previod } = ExamTestPostStore(); //Action
const { countDownTimer } = ExamTestPostStore(); //Action

const router = useRouter();
await store.fetchExamTest();
//let start = await store.Start();
//let s = await store.countDownTimer();
// const end = await store.End();

const computedProperty = computed(() => {
    return store.timerCount
})

watch(computedProperty, (newX) => {
  if(newX == 0){
    router.push({ path: '/exam'})
  }
})
let currentPathObject = router.currentRoute.value; 
 
 console.log("Route Object", currentPathObject)


function image(i) {
  let im =  ApiService.image(i);
  return im;
}

const choosechoice = async (choices, eq_id,index) => {
  await Updatechoice(choices, eq_id);
  await Next(index);
};

const example = async () => {
store.isActive = true;
};

const previodd = async (index) => {
  await Previod(index);
};
const nextt = async (index) => {
  await Next(index);
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
}
.exma{
  background-color: #5f2ded;
    color: white;
}
.send{
  background-color: #e06512;
    color: white;
}
</style>
