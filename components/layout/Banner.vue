<template>
    <div>
        <div class="herobannerarea herobannerarea__2">
              <div class="container">
                  <div class="row">
                      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                          <div class="herobannerarea__content__wraper">
                              <div class="herobannerarea__title">
                                  <div class="herobannerarea__small__title">
                                      <!-- <span>Education Solution</span> -->
                                  </div>
                                  <div class="herobannerarea__title__heading__2 herobannerarea__title__heading__3">
                                      <h2>{{ $t("banner") }}</h2>
                                  </div>
                              </div>
  
                              <div class="herobannerarea__text herobannerarea__text__2">
                                  <p>{{ $t("banner1") }} </p>
                              </div>
                              <div class="hreobannerarea__button__2">
                              
                                  <nuxt-link to="/course" class="default__button">{{ $t("courses") }}</nuxt-link>
                        
                                  <nuxt-link to="/exam" class="default__button hreobannerarea__button__3">{{ $t("exam") }}</nuxt-link>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                          <div class="aboutarea__img__2" data-tilt>
                              <img class="aboutimg__1" src="/img/banner.png" alt="aboutimg">
                          </div>
  
                      </div>
                  </div>
              </div>
              <div class="herobannerarea__icon__2">
                  <img class="herobanner__common__img herobanner__img__1" src="/img/herobanner/herobanner__1.png" alt="photo">
                  <img class="herobanner__common__img herobanner__img__2" src="/img/herobanner/herobanner__2.png" alt="photo">
                  <img class="herobanner__common__img herobanner__img__3" src="/img/herobanner/herobanner__3.png" alt="photo">
                  <img class="herobanner__common__img herobanner__img__4" src="/img/herobanner/herobanner__4.png" alt="photo">
                  <img class="herobanner__common__img herobanner__img__5" src="/img/herobanner/herobanner__5.png" alt="photo">
              </div>
          </div>
     
    </div>
</template>