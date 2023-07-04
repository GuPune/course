<template>
    <div>
        <header>
            <div class="headerarea headerarea__3 header__sticky header__area">
                <div class="container desktop__menu__wrapper">
                    <div class="row">
                        <div class="col-xl-2 col-lg-2 col-md-6">
                            <div class="headerarea__left">
                                <div class="headerarea__left__logo">

                               <img src="/img/logo/logo_1.png" alt="logo">
                                </div>

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 main_menu_wrap">
                            <div class="headerarea__main__menu">
                                <nav>
                                    <ul>
                                        <li><a class="headerarea__has__dropdown">
                                      <nuxt-link to="/">{{ $t('home') }}</nuxt-link>
                        
                                      <div>
 
    <!-- <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="th">th</option>

      </select>
    </form> -->
   </div>
                              </a>

                                  </li>

                                        <li><a class="headerarea__has__dropdown">
                                      
                                            <nuxt-link to="/course">หลักสูตรทั้งหมด</nuxt-link>

                                    </a>

                                        </li>
                                        <li><a href="contact.html">ฝึกทำข้อสอบ</a>

</li>

                                        <li><a href="contact.html">นัดหมาย</a>

</li>






                                    
                                    </ul>
                                </nav>
                            </div>
                        </div>




                        <div class="col-xl-1 col-lg-1 col-md-6">
                            <div class="headerarea__right">
                                <div class="headerarea__left__logo">

                                    <div style="padding-top: 3px;" class="pull-right">
<a style="padding-left: 10px;padding-right:10px;" @click="changeLocale('en')">
    <img src="../../assets/thai.png" alt="My Image">
</a>
<a  @click="changeLocale('th')">
    <img src="../../assets/thai.png" alt="My Image">
</a>
</div>


 </div>
                                <!-- <div class="headerarea__button">
                                    <a href="#">Get Started Free</a>
                                </div> -->
                            </div>
                        </div>
              
                        <!-- <div class="col-xl-2 col-lg-2 col-md-6">  
                            <div style="padding-top: 3px;" class="pull-right">
<a style="padding-left: 5px;padding-right:5px;" href="https://www.jib.co.th/web/lswitcher/switchlang/th">
    <img src="../../assets/thai.png" alt="My Image">
</a>
<a href="https://www.jib.co.th/web/lswitcher/switchlang/en">
    <img src="../../assets/thai.png" alt="My Image">
</a>
</div>
                        </div> -->
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="headerarea__right" v-if="!authenticated">
                                <div class="headerarea__login">
                                    <nuxt-link to="/login">Login {{ authenticated }}</nuxt-link>
                                </div>
                                <div class="headerarea__button">
                                    <a href="#">Register Now</a>
                                </div>
                            </div>
                            <!-- <div class="headerarea__right" v-if="authenticated">
                                <div class="headerarea__login">
                                  
                                    <nuxt-link>   <i class="icofont-heart-alt"></i> บัญชีของฉัน {{ authenticated }}</nuxt-link>

                                    
                                </div>
                              
                            </div> -->

                            <div class="headerarea__main__menu .headerarea__login headerarea__right"  v-if="authenticated" >
                                <nav>
                                    <ul>
<li><a class="headerarea__has__dropdown headerarea__login" href="#"  style="padding: 8px 15px;border: 1px solid var(--borderColor1);"
> <i class="icofont-heart-alt"></i> บัญชีของฉัน {{ authenticated }}
                                    </a>
                                            <ul class="headerarea__submenu">
                                                <li><a @click="Logout()">Logout</a></li>
                                                
                                            </ul>
                                        </li>




                                    
                                    </ul>
                                </nav>
                            </div>
                        </div>

      
 

                    </div>

                </div>
            </div>

            <div class="container-fluid mob_menu_wrapper">
                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="mobile-logo">
                            <a class="logo__dark" href="#"><img src="/img/logo/logo_1.png" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="header-right-wrap">

                            <div class="mobile-off-canvas">
                                <a class="mobile-aside-button" href="#"><i class="icofont-navigation-menu"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <!-- header section end -->

        <!-- Mobile Menu Start Here -->
        <div class="mobile-off-canvas-active">
            <a class="mobile-aside-close"><i class="icofont  icofont-close-line"></i></a>
            <div class="header-mobile-aside-wrap">
                <div class="mobile-search">
                    <form class="search-form" action="#">
                        <input type="text" placeholder="Search entire store…">
                        <button class="button-search"><i class="icofont icofont-search-2"></i></button>
                    </form>
                </div>
                <div class="mobile-menu-wrap">

                    <div class="mobile-navigation">

                        <nav>
                            <ul class="mobile-menu">
                                <li class="menu-item-has-children"><a href="index.html">Home</a>
                                    <ul class="dropdown">
                                        <li><a href="index.html">Home Style 1</a></li>
                                        <li><a href="index-dark.html">Home 1 (Dark)</a></li>
                                        <li><a href="home-2.html">Home Style 2</a></li>
                                        <li><a href="home-2-dark.html">Home 2 (Dark)</a></li>
                                        <li><a href="home-3.html">Home Style 3</a></li>
                                        <li><a href="home-3-dark.html">Home 3 (Dark)</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children "><a href="about.html">About</a>

                                </li>

                                <li class="menu-item-has-children"><a href="portfolio.html">blog</a>
                                    <ul class="dropdown">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-dark.html">Blog (Dark)</a></li>
                                        <li><a href="blog-details.html">Blog-details</a></li>
                                        <li><a href="blog-details-dark.html">Blog-details (Dark)</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children "><a href="course.html">Course</a>
                                    <ul class="dropdown">
                                        <li><a href="course.html">Course</a></li>
                                        <li><a href="course-dark.html">Course (Dark)</a></li>
                                        <li><a href="course-list.html">Course List</a></li>
                                        <li><a href="course-list-dark.html">Course List (Dark)</a></li>
                                        <li><a href="course-grid.html">Course Grid</a></li>
                                        <li><a href="course-grid-dark.html">Course Grid (Dark)</a></li>
                                        <li><a href="course-details.html">Course-Details</a></li>
                                        <li><a href="course-details-dark.html">Details (Dark)</a></li>
                                        <li><a href="course-details-2.html">Details 2</a></li>
                                        <li><a href="course-details-2-dark.html">Details 2 (Dark)</a></li>
                                        <li><a href="course-details-3.html">Details 3</a></li>
                                        <li><a href="course-details-3-dark.html">Details 3 (Dark)</a></li>
                                    </ul>
                                </li>

                                <li class="menu-item-has-children "><a href="instructor.html">Pages</a>
                                    <ul class="dropdown">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="about-dark.html">About (Dark)</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="contact-dark.html">Contact (Dark)</a></li>
                                        <li><a href="instructor.html">Instructor</a></li>
                                        <li><a href="instructor-dark.html">Instructor (Dark)</a></li>
                                        <li><a href="instructor-details.html">Instructor-Details</a></li>
                                        <li><a href="instructor-details-dark.html">Details (Dark)</a></li>
                                        <li><a href="event-details.html">Event-Details</a></li>
                                        <li><a href="event-details-dark.html">Details (Dark)</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="login-dark.html">Login (Dark)</a></li>
                                        <li><a href="error.html">Error</a></li>
                                        <li><a href="error-dark.html">Error (Dark)</a></li>
                                    </ul>
                                </li>
                                <li><a class="menu-item-has-children" href="contact.html">Contact</a></li>
                            </ul>
                        </nav>

                    </div>

                </div>
                <div class="mobile-curr-lang-wrap">
                    <div class="single-mobile-curr-lang">
                        <a class="mobile-language-active" href="#">Language <i class="icofont-thin-down"></i></a>
                        <div class="lang-curr-dropdown lang-dropdown-active">
                            <ul>
                                <li><a href="#">English (US)</a></li>
                                <li><a href="#">English (UK)</a></li>
                                <li><a href="#">Spanish</a></li>
                            </ul>
                        </div>
                    </div>

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

                    <div class="single-mobile-curr-lang">
                        <a class="mobile-account-active" href="#">My Account <i class="icofont-thin-down"></i></a>
                        <div class="lang-curr-dropdown account-dropdown-active">
                            <ul>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="login.html">Creat Account</a></li>
                                <li><a href="login.html">My Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mobile-social-wrap">
                    <a class="facebook" href="#"><i class="icofont icofont-facebook"></i></a>
                    <a class="twitter" href="#"><i class="icofont icofont-twitter"></i></a>
                    <a class="pinterest" href="#"><i class="icofont icofont-pinterest"></i></a>
                    <a class="instagram" href="#"><i class="icofont icofont-instagram"></i></a>
                    <a class="google" href="#"><i class="icofont icofont-youtube-play"></i></a>
                </div>
            </div>
        </div>
        <!-- Mobile Menu end Here -->

        <!-- theme fixed shadow -->
        <div>
            <div class="theme__shadow__circle"></div>
            <div class="theme__shadow__circle shadow__right"></div>
        </div>
    </div>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useRoute } from 'vue-router'
import { useLogin } from '@/stores/login'
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';
import { useI18n } from "vue-i18n";


const router = useRouter();
const store = useLogin()
const useError = useAuthStore()

const { getisActive } = storeToRefs(store);
const { alertlogin } = storeToRefs(useError);


const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store



// const formData = reactive({
//   email: '',
//   password: '',
//   confirmPassword: null,
// });


const Logout = async () => {
    await logUserOut(); 
}






async function leag(x) {

    this.$i18n.locales.filter("th")


}

const { locale, setLocale } = useI18n();

const changeLocale = (newLocale) => {
   // $i18n.locale = 'th';
//  setLocale(newLocale);
// setLocale('th')
console.log(locale);
};







</script>
