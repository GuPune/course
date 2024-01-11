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
                            <!-- <div class="gridarea__small__button">
                        <div class="grid__badge">Data & Tech</div>
                    </div>
                    <div class="gridarea__small__icon">
                        <a href="#"><i class="icofont-heart-alt"></i></a>
                    </div> -->

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
                            <!-- <div class="gridarea__price">
                        $32.00 <del>/ $67.00</del>
                        <span> <del class="del__2">Free</del></span>

                    </div> -->
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
        <div class="tab-pane fade" id="projects__two" role="tabpanel"
            v-bind:class="{ active: !getisActiveCourse, show: !getisActiveCourse }" aria-labelledby="projects__two">
            <div class="gridarea__wraper gridarea__wraper__2 gridarea__course__list" data-aos="fade-up"
                v-for="(item, index ) in store.listcourse" @click="SelectCourse(item)">
                <div class="gridarea__img">
                    <a><img :src="coverimage(item.course_cover)" alt="grid"></a>
                </div>
                <div class="gridarea__content">
                    <div class="gridarea__list">
                        <ul>
                            <li v-if="item.lesson">
                                <i class="icofont-book-alt"></i> {{ item.lesson.length }}
                            </li>
                            <li>
                                <i class="icofont-clock-time"></i> {{ $t("page_course_code") }} {{ item.course_code }}
                            </li>
                        </ul>
                    </div>
                    <div class="gridarea__heading">
                        <h3><a>{{ item.course_name }}
                            </a></h3>
                    </div>
                    <div class="gridarea__price">
                        {{ item.course_description }}

                    </div>
                    <div class="gridarea__bottom">
                        <div class="gridarea__bottom__left">
                            <a>
                                <div class="gridarea__small__img">
                                    <img src="../../assets/img/grid/grid_small_1.jpg" alt="grid">
                                    <div class="gridarea__small__content">
                                        <h6>{{ item.user_create }}</h6>
                                    </div>
                                </div>
                            </a>

                            <!-- <div class="gridarea__star">
                        <i class="icofont-star"></i>
                        <i class="icofont-star"></i>
                        <i class="icofont-star"></i>
                        <i class="icofont-star"></i>
                        <span>(44)</span>
                    </div> -->
                        </div>

                        <div class="gridarea__details">
                            <a>
                                {{ $t("page_course_view_details") }}
                                <i class="icofont-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    </div>

<!-- <div>
 <div class="paginating-container" v-if="store.total_filter > store.limit_page">
      <div class="dataTables_paginate paging_simple_numbers" id="zero-config_paginate">
        <ul class="pagination">
          <li class="paginate_button page-item previous" id="zero-config_previous"  @click="pred()">
          <a href="#" aria-controls="zero-config" data-dt-idx="0" tabindex="0" class="page-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></a></li>
            <li class="paginate_button page-item "  v-for="page in store.total" :key="page">
              <a href="#" aria-controls="zero-config" data-dt-idx="1" tabindex="0" class="page-link" @click="setCurrentPageclick(page)" >
              {{page}}
            </a>
              </li>
            <li class="paginate_button page-item next" id="zero-config_next" @click="next()"><a href="#" aria-controls="zero-config" data-dt-idx="4" tabindex="0" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li></ul></div>
       </div>
    </div> -->

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
let course = await store.fetchCourse();

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

console.log(store.formsearchcourse.page);
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
