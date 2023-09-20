


<template>
    <div>
        <div class="breadcrumbarea">

            <div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
                <div class="breadcrumb__title">
                    <h2 class="heading">{{ $t("history") }}</h2>
                </div>
                <div class="breadcrumb__inner">
                    <ul>
                            <li><a>{{ $t("home") }}</a></li>
                        <li>{{ $t("report_exam") }}</li>
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
                    <HistoryUser></HistoryUser>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                    
           
                  </div>
              </div>
          </div>
      </div>
      
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import HistoryUser from '@/components/history/HistoryUser.vue';

definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

</script>
  