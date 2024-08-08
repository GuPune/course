<template>
    
                   <div class="row justify-content-center onmou">
                        <div class="col-12 col-sm-6 col-md-3" style="width: 18rem;"  v-for="(item, index ) in store.history"  :key="item.course_id"  @click="SelectCourse(item)">
                            <img :src="coverimage(item.course_cover)"  class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">{{item.course_code}} : {{item.course_name_lo}}</p>
                                <p class="mb-0">ອ່ານແລ້ວ: {{item.learned}}/{{item.total_lesson}} <span class="text-success" >({{item.progress}}%)</span></p>
                                <p class="mb-0">ເຂົ້າເບິ່ງຫຼ້າສູດ: {{ item.last_date }}</p>
                            </div>
                        </div>
                   
                    </div>
                        <div class="main__pagination__wrapper" data-aos="fade-up"  v-if="store.total_page_history > 0">
                            <ul class="main__page__pagination">
                                <li >Page : </li>
                                <li @click="pred()"><a href="#"><i class="icofont-double-left"></i></a></li>
                                <li  v-for="page in store.total_page_history" :key="page"  @click="setCurrentPageclickHis(page)" >
                                    <a class="active" href="#" v-if="store.formsearchcoursestory.page == page">{{page}}
                                    </a>
                                    <a  href="#" v-else>{{page}}
                                    </a>
                                </li>
                                <li  @click="next()"><a href="#"><i class="icofont-double-right"></i></a></li>
                            </ul>
                        </div>

            
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';
import ApiService from '@/services/api.service';
import Swal from "sweetalert2";

const router = useRouter();
const store = CoursePostStore()


const SelectCourse = async (item) => {
      Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
    const id = item.course_id;
    router.push({ path: '/course-detail/' + id })
    setTimeout(() => Swal.close(), 500);
};

const { getisActiveCourse } = storeToRefs(store);

function coverimage(i) {
    let im = ApiService.image(i);
    return im;
}
const setCurrentPageclickHis = async (page) => {
store.formsearchcoursestory.page = page;
 await store.fetchCourseHistory()
};


const next = async () => {
    if(store.total_page != store.formsearchcourse.page){
        store.formsearchcourse.page = store.formsearchcourse.page + 1
await store.fetchCourse()
    }


 };

 const pred = async () => {
if(store.formsearchcourse.page != 1){
    store.formsearchcourse.page = store.formsearchcourse.page - 1
    await store.fetchCourse()
}
 };



</script>

<style>
@media screen and (max-width: 767px) {
    .detailBtn {
        width: 100%;
    }   
}



.onmou {

     cursor: pointer; 
}
</style>