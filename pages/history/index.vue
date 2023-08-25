




<template>
  <div>
    <div class="breadcrumbarea">

<div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
                <div class="breadcrumb__title">
                    <h2 class="heading">History</h2>
                </div>
                <div class="breadcrumb__inner">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>History Exam</li>
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
                    <History></History>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                    
           
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
import History from '@/components/history/Historylist.vue';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { HistoryStore } from '@/stores/history';
import { useRoute } from "vue-router";
const route = useRoute();
const store = HistoryStore()

await store.fetchExam()
await store.CheckHistory()

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