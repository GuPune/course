


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
                          <li><a>{{ $t("home") }}</a></li>
                          <li>{{ $t("page_course") }}</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  <div class="shape__icon__2">
                <img class=" shape__icon__img shape__icon__img__1" src="../../../assets/img/herobanner/herobanner__1.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__2" src="../../../assets/img/herobanner/herobanner__2.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__3" src="../../../assets/img/herobanner/herobanner__3.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__4" src="../../../assets/img/herobanner/herobanner__4.png"
                    alt="photo">
            </div>
  
  </div>


   <div>
            <div class="container">
                <div class="row my-4">
                 
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
                      <div class="accordion-item" style="padding: 5px;background-color: #F5F5F5;">
                        <div style="text-align: center;">
                          <span style="font-size: 20px;"> Congratuations, You have completed the last lesson of the Course :</span>
                        </div>
               
<br>


<div style="text-align: center;">
                          <span style="font-size: 24px;font-weight: 400;"> A : Two-wheels motocycle, engine not exceed 125cc</span>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div class="text-center p-3 mb-3">
      <p class="fs-3">Arealdy Read: {{stores.learned}} / {{stores.total_lesson_progress}} <span class="text-success">({{stores.progress}}%)</span></p>
    </div>

    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <button class="btn btn-primary" @click="GotoPage('/course');">Go Back to Course List</button>
      <button class="btn" style="background-color: var(--dotColor);" @click="GotoPage('/exam')">Try doing the theory Test for Course A</button>
    </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
  </template>
  <script lang="ts" setup>
  import Search from '@/components/layout/SearchCourse.vue';
  import CourseAll from '@/components/layout/Courseall.vue';
  import CourseSel from '@/components/layout/CourseSel.vue';
  import HistoryCourse from '@/components/layout/HistoryCourse.vue';
import { CoursePostStore } from '@/stores/course';
import Swal from "sweetalert2";
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});

     Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });


const auth = useAuthStore();
const router = useRouter();
const store = CoursePostStore()
store.user_id = auth.user_id;
const stores = CoursePostStore();

onMounted(() => {
const localStorageValue = ref('')
localStorageValue.value = localStorage.getItem('course_id')
if(localStorageValue.value == null){
  router.push("/course");
  return false;
}
let progress =  store.progersslesson(localStorageValue.value);
    });


 setTimeout(() => Swal.close(), 500);

 const GotoPage = async (e) => {
    router.push(e);
 }

  </script>
  