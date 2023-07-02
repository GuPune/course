<template>
        <div class="abouttabarea sp_bottom_70">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12" data-aos="fade-up">
                        <ul class="nav  about__button__wrap" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="single__tab__link"  v-bind:class="{ active: getisActiveNews }"  @click="store.toggleActiveClass()" data-bs-toggle="tab" data-bs-target="#projects__one" type="button">กรมข่นส่ง {{getisActiveNews}}</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="single__tab__link" v-bind:class="{ active: !getisActiveNews }"  @click="store.toggleActiveClass()" data-bs-toggle="tab" data-bs-target="#projects__two" type="button">กรมโยธา {{getisActiveNews}}</button>
                            </li>
                            <!-- <li class="nav-item" role="presentation">
                                <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__three" type="button">awards</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__four" type="button">education</button>
                            </li> -->


                        </ul>
                    </div>



                    <div class="tab-content tab__content__wrapper" id="myTabContent" data-aos="fade-up">

                        <div class="tab-pane fade" id="projects__one" v-bind:class="{ active: getisActiveNews , show:getisActiveNews }" role="tabpanel" aria-labelledby="projects__one">
                       <div class="col-xl-12">
                                <div class="aboutarea__content__tap__wraper">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-1.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">ทดสอบระบบ กรมขนส่ง</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <a href="event-details.html">ข่าวต่อ <i class="icofont-simple-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-2.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">ทดสอบระบบ กรมขนส่ง</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <a href="event-details.html">ข่าวต่อ <i class="icofont-simple-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-3.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">ทดสอบระบบ กรมขนส่ง</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <a href="event-details.html">ข่าวต่อ<i class="icofont-simple-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-4.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">ทดสอบระบบ กรมขนส่ง</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <a href="event-details.html">ข่าวต่อ<i class="icofont-simple-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

             

                        <div class="tab-pane fade" id="projects__three" v-bind:class="{ active: !getisActiveNews , show:!getisActiveNews }" role="tabpanel" aria-labelledby="projects__three">
                            <div class="col-xl-12">
                                <div class="aboutarea__content__tap__wraper">

                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-1.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">Forging relationships between national</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-2.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">Lorem ipsum dolor sit amet conse ctetur.</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-3.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">Forging relationships between national</a></h4>
                                                    </div>
                                                    <div class="single__event__button">

                                                        <NuxtLink to="/news/civil/1">Read More!<i class="icofont-simple-right"></i></NuxtLink>
                                                        <!-- <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img src="img/about/award-4.jpg" alt="event">
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">Lorem ipsum dolor sit amet conse ctetur.</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
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
import { newsPostStore } from '@/stores/news';

const store = newsPostStore()


const { getisActiveNews } = storeToRefs(store);

</script>