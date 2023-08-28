


<template>
    <div>
      <div class="breadcrumbarea">
  
  <div class="container">
      <div class="row">
          <div class="col-xl-12">
              <div class="breadcrumb__content__wraper" data-aos="fade-up">
                  <div class="breadcrumb__title">
                      <h2 class="heading">Featured Courses</h2>
                  </div>
                  <div class="breadcrumb__inner">
                      <ul>
                          <li><a href="index.html">Home</a></li>
                          <li> Featured Course</li>
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
                <div class="row">
                    <div class="col-xl-12">
             <CourseSel></CourseSel>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <CourseAll></CourseAll>
                        <!-- <div class="main__pagination__wrapper" data-aos="fade-up">
                            <ul class="main__page__pagination">
                                <li><a class="disable" href="#"><i class="icofont-double-left"></i></a></li>
                                <li><a class="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i class="icofont-double-right"></i></a></li>
                            </ul>
                        </div> -->
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
  middleware: 'guest' // this should match the name of the file inside the middleware directory 
})

  </script>
  