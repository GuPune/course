<template>
    <div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent">
        <div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }" id="projects__one"
            role="tabpanel" aria-labelledby="projects__one">
            <div class="row">

                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12" data-aos="fade-up"
                    v-for="(item, index ) in store.listcourse" @click="SelectCourse(item)">
                    <div class="gridarea__wraper gridarea__wraper__2">
                        <div class="gridarea__img">
                            <a><img :src="coverimage(item.course_cover)" alt="grid" width="340" height="212"></a>
                        </div>
                        <div class="gridarea__content">
                            <div class="gridarea__list">
                                <ul>
                                    <li v-if="item.lesson">
                                        <i class="icofont-book-alt"></i> {{ item.lesson.length }}
                                    </li>
                                    <li>
                                        <i class="icofont-clock-time"></i> {{ $t("page_course_code") }} {{ item.course_code
                                        }}
                                    </li>
                                </ul>
                            </div>
                            <div class="gridarea__heading">
                                <h3><a>
                                    {{ locale=='la' ? item.course_name_lo : item.course_name_eng}}
                                  </a></h3>
                            </div>
           
                            <div class="gridarea__bottom">

                                <a href="instructor-details.html">
                                    <div class="gridarea__small__img">
                                        <img src="../../assets/img/grid/grid_small_1.jpg" alt="grid">
                                        <div class="gridarea__small__content">
                                            <h6>{{ item.user_create }}</h6>
                                        </div>
                                    </div>
                                </a>

                                <div class="gridarea__star">
                                    <i class="icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <span>(44)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

            <div class="gridarea__wraper gridarea__wraper__1 gridarea__course__list" data-aos="fade-up" v-for="(item, index ) in store.listcourse" 
            >
                <div class="gridarea__img">
                     <span  @click="SelectCourse(item)" class="cursor-pointer"><img :src="coverimage(item.course_cover)" alt="grid"></span>
                </div>
                <div class="gridarea__content">
                    <div class="gridarea__heading"  >
                        <h3 @click="SelectCourse(item)" class="cursor-pointer" style="color:var(--themeBlue)">
                        {{item.course_code}} - {{ locale=='la' ? item.course_name_lo : item.course_name_eng}}</h3>
                    </div>
                    <div class="gridarea__price">
                        <p style="font-size:12px">    {{ item.course_description }}</p>
                        <p class="fw-bold mb-0">{{$t('condition_for_theory_exam')}}:</p>
                        <p class="mb-0">   
                            {{ $t("exam_if_me1") }} {{ findexam(item.course_id).total_question }} {{ $t("exam_if_me2") }} {{ ChangeFormate(findexam(item.course_id).em_time) }} {{ $t("exam_if_me3") }} {{ findexam(item.course_id).em_measure }} {{ $t("exam_if_me4") }}

                        </p>
                    </div>
              
                  
                    <div class="gridarea__bottom p-0">
                        <div class="gridarea__bottom__left">
                            <div class="gridarea__star ms-2 pe-2 border-end" style="color: #0AA7FF;">
                                {{$t('num_subject')}}:
                                 {{ item.total_course_group }}
                            </div>
                            <div class="gridarea__star ms-2 pe-2 border-end" v-if="item.total_lesson > -1"  style="color: #0AA7FF;">
                                {{$t('num_lesson')}}:  {{ item.total_lesson }}
                            </div>
                            <div class="gridarea__star ms-2 pe-2 border-end" v-if="item.total_video > -1"  style="color: #0AA7FF;">
                                {{$t('num_video')}}:  {{ item.total_video }}
                            </div>
                        </div>
                        <div class="gridarea__details btn btn-info detailBtn" @click="SelectCourse(item)">
                            <a >
                                {{$t('start_learning')}}
                                <i class="icofont-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



    </div>


    <div class="main__pagination__wrapper" data-aos="fade-up"  v-if="store.total_filter > store.limit_page">
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
                        </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';
import ApiService from '@/services/api.service';
import Swal from "sweetalert2";
const router = useRouter();
const store = CoursePostStore();
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

 const findexam = (id) => {

let sttt = store.exam.find(item => item.course_id === Number(id));
return sttt;
 };

 const ChangeFormate = (item) => {
  const timeParts = item.split(':')
        
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const seconds = parseInt(timeParts[2], 10);
        let timea = hours * 3600 + minutes * 60 + seconds;
    
        
  
        const natee1 = Math.floor((timea) / 60);
  const winatee1 = timea % 60;
  const formattedTime1 = `${String(natee1).padStart(2, '0')}:${String(winatee1).padStart(2, '0')}`;

  
  return formattedTime1;
};


</script>

<style>
@media screen and (max-width: 767px) {
    .detailBtn {
        width: 100%;
    }   
}


</style>