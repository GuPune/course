


<template>
  <div>
    <div>
      <!-- <div class="breadcrumbarea">
      <div class="container" v-if="store.curent_lesson">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
             
              <div class="breadcrumb__inner">
                <ul>
                <span style="font-size: 24px;">{{ store.course_curent.course_code }} {{ store.curent_lesson.cg_name }}</span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shape__icon__2">
        <img
          class="shape__icon__img shape__icon__img__1"
          src="../../../assets/img/herobanner/herobanner__1.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__2"
          src="../../../assets/img/herobanner/herobanner__2.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__3"
          src="../../../assets/img/herobanner/herobanner__3.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__4"
          src="../../../assets/img/herobanner/herobanner__4.png"
          alt="photo"
        />
      </div>
    </div> -->
      <div class="container">
        <div class="row" v-if="store.curent_lesson">
          <div class="col-xl-12 col-lg-12">
            <div
              class="blogarae__img__2 course__details__img__2 aos-init aos-animate"
              data-aos="fade-up"
            ></div>
            <div class="blog__details__content__wraper">
              <div
                class="course__button__wraper aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="course__button"></div>
              </div>
              <div
                class="course__details__tab__wrapper aos-init"
                data-aos="fade-up"
              >

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div style="background-color: var(--dotColor);" v-if="store.curent_lesson">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <span style="font-size: 24px; font-weight:bold;">{{store.course_curent.course_code}} - {{ locale=='la' ? store.course_curent.course_name_lo : store.course_curent.course_name_eng}} / {{ $t("course_subject") }}:   {{ locale=='la' ? store.curent_lesson.cg_name_lo : store.curent_lesson.cg_name_eng}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div >
    <div class="coursearea ">
      <div class="container">
        <div class="row" v-if="store.course_curent">
          <div class="col-xl-12 col-lg-12">
            <div
              class="blogarae__img__2 course__details__img__2 aos-init aos-animate"
              data-aos="fade-up"
            >
         
              <!-- <img :src="coverimage(store.data.cs_cover)" alt="blog"> -->
            </div>

                  <div class="row">
                  <div class="col-xl-12">
                    <ul class="nav course__tap__wrap" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          class="single__tab__link btn btn-warning"
                          data-bs-toggle="tab"
                          data-bs-target="#projects__one"
                          type="button"
                          aria-selected="true"
                          role="tab"
                          @click="backlearning(router.currentRoute.value.params.id)"
                        >
                        <span class="icofont-arrow-left"/> 
                        {{ $t("backtocourse") }}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
            <div class="blog__details__content__wraper">
              <div
                class="course__button__wraper aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="course__button"></div>
              </div>

              <div
                class="course__details__tab__wrapper aos-init"
                data-aos="fade-up"
              >
                <div
                  class="tab-content tab__content__wrapper"
                  id="myTabContent"
                >
                  <div
                    class="tab-pane fade active show"
                    id="projects__two"
                    role="tabpanel"
                    aria-labelledby="projects__two"
                  >
                    <div
                      class="accordion content__cirriculum__wrap"
                      id="accordionExample" v-if="store.curent_lesson.cs_name_lo"
                    >
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button collapsed mt-0"
                            type="button"
                            style="background-color: #F5F5F5"
                          >
                            <span style="font-size: 20px;font-weight:bold;padding-right:10px;" v-if="store.curent_lesson.cs_name_lo.trim().endsWith('?')">{{ $t('question') }} : </span>
                            <span style="font-size: 20px;font-weight: bold;">{{ store.curent_lesson.cs_name_lo }}</span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse p-4"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="row" style="padding: 15px">
                            <div
                              class="col-lg-12 d-flex justify-content-center align-items-center"
                            >
                                <div class="author__text row">
                                  <div class="col-lg-12 col-md-4">
                                  
                                    <p class="fs-4 fw-bold mb-0">
                                      {{ decodeHTML(store.curent_lesson.cs_description) }} 

                                     
                                    </p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="fs-4 fw-bold mb-0"></p>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                  class="tab-content tab__content__wrapper"
                  id="myTabContent" v-if="store.curent_lesson.cs_cover"
                >
                  <div
                    class="tab-pane fade active show"
                    id="projects__two"
                    role="tabpanel"
                    aria-labelledby="projects__two"
                  >
                    <div
                      class="accordion content__cirriculum__wrap"
                      id="accordionExample"
                    >
                      <div class="accordion-item">
                       
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                   

                          <div class="row" style="padding: 5px">
                            <div style="text-align:center;">
                              <div
                                class=" mb-0"
                                v-if="store.curent_lesson.cs_cover"
                              >
                                <img
                                  :src="coverimage(store.curent_lesson.cs_cover)"
                                  alt="Image"
                                 style="width: 400px;"
                                  class="responsive"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row" style="padding: 5px">
                          
                            <div class="col-lg-12 col--30">
                              <div
                                class="author__content"
                                style="margin: 30px 0"
                              >

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div
                  class="tab-content tab__content__wrapper"
                  id="myTabContent" v-if="store.curent_lesson.cs_video"
                >
                  <div
                    class="tab-pane fade active show"
                    id="projects__two"
                    role="tabpanel"
                    aria-labelledby="projects__two"
                  >
                    <div
                      class="accordion content__cirriculum__wrap"
                      id="accordionExample"
                    >
                      <div class="accordion-item">
                      
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse p-4 show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            class="row justify-content-center"
                            v-if="store.curent_lesson.cs_video"
                          >
                            <div v-if="store.isYoutube == true" class="ifra">
                              <YouTube
                                :src="store.curent_lesson.cs_video"
                                :width="store.windowWidth"
                                @ready="onReady"
                                @playing="handlePlaying"
                                ref="youtube"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div
                  class="tab-content tab__content__wrapper"
                  id="myTabContent" v-if="store.curent_lesson.cs_description"
                >
                  <div
                    class="tab-pane fade active show"
                    id="projects__two"
                    role="tabpanel"
                    aria-labelledby="projects__two"
                  >
                    <div
                      class="accordion content__cirriculum__wrap"
                      id="accordionExample"
                    >
                      <div class="accordion-item" style="padding: 15px; background-color: #F5F5F5;" >
                        <!-- <span style="font-size: 20px;font-weight:bold;" v-if="store.curent_lesson.cs_name_lo.trim().endsWith('?')">{{ $t('answer') }} : </span>
                        <span style="font-size: 20px;font-weight: 400;"> {{ store.curent_lesson.cs_description }}
                        
                        </span> --> 
                          <div v-html="decodeHTML(store.curent_lesson.cs_description)"></div>
                      </div>
                   
                    </div>
                  </div>
                </div>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>

  <div class="d-flex gap-3 justify-content-center flex-wrap">
      <button class="btn" style="background-color: #2AB0E5;width: 10%;" @click="prev()" v-if="(store.prevs_group != 0) || (store.prevs != 0)">
        <span aria-hidden="true">&laquo;</span><span>Back</span></button>
      <button class="btn" style="background-color: #2AB0E5;width: 10%;" @click="next()">Next<span aria-hidden="true">&raquo;</span></button>
    </div>
<br>

  
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import { LessonStore } from "@/stores/lesson";
import ApiService from "@/services/api.service";
import YouTube from "vue3-youtube";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
const router = useRouter();
const store = LessonStore();
const youtubeWidth = ref(620);
const auth = useAuthStore();
const route = useRoute();
const profile = await auth.getProfile();

store.user_id = auth.user_id;
Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
let lesson_id = await store.fetchCourseread(route.query);
if(lesson_id === false){
  router.push("/course");
  
}
if(store.total_lesson_lean == 0){
  router.push("/course");
}
 let course = await store.fetchCourseCode(route.query.course_id);
 setTimeout(() => Swal.close(), 500);


async function loadEdit() {
  store.isYoutube = false;

  setTimeout(function () {
    updateWidth();
  }, 1000); //delay is in milliseconds

  // await updateWidth();
  // console.log('loadEdit');
}

const handlePlaying = () => {};

const updateWidth = async () => {
  if (window.innerWidth < 768 && window.innerWidth >= 430) {
    youtubeWidth.value = 350;
    store.windowWidth = youtubeWidth.value;
    store.isYoutube = true;
  } else if (window.innerWidth < 430) {
    youtubeWidth.value = 250;
    store.windowWidth = youtubeWidth.value;
    store.isYoutube = true;
  } else {
    youtubeWidth.value = 620; // default width
    store.windowWidth = youtubeWidth.value;
    store.isYoutube = true;
  }
};


const start = async () => {
  if (!store.timer) {
    store.timer = setInterval(updateMillea, 1000);
      }
};

const stop = async () => {
  await store.updateLogCourse();
  clearInterval(store.timer);
  reset();
};

const updateMillea = async () => {

 store.seconds++;
 if(store.seconds > 5){
  stop();
      }
};

const reset = async () => {
      store.timer = null;
      store.seconds = 0;
};


onMounted(() => {
  // window.addEventListener('resize', updateWidth);
  updateWidth(); // Call once when component is mounted to set the initial width
  start();
  

});



onBeforeUnmount(() => {
  // window.removeEventListener('resize', updateWidth);
});



let youtube = "https://www.youtube.com/watch?v=Zks4PTlUVCU";

import { reactive } from "vue";
const options = reactive({
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/sample.mp4", //视频源
  poster: "", //封面
});
const onPlay = (id) => {
  //  store.cs_id = id;
  // store.updateLogCourse();
};

const backlearning = (couse_id) => {

  router.push("/course-detail/" + couse_id);
};


const decodeHTML = (str) => {

    const map = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&#x2F;': '/'
    };
    return str.replace(/&(amp|lt|gt|quot|#39|#x2F);/g, function(m) { return map[m]; });
}




const onReady = () => {};

function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}

function coverttime(date) {
  const datetime = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDatetime = datetime.toLocaleString(undefined, options);
  return formattedDatetime;
}





const prev = async () => {
  Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
  await setTimeout(() => Swal.close(), 500);

console.log(store.prevs);
  
if(store.prevs == 0){
 
  router.push({
        path: '/course-detail/lesson/' + store.course_read.course_id,
        query: {
    course_id: store.course_read.course_id,
    cg_id: store.previous_couse_group.cg_id,
    cs_id: route.query.cs_id,
  }
      })



     store.formsearchlearing.course_id = store.course_read.course_id
     store.formsearchlearing.cg_id = store.previous_couse_group.cg_id
     store.formsearchlearing.cs_id = route.query.cs_id

     let prev = await store.fetchCoursereadPrev();
  
}else{
    router.push({
        path: '/course-detail/lesson/' + store.course_read.course_id,
        query: {
    course_id: store.course_read.course_id,
    cg_id: store.previous_lesson.cg_id,
    cs_id: store.previous_lesson.cs_id,
  }
      })




      store.formsearchlearing.course_id = store.course_read.course_id
      store.formsearchlearing.cg_id = store.previous_lesson.cg_id
      store.formsearchlearing.cs_id = store.previous_lesson.cs_id

      let prev = await store.fetchCoursereadPrev();
}



}


 
const next = async () => {
  Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
  await setTimeout(() => Swal.close(), 500);

  ///////////สิ้นสุด//////////

  if((store.next_group == 0) && (store.nexts == 0)){

    const cour = localStorage.setItem('course_id', store.course_read.course_id)
    router.push('/course-detail/success');
   return false;
  }

if(store.nexts == 0){
  console.log('if');
  router.push({
        path: '/course-detail/lesson/' + store.course_read.course_id,
        query: {
    course_id: store.course_read.course_id,
    cg_id: store.next_couse_group.cg_id,
    cs_id: store.curent_lesson.cs_id,
  }
      })


      store.formsearchlearing.course_id = store.course_read.course_id
      store.formsearchlearing.cg_id = store.next_couse_group.cg_id
      store.formsearchlearing.cs_id = store.curent_lesson.cs_id
   
   let next = await store.fetchCoursereadNext();
  
}else {

  router.push({
        path: '/course-detail/lesson/' + store.course_read.course_id,
        query: {
    course_id: store.course_read.course_id,
    cg_id: store.curent_couse_group.cg_id,
    cs_id: store.next_lesson.cs_id,
  }
      })
  
      store.formsearchlearing.course_id = store.course_read.course_id
      store.formsearchlearing.cg_id = store.next_lesson.cg_id
      store.formsearchlearing.cs_id = store.next_lesson.cs_id
   
   let next = await store.fetchCoursereadNext();

}


}

</script>

<style>


.blogarae__img__2 > img {
  max-height: 430cm;
  object-fit: cover;
}

/* .responsive {
  width: 100%;
  height: auto;
} */

.containerxxx {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.teacher__img > img {
  border-radius: 10%;
}
@media screen and (max-width: 767px) {
  .author__text > div > p {
    text-align: center;
  }
  .author__text {
    margin-bottom: 10px;
  }
}

.youtube-embed {
  position: relative;
  padding-bottom: 56%;
  width: 100%;
  text-align: left;
}

.youtube-embed iframe {
  width: 100%;
  position: absolute;
  height: 100%;
  overflow: hidden;
}
.ifra {
  text-align: -webkit-center;
}
</style>