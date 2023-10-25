


<template>
  <div v-if="store.data.course_id">
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
              <!-- <div
                class="course__details__heading aos-init aos-animate"
                data-aos="fade-up"
              >
                <h3>{{ store.data.cs_description }}</h3>
              </div> -->
              <!-- <div
                class="course__details__price aos-init aos-animate"
                data-aos="fade-up"
              >
                
              </div> -->
        
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
                         บทสู่บทเรียนหลัก
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
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
                            type="button" style="background-color:#7e7ec3"
                        
                          >
                           {{store.data.cs_name}}
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse p-4 show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="row justify-content-center" v-if="store.data.cs_video">
                            <!-- <vue3VideoPlay
                              width="100%"
                              title="Video"
                             :src="store.data.cs_video"
                              :poster="options.poster"
                                     @pause="onPause"
                              @timeupdate="onTimeupdate"
                              @canplay="onCanplay"
                             
                            /> -->

                             <!-- <video controls @play="onPlay(store.data.cs_id)">

      <source :src="store.data.cs_video" type="video/mp4">
      Your browser does not support the video tag.
    </video> -->
  
   <div v-if="store.isYoutube == true" class="ifra">
    <YouTube :src="store.data.cs_video" :width="store.windowWidth" @ready="onReady" @playing="handlePlaying" ref="youtube" />
   </div>
    
                            <!-- <vue3VideoPlay
                              width="100%"
                              title="Video"
                              :src="x.cs_video"
                              :poster="options.poster"
                              @play="onPlay(x.cs_id)"
                              @pause="onPause"
                              @timeupdate="onTimeupdate"
                              @canplay="onCanplay"
                            /> -->
                          </div>

                          <div class="row" style="padding: 5px">
                            <div
                              class="col-lg-3 d-flex justify-content-center align-items-center"
                            >
                              <div class="single__expart__teacher">
                                <div class="teacher__img mb-0" v-if="store.data.cs_cover">
                                  <!-- <img src="../../assets/img/grid/cart1.jpg" alt="author"> -->
                                  <img
                                    :src="coverimage(store.data.cs_cover)"
                                    alt="Image"
                                    style="width: 120px; height: 120px"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-9 col--30">
                              <div
                                class="author__content"
                                style="margin: 30px 0"
                              >
                                <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="fs-4 fw-bold mb-0">
                                      {{ $t("page_course_last_lesson") }} 
                                    </p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="fs-4 fw-bold mb-0">
                                        {{store.data.cs_name}}
                                    </p>
                                  </div>
                                </div>
                        
                                <hr />
                                <!-- <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="mb-0">{{ $t("page_course_user_create") }}</p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    
                                  </div>
                                </div> -->
                                <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="mb-0">{{ $t("page_course_date") }}</p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="mb-0"> {{ coverttime(store.data.crt_date) }}
                                    </p>
                                  </div>
                                </div>

                                       <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="mb-0">{{ $t("page_course_last_description") }}</p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                   {{store.data.cs_description}}
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
                            type="button" style="background-color:#7e7ec3"
                        
                          >
                           {{store.data.cs_name}}
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
                              class="col-lg-3 d-flex justify-content-center align-items-center"
                            >
                            
                            </div>
                            <div class="col-lg-9 col--30">
                              <div
                                class="author__content"
                                style="margin: 30px 0"
                              >
                                <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="fs-4 fw-bold mb-0">
                                     ไม่มีบทเรียนนี้
                                    </p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="fs-4 fw-bold mb-0">
                                     
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
    definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
import { defineComponent, ref, onMounted, onBeforeUnmount  } from 'vue';
import { storeToRefs } from "pinia";
import { LessonStore } from "@/stores/lesson";
import ApiService from "@/services/api.service";
import YouTube from 'vue3-youtube'
const router = useRouter();
const store = LessonStore();
const youtubeWidth = ref(620);
const auth = useAuthStore();
const route = useRoute();
const profile = await auth.getProfile();

store.user_id = auth.user_id;

let lesson_id = await store.fetchLessonId(router.currentRoute.value.params.id);


if(lesson_id == true){
   store.updateLogCourse();
}else {

}
if (process.client) {

  window.addEventListener("resize", () => loadEdit(), store.isYoutube == false);
  
//   window.addEventListener('resize', function(event) {
  
//     updateWidth();
// }, true);

}

async function loadEdit() {

 store.isYoutube = false;

setTimeout(function(){
          updateWidth();
   },1000); //delay is in milliseconds 

 // await updateWidth();
 // console.log('loadEdit');
 
}

const handlePlaying = () => {
      console.log('Video is playing');
    };


    
  const updateWidth = async () => {
console.log('update');
  if (window.innerWidth < 768 && window.innerWidth >= 430) {
    youtubeWidth.value = 350;
    store.windowWidth = youtubeWidth.value;
   store.isYoutube = true 
  } else if (window.innerWidth < 430) {
    youtubeWidth.value = 250;
    store.windowWidth = youtubeWidth.value;
    store.isYoutube = true 
  }
  else {
    youtubeWidth.value = 620; // default width
    store.windowWidth = youtubeWidth.value;
     store.isYoutube = true 
  }
};
onMounted(() => {
  console.log('onMounted');
 // window.addEventListener('resize', updateWidth);
   updateWidth(); // Call once when component is mounted to set the initial width
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
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
   router.push("/course-detail/"+couse_id);
};


const onReady = () => {
console.log('onReady');
};


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
</script>

<style>
.blogarae__img__2 > img {
  max-height: 430cm;
  object-fit: cover;
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
text-align:-webkit-center;
}
</style>