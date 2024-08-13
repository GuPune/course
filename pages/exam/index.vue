


<template>
    <div>


    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                  <span style="font-size: 24px;font-weight: 400;"> {{ $t("page_exam") }}</span>
              </div>
              
              <div class="breadcrumb__inner">
                <!-- <ul>
                  <li><a href="#">{{ $t("home") }}</a></li>
                  <li>{{ $t("page_exam") }}</li>
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
                <ExamHistory></ExamHistory>
                </div>
                <br>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <ExamNew></ExamNew>
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
  import Examlist from '@/components/exam/Examlist.vue';
  import ExamFitter from '@/components/exam/ExamFitter.vue';
  import ExamHistory from '@/components/exam/ExamHistory.vue';

  import ExamNew from '@/components/exam/ExamNew.vue';
   
  import { ExamPostStore } from '@/stores/exam';
  import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
const auth = useAuthStore()


const store = ExamPostStore()
store.user_id = auth.user_id;
await store.Resetfetch()
await store.fetchExam()
await store.HistoryByUserExam()

//await store.fetchExamList()



  const { countDownTimer } = ExamTestPostStore(); //Action
  </script>
  