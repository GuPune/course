


<template>
    <div>

   <div class="coursearea">
            <div class="container-xxl">
                <div class="row">
                    <div class="col-xl-12">
                    <!-- <FormExamFitter></FormExamFitter> -->
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                      {{ $route.params.id }}
                        <!-- <FormExamlist></FormExamlist> -->
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
                

<!-- <img src="image_system/navigate.PNG" style='height:100%; width:100%;' /> -->
1. ข้อสอบมีทั้งหมด 50 ข้อ กำหนดเวลาสอบ 60 นาที <br>
2. ข้อสอบจะแสดงทีละข้อโดยผู้เข้าสอบสามารถ <br>
&nbsp;&nbsp;คลิกที่ หน้าตัวเลือกที่ต้องการเลือกเป็นคำตอบ <br>
&nbsp;&nbsp;คลิกที่ปุ่ม ถัดไป เพื่อไปยังข้อสอบข้อถัดไป <br>
&nbsp;&nbsp;คลิกที่ปุ่ม กลับ เพื่อไปยังข้อสอบก่อนหน้า <br>
&nbsp;&nbsp;คลิกที่ปุ่ม สรุป/ส่งคำตอบ เพื่อไปยังหน้าส่งกระดาษคำตอบและเสร็จสิ้นการสอบ <br>
3. การไปยังข้อสอบที่ต้องการทำได้โดย คลิก ที่เลขที่ของข้อที่ต้องการบน Answer Sheet Bar ทางด้านขวามือ <br>
4. ในระหว่างเข้าสอบห้ามมิให้ผู้เข้าสอบกระทำการใดๆ นอกเหนือจากที่กำหนดเอาไว้โดยระบบจะทำการแจ้งเตือน เมื่อตรวจพบว่าผู้เข้าสอบกระทำการใดๆ นอกเหนือจากที่กำหนดไว้ได้แก่ <br>
&nbsp;&nbsp; - การพยายามใช้ Right Click <br>
&nbsp;&nbsp; - การกดปุ่มใดๆ บน Key Board <br>
&nbsp;&nbsp; - การเปิดโปรแกรมอื่นขึ้นมาในระหว่างการสอบ <br>
ทั้งนี้หากระบบตรวจพบการกระทำการใดๆ ที่นอกเหนือที่กำหนดเกินกว่าที่ตั้งไว้ จะถือว่าผู้เข้าสอบได้ทำการทุจริตและจะปรับให้สอบไม่ผ่านทันที <br>
5. หากมีข้อสงสัยใดๆ ในระหว่างการสอบให้ยกมือเพื่อขอสอบถามจากเจ้าหน้าที่คุมสอบเท่านั้น หากผู้เข้าสอบยินยิมรับข้อกำหนดและต้องการเริ่มการสอบให้ทำการ คลิกที่ปุ่ม "ตกลงและเริ่มทำข้อสอบ" ข้างล่างเพื่อเริ่มการสอบ <br>
                </div>
                

            </div>
      </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-remove="task" @click="HideModal()">ปิด</button>
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
  import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { ExamTestPostStore } from '@/stores/examtest';
import { useRoute } from "vue-router";
const route = useRoute();
const store = ExamPostStore()
const { GetopenModal } = storeToRefs(store);



const HideModal = async () => {
store.isActive = false;
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