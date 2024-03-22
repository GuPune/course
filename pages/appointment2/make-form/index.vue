<template>
    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <h3 class="heading">Make Appointments</h3>
              </div>
              <div class="breadcrumb__inner">
                <ul>
                  <li><a href="#">{{ $t("home") }}</a></li>
                  <li>{{ $t("page_appoint") }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-3 py-md-4 py-lg-5 appcontent">
        <section class="d-flex justify-content-center">
            <form action="" class="make-app-form">
                <div class="mb-3">
                    <label for="classType" class="form-label mb-0">Class Type:</label>
                    <select class="form-select" id="classType" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="fname" class="form-label mb-0">Full name: </label>
                    <input type="text" class="form-control" id="fname" placeholder="Enter full name">
                </div>

                <div class="mb-3">
                    <label for="idornumber" class="form-label mb-0">Citizen ID / Passport Number: </label>
                    <input type="text" class="form-control" id="idornumber" placeholder="Enter Citizen ID or Passport Number">
                </div>

                <div class="mb-3">
                    <label for="location" class="form-label mb-0">Location: </label>
                    <input type="text" class="form-control" id="location" placeholder="Enter your location">
                    <p><a href="" class="text-primary" style="font-size: 12px;">Click here for location on Map</a></p>
                </div>
                <hr>
                <p>Please select your preferred time.</p>
                
                <div class="mb-3">
                    <label for="apptime" class="form-label mb-0">Appointment time:</label>
                    <select class="form-select" id="apptime" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div class="d-flex gap-3 justify-content-center">
                    <button class="btn btn-primary"><i class="icofont-double-left"></i> Back</button>
                    <button class="btn btn-success">Submit <i class="icofont-double-right"></i></button>
                </div>
            </form>
        </section>
    </div>
    <div class="container">
        <p>Note: For information about standard procedure to get driving license, please click here: <span><a href="" class="text-primary">Driving license prodedure</a></span></p>
    </div>
</template>
<script lang="ts" setup>

</script>
<style>
    .appcontent{
    min-height: 400px;
    }

    .make-app-form {
        width: 50%;
    }
    @media screen and (max-width: 1199px) {
        .make-app-form {
            width: 70%;
        }
    }
    @media screen and (max-width: 991px) {
        .make-app-form {
            width: 80%;
        }
    }
    @media screen and (max-width: 767px) {
        .make-app-form {
            width: 100%;
        }
    }
</style>