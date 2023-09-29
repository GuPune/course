<template>
  <div>
    <header>
      <div class="headerarea headerarea__3 header__sticky header__area">
        <div class="container desktop__menu__wrapper">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-6">
              <div class="headerarea__left">
                <div class="headerarea__left__logo">
                  <img src="/img/logo/logo_3.png" alt="logo" width="80" height="80" />
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 main_menu_wrap">
              <div class="headerarea__main__menu">
                <nav>
                  <ul>
                    <li>
                      <a class="headerarea__has__dropdown">
                        <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a class="headerarea__has__dropdown">
                        <nuxt-link to="/course">{{ $t("courses") }}</nuxt-link>
                      </a>
                    </li>
                    <li>
                      <a class="headerarea__has__dropdown">
                        <nuxt-link to="/exam">{{ $t("exam") }}</nuxt-link>
                      </a>
                    </li>
                    <li>
                      <nuxt-link to="/appointment">
                      {{ $t("appointmentxx")}}
                      </nuxt-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-6">
              <div class="headerarea__right">
                <div class="headerarea__left__logo">
                  <div
                    style="padding-top: 3px; text-wrap: nowrap"
                    class="pull-right"
                  >
                    <a
                      style="padding-left: 10px; padding-right: 10px"
                      @click="changeLocale('en')"
                    >
                      <img src="../../assets/eng.png" alt="My Image" />
                    </a>
                    <a @click="changeLocale('th')">
                      <img src="../../assets/thai.png" alt="My Image" />
                    </a>
                    <a
                      style="padding-left: 10px; padding-right: 10px"
                      @click="changeLocale('la')"
                    >
                      <img src="../../assets/la.png" alt="My Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="headerarea__right" v-if="!authenticated">
                <div class="headerarea__login">
                  <nuxt-link to="/login">{{ $t("login") }}</nuxt-link>
                </div>
                <div class="headerarea__button">
                  <nuxt-link to="/register">{{ $t("register") }}</nuxt-link>
                </div>
              </div>

              <div
                class="headerarea__main__menu .headerarea__login headerarea__right"
                v-if="authenticated"
              >
                <nav>
                  <ul>
                    <li>
                      <a
                        class="headerarea__has__dropdown headerarea__login"
                        href="#"
                        style="
                          padding: 8px 15px;
                          border: 1px solid var(--borderColor1);
                        "
                      >
                        <i class="icofont-heart-alt"></i> {{ $t("account") }}  
                      </a>
                      <ul class="headerarea__submenu">
                        <li>
                          <a @click="GotoPage('/profile')">{{ $t("account") }}</a>
                        </li>
                        <li>
                          <a @click="GotoPage('/historyappoint')">{{ $t("historyappoint") }}</a>
                        </li>
                        <li>
                          <a @click="GotoPage('/history')">{{ $t("history") }}</a>
                        </li>
                         <li>
                          <a @click="GotoPage('/result')">{{ $t("result") }}</a>
                        </li>
                         <!-- <li  v-if="useError.formuser.user_type != 3">
                          <a @click="GotoPage('/resultall')">{{ $t("resultall") }}</a>
                        </li>
                         <li v-if="useError.formuser.user_type != 3">
                          <a @click="GotoPage('/historyall')">{{ $t("historyall") }}</a>
                        </li> -->
                        <li><a @click="Logout()">{{ $t("logout") }}</a></li>
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
              <div class="mobile-logo">
                <a class="logo__dark" href="#"
                  ><img src="/img/logo/logo_1.png" alt="logo"
                /></a>
              </div>
            </div>
            <div class="col-6">
              <div class="header-right-wrap">
                <div class="mobile-off-canvas" @click="Showaside()">
                  <!-- if click -> add class inside to element class "mobile-off-canvas-active" -->
                  <a class="mobile-aside-button" href="#"
                    ><i class="icofont-navigation-menu"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header section end -->

    <!-- Mobile Menu Start Here -->
    <div
      class="mobile-off-canvas-active"
      :class="{ inside: store.isActiveBar }"
    >
      <!-- Add class "inside" for show mobile menu -->
      <a class="mobile-aside-close" @click="Hideaside()"
        ><i class="icofont icofont-close-line"></i
      ></a>
      <div class="header-mobile-aside-wrap">
        <div class="mobile-menu-wrap">
          <div class="mobile-navigation">
            <nav>
              <ul class="mobile-menu">
                <li class="menu-item-has-children">
                  <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
                </li>
                <li class="menu-item-has-children">
                  <nuxt-link to="/course">{{ $t("courses") }}</nuxt-link>
                </li>

                <li class="menu-item-has-children">
                  <nuxt-link to="/exam">{{ $t("exam") }}</nuxt-link>
                </li>
                <li class="menu-item-has-children">
                  <nuxt-link to="/appointment">{{
                    $t("appointmentxx")
                  }}</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="mobile-curr-lang-wrap">
   

          <!-- <div class="single-mobile-curr-lang">
                        <a class="mobile-currency-active" href="#">Currency <i class="icofont-thin-down"></i></a>
                        <div class="lang-curr-dropdown curr-dropdown-active">
                            <ul>
                                <li><a href="#">USD</a></li>
                                <li><a href="#">EUR</a></li>
                                <li><a href="#">Real</a></li>
                                <li><a href="#">BDT</a></li>
                            </ul>
                        </div>
                    </div> -->
          <div v-if="authenticated">
            <div class="single-mobile-curr-lang">
              <li><a @click="GotoPage('/profile')">{{ $t("account") }}</a></li>
            </div>
            <div class="single-mobile-curr-lang">
              <li><a @click="GotoPage('/history')">{{ $t("history") }}</a></li>
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
import { defineComponent } from "vue";
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

const router = useRouter();
const store = useLogin();
const useError = useAuthStore();
const profile = await useError.getProfile();

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
  console.log(store.isActiveBar);
  store.isActiveBar = !store.isActiveBar;
  // store.isActiveBar = false;
};

const Hideaside = async () => {
  store.isActiveBar = false;
};

const GotoPage = (item) => {
  router.push(item);
};

const { locale, setLocale } = useI18n();

const changeLocale = (newLocale) => {
  locale.value = newLocale;
};
</script>
