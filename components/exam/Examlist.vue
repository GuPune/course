<template>
    <div class="course__text__wraper aos-init aos-animate" data-aos="fade-up" >
                            <div class="course__text">
                                <p>{{ $t("page_course_view_show") }} :  {{store.total_filter}} </p>
                            </div>
                            <div class="course__icon">
                                <ul class="nav property__team__tap" id="myTab" role="tablist">
                                   
                                    <li class="short__by__new">
                                <input type="text" :placeholder="$t('search_course_placeholder')"  @keyup="searchData" v-model="store.formsearchcourse.search" >
                                    </li>
                                </ul>
                            </div>
                        </div>
    <div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent">
        <div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }" id="projects__one"
            role="tabpanel" aria-labelledby="projects__one">
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12" data-aos="fade-up" v-for="item in store.listexam">
                    <div class="gridarea__wraper gridarea__wraper__2">
                        <div class="gridarea__img">
                            <a><img  :src="image(item.em_cover)" alt="grid"></a>
                        </div>
                        <div class="gridarea__content">
                            <div class="gridarea__list">
                                <ul>
                                    <li>
                                        <i class="icofont-book-alt"></i> {{ item.total_question }} {{ $t('page_exam_report_cho') }} 
                                    </li>
                                    <li>
                                        <i class="icofont-clock-time"></i>   -
                                        {{ item.em_time }}
                                    </li>
                                </ul>
                            </div>
                            <div class="gridarea__heading">
                                <h3><a>
                                    {{ locale=='la' ? item.em_name_lo : item.em_name_eng}}

                                </a></h3>
                            </div>
                          
                            <div class="gridarea__bottom">
                                <button type="button" class="btn btn-primary btn-sm btn-block" style="width: 100%;" @click="GotoExam(item)">
                                    {{ $t("page_exam_bt") }}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

                     <div class="main__pagination__wrapper" data-aos="fade-up"  v-if="store.total_page > 1">
                            <ul class="main__page__pagination">
                                <li @click="pred()"><a href="#"><i class="icofont-double-left"></i></a></li>
                                <li  v-for="page in store.total_page" :key="page"  @click="setCurrentPageclick(page)">
                                    <a class="active" href="#" v-if="store.formsearchcourse.page == page">{{page}}
                                    </a>
                                    <a  href="#" v-else>{{page}}
                                    </a>
                                </li>
                            
                                <li  @click="next()"><a href="#"><i class="icofont-double-right"></i></a></li>
                            </ul>
                        </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';
  import { ExamTestPostStore } from '@/stores/examtest';
import  ApiService  from '@/services/api.service';
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const router = useRouter();
const store = ExamPostStore()
const storeTest = ExamTestPostStore()
const { getisActiveCourse } = storeToRefs(store);

const searchData = async () => {
    store.formsearchcourse.page = 1
  await store.fetchExam()
 // await store.fetchExamList()
};
const GotoExam = async (item) => {

//    console.log(item);
// if(item.total_exam == 0){
//     Swal.fire({
//         title: 'ບໍ່ມີການສອບເສັງ!',
//         text: 'ລໍຖ້າພະນັກງານເພີ່ມເຕີມ!',
//         icon: 'error',
//       });

// }else {
//     await store.ind == 0;
// storeTest.ind = 0;

//  router.push({ name: 'examquestions-id', params: { id: item.em_id }});



 
// }


await store.ind == 0;
storeTest.ind = 0;

router.push({ name: 'examquestions-id', params: { id: item.em_id }});

};
function image(i) {
 let im =  ApiService.image(i);

  return im;
}


const setCurrentPageclick = async (page) => {
 await store.setCurrentPage(page)
 await store.fetchExam()
 //await store.fetchExamList()
};

const next = async () => {
    if(store.total_page != store.formsearchcourse.page){
        store.formsearchcourse.page = store.formsearchcourse.page + 1
await store.fetchExam()
//await store.fetchExamList()
    }


 };

 const pred = async () => {
if(store.formsearchcourse.page != 1){
    store.formsearchcourse.page = store.formsearchcourse.page - 1
    await store.fetchExam()
   // await store.fetchExamList()
}
 };
</script>

 <style>
 .gridarea__img{
    height: 300px;
 }
 .gridarea__img img {
    object-fit: cover;
    height: 300px;
    width: 100%;
 }
</style>