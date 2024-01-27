


<template>
  <div v-if="store.data.course_id">
    <div>
      <div class="container">
      {{ store.seconds }}
        <div class="row" v-if="store.data">
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
                <div class="row">
                  <div class="col-xl-12">
                    <ul class="nav course__tap__wrap" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          class="single__tab__link active"
                          data-bs-toggle="tab"
                          data-bs-target="#projects__one"
                          type="button"
                          aria-selected="true"
                          role="tab"
                          @click="backlearning(store.data.course_id)"
                        >
                        {{ $t("backtocourse") }}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-content tab__content__wrapper"
                  id="myTabContent" v-if="store.data.cs_cover"
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
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button collapsed mt-0"
                            type="button"
                            style="background-color: #7e7ec3"
                          >
                             {{ $t("lesson_t") }}
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse p-4 show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                   

                          <div class="row" style="padding: 5px">
                            <div class="single__expart__teacher">
                              <div
                                class="teacher__img mb-0"
                                v-if="store.data.cs_cover"
                              >
                                <img
                                  :src="coverimage(store.data.cs_cover)"
                                  alt="Image"
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
                             

                                <hr />
                               
                                <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="mb-0">
                                      {{ $t("page_course_date") }}
                                    </p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="mb-0">
                                      {{ coverttime(store.data.crt_date) }}
                                    </p>
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
                  id="myTabContent" v-if="store.data.cs_video"
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
                            v-if="store.data.cs_video"
                          >
                            <div v-if="store.isYoutube == true" class="ifra">
                              <YouTube
                                :src="store.data.cs_video"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="coursearea sp_bottom_100">
      <div class="container">
        <div class="row" v-if="store.data">
          <div class="col-xl-12 col-lg-12">
            <div
              class="blogarae__img__2 course__details__img__2 aos-init aos-animate"
              data-aos="fade-up"
            >
              <!-- <img :src="coverimage(store.data.cs_cover)" alt="blog"> -->
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
                      id="accordionExample"
                    >
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button collapsed mt-0"
                            type="button"
                            style="background-color: #7e7ec3"
                          >
                            {{ store.data.cs_name }}
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse p-4 show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="row" style="padding: 5px">
                            <div
                              class="col-lg-12 d-flex justify-content-center align-items-center"
                            >
                                <div class="author__text row">
                                  <div class="col-lg-12 col-md-4">
                                    <p class="fs-4 fw-bold mb-0">
                                      ບໍ່ມີບົດຮຽນສໍາລັບການນີ້
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="store.data.course_id">
    <!-- <hr class="mb-5">
    <div class="my-4">
      <h1 class="text-center">
        FAQ
      </h1>
    </div> -->
    <div class="accordion accordion-flush" id="accordionFlushExample">

       <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       <!-- {{ $t("lesson_q") }} : {{ store.data.cs_name }} ? -->
       {{ store.data.cs_name }}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <!-- {{ $t("lesson_a") }} : {{ store.data.cs_description }} -->
        {{ store.data.cs_description }}
      </div>
    </div>
  </div>
    </div>





  </div>
  <br>
  <div class="container" v-if="store.data.course_id">
          <div class="row">
    <div class="col-xl-12 col-lg-12">
      <div class="pagination-no_spacing">
        <ul class="pagination" style="justify-content: center;">
          <li @click="prev()"> <a href="javascript:void(0);" class="prev"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-chevron-left">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg></a>
          </li>
         
            
              <li><a href="javascript:void(0);">{{store.selelesson}}</a></li>
       
          <li><a href="javascript:void(0);"> / </a></li>
          <li><a href="javascript:void(0);">{{store.total}}</a></li>
          <li @click="next()"> <a href="javascript:void(0);" class="next" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg></a>
          </li>
        </ul>
      </div>

   
    </div>
  </div>
 </div>

  
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
const router = useRouter();
const store = LessonStore();
const youtubeWidth = ref(620);
const auth = useAuthStore();
const route = useRoute();
const profile = await auth.getProfile();

store.user_id = auth.user_id;

//let lesson_id = await store.fetchCourse(router.currentRoute.value.params.id);

// if (lesson_id == true) {
//   store.updateLogCourse();
// } else {
// }
if (process.client) {
   Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
 let lesson_id = await store.fetchCourse(router.currentRoute.value.params.id);
  window.addEventListener("resize", () => loadEdit(), store.isYoutube == false);
  setTimeout(() => Swal.close(), 500);
}

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
  clearInterval(store.timer);
  reset();
};

const updateMillea = async () => {
 //let time = setInterval(updateMille, 1000);
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



let youtube = "https //www.youtube.com/embed/tgbnymz7vqy";

import { reactive } from "vue";
const options = reactive({
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  poster: "", //封面
});
const onPlay = (id) => {
  //  store.cs_id = id;
  // store.updateLogCourse();
};

const backlearning = (couse_id) => {
  router.push("/course-detail/" + couse_id);
};

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

if(store.selelesson != 1){
store.selelesson--;
await store.fetchCourseLessonSelect(router.currentRoute.value.params.id);
await setTimeout(() => Swal.close(), 500);
}
setTimeout(() => Swal.close(), 500);
// store.selelesson--;
// await store.fetchCourseLessonSelect(router.currentRoute.value.params.id);
};
const next = async () => {
      Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
  stop();
  reset();
start();
if(store.selelesson != store.total){
store.selelesson++;
await store.fetchCourseLessonSelect(router.currentRoute.value.params.id);


await setTimeout(() => Swal.close(), 500);
}
await setTimeout(() => Swal.close(), 500);

};
</script>

<style>


.blogarae__img__2 > img {
  max-height: 430cm;
  object-fit: cover;
}

.responsive {
  width: 100%;
  height: auto;
}

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