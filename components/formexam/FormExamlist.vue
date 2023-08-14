<template>
    <div class="tab-content tab__content__wrapper with__sidebar__content" id="myTabContent">
        <div class="tab-pane fade" v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }" id="projects__one"
            role="tabpanel" aria-labelledby="projects__one">
            <div class="row">
                <div class="blogarea__2 sp_top_100 sp_bottom_100">

                    <div class="row">
                        <div class="col-xl-8 col-lg-8">
                            <div class="blog__details__content__wraper">
                                <h4 class="sidebar__title aos-init aos-animate" data-aos="fade-up">หลักสูตร : รถยนต์ (อังกฤษ)</h4>
                                <div class="course__details__wraper aos-init aos-animate" data-aos="fade-up">
                                    <ul v-for="(a, x) in 4" @click="choosechoice(x);">
                                        <li>
                                         {{x+1}}.
                                        
                                        </li>
                                        <hr>
                                        <span>No stopping within the cross-hatched lines.</span>
                                        <hr v-if="number % 2 === 0">
                                    </ul>
                                </div>










                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4">
                            <div class="blogsidebar__content__wraper__2 aos-init aos-animate" data-aos="fade-up">
                                <ul class="recent__list">
                                    <li>
                                        <div class="recent__img">
                                            <a href="#">
                                                <img src="../../assets/img/blog/blog_11.png" alt="sidbar">
                                            </a>
                                        </div>
                                        <div class="recent__text">
                                            <div class="recent__date">
                                                <a>ชื่อจริง: ร้อยตรี ครรชิต ชัยกิจ</a>
                                            </div>
                                            <div class="recent__date">
                                                <a>รหัสบัตร ประชาชน: 0812630907</a>
                                            </div>
                                            <div class="recent__date">
                                                <a>สถานะการทำข้อสอบ: ทดลองสอบ</a>
                                            </div>
                                        </div>

                                    </li>


                                </ul>
                                <div class="populer__tag__list">
                                    <ul>
                                        <li style="width: 47%;"><a>วิธีทำ</a></li>
                                        <li style="width: 47%;"><a>สรุป/ส่งคำตอบ</a></li>
                                    </ul>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-6" v-for="(x, index) in 50">
                                        ข้อ {{index+1}}  <del style="color: red;"> {{index+1}} </del>
                                    </div>
                                </div>
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


await store.fetchExam()

function coverimage(i) {
    let result = i.slice(0, 6);
    if (result === 'static') {
        return "http://oasapi.iddriver.com/media_file/file/?f=" + i;
    } else {
        return i;
    }
}

const choosechoice = async (x) => {
    alert(x);
 };
</script>

<style>
.xt3e5 {
    padding: 30px 50px 10px 10px;
}
</style>
