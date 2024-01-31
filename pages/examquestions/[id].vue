


<template>
  <div>

    <div class="coursearea">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xl-12">
            <!-- <FormExamFitter></FormExamFitter> -->
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-12" v-if="store.examination.length > 0">
            <FormExamlist></FormExamlist>
            <AnswerExamlist></AnswerExamlist>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="GetopenModal" class="modal">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">วิธีทำ</h4>
      </div>
      <div class="modal-body">
        <div class="row">

          <div class="col-xs-12">
            {{ $t("page_test1") }}<br>
            {{ $t("page_test2") }}<br>
            {{ $t("page_test3") }} <br>
            {{ $t("page_test4") }} <br>
            {{ $t("page_test5") }} <br>
            {{ $t("page_test6") }}<br>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-remove="task" @click="HideModal()">{{ $t("page_close")
        }}</button>
      </div>
    </div>
  </div>


  <div v-if="GetopenModalStart" class="modal">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">{{ $t("page_exam_t") }}</h4>
      </div>
      <div class="modal-body">
        <div class="row">

          <div class="col-xs-12 howtoText">


            <!-- <img src="image_system/navigate.PNG" style='height:100%; width:100%;' /> -->
            {{ $t("page_test1") }}<br>
            {{ $t("page_test2") }}<br>
            {{ $t("page_test3") }} <br>
            {{ $t("page_test4") }} <br>
            {{ $t("page_test5") }} <br>
            {{ $t("page_test6") }}<br>
          </div>


        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-remove="task" @click="Start()">{{ $t("page_exam_bt") }}</button>
      </div>
    </div>
  </div>


  <div v-if="store.PopupImage" class="modal">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-body">
        <div class="row">
          <div class="col-xs-12 howtoText img-responsive-height">
            <img :src="coverimage(store.image)" width="700" height="400" id="howto-img" />
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-remove="task" @click="closeModal()">{{ $t("page_close")
        }}</button>
      </div>

    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
import FormExamlist from '@/components/formexam/FormExamlist.vue';
import FormExamFitter from '@/components/formexam/FormExamFitter.vue';
import AnswerExamlist from '@/components/formexam/AnswerExamlist.vue';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { ExamTestPostStore } from '@/stores/examtest';
import { ExamPostStore } from '@/stores/exam';
import { useRoute } from "vue-router";
import { onBeforeRouteLeave } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import ApiService from '@/services/api.service';
import Swal from "sweetalert2";

const auth = useAuthStore()
const storeexam = ExamPostStore()
const store = ExamTestPostStore()
const profile = await auth.getProfile();

const { GetopenModal } = storeToRefs(store);
const { GetopenModalStart } = storeToRefs(store);
const route = useRoute();

store.formsearchtest.user_id = auth.user_id
store.updatetest.user_id = auth.user_id
store.updatetime.user_id = auth.user_id

await storeexam.fetchExam()

//await storeexam.CheckDataNull()


let fitter = await store.setECid(route.params.id);

if (fitter == true) {
await store.fetchExamTest();
await store.fetchExamTest();

}

const router = useRouter();
//let start = await store.Start();
// const number = 2; // Define the 'number' property
// const end = await store.End();


await setTimeout(() => {
  store.GetTime();
}, 500)

const HideModal = async () => {
  store.isActive = false;
};

function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}
const closeModal = async () => {
  store.PopupImage = false;
};

const Start = async () => {
  store.isstart = false;
  await setTimeout(() => {
    store.countDownTimer();
  }, 500)

};

const computedProperty = computed(() => {
  return store.timerCount
})

watch(computedProperty, (time) => {   //// countime
  if (time == 0) {

    Same()
  }
})


const Same = async () => {
  let send = await store.sendexam();
  if (send == true) {
    store.fetchExamTest();
  }
};



if (store.exam_complete == 0) {
  store.isstart = true;
}
// ล้างไทเมอร์เมื่อออกจากเส้นทาง
onBeforeRouteLeave((to, from, next) => {
  // store.isstart = true;
  store.clearTimer()
  next();
});

const onPageReload = (event) => {
  // Do whatever you need when the page is about to reload
  store.clearTimer()
  // If you want to warn the user before leaving the page, you can set the returnValue
  // event.returnValue = "Are you sure you want to reload or leave the page?";
}

onMounted(() => {
  window.addEventListener('beforeunload', onPageReload);
});

onUnmounted(() => {
  window.removeEventListener('beforeunload', onPageReload);
});

// onBeforeUnmount(() => {
//   console.log('onBeforeUnmount');
//   stopWatch();
// });


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

@media screen and (max-width : 766px) {
  .modal-content {
    width: 60% !important;
  }
}

@media screen and (max-width : 638px) {
  .howtoText {
    font-size: 14px;
  }
}

@media screen and (max-width : 574px) {
  .modal-content {
    width: 70% !important;
  }
}

@media screen and (max-width : 480px) {
  .modal-content {
    padding: 10px !important;
  }
}

@media screen and (max-width : 407px) {
  .modal-content {
    width: 100% !important;
  }
}

@media screen and (max-width : 373px) {
  .howtoText {
    font-size: 10px;
  }
}

.img-responsive-height {
  display: block;
  /* width: 100%; */
  max-height: 100%
}

#howto-img {
  width: 100%;
  object-fit: cover;
}</style>