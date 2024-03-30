


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
                        <span style="font-size: 20px;font-weight: 400;">  -------------------------------------- </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div class="text-center p-3 mb-3">
      <p class="fs-3">Arealdy Read: 99 / 100 <span class="text-success">(99.00%)</span></p>
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


  onMounted(() => {
const localStorageValue = ref('')
localStorageValue.value = localStorage.getItem('course_id')
if(localStorageValue.value == null){
  router.push("/course");
}
    });
const auth = useAuthStore();
const router = useRouter();
const store = CoursePostStore()
store.user_id = auth.user_id;

 setTimeout(() => Swal.close(), 500);

 const GotoPage = async (e) => {
    router.push(e);
 }

  </script>
  