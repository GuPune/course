<template>
  <div style="background-color: var(--dotColor)">
    <div class="container py-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="breadcrumb__content__wraper" data-aos="fade-up">
            <div class="breadcrumb__title">
              <h3 class="heading">Update Account Detail</h3>
            </div>
            <div class="breadcrumb__inner">
              <ul>
                <li>
                  <a href="#">{{ $t("home") }}</a>
                </li>
                <li>{{ $t("page_appoint") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-sm py-3 py-md-4 py-lg-5 appcontent">
    <div class="loginarea__wraper pt-1 pb-3">
      <form action="#">
        <div class="row">
          <div class="col-xl-2">
            <div class="login__form">
              <label class="form__label">{{ $t("form_name_title") }}</label>
              <select
                class="common__login__input px-2"
                aria-label="Default select example"
              >
                <option selected :value="null" disabled>
                  {{ $t("choose") }}
                </option>
                <option value="ທ້າວ">{{ $t("than") }}</option>
                <option value="ນາງ">{{ $t("nang") }}</option>
              </select>
            </div>
          </div>
          <div class="col-xl-5">
            <div class="login__form">
              <label class="form__label">{{ $t("fname") }}</label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('fname')"
                maxlength="20"
              />
            </div>
          </div>
          <div class="col-xl-5">
            <div class="login__form">
              <label class="form__label">{{ $t("lname") }}</label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('lname')"
                maxlength="20"
              />
            </div>
          </div>
          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("full_name_update_acc_label") }}
              </label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('full_name_update_acc_pehol')"
              />
            </div>
          </div>

          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("passport_update_acc_label") }}
              </label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('passport_update_acc_pehol')"
              />
            </div>
          </div>

          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("exp_update_acc_label") }}
              </label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('exp_update_acc_pehol')"
              />
            </div>
          </div>

          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("bird_update_acc_label") }}
              </label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('bird_update_acc_pehol')"
              />
            </div>
          </div>

          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("add_update_acc_label") }}
              </label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('add_update_acc_pehol')"
              />
            </div>
          </div>

          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label"
                >{{ $t("home_update_acc_label") }}
              </label>
              <input
                class="common__login__input"
                type="text"
                :placeholder="$t('home_update_acc_pehol')"
              />
            </div>
          </div>

          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label">{{
                $t("prov_update_acc_label")
              }}</label>
              <select
                class="common__login__input px-2"
                aria-label="Default select example"
              >
                <option selected :value="null" disabled>
                  {{ $t("choose") }}
                </option>
                <option value="ທ້າວ">{{ $t("than") }}</option>
                <option value="ນາງ">{{ $t("nang") }}</option>
              </select>
            </div>
          </div>

          <div class="col-xl-12">
            <div class="login__form">
              <label class="form__label">{{
                $t("cou_update_acc_label")
              }}</label>
              <select
                class="common__login__input px-2"
                aria-label="Default select example"
              >
                <option selected :value="null" disabled>
                  {{ $t("choose") }}
                </option>
                <option value="ທ້າວ">{{ $t("than") }}</option>
                <option value="ນາງ">{{ $t("nang") }}</option>
              </select>
            </div>
          </div>

          <!-- <div class="col-xl-2">
            <div class="login__form">
              <label class="form__label">ຮູບບັດ / Passport</label>
          
            </div>
          </div>

                     <div class="col-xl-3">
            <div class="login__form">
             
              <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
            </div>
          </div>

              
                  <div class="col-xl-6">
            <div class="login__form">
              <label class="form__label">ຮູບຕົວຈິງ</label>
            
            </div>
          </div> -->
        </div>
        <br />
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
              <span>ຮູບບັດ / Passport</span>
               <span style="float: inline-end;"><a href="#" class="btn btn-primary">Browse...</a></span>
               
             
              </div>

                 <div class="card-body">
                 <p class="card-text">
                  ຕ້ອງເປັນຮູບທີ່ແຈ້ງດີ ສາມາດອ່ານຄຳສັບຢູ່ໜ້າບັດໄດ້.
                </p>
               
              </div>


       <div class="card-body">
               <img class="aboutimg__1" src="../../../assets/img/ppt.JPG" alt="aboutimg" style="
    width: 100%;
">
               
              </div>
          
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                 <span>ຮູບຕົວຈິງ</span>
               <span style="float: inline-end;"><a href="#" class="btn btn-primary">Browse...</a></span>
               
              </div>

             <div class="card-body">
                    <p class="card-text">
                  ຖ່າຍຮູບຕົນເອງ ພ້ອມກັບບັດປະຈຳຕົວ / passport. ຮູບຕ້ອງແຈ້ງດີ,
                  ບໍ່ມີຜູ້ອື່ນຢູ່ດ້ານຫຼັງ.
                </p>
               
              </div>
  <div class="card-body">
               <img class="aboutimg__1" src="../../../assets/img/ppt.JPG" alt="aboutimg" style="
    width: 100%;
">
               
              </div>
         
            </div>
          </div>
        </div>

        <div class="login__button" style="text-align: center">
          <button
            type="button"
            class="btn btn-primary"
            style="
              width: 30%;
              background-color: #2ab0e5;
              color: white;
              border: none;
              border-radius: 0px;
            "
          >
            {{ $t("singup_title") }}
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="container">
    <p>
      Note: For information about standard procedure to get driving license,
      please click here:
      <span><a href="" class="text-primary">Driving license prodedure</a></span>
    </p>
  </div>
</template>

<style>
.appcontent {
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