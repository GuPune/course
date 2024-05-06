<template>
  <div>
    <div class="course__text__wraper_course" >
    <div class="row">
    <div class="col-md-8">
      <div class="course__text">
                                <p>{{$t('show_x_of_y_result', { x: store.limit_page, y: store.total})}}</p>
                            </div>
    </div>
    <div class="col-md-2">
      <div class="course__text">
        <input type="text" :placeholder="$t('search_course_placeholder')" v-model="store.formsearchcourse.search"  @keyup="searchData" class="form-control" >
                            </div>
    </div>
    <div class="col-md-2">
      <div class="course__text">
        <select class="form-select" aria-label="Default select example" @change="selectshowdata($event)">
                                            <option  value="5" selected="">5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                          </select>
                            </div>
    </div>
  </div>
</div>
    <!-- <div class="course__text__wraper aos-init aos-animate" data-aos="fade-up" >
      <div class="course__text">
                                <p>Showing 1-3 of 54 Results</p>
                            </div>
                            <div class="course__icon">
                                <ul class="nav property__team__tap" id="myTab" role="tablist">
                                   
                                    <li class="short__by__new">
                                <input type="text" placeholder="ຫຼັກສູດຄົ້ນຫາ" v-model="store.formsearchcourse.search"  @keyup="searchData" class="form-control" >
                                    </li>
                                    <li class="short__by__new_course">
                                        <select class="form-select" aria-label="Default select example">
                                            <option  value="5" selected="">5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                          </select>
                                    </li>
                                </ul>
                            </div>
                        </div> -->

                        
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { CoursePostStore } from "@/stores/course";

const store = CoursePostStore();
const { getisActiveCourse } = storeToRefs(store);

const searchData = async () => {
  store.formsearchcourse.page = 1;
  await store.fetchCourse()
};

const selectshowdata = async (ev) => {
  
  store.formsearchcourse.per_page = ev.target.value;
  await store.fetchCourse()
};


</script>

<style scoped>

.short__by__new_course {
    padding-left: 10px;
    padding-right: 10px;
}


.course__text__wraper_course {
    border: 1px solid var(--borderColor);
   
    justify-content: space-between;
    padding: 10px 13px;
    align-items: center;
    margin-bottom: 30px;
}

</style>
