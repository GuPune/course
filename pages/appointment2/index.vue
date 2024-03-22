<template>
    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <h3 class="heading">Exam Appointments</h3>
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
      <header class="header text-center">
        <h5>Your current appointment to take driving exam:</h5>
      </header>
      <article class="text-center">
        <section>
          <p>You do not have any appointment to take driving exam yet.</p>
        </section>
        <section>
          <button class="btn btn-primary" @click="goToMenu('/appointment2/make')">Add New Appointment</button>
        </section>
      </article>
      <article >
        <section class="px-4 py-3 border my-4">
          <div class="row">
              <div class="col-12 col-md-6">
                <p class="mb-0">02/03/2024 8:00</p>
                <h5><b>Class A - </b> Two-wheels motocycle engine not exceed 125 cc</h5>
                <p class="mb-0">Savannakhet Vehicle and Driving License Unit</p>
                <p class="mb-0"><a href="" class="text-primary"><i class="icofont-google-map"></i> Click here for location on Map</a></p>
                <p>Mr. Somsak Jangdaboud</p>
              </div>
              <div class="col-12 col-md-6">
                <p class="mb-0 text-center">Appointment ID:</p>
                <h2 class="text-center">X83M100</h2>
                <div class="d-flex justify-content-center">
                  <img src="/img/qrcode.png" width="150" alt="">
                </div>
              </div>
          </div>
          <p>Note: Please bring your <b><u>Citizen ID / Passport</u></b>,</p>
        </section>
        <section>
          <h5 class="text-center">Your past appointments:</h5>
          <div class="d-flex justify-content-center">
            <table class="table table-bordered text-center">
              <tbody>
                <tr>
                  <td class="px-2">03/03/2024 8:00</td>
                  <td class="px-2">for Class: A</td>
                  <td class="px-2">@ Savannakhet Appointment</td>
                  <td class="px-2">ID: S32K283</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </div>
    <div class="container">
        <p>Note: For information about standard procedure to get driving license, please click here: <span><a href="" class="text-primary">Driving license prodedure</a></span></p>
    </div>
</template>
<script  setup>
  const router = useRouter();
  const goToMenu = async (meun) => {
    router.push(meun);
  };
</script>
<style>
  .appcontent{
    min-height: 400px;
  }
</style>