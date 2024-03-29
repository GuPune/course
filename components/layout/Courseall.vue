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
                                <h3><a>{{ item.course_name }}</a></h3>
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

            <div class="gridarea__wraper gridarea__wraper__1 gridarea__course__list" data-aos="fade-up" v-for="(item, index ) in store.listcourse" @click="SelectCourse(item)">
                <div class="gridarea__img">
                     <a><img :src="coverimage(item.course_cover)" alt="grid"></a>
                </div>
                <div class="gridarea__content">
                    <div class="gridarea__heading">
                        <h3><a> {{ item.course_remark_a }}</a></h3>
                    </div>
                    <div class="gridarea__price">
        
                        <p style="font-size:12px">    {{ item.course_description }}</p>
                        <p class="fw-bold mb-0">ເງືອນໄຂສອບເສັງທິດສະດີ:</p>
                        <p class="mb-0">    {{ item.course_remark_b }}</p>
                    </div>
                    <div class="gridarea__bottom p-0">
                        <div class="gridarea__bottom__left">
                            <div class="gridarea__star ms-2 pe-2 border-end">
                                ຈຳນວນໝວດວິຊາ:   5 
                            </div>
                            <div class="gridarea__star ms-2 pe-2 border-end">
                                ຈຳນວນບົດຮຽນ:  150
                            </div>
                            <div class="gridarea__star ms-2 pe-2 border-end">
                                ຈຳນວນ Video:  4
                            </div>
                        </div>
                        <div class="gridarea__details btn btn-info detailBtn" @click="SelectCourse(item)">
                            <a>
                                ເລິ່ມຮຽນ
                                <i class="icofont-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



    </div>


    <div class="main__pagination__wrapper" data-aos="fade-up"  v-if="store.total_filter > store.limit_page">
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
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';
import ApiService from '@/services/api.service';

const router = useRouter();
const store = CoursePostStore()


const SelectCourse = async (item) => {
    const id = item.course_id;
    router.push({ path: '/course-detail/' + id })
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

<style>
@media screen and (max-width: 767px) {
    .detailBtn {
        width: 100%;
    }   
}


</style>