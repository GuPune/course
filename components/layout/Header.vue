<template>
  <div>
    <header>
      <div class="headerarea headerarea__3 header__sticky header__area">
        <div class="container desktop__menu__wrapper">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-6">
              <div class="headerarea__left justify-content-center">
                <div class="headerarea__left__logo" @click="goToMenu('/')">
                  <img src="/img/logo/logo_4.png" alt="logo" width="120" />
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 main_menu_wrap" v-if="authenticated">
              <div class="headerarea__main__menu">
                <nav>
                  <ul>
                    
                    <li @click="goToMenu('/')" >
                      <a class="headerarea__has__dropdown cursor-pointer" href="http://dot-smart.mpwt.gov.la"  target="_blank">
                        <!-- <nuxt-link to="/">{{ $t("home") }}</nuxt-link> -->
                        <!-- <span> {{ $t("home") }} </span> -->
                        <span>{{ $t("news_page") }}</span>
                      </a>
                    </li>
                    <li @click="goToMenu('/course')"  >
                      <a class="headerarea__has__dropdown cursor-pointer">
                        <!-- <nuxt-link to="/course">{{ $t("courses") }}</nuxt-link> -->
                        <span>{{ $t("courses") }}</span>
                      </a>
                    </li>
                    <li @click="goToMenu('/exam')">
                      <a class="headerarea__has__dropdown cursor-pointer">
                        <!-- <nuxt-link to="/exam">{{ $t("exam") }}</nuxt-link> -->
                        <span>{{ $t("theory_test") }}</span>
                      </a>
                    </li>
                    <!-- <li  @click="goToMenu('/appointment')">
                
                      <a class="headerarea__has__dropdown cursor-pointer">
                        
                        <span> {{ $t("appointmentxx") }} </span>
                      </a>
                    </li> -->
                    <li @click="goToMenu('/result')">
                      <a class="headerarea__has__dropdown cursor-pointer">
                    
                        <span> {{ $t("exam_results") }} </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

                 <div class="col-xl-7 col-lg-6 main_menu_wrap" v-if="!authenticated">
              <div class="headerarea__main__menu">
                <nav style="text-align: justify;padding-left: 75px;">
                  <ul>
                    
                    <li @click="goToMenu('/')" >
                      <a class="headerarea__has__dropdown cursor-pointer" href="http://dot-smart.mpwt.gov.la"  target="_blank">
                        <!-- <nuxt-link to="/">{{ $t("home") }}</nuxt-link> -->
                        <!-- <span> {{ $t("home") }} </span> -->
                        <span> {{ $t("news_page") }}</span>
                      </a>
                    </li>
                  
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-6">
              <div class="headerarea__right">
                <div class="headerarea__left__logo">
                  <div style="padding-top: 3px; text-wrap: nowrap" class="pull-right">
                    <a class="px-3 cursor-pointer" @click="changeLocale('en')">
                      <img src="../../assets/eng.png" alt="Eng" />
                    </a>
                    <!-- <a @click="changeLocale('th')">
                      <img src="../../assets/thai.png" alt="My Image" />
                    </a> -->
                    <a class="px-3 cursor-pointer" @click="changeLocale('la')">
                      <img src="../../assets/la.png" alt="Lao" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-6">
              <div class="headerarea__right" v-if="!authenticated">
                <div class="headerarea__login">
                  <nuxt-link to="/login">{{ $t("login") }}</nuxt-link>
                </div>
                <div class="headerarea__button">
                  <nuxt-link to="/register">{{ $t("register") }}</nuxt-link>
                </div>
              </div>

              <div class="headerarea__main__menu .headerarea__login headerarea__right" v-if="authenticated">
             
                <nav>
                  <ul>
                    
                    <li class="me-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                        class="bi bi-bell-fill " viewBox="0 0 16 16" id="noti-bell">
                        <path
                          d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                      </svg>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" v-if="useError.mydltcardExp.length > 0">
                        {{useError.mydltcardExp.length}}
                      </span>
                      <ul class="headerarea__submenu mt-3">
                        <li class="header__right__dropdown__inner"  v-for="(item, index) in useError.mydltcardExp"
                      :key="item.ap_id">
                          <div class="single__header__right__dropdown">
                            <NuxtLink to="/profile">  
                            <div class="header__right__dropdown__content">
                              <a > {{ $t("head_alert") }} <span class="text-danger">{{ item.dlt_code }}</span> {{ $t("head_alert_day_out") }} 
                                <span class="text-danger">{{ item.expiry_date }}</span></a>
                            </div>
                          </NuxtLink>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                 
                      <a class="headerarea__has__dropdown headerarea__login" href="#" id="headBadge" style="
                          padding: 8px 15px;
                        
                        ">
                       
                        <i class="icofont-users"></i> {{ $t("account") }}  <i class="icofont-arrow-down"></i>
                        <div v-if="useError.formdetail.verify_account == 'system_active'">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                          id="badgeSpan" >
                          <i class="icofont-check"></i><span id="badgeText">{{ $t("system_active") }}</span>
                        </span>
                        </div>

                        <div v-else-if="useError.formdetail.verify_account == 'phone_active'">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                          id="badgeSpan" >
                          <i class="icofont-check"></i><span id="badgeText">{{ $t("phone_active") }}</span>
                        </span>
                        </div>

                        <div v-else-if="useError.formdetail.verify_account == 'phone_unactive'">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                          id="badgeSpan" >
                          <i class="icofont-check"></i><span id="badgeText">{{ $t("phone_unactive") }}</span>
                        </span>
                        </div>
                  
                        <div v-else>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                          id="badgeSpan" >
                          <i class="icofont-close"></i><span id="badgeText">{{ $t("head_notverify") }}</span>
                        </span>
                        </div>

                      </a>
                      <ul class="headerarea__submenu">
                        <li> 
                          <a @click="GotoPage('/profile')" Class="cursor-pointer"><i class="icofont-memory-card"></i> <span style="font-size: 14px;">  {{ $t("account_details") }}</span></a>
                        </li>
                        <li>
                          <a @click="GotoPage('/changepassword')" Class="cursor-pointer"><i class="icofont-edit"></i> <span style="font-size: 14px;">  {{ $t("changepassword") }}</span></a>
                        </li>
                        <li>
                          <a @click="GotoPage('/profile')" Class="cursor-pointer"> <i class="icofont-ui-v-card"></i> <span style="font-size: 14px;"> {{ $t("mylicense") }}</span></a>
                        </li>
                        <!-- <li>
                          <a @click="GotoPage('/historyappoint')">{{ $t("historyappoint") }}</a>
                        </li>
                        <li>
                          <a @click="GotoPage('/history')">{{ $t("history") }}</a>
                        </li> -->
                        <!-- <li>
                          <a @click="GotoPage('/result')">{{ $t("result") }}</a>
                        </li> -->
                        <!-- <li  v-if="useError.formuser.user_type != 3">
                          <a @click="GotoPage('/resultall')">{{ $t("resultall") }}</a>
                        </li>
                         <li v-if="useError.formuser.user_type != 3">
                          <a @click="GotoPage('/historyall')">{{ $t("historyall") }}</a>
                        </li> -->
                        <li><a @click="Logout()"  Class="cursor-pointer"> <i class="icofont-sign-out"></i> <span style="font-size: 14px;">  {{ $t("logout") }} </span></a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid mob_menu_wrapper">
          <div class="row align-items-center">
            <div class="col-6">
              <div class="mobile-logo"  @click="goToMenu('/')">
                <a class="logo__dark" href="#"><img src="/img/logo/logo_3.png" alt="logo" /></a>
              </div>
            </div>
            <div class="col-6">
              <div class="header-right-wrap">
                <div class="dropdown me-4" v-if="authenticated">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" 
                    class="bi bi-bell-fill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" viewBox="0 0 16 16" id="noti-bell">
                    <path
                      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {{useError.mydltcardExp.length}}
                  </span>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item border-bottom"  v-for="(item, index) in useError.mydltcardExp"
                      :key="item.ap_id">
                      <div class="">
                          <a > {{ $t("head_alert") }} <span class="text-danger">{{ item.dlt_code }}</span> {{ $t("head_alert_day_out") }} <span class="text-danger">{{ item.expiry_date }}</span></a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mobile-off-canvas" @click="Showaside()">
                  <!-- if click -> add class inside to element class "mobile-off-canvas-active" -->
                  <a class="mobile-aside-button" href="#"><i class="icofont-navigation-menu"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header section end -->

    <!-- Mobile Menu Start Here -->
    <div class="mobile-off-canvas-active" :class="{ inside: store.isActiveBar }">
      <!-- Add class "inside" for show mobile menu -->
      <a class="mobile-aside-close" @click="Hideaside()"><i class="icofont icofont-close-line"></i></a>
      <div class="header-mobile-aside-wrap">
        <div class="mobile-menu-wrap">
          <div class="mobile-navigation">
            <nav>
              <ul class="mobile-menu">
                <li class="menu-item-has-children"  @click="goToMenu('/')">
                 <span> {{ $t("news") }}</span>
                </li>
                <li class="menu-item-has-children"  @click="goToMenu('/course')">
                
                      <span> {{ $t("courses") }} </span>
                </li>

                <li class="menu-item-has-children"  @click="goToMenu('/exam')">
                
                   <span> {{ $t("exam") }}</span>
                </li>
               

                <li  @click="goToMenu('/appointment')">
                
                <a class="headerarea__has__dropdown cursor-pointer">
                  
                  <span> {{ $t("appointmentxx") }} </span>
                </a>
              </li>
                  <li class="menu-item-has-children">
                  <nuxt-link to="/exam">{{ $t("exam") }}</nuxt-link>
                </li>

                <li @click="goToMenu('/result')">
                      <a class="headerarea__has__dropdown cursor-pointer">
                        <!-- <nuxt-link to="/exam">{{ $t("exam") }}</nuxt-link> -->
                        <span> {{ $t("exam_results") }} </span>
                      </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="mobile-curr-lang-wrap">
          <div class="single-mobile-curr-lang">
            <div class="btn-group">
              <a class="mobile-language-active" href="#" data-bs-toggle="dropdown" aria-expanded="false">{{ $t("head_choose_lan") }} <i
                  class="icofont-thin-down"></i></a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item cursor-pointer" href="#" @click="changeLocale('la')">ລາວ</a></li>
                <li><a class="dropdown-item cursor-pointer" href="#" @click="changeLocale('en')">English</a></li>
              </ul>
            </div>
          </div>

          
          <div v-if="authenticated">
            <div class="single-mobile-curr-lang">
             <li> 
                          <a @click="GotoPage('/profile')"> <span >  {{ $t("account_details") }}</span></a>
                        </li>

            </div>
            <div class="single-mobile-curr-lang">
                <li>
                          <a @click="GotoPage('/changepassword')"><span >  {{ $t("changepassword") }}</span></a>
                        </li>
            </div>
             <div class="single-mobile-curr-lang">
            <li>
                          <a @click="GotoPage('/profile')"> <span > {{ $t("mylicense") }}</span></a>
                        </li>
            </div>
            <div class="single-mobile-curr-lang">
              <li><a @click="Logout()">{{ $t("logout") }}</a></li>
            </div>
          </div>
          <div class="single-mobile-curr-lang" v-if="!authenticated">
            <div class="single-mobile-curr-lang">
              <li><a @click="GotoPage('/login')">{{ $t("login") }}</a></li>
            </div>
            <div class="single-mobile-curr-lang">
              <li><a @click="GotoPage('/register')">{{ $t("singup_title") }}</a></li>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu end Here -->

    <!-- theme fixed shadow -->
  </div>
</template>



<script setup>
import { storeToRefs } from "pinia";
import { defineComponent, ref, onMounted } from 'vue';
import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { useRoute } from "vue-router";
import { useLogin } from "@/stores/login";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2";

const router = useRouter();
const store = useLogin();
const useError = useAuthStore();



const { getisActive } = storeToRefs(store);
const { alertlogin } = storeToRefs(useError);

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const { getisActiveBar } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store

// const formData = reactive({
//   email: '',
//   password: '',
//   confirmPassword: null,
// });






const Logout = async () => {
  await logUserOut();
  router.push("/");
};

const Showaside = async () => {

  store.isActiveBar = !store.isActiveBar;
  // store.isActiveBar = false;
};

const Hideaside = async () => {
  store.isActiveBar = false;
};

const goToMenu = async (meun) => {
  //      Swal.fire({
  //   allowEscapeKey: false,
  //   allowOutsideClick: false,
  //   didOpen: () => {
  //     Swal.showLoading()
  //   },
  // });

  store.isActiveBar = false;
  router.push(meun);
  //  setTimeout(() => Swal.close(), 500);
};


const GotoPage = (item) => {
  store.isActiveBar = false;
  router.push(item);
};

const { locale, setLocale } = useI18n();

const changeLocale = (newLocale) => {
  locale.value = newLocale;
};
</script>

<style>

.cursor-pointer{
  cursor: pointer;
}
#headBadge>#badgeSpan>#badgeText {
  display: none;
  transition: all 1s;
}

#headBadge>#badgeSpan:hover>#badgeText {
  display: unset;
}

#noti-bell {
  cursor: pointer;
}

#noti-bell:hover {
  color: var(--primaryColor);
}
.dropdown-item {
  width: 100%;
  overflow-wrap: break-word;
}
@media (max-width: 700px) {
  .dropdown-item {
    width: 250px;
  }
  .dropdown-item > div {
    width: 200px;
  }
  .dropdown-item > div > a {
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
  }
}
</style>
