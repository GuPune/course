<template>

    <div class="row" style="padding-bottom:10px;">
    <div class="col-md-8">
      <div class="course__text">
                            
                                <h4>{{$t('page_course_available_exam')}}</h4>
                            </div>
    </div>
    <div class="col-md-2">
      <div class="course__text">
        <input type="text" :placeholder="$t('search_course_placeholder')" class="form-control" >
                            </div>
    </div>
    <div class="col-md-2">
      <div class="course__text">
        <select class="form-select" aria-label="Default select example" >
                                            <option  value="5" selected="">5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                          </select>
                            </div>
    </div>
  </div>
    <div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent">
        <div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }" id="projects__one"
            role="tabpanel" aria-labelledby="projects__one">
            <div class="row">

           
            </div>

        </div>

            <div class="gridarea__wraper gridarea__wraper__1 gridarea__course__list" data-aos="fade-up" v-for="(item, index ) in store.listexam" 
            >
                <div class="gridarea__img xdg">
                     <span  @click="SelectCourse(item)" class="cursor-pointer">
                     <img :src="coverimage(item.em_cover)" alt="grid"></span>
                </div>
                <div class="gridarea__content cxf">
                    <div class="gridarea__heading"  >
                        <span @click="SelectCourse(item)" class="forsg">
                  
                        {{item.dlt_code}} - {{ locale=='la' ? item.em_name_lo : item.em_name_eng}}
                        </span>
                    </div>
                    <div class="gridarea__price">
                     
                        <p class="fw-bold mb-0"> {{ $t("exam_if_me1") }} {{ item.total_question }} {{ $t("exam_if_me2") }} {{ item.em_time }} {{ $t("exam_if_me3") }} {{ item.em_measure }} {{ $t("exam_if_me4") }} </p>
                        <p class="mb-0">  </p>
                    </div>
                    <div class="gridarea__bottom">
                                <button type="button" class="btn btn-primary btn-sm btn-block bt-svt-all" @click="GotoExam(item)">
                                    {{ $t("page_exam_bt") }} </button>
                            </div>
         
                </div>
            </div>



    </div>

    


    <!-- <div class="main__pagination__wrapper" data-aos="fade-up"  v-if="store.total_filter > store.limit_page">
                            <ul class="main__page__pagination">
                                <li >Page : </li>
                                <li @click="pred()"><a href="#"><i class="icofont-double-left"></i></a></li>
                                <li  v-for="page in store.total_page" :key="page"  @click="setCurrentPageclick(page)">
                                    <a class="active" href="#" v-if="store.formsearchcourse.page == page">{{page}}
                                    </a>
                                    <a  href="#" v-else>{{page}}
                                    </a>
                                </li>
                            
                                <li  @click="next()"><a href="#"><i class="icofont-double-right"></i></a></li>
                            </ul>
                        </div> -->
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { ExamPostStore } from '@/stores/exam';
import ApiService from '@/services/api.service';
import Swal from "sweetalert2";
const router = useRouter();

const store = ExamPostStore()
const storeTest = ExamTestPostStore()
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();



const SelectCourse = async (item) => {
         Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });


    const id = item.course_id;
    router.push({ path: '/course-detail/' + id })
     setTimeout(() => Swal.close(), 500);
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

const { getisActiveCourse } = storeToRefs(store);

function coverimage(i) {
    let im = ApiService.image(i);
    return im;
}
const setCurrentPageclick = async (page) => {
 await store.setCurrentPage(page)
 await store.fetchCourse()
};

const next = async () => {
    if(store.total_page != store.formsearchcourse.page){
        store.formsearchcourse.page = store.formsearchcourse.page + 1
await store.fetchCourse()
    }


 };

 const pred = async () => {
// store.formsearchcourse.page = store.formsearchcourse.page - 1
//await store.fetchCourse()

if(store.formsearchcourse.page != 1){
    store.formsearchcourse.page = store.formsearchcourse.page - 1
    await store.fetchCourse()
}
 };



</script>

<style scoped>


@media screen and (max-width: 767px) {
    .detailBtn {
        width: 100%;
    }   
    .bt-svt-all {
    width: 100%;
    }

.xdg {
  width: 100%!important;
   height:100%!important;
}
}


@media only screen and (min-width: 992px) {
    .xdg {
  width: 140px!important;
   height:140px!important;
}

}

@media only screen and (min-width: 1200px) {
    .xdg {
  width: 140px!important;
   height:140px!important;
}
}





.cxf {
width: 100%!important;
}

.forsg{
    font-weight: bold;
    font-size: clamp(1rem, 1.8vw, 2rem); /* Responsive font size with limits */
}


</style>