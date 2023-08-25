<template>

<div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent">
<div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse , show:getisActiveCourse }" id="projects__one" role="tabpanel" aria-labelledby="projects__one">
    <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12" data-aos="fade-up" v-for="(item, index ) in store.listcourse" @click="SelectCourse(item)">
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
                        <i class="icofont-book-alt"></i> {{item.lesson.length}}
                    </li>
                    <li>
                        <i class="icofont-clock-time"></i> รหัส {{ item.course_code }}
                    </li>
                </ul>
            </div>
                    <div class="gridarea__heading">
                        <h3><a>{{item.course_name}}</a></h3>
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
                                    <h6>{{item.user_create}}</h6>
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
<div class="tab-pane fade" id="projects__two" role="tabpanel" v-bind:class="{ active: !getisActiveCourse , show:!getisActiveCourse }" aria-labelledby="projects__two">
    <div class="gridarea__wraper gridarea__wraper__2 gridarea__course__list" data-aos="fade-up" v-for="(item, index ) in store.listcourse" @click="SelectCourse(item)">
        <div class="gridarea__img">
            <a><img :src="coverimage(item.course_cover)" alt="grid"></a>
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
                    <li  v-if="item.lesson">
                        <i class="icofont-book-alt"></i> {{item.lesson.length}}
                    </li>
                    <li>
                        <i class="icofont-clock-time"></i> รหัส {{ item.course_code }}
                    </li>
                </ul>
            </div>
            <div class="gridarea__heading">
                <h3><a>{{item.course_name}}
                            </a></h3>
            </div>
            <div class="gridarea__price">
                {{item.course_description}}
             
            </div>
            <div class="gridarea__bottom">
                <div class="gridarea__bottom__left">
                    <a>
                        <div class="gridarea__small__img">
                            <img src="../../assets/img/grid/grid_small_1.jpg" alt="grid">
                            <div class="gridarea__small__content">
                                <h6>{{item.user_create}}</h6>
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

                <div class="gridarea__details">
                    <a>ดูรายละเอียดเพิ่มเติม
                                <i class="icofont-arrow-right"></i>
                            </a>
                </div>
            </div>
        </div>
    </div>



</div>


</div>

</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';
import  ApiService  from '@/services/api.service';

const router = useRouter();
const store = CoursePostStore()
let course = await store.fetchCourse();

const SelectCourse = async (item) => {
 const id = item.course_id;
 router.push({ path: '/course-detail/'+id})
};

const { getisActiveCourse } = storeToRefs(store);

function coverimage(i) {
  let im =  ApiService.image(i);
  return im;
}


</script>
