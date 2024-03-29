<template>
    
                   <div class="d-flex gap-4 justify-content-center">
                        <div class="card" style="width: 18rem;"  v-for="(item, index ) in store.history"  :key="page">
                            <img src="../../public/img/course01.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">{{item.course_remark_a}}</p>
                                <p class="mb-0">ອ່ານແລ້ວ:{{item.learned}} / {{item.total_lesson}} <span class="text-success">({{item.progress}}%)</span></p>
                                <p class="mb-0">ເຂົ້າເບິ່ງຫຼ້າສູດ: {{ item.last_date }}</p>
                            </div>
                        </div>
                   
                    </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { CoursePostStore } from '@/stores/course';
import ApiService from '@/services/api.service';

const router = useRouter();
const store = CoursePostStore()
let course = await store.fetchCourse();

const SelectCourse = async (item) => {
    const id = item.course_id;
    router.push({ path: '/course-detail/' + id })
};

const { getisActiveCourse } = storeToRefs(store);

function coverimage(i) {
    let im = ApiService.image(i);
    return im;
}
const setCurrentPageclick = async (page) => {
 await store.setCurrentPage(page)
 await store.fetchCourse()
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


</style>