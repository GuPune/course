


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
      <img class=" shape__icon__img shape__icon__img__1" src="img/herobanner/herobanner__1.png" alt="photo">
      <img class=" shape__icon__img shape__icon__img__2" src="img/herobanner/herobanner__2.png" alt="photo">
      <img class=" shape__icon__img shape__icon__img__3" src="img/herobanner/herobanner__3.png" alt="photo">
      <img class=" shape__icon__img shape__icon__img__4" src="img/herobanner/herobanner__5.png" alt="photo">
  </div>
  
  </div>


   <div class="coursearea sp_top_100 sp_bottom_100">
            <div class="container">
                <div class="row">
                   
                    <div class="col-xl-12 col-lg-12">

<div class="blogarae__img__2 course__details__img__2 aos-init aos-animate" data-aos="fade-up">
    <img src="../../assets/img/grid/grid_1.png" alt="blog">

    <div class="registerarea__content course__details__video">
        <div class="registerarea__video">
            <div class="video__pop__btn">
                <a class="video-btn" href="https://www.youtube.com/watch?v=vHdclsdkp28"> <img src="img/icon/video.png" alt=""></a>
            </div>


        </div>
    </div>
</div>

<div class="blog__details__content__wraper">
    <div class="course__button__wraper aos-init aos-animate" data-aos="fade-up">
        <div class="course__button">
            <a href="#">Featured</a>
            <a class="course__2" href="#">Ux Design</a>
        </div>
        <div class="course__date">
            <p>Last Update:<span> Sep 29, 2023</span></p>
        </div>
    </div>
    <div class="course__details__heading aos-init aos-animate" data-aos="fade-up">
        <h3>Making Music with Other People</h3>
    </div>
    <div class="course__details__price aos-init aos-animate" data-aos="fade-up">
        <ul>
            <li>
                <div class="course__price">
                    $32.00 <del>/ $67.00</del>
                </div>
            </li>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur,
            cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interd enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique
        </p>
    </div>

  

    <div class="course__details__tab__wrapper aos-init" data-aos="fade-up">
        <div class="row">
            <div class="col-xl-12">
                <ul class="nav  course__tap__wrap" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="single__tab__link active" data-bs-toggle="tab" data-bs-target="#projects__one" type="button" aria-selected="true" role="tab"> <i class="icofont-book-alt"></i>Description</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__two" type="button" aria-selected="false" tabindex="-1" role="tab"><i class="icofont-paper"></i>Curriculum</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__three" type="button" aria-selected="false" tabindex="-1" role="tab"><i class="icofont-star"></i>Reviews</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__four" type="button" aria-selected="false" tabindex="-1" role="tab"><i class="icofont-teacher"></i>Instructor</button>
                    </li>


                </ul>
            </div>
        </div>
        <div class="tab-content tab__content__wrapper" id="myTabContent">
            <div class="tab-pane fade active show" id="projects__two" role="tabpanel" aria-labelledby="projects__two"  v-for="(x , index) in 5">
                <div class="accordion content__cirriculum__wrap" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  :data-bs-target="'#collapseOne-' + index" aria-expanded="false" aria-controls="collapseOne">
                            Lesson #{{index+1}}
                            </button>
                        </h2>
                        <div  :id="'collapseOne-' + index" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="scc__wrap">
                                    <div class="scc__info">
                                        <i class="icofont-read-book"></i>
                                        <h5> <span>Reading :</span> This is the second item's</h5>
                                    </div>
                                    <div class="scc__meta">
                                        <span class="time"> <i class="icofont-clock-time"></i> 28 minutes</span>
                                        <span class="question">5 Questions</span>
                                    </div>
                                </div>
                                <div class="scc__wrap">
                                    <div class="scc__info">
                                        <i class="icofont-video-alt"></i>
                                        <h5> <span>Video :</span> Lorem ipsum dolor sit amet.</h5>
                                    </div>
                                    <div class="scc__meta">
                                        <span class="time"> <i class="icofont-clock-time"></i> 22 minutes</span>
                                    </div>
                                </div>
                                <div class="scc__wrap">
                                    <div class="scc__info">
                                        <i class="icofont-audio"></i>
                                        <h5> <span>Audio :</span> Lorem ipsum dolor sit amet.</h5>
                                    </div>
                                    <div class="scc__meta">
                                        <span class="time"> <i class="icofont-clock-time"></i> 15 minutes</span>
                                    </div>
                                </div>
                                <div class="scc__wrap">
                                    <div class="scc__info">
                                        <i class="icofont-certificate"></i>
                                        <h5> <span>Certificate :</span> This is most Important</h5>
                                    </div>
                                    <div class="scc__meta">
                                        <span class="time"> <i class="icofont-clock-time"></i> 50 minutes</span>
                                        <span class="question">3 Questions</span>
                                    </div>
                                </div>
                                <div class="scc__wrap">
                                    <div class="scc__info">
                                        <i class="icofont-file-text"></i>
                                        <h5> <span>Lesson 01 Exam :</span></h5>
                                    </div>
                                    <div class="scc__meta">
                                        <span class="question">10 Questions</span>
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


  </script>
  