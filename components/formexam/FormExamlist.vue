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
                  <div class="col-xl-10 col-lg-10 col-sm-6">
                    <h4 class="sidebar__title aos-init aos-animate" data-aos="fade-up">
                      <i class="icofont-book-alt"></i> {{ $t("page_exam_course_eq") }}{{ store.exam.em_name }}
                    </h4>
                    <div class="timerCountdown">
                      <p class="timeText">{{ store.hours }} : {{ store.minutes }} : {{store.seconds }}</p>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-sm-6">
                    <h6>
                      {{ store.ind + 1 }} / {{ store.total }}
                    </h6>
                  </div>
                </div>
             
                <div class="course__details__wraper aos-init aos-animate" data-aos="fade-up" v-if="x.eq_name">
                

                      <div id="้howto">
              
                      <span id="้howto-text"  class="scrollbar">{{ $t("page_exam_report_cho1") }} {{ store.ind + 1 }} : {{ x.eq_name }}</span>
                       <div class="force-overflow"></div>
                        <span v-if="x.eq_image"  @click="imagemodal(x.eq_image)">     <img :src="coverimage(x.eq_image)" alt="sidbar"  width="80" height="100"/></span>
                    </div>
                </div>

                
                <div class="course__details__wraper aos-init aos-animate " data-aos="fade-up" id="choice-container">
                  <ul v-for="(a, ins) in x.choices" v-bind:class="{ 'sec-l': a.ec_id == x.ec_id }"
                    style="border-style: groove;" id="choice-card">
                    <div id="choice">
                      <li id="card-index">{{ ins + 1 }}.</li>
                      <hr />
                      <span id="choice-text"  class="scrollbar" @click="choosechoice(a.ec_id, index)">{{ a.ec_name }}</span>
                       <div class="force-overflow"></div>
                        <span v-if="a.ec_image" @click="imagemodal(a.ec_image)"> <img :src="coverimage(a.ec_image)" alt="sidbar"  width="80" height="100"/></span>
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
              <div class="blogsidebar__content__wraper__2 aos-init aos-animate exam-timmer" data-aos="fade-up">
                <ul class="course__details__populer__list">
                  <li>
                    <p style="color: #cf1111;">{{ $t("page_exam_report_remain1") }} {{ store.hours }} {{ $t("page_exam_report_remain2") }} {{ store.minutes }} {{ $t("page_exam_report_remain3") }} {{
                      store.seconds }} {{ $t("page_exam_report_remain4") }} </p>
                  </li>
                </ul>
              </div>
              <div class="blogsidebar__content__wraper__2 aos-init aos-animate" data-aos="fade-up">
                <ul class="recent__list">
                  <li>
                    <div class="recent__img">
                      <a href="#">
                         <img :src="coverimage(auth.formdetail.user_img )" alt="sidbar" id="user-icon"  width="80" height="100"/>
                      </a>
                    </div>
                    <div class="recent__text">
                      <div class="recent__date">
                        <a>{{ $t("page_exam_name") }}: {{auth.formuser.user_firstname}} {{auth.formuser.user_lastname}}</a>
                      </div>
                      <div class="recent__date">
                        <a>{{ $t("page_exam_code") }} {{ $t("page_exam_person") }}:  {{auth.formdetail.identification_number}}</a>
                      </div>
                      <div class="recent__date">
                        <a>{{ $t("page_exam_status") }}: {{ $t("page_exam_report_test") }}</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="populer__tag__list">
                  <ul>
                    <li style="width: 47%" @click="example();" class="exma"><a>{{ $t("page_exam_t") }}</a></li>
                    <li style="width: 47%" class="send" @click="send();"><a>{{ $t("page_exam_send") }}</a></li>
                  </ul>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6" v-if="store.examination" v-for="(x, index) in store.examination">
                    {{ $t("page_exam_report_cho1") }} {{ index + 1 }}
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
        <h4 class="modal-title" id="myModalLabel">{{ $t("page_exam_report_del_t") }}</h4>
      </div>
      
      <div class="modal-body">
        <div class="row">
          <div class="col-xs-12">
            <p>{{ $t("page_exam_report_del_de") }}</p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="Hide()">{{ $t("page_exam_report_del_close") }}</button>
        <button type="button" class="btn btn-danger" @click="Confirm()">{{ $t("page_exam_report_del_confirm") }}</button>
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

const auth = useAuthStore()

const store = ExamTestPostStore();
const { getisActiveCourse } = storeToRefs(store);
const { getisConfirm } = storeToRefs(store);

const { Updatechoice } = ExamTestPostStore(); //Action
const { Next } = ExamTestPostStore(); //Action
const { Previod } = ExamTestPostStore(); //Action

const router = useRouter();

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

const imagemodal = async (image) => {

  store.image = image;
  store.PopupImage = true;
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

function coverimage(i) {
    let im =  ApiService.image(i);
  return im;
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
  align-items: unset !important;
}
#choice-container > ul {
  overflow: hidden;
}

#choice {
  border-radius: 20px;
  height: 100%;
  justify-content: space-between;
  padding: 10px 15px 10px 15px;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  transition-duration: 0.4s;
  display: flex;
  #choice-text {
    width: 100%;
  }
}


#้howto {
  border-radius: 20px;
  padding: 10px 10px 15px 15px;
  background-color: white;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
  width: 100%;
  #้howto-text {
    width: 100%;
  }
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
}
.timerCountdown {
  visibility: hidden;
}
#user-icon{
  max-width: 100px;
  border-radius: 50px;
  object-fit: fill;
}
.recent__img {
  display: flex;
  justify-content: center;
}
.scrollbar {
    width: 300px; /* Set the width of the container */
    height: 100px; /* Set the height of the container */
    overflow-y: scroll; /* Enable scrolling for content exceeding the container's dimensions */
    padding: 10px; /* Optional: Add padding to the content inside the container */
    font-size: 18px;
    margin-right: 5px;
}
#choice:hover > .scrollbar::-webkit-scrollbar-thumb {
  background-color: white;
} 
.scrollbar::-webkit-scrollbar {
  width: 6px;
}
.scrollbar::-webkit-scrollbar-track {
  border-radius: 100px;
}
.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(179, 179, 179);
  border-radius: 100px;
}
@media (max-width: 500px) {
  #choice-text {
    font-size: 16px;
  }
}

@media (max-width: 991px) {
  .timerCountdown {
    visibility: visible;
    position: fixed;
    right: 20px;
    top: 120px;
    background-color: black;
    padding: 5px 10px;
    border-radius: 10px;
    background-image: url("paper.gif");
  }
  .exam-timmer {
    display: none;
  }
  .timeText {
    margin-bottom: 0px;
    color: white;
  }
}
</style>
