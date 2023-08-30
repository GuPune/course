


<template>
    <div>
        <div class="breadcrumbarea">

            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb__content__wraper" data-aos="fade-up">
                            <div class="breadcrumb__title">
                                <h2 class="heading">Featured Courses</h2>
                            </div>
                            <div class="breadcrumb__inner">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li> Featured Course</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape__icon__2">
                <img class=" shape__icon__img shape__icon__img__1" src="../../assets/img/herobanner/herobanner__1.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__2" src="../../assets/img/herobanner/herobanner__2.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__3" src="../../assets/img/herobanner/herobanner__3.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__4" src="../../assets/img/herobanner/herobanner__4.png"
                    alt="photo">
            </div>
        </div>
        <div class="coursearea sp_top_100 sp_bottom_100">
            <div class="container">
                <div class="row" v-if="store.course_lesson">
                    <div class="col-xl-12 col-lg-12" v-for="item in store.course_lesson">
                        <div class="blogarae__img__2 course__details__img__2 aos-init aos-animate" data-aos="fade-up">
                            <!-- <img :src="coverimage(item.course_cover)" alt="blog"> -->
                            <img src="https://thainews.prd.go.th/dc/archive/uploads/image/2562/7/21/c4bea27bb8f863efd529523a5d3bae51.jpg"
                                alt="">
                        </div>

                        <div class="blog__details__content__wraper">
                            <div class="course__button__wraper aos-init aos-animate" data-aos="fade-up">
                                <div class="course__button">
                                </div>
                                <div class="course__date">
                                    <p>Last Update:<span> {{ coverttime(item.udp_date) }}</span></p>
                                </div>
                            </div>
                            <div class="course__details__heading aos-init aos-animate" data-aos="fade-up">
                                <h3>{{ item.course_description }}</h3>
                            </div>
                            <div class="course__details__price aos-init aos-animate" data-aos="fade-up">
                                <ul>
                                    <li>
                                        <div class="course__details__date">
                                            <i class="icofont-book-alt"></i> 23 Lesson
                                        </div>
                                    </li>
                                    <li>
                                        <div class="course__star">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <span>(44)</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="course__details__paragraph aos-init aos-animate" data-aos="fade-up">
                                <p>
                                    {{ item.course_description }}
                                </p>
                            </div>



                            <div class="course__details__tab__wrapper aos-init" data-aos="fade-up">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <ul class="nav  course__tap__wrap" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="single__tab__link active" data-bs-toggle="tab"
                                                    data-bs-target="#projects__one" type="button" aria-selected="true"
                                                    role="tab"> <i class="icofont-book-alt"></i>Description</button>
                                            </li>
                                            <!-- <li class="nav-item" role="presentation">
                        <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__two" type="button" aria-selected="false" tabindex="-1" role="tab"><i class="icofont-paper"></i>Curriculum</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__three" type="button" aria-selected="false" tabindex="-1" role="tab"><i class="icofont-star"></i>Reviews</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__four" type="button" aria-selected="false" tabindex="-1" role="tab"><i class="icofont-teacher"></i>Instructor</button>
                    </li> -->


                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-content tab__content__wrapper" id="myTabContent">
                                    <div class="tab-pane fade active show" id="projects__two" role="tabpanel"
                                        aria-labelledby="projects__two" v-for="(x, index) in item.lesson">
                                        <div class="accordion content__cirriculum__wrap" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" :data-bs-target="'#collapseOne-' + index"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                        {{ x.cs_name }} #{{ index + 1 }}
                                                    </button>
                                                </h2>
                                                <div :id="'collapseOne-' + index" class="accordion-collapse collapse"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                                                    <div class="containerxxx"> 
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
</div>

                                                    <div class="row" style="padding: 5px;">
                                                        <div class="col-lg-3">


                                                            <div class="single__expart__teacher">
                                                                <div class="teacher__img">
                                                                    <!-- <img src="../../assets/img/grid/cart1.jpg" alt="author"> -->

                                                                    <img :src="coverimage(x.cs_cover)" alt="Image"
                                                                        style="width: 120px;height:120px ;">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-9 col--30">
                                                            <!-- <div class="single__expart__teacher">
                                                                <div class="teacher__img">
                                                                    <img src="../../assets/img/grid/cart1.jpg" alt="author">
                                                                </div>
                                                            </div> -->

                                                            <div class="author__content" style="margin: 30px 0;">
                                                                <div class="author__name">
                                                                    <h6><a href="#">{{ x.cs_name }} </a></h6>
                                                                    <p>{{ coverttime(x.crt_date) }}</p>

                                                                </div>
                                                                <div class="author__text">
                                                                    <p>{{ x.cs_description }} </p>
                                                                </div>
                                                                <div class="author__text">
                                                                    <p>{{ x.user_create }} </p>
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
                    </div>


                </div>
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
let course_id = await store.fetchCourseId(router.currentRoute.value.params.id);

let youtube = 'https //www.youtube.com/embed/tgbnymz7vqy';

const { getisActiveCourse } = storeToRefs(store);

function coverimage(i) {
    let im = ApiService.image(i);
    return im;
}

function coverttime(date) {
    const datetime = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDatetime = datetime.toLocaleString(undefined, options);
    return formattedDatetime;
}


</script>

<style>
.blogarae__img__2>img {
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
</style>