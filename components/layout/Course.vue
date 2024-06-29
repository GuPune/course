<template>
<div class="gridarea gridarea__2">
    <div class="container">
        <div class="row grid__row">

            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="fade-up">
                <div class="section__title__2">
                    <div class="section__title__button">
                        <div class="default__small__button">Course List</div>
                    </div>
                    <div class="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                        <h2>Perfect Online Course Your Carrer</h2>
                    </div>
                </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12" data-aos="fade-up">
                <div class="gridfilter_nav grid__filter__2 gridFilter">
                    <button class="active" data-filter="*">See All  </button>
                    <button data-filter=".filter1" class="">Data science </button>
                    <button data-filter=".filter2" class="">Engineering </button>
                    <button data-filter=".filter3" class="">Featured </button>
                    <button data-filter=".filter4" class="">Architecture</button>
                </div>
            </div>
        </div>





        <div class="row grid" data-aos="fade-up">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3"  v-for="(item, index) in store.coursecategories" :key="index">
                <div class="gridarea__wraper" @click="SelectCourse(index)">
                    <div class="gridarea__img">
                        <a>
                            <img :src="image(item.course_cover)" alt="grid"></a>
                        <div class="gridarea__small__button">
                            <!-- <div class="grid__badge">Data & Tech</div> -->
                        </div>
                        <div class="gridarea__small__icon">
                            <!-- <a href="#"><i class="icofont-heart-alt"></i></a> -->
                        </div>

                    </div>
                    <div class="gridarea__content">
                        <div class="gridarea__list">
                          
                        </div>
                        <div class="gridarea__heading">
                            <h3><a>

                                {{ locale=='la' ? item.course_name_lo : item.course_name_eng}}
                            </a></h3>
                        </div>
                     
                        <div class="gridarea__bottom">
                            <a>
                                <div class="gridarea__small__img">
                                    <img :src="image(item.course_cover)" alt="grid">
                                    <div class="gridarea__small__content">
                                        <h6>{{ item.user_create }}</h6>
                                    </div>
                                </div>
                            </a>

                         
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</div>
</template>


<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course'; // import the auth store we just created
import  ApiService  from '@/services/api.service';
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
const store = CoursePostStore()
store.fetchCourse()


const SelectCourse = async (id) => {
 alert(id);
};

function image(i) {
  let im =  ApiService.image(i);
  return im;
}

</script>