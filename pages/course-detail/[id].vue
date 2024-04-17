


<template>
  <div>
    <div class="breadcrumbarea">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <span style="font-size: 24px;">{{ $t("page_course_one") }} : {{ store.course_lesson.course_code }}</span>
              </div>
              <!-- <div class="breadcrumb__inner">
                <ul>
                  <li>
                    <a>{{ $t("home") }}</a>
                  </li>
                  <li>{{ $t("page_course") }}</li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="shape__icon__2">
        <img
          class="shape__icon__img shape__icon__img__1"
          src="../../assets/img/herobanner/herobanner__1.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__2"
          src="../../assets/img/herobanner/herobanner__2.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__3"
          src="../../assets/img/herobanner/herobanner__3.png"
          alt="photo"
        />
        <img
          class="shape__icon__img shape__icon__img__4"
          src="../../assets/img/herobanner/herobanner__4.png"
          alt="photo"
        />
      </div>
    </div>
    <div class="coursearea sp_top_100">
      <div class="container">
        <div class="row" v-if="store.course_lesson">
          <div class="col-xl-4 col-lg-4">
            <div class="blogarae__img__2 course__details__img__2 aos-init aos-animate" data-aos="fade-up">
              <img :src="coverimage(store.course_lesson.course_cover)" alt="blog">
            </div>
          </div>
          <div class="col-xl-8 col-lg-8">
            <div
              class="aos-init aos-animate"
              data-aos="fade-up"
            >
            
            </div>

            <div
              class="aos-init aos-animate"
              data-aos="fade-up"
            >
              <h3>{{ store.course_lesson.course_remark_a }}</h3>
            </div>

            <div
              class="course__details__paragraph aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="mb-0">{{ store.course_lesson.course_description }}</p>
              <p class="fw-bold mb-0">ເງືອນໄຂສອບເສັງທິດສະດີ:</p>
        
              <p>{{ store.course_lesson.course_remark_b }}</p>
              <table class="my-3" v-if="store.condition.length > 0">
                <thead>
                  <tr>
                    <th class="px-2">ໝວດວິຊາ</th>
                    <th class="px-2">ຈຳນວນບົດຮຽນ</th>
                    <th class="px-2">ຈຳນວນ ຄຳຖາມເສັງ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr   v-for="(item, index) in store.condition"
                      :key="item.id">
                    <td>{{item.cg_name}}</td>
                    <td class="text-center">{{item.cc_value_a}}</td>
                    <td class="text-center">{{item.cc_value_b}}</td>
                  </tr>
                  <tr class="border-top border-black">
                    <td></td>
                    <td class="text-center">{{store.lesson_total_all}}</td>
                    <td class="text-center">{{store.lesson_total_in_course}}</td>
                  </tr>
                </tbody>
              </table>

              <div class="d-flex gap-2" v-if="store.pdf.length > 0">
                <p class="mb-0">ເອກະສານແນບ:</p>
                <div  v-for="(item, index) in store.pdf"
                      :key="item.id">
                <i class="icofont-file-pdf"></i><span style="color: #0AA7FF;cursor: pointer;"  @click="readpdf(item.cd_path)" > Download {{ store.item }} </span>
                </div>
               
              </div>
              <p class="mb-0">ອ່ານແລ້ວ: {{store.learned}} / {{store.total_lesson_progress}}  <span class="text-success">({{store.progress}}%)</span></p>
              <p class="mb-0">ເຂົ້າເບິ່ງຫຼ້າສຸດ : {{store.last_date}}</p>
              <p class="mb-0" @click=lastlesson(store.last_course_group,store.last_lesson)>ບົດຮຽນອ່ານຫຼ້າສຸດ : <span style="color:  #0AA7FF;cursor: pointer;">ກ່ອນຈະຊີງຂຶ້ນໜ້າລົດຄັນອື່ນ ຜູ່ຂັບຂີ່ຕ້ອງຄໍານຶງເຖິງຫຍັງແດ່?</span></p>
            </div>
          </div>
        </div>


        <div class="row" v-if="store.course_lesson">
          <div class="blog__details__content__wraper">
            <div
              class="course__details__tab__wrapper aos-init"
              data-aos="fade-up"
            >
              <div class="row">
                <div class="col-xl-12">
                  <ul class="nav course__tap__wrap" id="myTab" role="tablist">
                    <li class="nav-item d-flex gap-2" role="presentation">
                      <button
                        class="single__tab__link active p-2 rounded"
                        data-bs-toggle="tab"
                        data-bs-target="#projects__one"
                        type="button"
                        aria-selected="true"
                        role="tab"
                      >
                        <i class="icofont-book-alt"></i>ບົດຮຽນ
                      </button>
                      <p class="align-self-center mb-0">Note: Click on the lesson title to start reading</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div  v-if="store.lesson.length > 0"  v-for="(y, index) in store.lesson" style="padding: 10px;">

                <div 
                class="tab-content tab__content__wrapper px-md-4 py-3"
                id="myTabContent"
                style="background-color: #F5F5F5;"   
              >

                <h5 class="fw-bold">ໝວດວິຊາ: {{y.cg_name}}</h5>
              
                <div 
                  class="tab-pane fade active show px-md-4"
                  id="projects__two"
                  role="tabpanel"
                  aria-labelledby="projects__two"
                  v-for="(x, index) in y.lessons"
                >
        
                  <div
                    class="accordion content__cirriculum__wrap"
                    id="accordionExample"
                  >
                    <div class="accordion-item mb-2">
                      <h2 class="accordion-header" id="headingOne">
                        <button @click="choose(router.currentRoute.value.params.id,x.cs_id,y.cg_id,index)"
                          class="accordion-button collapsed mt-0"
                          type="button"
                        >
                          <div class="d-flex justify-content-between w-100">
                            <div style="color: #0AA7FF;" :class="{ 'true-class': true }" v-if="x.learning_status == 'true'">
                              {{ index + 1 }}.  {{x.cs_name}}   
                            </div>
                            <div style="color: #0AA7FF;" :class="{ 'true-class': false }"  v-else>
                              {{ index + 1 }}.  {{x.cs_name}}   
                            </div>
                          </div>

                        </button>
                      </h2>
        
                    </div>
                  </div>
                </div>
              </div>


              </div>
          


          
          
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="main__pagination__wrapper" data-aos="fade-up"  v-if="store.selectlesson_form_menu_less.total_page > 1">
                            <ul class="main__page__pagination">
                                <li  v-for="page in store.selectlesson_form_menu_less.total_page" :key="page"  @click="setCurrentPageLesson(page)" >
                                    <a class="active" href="#" v-if="store.selectlesson_form_menu_less.page == page">{{page}}
                                    </a>
                                    <a  href="#" v-else>{{page}}
                                    </a>
                                </li>
                            </ul>
                        </div> -->
  </div>
</template>
<script lang="ts" setup>
    definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { CoursePostStore } from "@/stores/course";
import { LessonStore } from "@/stores/lesson";
import ApiService from "@/services/api.service";
const router = useRouter();
const store = CoursePostStore();
const storelesson = LessonStore();

const auth = useAuthStore()
store.user_id = auth.user_id


// let course = await store.fetchCourse();
let course_id = await store.fetchCourseId(router.currentRoute.value.params.id);
let lesson_id = await store.fetchCourseLessId(router.currentRoute.value.params.id);
let progress = await store.progersslesson(router.currentRoute.value.params.id);
let getpdf = await store.getpdflesson(router.currentRoute.value.params.id);
let condition = await store.getcondition(router.currentRoute.value.params.id);

const setCurrentPageLesson = async (page) => {


};

const { getisActiveCourse } = storeToRefs(store);

const readpdf = async (e) => {
 let im = ApiService.image(e);
window.open(im, '_blank');
}




const lastlesson = async (group,lesson) => {

  
  router.push({
        path: '/course-detail/lesson/' + router.currentRoute.value.params.id,
        query: {
    course_id: router.currentRoute.value.params.id,
    cg_id: group.cg_id,
    cs_id: lesson.cs_id,

  }
      })

}

const choose = async (x,y,z,index) => {
  ////////////////////////////


  storelesson.formlean.cs_id = y
  storelesson.formlean.course_id = x
  storelesson.formlean.user_id = auth.user_id


    router.push({
        path: '/course-detail/lesson/' + x,
        query: {
    course_id: x,
    cg_id: z,
    cs_id: y,
    // เพิ่ม Query String Parameters เพิ่มเติมตามต้องการ
  }
      })

////////////////////////////  insert log
//let updatelog = await storelesson.updateLogCourse();

// if(updatelog == true){
//   router.push({
//         path: '/course-detail/lesson/' + x,
//         query: {
//     course_id: x,
//     cg_id: z,
//     cs_id: y,
//   }
//       })

// }else {

// }

}


function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}

function coverttime(date) {
  const datetime = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDatetime = datetime.toLocaleString(undefined, options);
  return formattedDatetime;
}
</script>

<style>
.blogarae__img__2 > img {
  max-height: 430cm;
  object-fit: cover;
}

.containerxxx {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.true-class {
  /* CSS styles for the 'true-class' */
  color: red;
  font-weight: bold;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.teacher__img > img {
  border-radius: 10%;
}
@media screen and (max-width: 767px) {
  .author__text > div > p {
    text-align: center;
  }
  .author__text {
    margin-bottom: 10px;
  }
}
.accordion-button::after {
  background-image: none;
}
</style>