


<template>
  <div>
    <div class="breadcrumbarea">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <h2 class="heading">{{ $t("page_course") }}</h2>
              </div>
              <div class="breadcrumb__inner">
                <ul>
                  <li>
                    <a>{{ $t("home") }}</a>
                  </li>
                  <li>{{ $t("page_course") }}</li>
                </ul>
              </div>
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
              <div class="course__date">
                <p>
                  {{ $t("page_course_last_lesson") }}<span> {{ coverttime(store.course_lesson.udp_date) }}</span>
                </p>
              </div>
            </div>

            <div
              class="aos-init aos-animate"
              data-aos="fade-up"
            >
              <h3>{{ store.course_lesson.course_name }}</h3>
            </div>

            <div
              class="course__details__paragraph aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="mb-0">{{ store.course_lesson.course_description }}</p>
              <p class="fw-bold mb-0">ເງືອນໄຂສອບເສັງທິດສະດີ:</p>
              <p>ມີ 20 ຄຳຖາມ ກຳນົດເວລາ 20 ນາທີ, ຕ້ອງຕອບຖືກຢ່າງນ້ອຍ 17 ຂໍ້</p>
              <table class="my-3">
                <thead>
                  <tr>
                    <th class="px-2">ໝວດວິຊາ</th>
                    <th class="px-2">ຈຳນວນບົດຮຽນ</th>
                    <th class="px-2">ຈຳນວນ ຄຳຖາມເສັງ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ກົດຈະລາຈອນ</td>
                    <td class="text-center">30</td>
                    <td class="text-center">6</td>
                  </tr>
                  <tr>
                    <td>ປ້າຍສັນຍານ ແລະ ເຄື່ອງໝາຍການຈະລາຈອນ</td>
                    <td class="text-center">50</td>
                    <td class="text-center">8</td>
                  </tr>
                  <tr>
                    <td>ເຕັກນິກການຂັບຂີ່</td>
                    <td class="text-center">30</td>
                    <td class="text-center">2</td>
                  </tr>
                  <tr>
                    <td>ຄຸນສົມບັດ ແລະ ມາລະຍາດການຂັບຂ</td>
                    <td class="text-center">20</td>
                    <td class="text-center">2</td>
                  </tr>
                  <tr>
                    <td>ການປະຖົມພະຍາບານຜູ້ບາດເຈັບ</td>
                    <td class="text-center">20</td>
                    <td class="text-center">2</td>
                  </tr>
                  <tr class="border-top border-black">
                    <td></td>
                    <td class="text-center">150</td>
                    <td class="text-center">20</td>
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
              <p class="mb-0">ອ່ານແລ້ວ: {{store.learned}} / {{store.total_lesson}}  <span class="text-success">({{store.progress}}%)</span></p>
              <p class="mb-0">ເຂົ້າເບິ່ງຫຼ້າສຸດ : 2024-02-01 09:34</p>
              <p class="mb-0">ບົດຮຽນອ່ານຫຼ້າສຸດ : <span style="color:  #0AA7FF;cursor: pointer;">ກ່ອນຈະຊີງຂຶ້ນໜ້າລົດຄັນອື່ນ ຜູ່ຂັບຂີ່ຕ້ອງຄໍານຶງເຖິງຫຍັງແດ່?</span></p>
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

                <h5 class="fw-bold">ໝວດວິຊາ: ກົດຈະລາຈອນ</h5>
                <div 
                  class="tab-pane fade active show px-md-4"
                  id="projects__two"
                  role="tabpanel"
                  aria-labelledby="projects__two"
                  v-for="(x, index) in store.lesson"
                >
          
                  <div
                    class="accordion content__cirriculum__wrap"
                    id="accordionExample"
                  >
                    <div class="accordion-item mb-2">
                      <h2 class="accordion-header" id="headingOne">
                        <button @click="choose(router.currentRoute.value.params.id,index,(store.selectlesson_form_menu_less.page * store.selectlesson_form_menu_less.per_page) - (store.selectlesson_form_menu_less.per_page -  index) +  1)"
                          class="accordion-button collapsed mt-0"
                          type="button"
                        >

                            
                          <div class="d-flex justify-content-between w-100">
                            <div style="color: #0AA7FF;">
                          {{x.cg_name}}
                            </div>
                            <!-- <div>
                              <span v-if="x.studied == true" style="padding: 5px;">  {{ $t("lesson_read") }} </span>
                              <span v-else style="padding: 5px;">  {{ $t("lesson_unread") }}</span>
                            </div>
 -->

                          </div>

                        </button>
                      </h2>
                      <div
                        :id="'collapseOne-' + index"
                        class="accordion-collapse collapse p-4"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                

                        <div class="row" style="padding: 5px">
                          <div
                            class="col-lg-3 d-flex justify-content-center align-items-center"
                          >
                            <div class="single__expart__teacher">
                              <div class="teacher__img mb-0" v-if="x.cs_cover">
                            
                                <img
                                  :src="coverimage(x.cs_cover)"
                                  alt="Image"
                                  style="width: 120px; height: 120px"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-9 col--30">
                            <div
                              class="author__content"
                              style="margin: 30px 0"
                            >
                              <div class="author__text row">
                                <div class="col-lg-3 col-md-4">
                                  <p class="fs-4 fw-bold mb-0">
                                    {{ $t("page_course_last_lesson") }} {{ index + 1 }}
                                  </p>
                                </div>
                                <div class="col-lg-9 col-md-8">
                                  <p class="fs-4 fw-bold mb-0">
                                    <a href="#">{{ x.cs_name }} </a>
                                  </p>
                                </div>
                              </div>
                              <div class="author__text row">
                                <div class="col-lg-3 col-md-4">
                                  <p class="mb-0">{{ $t("page_course_last_description") }}</p>
                                </div>
                                <div class="col-lg-9 col-md-8">
                                  <p class="mb-0">{{ x.cs_description }}</p>
                                </div>
                              </div>
                              <hr />
                              <div class="author__text row">
                                <div class="col-lg-3 col-md-4">
                                  <p class="mb-0">{{ $t("page_course_user_create") }}</p>
                                </div>
                                <div class="col-lg-9 col-md-8">
                                  <p class="mb-0">{{ x.user_create }}</p>
                                </div>
                              </div>
                              <div class="author__text row">
                                <div class="col-lg-3 col-md-4">
                                  <p class="mb-0">{{ $t("page_course_date") }}</p>
                                </div>
                                <div class="col-lg-9 col-md-8">
                                  <p class="mb-0">
                                    {{ coverttime(x.crt_date) }}
                                  </p>
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


              </div>
          


          
              <!-- <div v-else
                    class="accordion content__cirriculum__wrap"
                    id="accordionExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button 
                          class="accordion-button collapsed mt-0"
                          type="button"
                        >

                            
                          <div class="d-flex justify-content-between w-100">
                            <div>
                             No Data
                            </div>
                            
                          </div>

                        </button>
                      </h2>
                    
                    </div>
                  </div> -->
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
import ApiService from "@/services/api.service";
const router = useRouter();
const store = CoursePostStore();

const auth = useAuthStore()
store.user_id = auth.user_id


// let course = await store.fetchCourse();
let course_id = await store.fetchCourseId(router.currentRoute.value.params.id);
let lesson_id = await store.fetchCourseLessId(router.currentRoute.value.params.id);
let progress = await store.progersslesson(router.currentRoute.value.params.id);
let getpdf = await store.getpdflesson(router.currentRoute.value.params.id);

const setCurrentPageLesson = async (page) => {

//  await store.setCurrentPageLessonNew(page)
//  let pagin = await store.paginatedItems();
//  await store.fetchCourseLessId(router.currentRoute.value.params.id)
//   await store.addlessread();
};

const { getisActiveCourse } = storeToRefs(store);

const readpdf = async (e) => {
 let im = ApiService.image(e);
window.open(im, '_blank');
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