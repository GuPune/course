


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
                <img class=" shape__icon__img shape__icon__img__1" src="../../assets/img/herobanner/herobanner__1.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__2" src="../../assets/img/herobanner/herobanner__2.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__3" src="../../assets/img/herobanner/herobanner__3.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__4" src="../../assets/img/herobanner/herobanner__4.png"
                    alt="photo">
            </div>
  
  </div>


   <div class="coursearea sp_top_100 sp_bottom_100">
            <div class="container">
                <div class="row my-4">
                    <p>Courses | attended</p>
                    <div class="d-flex gap-4 justify-content-center">
                        <div class="card" style="width: 18rem;">
                            <img src="../../public/img/course01.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">C :  Cargo truck, total weight from 3,500 to 7,500 kilograms</p>
                                <p class="mb-0">ອ່ານແລ້ວ: 55/150 <span class="text-success">(36.67 %)</span></p>
                                <p class="mb-0">ເຂົ້າເບິ່ງຫຼ້າສູດ: {{ new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() }}</p>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img src="../../public/img/course02.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">B : Car with four-wheels, total weight not exceed 3500kg, not more than 9 seats including driver</p>
                                <p class="mb-0">ອ່ານແລ້ວ: 120/120 <span class="text-success">(100.00 %)</span></p>
                                <p class="mb-0">ເຂົ້າເບິ່ງຫຼ້າສູດ: {{ new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
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


  
  definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});


const auth = useAuthStore();
const profile = await auth.getProfile();

  </script>
  