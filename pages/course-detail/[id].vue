


<template>
  <div>
    <div class="breadcrumbarea">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <h2 class="heading">{{ $t("page_course") }}</h2>
              </div>
              <div class="breadcrumb__inner">
                <ul>
                  <li>
                    <a>{{ $t("home") }}</a>
                  </li>
                  <li>{{ $t("page_course") }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shape__icon__2">
        <img
          class="shape__icon__img shape__icon__img__1"
          src="../../assets/img/herobanner/herobanner__1.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__2"
          src="../../assets/img/herobanner/herobanner__2.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__3"
          src="../../assets/img/herobanner/herobanner__3.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__4"
          src="../../assets/img/herobanner/herobanner__4.png"
          alt="photo"
        />
      </div>
    </div>
    <div class="coursearea sp_top_100 sp_bottom_100">
      <div class="container">
 
        <div class="row" v-if="store.course_lesson">
          <div class="col-xl-12 col-lg-12">
            <div
              class="blogarae__img__2 course__details__img__2 aos-init aos-animate"
              data-aos="fade-up"
            >
              <img :src="coverimage(store.course_lesson.course_cover)" alt="blog">
            </div>
            <div class="blog__details__content__wraper">
              <div
                class="course__button__wraper aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="course__button"></div>
                <div class="course__date">
                  <p>
                    {{ $t("page_course_last_lesson") }}<span> {{ coverttime(store.course_lesson.udp_date) }}</span>
                  </p>
                </div>
              </div>
              <div
                class="course__details__heading aos-init aos-animate"
                data-aos="fade-up"
              >
                <h3>{{ store.course_lesson.course_description }}</h3>
              </div>
              <div
                class="course__details__price aos-init aos-animate"
                data-aos="fade-up"
              >
                <ul>
                  <!-- <li>
                    <div class="course__details__date" v-if="item.lesson">
                      <i class="icofont-book-alt"></i> {{ item.lesson.length }} {{ $t("page_course_last_lesson") }}
                    </div>
                  </li> -->
                </ul>
              </div>
              <div
                class="course__details__paragraph aos-init aos-animate"
                data-aos="fade-up"
              >
                <p>
                  {{ store.course_lesson.course_description }}
                </p>
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
                        >
                          <i class="icofont-book-alt"></i>{{ $t("page_course_last_description") }}
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
                    v-for="(x, index) in store.lesson"
                  >
           
                    <div
                      class="accordion content__cirriculum__wrap"
                      id="accordionExample"
                    >
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button @click="choose(router.currentRoute.value.params.id,index,(store.lesson_current_page * store.formsearchlesson.per_page) - (store.formsearchlesson.per_page -  index) +  1)"
                            class="accordion-button collapsed mt-0"
                            type="button"
                          >

                             
                            ບົດຮຽນ # {{ (store.lesson_current_page * store.formsearchlesson.per_page) - (store.formsearchlesson.per_page -  index) +  1 }}  {{ x.studied }}
                          </button>

                          
                        </h2>
                        <div
                          :id="'collapseOne-' + index"
                          class="accordion-collapse collapse p-4"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                  

                          <div class="row" style="padding: 5px">
                            <div
                              class="col-lg-3 d-flex justify-content-center align-items-center"
                            >
                              <div class="single__expart__teacher">
                                <div class="teacher__img mb-0" v-if="x.cs_cover">
                              
                                  <img
                                    :src="coverimage(x.cs_cover)"
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
                                      {{ $t("page_course_last_lesson") }} {{ index + 1 }}
                                    </p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="fs-4 fw-bold mb-0">
                                      <a href="#">{{ x.cs_name }} </a>
                                    </p>
                                  </div>
                                </div>
                                <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="mb-0">{{ $t("page_course_last_description") }}</p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="mb-0">{{ x.cs_description }}</p>
                                  </div>
                                </div>
                                <hr />
                                <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="mb-0">{{ $t("page_course_user_create") }}</p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="mb-0">{{ x.user_create }}</p>
                                  </div>
                                </div>
                                <div class="author__text row">
                                  <div class="col-lg-3 col-md-4">
                                    <p class="mb-0">{{ $t("page_course_date") }}</p>
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <p class="mb-0">
                                      {{ coverttime(x.crt_date) }}
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

    <div class="main__pagination__wrapper" data-aos="fade-up"  v-if="store.total_page_lesson > 1">
                            <ul class="main__page__pagination">
                                <li  v-for="page in store.total_page_lesson" :key="page"  @click="setCurrentPageLesson(page)" >
                                    <a class="active" href="#" v-if="store.formsearchlesson.page == page">{{page}}
                                    </a>
                                    <a  href="#" v-else>{{page}}
                                    </a>
                                </li>
                            </ul>
                        </div>
  </div>
</template>
<script lang="ts" setup>
    definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { CoursePostStore } from "@/stores/course";
import ApiService from "@/services/api.service";
const router = useRouter();
const store = CoursePostStore();

const auth = useAuthStore()
store.user_id = auth.user_id


let course = await store.fetchCourse();
let course_id = await store.fetchCourseId(router.currentRoute.value.params.id);
let lesson_id = await store.fetchCourseLessId(router.currentRoute.value.params.id);
let addlessread = await store.addlessread();

let youtube = "https //www.youtube.com/embed/tgbnymz7vqy";

import { reactive } from "vue";
const options = reactive({
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  poster: "", //封面
});
const onPlay = (id) => {
  store.cs_id = id;
 //  store.updateLogCourse();
};

const choose = async (id,index,x) => {

await store.SelectLesson(id,index,x)

 router.push('/course-detail/lesson/'+id);
};



const onPause = (ev) => {
 
};

const onTimeupdate = (ev) => {
 
};
const onCanplay = (ev) => {
 
};

const setCurrentPageLesson = async (page) => {

  await store.setCurrentPageLesson(page)
  await store.fetchCourseLessId(router.currentRoute.value.params.id)
   await store.addlessread();
};

const { getisActiveCourse } = storeToRefs(store);

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
.accordion-button::after {
  background-image: none;
}
</style>