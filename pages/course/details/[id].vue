


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

  </div>



   <div class="coursearea sp_top_100 sp_bottom_100">
            <div class="container">
       
                <div class="row">
                    <div class="col-xl-12">
             <CourseSel></CourseSel>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">

                        <CourseAll></CourseAll>

                        <div class="main__pagination__wrapper" data-aos="fade-up">
                            <ul class="main__page__pagination">
                                <li><a class="disable" href="#"><i class="icofont-double-left"></i></a></li>
                                <li><a class="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i class="icofont-double-right"></i></a></li>
                            </ul>
                        </div>
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

  </script>
  