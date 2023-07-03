<template>
    <div>
  
           
        <div class="course__sidebar__wraper" data-aos="fade-up">
                            <div class="categori__wraper">
                                <div class="course__heading">
                                    <h5>Categories</h5>
                                </div>
                                <div class="course__categories__list">
                                    <ul>
                                        <li v-for="item in getCoursecategories" :key="item.id">
                                            <a href="#">
                                                 Mobile Handset
                                                <span>{{item.id}}</span>
                                            </a>
                                        </li>
                                    
                                    </ul>
                                </div>


                            </div>
                        </div>
    </div>
  </template>
  <style scoped>
  
  </style>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';

const store = CoursePostStore()
const { fetchCourse } = store
const { getCoursecategories } = storeToRefs(store);

fetchCourse();

</script>