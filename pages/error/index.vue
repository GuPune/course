




<template>
  <div>
       <div class="errorarea sp_top_100 sp_bottom_100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-10 col-sm-12 col-12 m-auto">
                        <div class="errorarea__inner" data-aos="fade-up">
                            <div class="error__img">
                                <img src="../../assets/img/icon/error__1.png" alt="error">
                            </div>
                            <div class="error__text">
                                <h3>Oops... It looks like you ‘re lost !</h3>
                                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted</p>
                            </div>
                            <div class="error__button">
                                <a class="default__button" href="#">Back To Home
                                <i class="icofont-simple-right"></i>
                            </a>
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
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    width: 50%;
  }
  
  button {
    margin-top: 10px;
  }
  
  </style>