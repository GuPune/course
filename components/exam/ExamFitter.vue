<template>


<div>
    <div class="course__text__wraper aos-init aos-animate" data-aos="fade-up" >
                            <div class="course__text">
                                <p>{{ $t("page_course_view_show") }} : {{store.total_filter}} </p>
                            </div>
                            <div class="course__icon">
                                <ul class="nav property__team__tap" id="myTab" role="tablist">
                                   
                                    <li class="short__by__new">
                                <input type="text" placeholder="ຫຼັກສູດຄົ້ນຫາ"  @keyup="searchData" v-model="store.formsearchcourse.search" >
                                    </li>
                                </ul>
                            </div>
                        </div>


</div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { ExamPostStore } from '@/stores/exam';
const store = ExamPostStore()

const searchData = async () => {
    store.formsearchcourse.page = 1
  await store.fetchExam()
};

</script>
