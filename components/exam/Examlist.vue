<template>
    <div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent">
        <div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }" id="projects__one"
            role="tabpanel" aria-labelledby="projects__one">
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12" data-aos="fade-up" v-for="item in 8">
                    <div class="gridarea__wraper gridarea__wraper__2">
                        <div class="gridarea__img">
                            <a href="course-details.html"><img src="img/grid/grid_1.png" alt="grid"></a>
                        </div>
                        <div class="gridarea__content">
                            <div class="gridarea__list">
                                <ul>
                                    <li>
                                        <i class="icofont-book-alt"></i> 23 Lesson
                                    </li>
                                    <li>
                                        <i class="icofont-clock-time"></i> 1 hr 30 min
                                    </li>
                                </ul>
                            </div>
                            <div class="gridarea__heading">
                                <h3><a href="course-details.html">Foundation course to under stand
                                        about softwere</a></h3>
                            </div>
                            <div class="gridarea__bottom">
                                <button type="button" class="btn btn-primary btn-sm btn-block" style="width: 100%;">
                                    เริ่มต้นทดสอบ</button>
                            </div>
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

const store = ExamPostStore()
const { getisActiveCourse } = storeToRefs(store);

</script>
