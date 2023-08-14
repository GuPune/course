


<template>
    <div>
      <div class="breadcrumbarea">
  <div class="container">
      <div class="row">
          <div class="col-xl-12">
              <div class="breadcrumb__content__wraper" data-aos="fade-up">
                  <div class="breadcrumb__title">
                      <h2 class="heading">Drive Exam</h2>
                  </div>
                  <div class="breadcrumb__inner">
                      <ul>
                          <li><a href="index.html">Home</a></li>
                          <li>Drive Exam</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="shape__icon__2">
      <img class=" shape__icon__img shape__icon__img__1" src="img/herobanner/herobanner__1.png" alt="photo">
      <img class=" shape__icon__img shape__icon__img__2" src="img/herobanner/herobanner__2.png" alt="photo">
      <img class=" shape__icon__img shape__icon__img__3" src="img/herobanner/herobanner__3.png" alt="photo">
      <img class=" shape__icon__img shape__icon__img__4" src="img/herobanner/herobanner__5.png" alt="photo">
  </div>
  </div>
   <div class="coursearea sp_top_100 sp_bottom_100">
            <div class="container-xxl">
                <div class="row">
                    <div class="col-xl-12">
                    <FormExamFitter></FormExamFitter>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <FormExamlist></FormExamlist>
               
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  <script lang="ts" setup>
  import FormExamlist from '@/components/formexam/FormExamlist.vue';
  import FormExamFitter from '@/components/formexam/FormExamFitter.vue';
  </script>
  