


<template>
    <div>
    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                  <span style="font-size: 24px;font-weight: 400;"> {{ $t("page_course") }}</span>
              </div>
              
              <div class="breadcrumb__inner">
                <!-- <ul>
                  <li><a href="#">{{ $t("home") }}</a></li>
                  <li>{{ $t("page_course") }}</li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div>
            <div class="container">

                <div class="row my-4">
                    <p style="font-size:20px">{{ $t("page_course_attended") }}</p>
                 
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <HistoryCourse></HistoryCourse>
                    </div>
                </div>

                <div class="row my-4">
                    <p style="font-size:20px">{{ $t("page_course_available") }}</p>
                    <CourseSel></CourseSel>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <CourseAll></CourseAll>
                    </div>
                </div>
            </div>
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
let profile = await auth.getProfile()

    store.formsearchcourse.page = 1;
    store.formsearchcourse.per_page = 5;
    store.formsearchcourse.search = '';
    store.formsearchcourse.active_include = [1];
let course = await store.fetchCourse();
;
let history = await store.fetchCourseHistory();
let exam = await store.fetchCourseExam();

 setTimeout(() => Swal.close(), 500);

  </script>
  