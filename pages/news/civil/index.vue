<template>
  <div>

        <div class="blogarea__2 sp_top_100 sp_bottom_100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="blog__content__wraper__2" data-aos="fade-up" v-for="(item, index) in store.newscivil" :key="item.news_id">
                            <div class="blogarae__img__2">
                                <img src="../../../assets/img/blog/blog_6.png" alt="blog">
                            
                            </div>
                            <div class="blogarea__text__wraper__2">
                                <div class="blogarea__heading__2">
                                    <h3><a href="blog-details.html">{{item.news_title}}</a></h3>
                                </div>
                                <div class="blogarea__list__2">
                                    <ul>
                                        <li>
                                            <a href="blog-details.html">
                                                <i class="icofont-business-man-alt-2"></i> Mirnsdo.H
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">
                                                <i class="icofont-speech-comments"></i> 0 Comments
                                            </a>
                                        </li>

                                        <li>
                                            <a href="blog-details.html">
                                                <i class="icofont-eraser-alt"></i> Association
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div class="blogarea__paragraph">
                                    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of On the other hand, organizations have the need for integrating in IT departments</p>
                                </div>
                                <div class="blogarea__button__2">
                                    <a href="blog-details.html">READ MORE
                                <i class="icofont-double-right"></i>
                            </a>
                                    <a href="#">
                                        <div class="blogarea__icon__2">
                                            <i class="icofont-share"></i>
                                            <i class="icofont-heart"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>


                        </div>
                      

              

                        <div class="main__pagination__wrapper" data-aos="fade-up">
                            <ul class="main__page__pagination">
                                <li><a class="disable" href="#"><i class="icofont-double-left"></i></a></li>
                                <li><a class="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i class="icofont-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

                        <div class="blogsidebar__content__wraper__2" data-aos="fade-up">

                            <h4 class="sidebar__title">categories</h4>
                            <ul class="categorie__list">
                                <li>
                                    <NuxtLink to="/news/civil">Civil Set     <span>03</span></NuxtLink>
                                </li>
                                <li> 
                                  <NuxtLink to="/news/transport">Transport Set     <span>03</span></NuxtLink>
                              </li>
                            </ul>

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
import { useRoute } from "vue-router";
import  ApiService  from '@/services/api.service';
const store = newsPostStore()
const { getisActiveNews } = storeToRefs(store);
const { getselectNews } = storeToRefs(store);

const { FetchNesTrans } = newsPostStore();//Action
const { toggleActiveClassselect } = newsPostStore();

await store.FetchNesTrans();
await store.FetchNesCivil();

const route = useRoute();



function image(i) {
  let im =  ApiService.image(i);
  return im;
}


</script>
<style scoped></style>