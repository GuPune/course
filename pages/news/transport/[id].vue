<template>
    <div>

        <div class="breadcrumbarea">

            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb__content__wraper" data-aos="fade-up">
                            <div class="breadcrumb__title">
                                <h2 class="heading">ข่าวสาร</h2>
                            </div>
                            <div class="breadcrumb__inner">
                                <ul>
                                    <li><a href="index.html">ข่าวสาร</a></li>
                                    <li>กรมขนส่ง</li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div class="shape__icon__2">
                <img class=" shape__icon__img shape__icon__img__1" src="../../../assets/img/herobanner/herobanner__1.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__2" src="../../../assets/img/herobanner/herobanner__2.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__3" src="../../../assets/img/herobanner/herobanner__3.png"
                    alt="photo">
                <img class=" shape__icon__img shape__icon__img__4" src="../../../assets/img/herobanner/herobanner__5.png"
                    alt="photo">
            </div>

        </div>

        <div class="blogarea__2 sp_top_100 sp_bottom_100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="blog__details__content__wraper">
                            <div class="blog__details__img" data-aos="fade-up">
                                <img src="../../../assets/img/blog/blog_21.png" alt="blog">
                            </div>
                            <div class="blog__details__content">
                                <div class="blog__details__heading" data-aos="fade-up">
                                    <h5>{{ store.newstranone.news_title }}</h5>
                                </div>


                                <p class="content__7" data-aos="fade-up">

                                    {{ store.newstranone.news_description }}
                                </p>


                            </div>

                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

                        <div class="blogsidebar__content__wraper__2" data-aos="fade-up">

                            <h4 class="sidebar__title">Categories</h4>
                            <ul class="categorie__list">
                                <li>
                                    <NuxtLink to="/news/transport">Transport Set<span>{{ store.newstranscount }}</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/news/civil">Civil Set <span>{{ store.newscivilcount }}</span></NuxtLink>
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
const router = useRouter();
const route = useRoute();
const { getisActiveNews } = storeToRefs(store);
const { getselectNews } = storeToRefs(store);

const { FetchNesTrans } = newsPostStore();//Action
const { FetchNewTransId } = newsPostStore();//Action
const { toggleActiveClassselect } = newsPostStore();

await store.FetchNesTrans();
await store.FetchNesCivil();
await store.FetchNewTransId(route.params.id);




async function fill(x) {
    const formnew = reactive({
        selectnew: x,
    });
    await toggleActiveClassselect(formnew);
}

function image(i) {
  let im =  ApiService.image(i);
  return im;
}



</script>
<style scoped></style>