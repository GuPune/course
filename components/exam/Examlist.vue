<template>
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
                                        <i class="icofont-book-alt"></i> {{ item.em_random_amount }}
                                    </li>
                                    <li>
                                        <i class="icofont-clock-time"></i> {{ item.em_time }}
                                    </li>
                                </ul>
                            </div>
                            <div class="gridarea__heading">
                                <h3><a>{{ item.em_name }}</a></h3>
                            </div>
                            <div class="gridarea__bottom">

                                <a>
                                    <div class="gridarea__small__img">
                                        <img src="../../assets/img/grid/grid_small_1.jpg" alt="grid">
                                        <div class="gridarea__small__content">
                                            <h6>{{ item.user_create }}</h6>
                                        </div>
                                    </div>
                                </a>

                                <div class="gridarea__star">
                                    
                                    <span>({{ item.total_question }})</span>
                                </div>
                            </div>
                            <div class="gridarea__bottom">
                                <button type="button" class="btn btn-primary btn-sm btn-block" style="width: 100%;" @click="GotoExam(item.em_id)">
                                    {{ $t("page_exam_bt") }}</button>
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
  import { ExamTestPostStore } from '@/stores/examtest';
import  ApiService  from '@/services/api.service';

const router = useRouter();
const store = ExamPostStore()
const storeTest = ExamTestPostStore()
const { getisActiveCourse } = storeToRefs(store);

await store.fetchExam()

const GotoExam = async (item) => {
    await store.ind == 0;
    storeTest.ind = 0;
    router.push({ name: 'examquestions-id', params: { id: item }});
};
function image(i) {
  let im =  ApiService.image(i);
  return im;
}
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