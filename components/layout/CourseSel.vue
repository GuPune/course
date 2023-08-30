<template>


<div>
    <div class="course__text__wraper" data-aos="fade-up">
                            <div class="course__text">
                                <p>Showing 1–12 of 54 Results</p>
                            </div>
               
                        </div>

</div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';

const store = CoursePostStore()
const { getisActiveCourse } = storeToRefs(store);

</script>
