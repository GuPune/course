<template>


<div>
    <div class="course__text__wraper" data-aos="fade-up">
                            <div class="course__text">
                                <p>Showing 1–12 of 54 Results</p>
                            </div>
                            <div class="course__icon">
                                <ul class="nav property__team__tap" id="myTab" role="tablist">
                                    <li class="short__by__new">
                                        <select class="form-select" aria-label="Default select example">
                                                <option selected>Short by New</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                              </select>
                                    </li>
                                </ul>
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
