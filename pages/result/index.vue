




<template>
  <div>
    <!-- <div class="breadcrumbarea">

<div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
                <div class="breadcrumb__title">
                    <span style="font-size: 24px;font-weight: 400;"> {{ $t("result") }}</span>
                </div>
                <div class="breadcrumb__inner">
                    <ul>
                        <li><a>{{ $t("home") }}</a></li>
                        <li>{{ $t("result") }}</li>
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

</div> -->


    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                  <span style="font-size: 24px;font-weight: 400;"> {{ $t("result") }}</span>
              </div>
              
              <div class="breadcrumb__inner">
                <!-- <ul>
                  <li><a href="#">{{ $t("home") }}</a></li>
                  <li>{{ $t("result") }}</li>
                </ul> -->
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
                    <Resultlist></Resultlist>
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
import Resultlist from '@/components/result/Resultlist.vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { ResultStore } from '@/stores/result';
import { useRoute } from "vue-router";
const auth = useAuthStore()
const route = useRoute();
const store = ResultStore()

store.user_id = auth.user_id;
await store.fetchDlt()
await store.fetchResult()


</script>
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    width: 50%;
  }
  
  button {
    margin-top: 10px;
  }
  
  </style>