<template>
  <!-- .contact__section__end -->


  <!-- contact__form__start -->
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner" v-if="store.mydtla.length > 0">
            <div class="row">
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="contact__form__heading text-center">
                  <h3>ใบอนุญาตขับรถ</h3>
                  <!-- <p>Your email address will not be published. Required fields are marked * </p> -->
                </div>
                <div class="blogsidebar__content__wraper__2">
                  <h4 class="sidebar__title">ประเภทใบขับขี่</h4>
                  <ul class="categorie__list">
                    <li   v-for="(item, index) in store.mydtla" :key="item.dlt_code"  @click="SelectDtl(index)">
                      <div class="row typecard">
                        <div class="col-2" id="type"><a>{{item.dlt_code}}</a></div>
                        <div class="col-10" id="typedes"><a>{{item.dlt_description}}</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="blog__details__content__wraper">
                  <div class="blog__details__img aos-init aos-animate" v-if="store.formdtl.front_img">
                  <!-- <img src="img/blog/blog_21.png" alt="blog"> -->
                    <img :src="coverimage(store.formdtl.front_img)" alt="blog">
                
                  </div>
                  <div class="blog__details__content">
                  </div>
                </div>


                <div class="blog__details__content__wraper" v-if="store.formdtl.back_img">
                  <div class="blog__details__img aos-init aos-animate" data-aos="fade-up">
                    <img :src="coverimage(store.formdtl.back_img)" alt="blog">
                  </div>
                  <div class="blog__details__content">
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
import { ref, computed, watch } from 'vue'
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { useAuthStore } from '@/stores/auth';
import ApiService from '@/services/api.service';

const store = useAuthStore();
const router = useRouter();
const profile = await store.getProfile();

const SelectDtl = async (item) => {

store.SelectgetDLT(item)
};

function coverimage(i) {
    let im = ApiService.image(i);
    return im;
}

</script>

<style>
.xt3e5 {
  padding: 30px 50px 10px 10px;
}

.hover-button:hover {
  border: 2px solid #b217b4;
  padding: 5px 40px;
}

.sec-l {
  border-style: groove !important;
  border-color: red !important;

  #choice {
    background-color: #4CAF50;
    color: white;

    #card-index {
      color: white;
    }
  }
}

.sec-choice {
  border-style: groove !important;
  border-color: red !important;

  #answer {
    background-color: #4CAF50;
    color: white;

    #card-index {
      color: white;
    }
  }
}

#answer {
  background-color: #4CAF50;

}

.exma {
  background-color: #5f2ded;
  color: white;
}

.send {
  background-color: #e06512;
  color: white;
}

#choice-container {
  /* border: 2px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}

#choice {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  transition-duration: 0.4s;
  display: flex;
}

#choice:hover {
  background-color: #4CAF50;
  /* Green */
  color: white;

  #card-index {
    color: white;
  }
}

#choice-card {
  padding: 5px;
  border: unset !important;

}


#answer {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice {
  background-color: rgb(247, 247, 247);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger {
  background-color: rgb(227, 52, 21);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

#answer-card {
  padding: 5px;
  border: unset !important;

}
.blogsidebar__content__wraper__2 {
  border-radius: 10px;
  border: unset;
  box-shadow: 1px 1px 10px .5px rgba(0, 0, 0, .1);
}
#type {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0, 0, 0, .2);
}
.typecard:hover > #type{
  border-color:white !important;
}
.typecard {
  border-radius: 25%;
}
#type > a {
  font-size: large;
  font-weight: bold;
  padding: 5px;
  border-radius: 25%;
}

#card-index {
  margin-right: 10px;
}
</style>
