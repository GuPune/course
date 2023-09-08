




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
                        <li><a>Home</a></li>
                        <li>History Appointment</li>
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
                    <HistoryAppList></HistoryAppList>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                  </div>
              </div>
          </div>
      </div>
  </div>


     <div class="modal" v-if="store.popupcancelapp">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-trash-2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <h5 class="modal-title" id="exampleModalLabel">ต้องการจองรายการนี้?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="">
          หากคุณจองรายการนี้ รายการนั้นจะจองซ้ำไม่ได้จนกว่าจะ ยกเลิก
          คุณแน่ใจหรือไม่ว่าต้องการดำเนินการต่อ?
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal" @click="closeModal">
          ปิด
        </button>
        <button type="button" class="btn btn-danger" data-remove="task" @click="confirm">
          ยืนยัน
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
 definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
import HistoryAppList from '@/components/historyappoint/Historylist.vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { AppointmentsStore } from '@/stores/appointment';
import { useRoute } from "vue-router";
const auth = useAuthStore()
const route = useRoute();
const store = AppointmentsStore()

store.user_id = auth.user_id;
store.fetchApppoint()
store.fetchApppointRes();

const closeModal = async () => {
  store.popupcancelapp = false;
};
const confirm = async () => {
  await  store.deleteAppointUser()
  store.popupcancelapp = false;

 await store.fetchApppointRes();
};

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