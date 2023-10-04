<template>


        <!-- .contact__section__end -->


        <!-- contact__form__start -->
        <div class="contact__from__wraper sp_bottom_100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="contact__form__inner">
                            <div class="contact__form__heading" data-aos="fade-up">
                                <h3 class="text-center">{{ $t("account_proFile_Info") }}</h3> 
                                <!-- <p>Your email address will not be published. Required fields are marked * </p> -->
                            </div>
                          
                                <div class="row">

                                  <!-- <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="subject" placeholder="First Name" v-model="store.formuser.user_firstname" disabled>
                                            <div class="contact__icon">
                                              <i class="icofont-businessman"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="phone" placeholder="Last Name" v-model="store.formuser.user_lastname" disabled>
                                            <div class="contact__icon">
                                              <i class="icofont-businessman"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="con_name" id="con_name" placeholder="User Name*" v-model="store.formuser.user_name" disabled>
                                            <div class="contact__icon">
                                                <i class="icofont-businessman"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="con_email" id="con_email" placeholder="Email Address*"  v-model="store.formuser.user_email" disabled>
                                            <div class="contact__icon">
                                                <i class="icofont-envelope"></i>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="subject" placeholder="Write Service Type" v-model="store.formuser.user_phone" disabled>
                                            <div class="contact__icon">
                                              
                                                <i class="icofont-ui-call"></i>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6" data-aos="fade-up">
                                        <div class="contact__input__wraper">
                                            <input type="text" name="phone" placeholder="Enter Your Phone" v-model="store.formuser.user_type_name" disabled>
                                            <div class="contact__icon">
                                              <i class="icofont-edit"></i>
                                            </div>
                                        </div>
                                    </div>
                                 -->
                                    <!-- <div class="col-xl-12" data-aos="fade-up">
                                        <div class="contact__button">

                                            <button type="submit" value="submit" class="default__button" name="submit">Post a Comment</button>

                                            <p class="form-messege"></p>

                                        </div>
                                    </div> -->
                                </div>
<div class="gridarea__wraper gridarea__wraper__2 gridarea__course__list aos-init aos-animate" data-aos="fade-up">
                                    <div class="gridarea__img">
                                        <a><img :src="coverimage(store.formdetail.user_img)"  alt="grid"></a>
                                       

                                    </div>
                                    <div class="gridarea__content py-2">
                                        <div class="gridarea__list row border-bottom">
                                          <p class="col fw-bold ">{{ $t("page_profile_iden") }}</p>
                                          <p class="col">{{store.formdetail.identification_number}}</p>
                                        </div>
                                        <div class="gridarea__list row border-bottom">
                                         <p class="col fw-bold">{{ $t("page_profile_day") }}</p>
                                         <p class="col">{{store.formdetail.user_birthday}}</p>
                                        </div>
                                        <div class="gridarea__list row border-bottom">
                                         <p class="col fw-bold">{{ $t("page_profile_zip") }}</p>
                                         <p class="col">{{store.formdetail.location.zipcode}}</p>
                                        </div>
                                        <div class="gridarea__list row border-bottom">
                                         <p class="col fw-bold">{{ $t("page_profile_add_1") }}</p>
                                         <p class="col">{{store.formdetail.location.zipcode_name}}</p>
                                        </div>
                                        <div class="gridarea__list row border-bottom">
                                         <p class="col fw-bold">{{ $t("page_profile_add_2") }}</p>
                                         <p class="col">{{store.formdetail.user_address}}</p>
                                        </div>
                                        <div class="gridarea__list row ">
                                         <p class="col fw-bold">{{ $t("page_profile_status") }}</p>
                                         
                                                
                                                <div class="col " v-if="store.formdetail.verify_account == 'phone_active'">
                                          <span class="badge text-bg-success">{{ $t("phone_active") }}</span>
                                         </div>
                                                <div class="col " v-if="store.formdetail.verify_account == 'system_unactive'">
                                          <span class="badge text-bg-success">{{ $t("system_unactive") }}</span>
                                         </div>
                                                <div class="col " v-if="store.formdetail.verify_account == 'system_active'">
                                          <span class="badge text-bg-success">{{ $t("system_active") }}</span>
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
import { ref, computed, watch } from 'vue'
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { useAuthStore } from '@/stores/auth';
import  ApiService  from '@/services/api.service';


const store = useAuthStore();
const router = useRouter();
const profile = await store.getProfile();


function coverimage(i) {
    let im =  ApiService.image(i);
  return im;
}

</script>

<style>
.xt3e5 {
  padding: 30px 50px 10px 10px;
}

.hover-button:hover {
  border: 2px solid #b217b4;
  padding: 5px 40px;
}

.sec-l {
  border-style: groove !important;
  border-color: red !important;
  #choice {
    background-color: #4CAF50;
    color: white;
    #card-index {
      color: white;
    }
  }
}

.sec-choice {
  border-style: groove !important;
  border-color: red !important;

  #answer {
    background-color: #4CAF50;
    color: white;
    #card-index {
      color: white;
    }
  }
}
#answer {
    background-color: #4CAF50;
  
  }

.exma{
  background-color: #5f2ded;
    color: white;
}
.send{
  background-color: #e06512;
    color: white;
}
#choice-container {
  /* border: 2px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
#choice {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  transition-duration: 0.4s;
  display: flex;
}
#choice:hover {
  background-color: #4CAF50; /* Green */
  color: white;
  #card-index {
    color: white;
  }
}
#choice-card {
  padding: 5px;
  border: unset !important;

}


#answer {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice{
  background-color: rgb(247, 247, 247); 
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success{
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger{
  background-color: rgb(227, 52, 21); 
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

#answer-card {
  padding: 5px;
  border: unset !important;

}
#card-index {
  margin-right: 10px;
}
</style>
