<template>
  <div>

    <div class="course__text__wraper aos-init aos-animate" data-aos="fade-up" >
                            <div class="course__text">
                                <p>{{ $t("page_course_view_show") }} {{store.total}} </p>
                            </div>
                            <div class="course__icon">
                                <ul class="nav property__team__tap" id="myTab" role="tablist">
                                   
                                    <li class="short__by__new">
                                <input type="text" placeholder="Search Course" v-model="store.formsearchcourse.search"  @keyup="searchData" >
                                    </li>

                                </ul>
                            </div>
                        </div>
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { CoursePostStore } from "@/stores/course";

const store = CoursePostStore();
const { getisActiveCourse } = storeToRefs(store);

const searchData = async () => {
  await store.fetchCourse()
};
</script>
