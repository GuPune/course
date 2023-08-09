<template>
        <div class="abouttabarea sp_bottom_70">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12" data-aos="fade-up">
                        <ul class="nav  about__button__wrap" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="single__tab__link"     :class="{'active': getselectNews === 't'}"  @click="fill('t')" data-bs-toggle="tab" data-bs-target="#projects__one" type="button">กรมข่นส่ง</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="single__tab__link"  :class="{'active': getselectNews === 'c'}"  @click="fill('c')"  data-bs-toggle="tab" data-bs-target="#projects__two" type="button">กรมโยธา</button>
                            </li>
            
                        </ul>
                    </div>



                    <div class="tab-content tab__content__wrapper" id="myTabContent" data-aos="fade-up">

                        <div class="tab-pane fade" id="projects__one"   :class="{'active': getselectNews === 't' , 'show': getselectNews === 't'}"  role="tabpanel" aria-labelledby="projects__one">
                       <div class="col-xl-12">
                                <div class="aboutarea__content__tap__wraper">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12" v-for="(item, index) in store.newstran.slice(0, 4)" :key="item.news_id">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img :src="image(item.news_cover)" alt="event" width="160" height="110" >
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">{{ item.news_title }}</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <NuxtLink  :to="{ name: 'news-transport-id', params: { id: item.news_id } }">อ่านต่อ!<i class="icofont-simple-right"></i></NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                     
                                
                                    </div>


                                </div>

                            </div>
                        </div>

             

                        <div class="tab-pane fade" id="projects__three" :class="{'active': getselectNews === 'c' , 'show': getselectNews === 'c'}" role="tabpanel" aria-labelledby="projects__three">
                            <div class="col-xl-12">
                                <div class="aboutarea__content__tap__wraper">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12" v-for="(civil, index) in store.newscivil.slice(0, 4)" :key="civil.news_id">
                                            <div class="single__event__wraper single__award" data-aos="fade-up">
                                                <div class="eventarea__img">
                                                    <img :src="image(civil.news_cover)" alt="event" width="160" height="110" >
                                                </div>
                                                <div class="eventarea__content__wraper">
                                                    <div class="single__event__heading">
                                                        <h4><a href="event-details.html">{{ civil.news_title }}</a></h4>
                                                    </div>
                                                    <div class="single__event__button">
                                                        <NuxtLink  :to="{ name: 'news-civil-id', params: { id: civil.news_id } }">อ่านต่อ!<i class="icofont-simple-right"></i></NuxtLink>
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
const { getselectNews } = storeToRefs(store);

const { FetchNesTrans } = newsPostStore();//Action
const { toggleActiveClassselect } = newsPostStore();

await store.FetchNesTrans();
await store.FetchNesCivil();



// const toggleActiveClass = async (x) => {

// alert('x');
// };


async function fill(x) {
    const formnew = reactive({
    selectnew: x,
    });
    await toggleActiveClassselect(formnew); 
}

function image(i) {
  var x = null;
  if (i) {
    const usingSplit = i.split(',');
    var x = usingSplit[0];
  } else {
    var x = 'static/upload/2023/7/files-1689561047889.jpg';
  }
  return "http://oasapi.iddriver.com/media_file/file/?f=" + x;
}



</script>