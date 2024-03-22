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
            <div class="card px-2 shadow">
                <div class="card-body">
                    <p class="card-text fs-5">You have not updated your account detail and verified yet. Please completed the steps before be ble to make appointment.</p>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary">Go to Update Account Detail</button>
                    </div>
                </div>
            </div>
        </section>
        <br>
        <section class="d-flex flex-column align-items-center">
            <div class="d-flex gap-2 w-75">
                <p class="text-nowrap mb-0 align-self-center">Class Type:</p>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="d-flex justify-content-center my-3 w-25">
                <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Next <i class="icofont-double-right"></i></button>
            </div>
        </section>
    </div>
    <div class="container">
        <p>Note: For information about standard procedure to get driving license, please click here: <span><a href="" class="text-primary">Driving license prodedure</a></span></p>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <p class="fs-5">You have not fulfilled requirement to have learned at least 50% of the e-learning lessons yet. please go back to learn first.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="icofont-double-left"></i> Back</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style>
.appcontent{
  min-height: 400px;
}
.card {
    margin: 0px 250px 0px 250px;
}
@media screen and (max-width: 1199px) {
    .card {
        margin: 0px 150px 0px 150px;
    }
}
@media screen and (max-width: 991px) {
    .card {
        margin: 0px 100px 0px 100px;
    }
}
@media screen and (max-width: 767px) {
    .card {
        margin: 0px 0px 0px 0px;
    }
}
</style>