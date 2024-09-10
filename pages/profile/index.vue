




<template>
  <div>
    <div style="background-color: var(--dotColor)">
      <div class="container py-3 mb-2">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">Account Detail</div>
              <div class="breadcrumb__inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="coursearea">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="contact__section" data-aos="fade-up">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-6 col-xl-6 col-lg-6">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-7">
                        <div class="blog__details__content__wraper">
                          <div >
                            <img
                              src="../../assets/img/person-avatar.jpg"
                              alt="blog"
                            />
                          </div>
                          <div class="blog__details__content"></div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-5">
                        <button type="button" class="btn btn-primary">
                          Upload
                        </button>
                      </div>
                  
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-lg"
                        >
                      
                     
                          {{ auth.profile_by_one[0].user_prefrix }} {{ auth.profile_by_one[0].user_firstname }} {{ auth.profile_by_one[0].user_lastname }}
                        </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-lg"
                        >
                        {{ auth.profile_by_one[0].user_full_name }}
                        </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label
                          for="company-name"
                          class="col-sm-12 col-form-label col-form-label-lg"
                        >
                          Username: {{ auth.profile_by_one[0].user_name }}
                        </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="col-12 col-sm-6 col-xl-12 col-lg-12">
                          <div class="row">
                            <div class="col-12 col-sm-12 col-md-2">
                              <label
                                for="company-name"
                                class="col-sm-12 col-form-label col-form-label-lg"
                              >
                                ເບີໂທ:
                              </label>
                            </div>
                            <div class="col-12 col-sm-12 col-md-5">
                              <label
                                for="company-name"
                                class="col-sm-12 col-form-label col-form-label-lg"
                              >
                              {{ auth.profile_by_one[0].user_phone }}
                              </label>
                            </div>
                            <div
                              class="col-12 col-sm-12 col-md-3"
                              style="color: green"
                            >
                              <label
                                for="company-name"
                                class="col-sm-12 col-form-label col-form-label-lg"
                              >
                                ຢືນຢັນແລ້ວ
                              </label>
                            </div>
                            <div class="col-12 col-sm-12 col-md-2">
                              <button type="button" class="btn btn-primary">
                                ປ່ຽນ
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-6 col-xl-12 col-lg-12">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-2">
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-lg"
                            >
                              ອີເມລ:
                            </label>
                          </div>
                          <div class="col-12 col-sm-12 col-md-5">
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-lg"
                            >
                            {{ auth.profile_by_one[0].user_email }}
                            </label>
                          </div>
                          <div
                            class="col-12 col-sm-12 col-md-3"
                            style="color: red"
                          >
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-lg"
                            >
                              ບໍ່ທັນຢືນຢັນ
                            </label>
                          </div>
                          <div class="col-12 col-sm-12 col-md-2">
                            <button type="button" class="btn btn-primary">
                              ປ່ຽນ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 col-xl-6">
                 
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-12">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-lg"
                            >
                            ສະຖານະ:
                            
                            <span v-if="auth.profile_by_one[0].verify_account = 'phone_active'" style="color: yellowgreen;"> ຢືນຢັນ OTP ສໍາເລັດ  </span>
                          
                            <span v-else-if="auth.profile_by_one[0].verify_account = 'phone_unactive'" style="color: red;"> ຢືນຢັນ OTP ບໍ່ຖືກຕ້ອງ  </span>
                            <span v-else-if="auth.profile_by_one[0].verify_account = 'system_active'" style="color: green;"> ຢືນຢັນຕົວຕົນແລ້ວ  </span>
                            <span v-else-if="auth.profile_by_one[0].verify_account = 'system_unactive'" style="color: red;"> ຢືນຢັນຂໍ້ມູນທີ່ບໍ່ຖືກຕ້ອງ  </span>
                            </label>
                            
                      </div>
              
                    </div>

                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ເລກບັດປະຈຳຕົວ / Passport: 
                            </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            {{ auth.profile_by_one[0].identification_number }}
                            </label>
                      </div>
                    </div>

                

                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ວັນໝົດອາຍຸຂອງບັດ: 
                            </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            {{ auth.profile_by_one[0].exp_date }}
                            </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ວັນເດືອນປີເກີດ:
                            </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            {{ auth.profile_by_one[0].user_birthday }}
                            </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ສັນຊາດ:
                            </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ລາວ
                            </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ທີ່ຢູ່ປັດຈຸບັນ:
                            </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            {{ auth.profile_by_one[0].user_address }}
                            </label>
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                          
                            {{ auth.profile_by_one[0].zipcode_name }} - {{ auth.profile_by_one[0].province_name }}
                            </label>
                       
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ຮູບ:
                            </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <div class="form-group row">
                  <img
                        :src="coverimage(auth.profile_by_one[0].passpost_image)"
                    class="img-fluid"
                    width="80"
                    height="80"
                  />
                </div>
                       
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                  
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <div class="form-group row">
                  <img
                      :src="coverimage(auth.profile_by_one[0].passpost_image)"
                    class="img-fluid"
                    width="80"
                    height="80"
                  />
                </div>
                      </div>
                    </div>
<br>

                    
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            ຄຳເຫັນ:
                            </label>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6">
                        <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            -ເວລາຖ່າຍຮູບ ບໍ່ໃຫ້ປິດໜ້າ
                            </label>
                            <label
                              for="company-name"
                              class="col-sm-12 col-form-label col-form-label-md"
                            >
                            -ເລກບັດປະຈຳຕົວ ທີ່ພິມມາບໍ່ກົງກັບ ເລກໃນບັດ
                            </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-12">
            <div class="contact__section" data-aos="fade-up">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-12 col-xl-12 col-lg-12">
                    <label
                      for="company-name"
                      class="col-sm-12 col-form-label col-form-label-sm"
                    >
                      Last login: 2024-03-01 18:22:23
                    </label>
                  </div>
                  <div class="col-12 col-sm-12 col-xl-12 col-lg-12">
                    <label
                      for="company-name"
                      class="col-sm-12 col-form-label col-form-label-sm"
                    >
                      Last Data update: 2024-03-02 14:22:11
                    </label>
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
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});


import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { HistoryStore } from "@/stores/history";
import ApiService from '@/services/api.service';
import { useRoute } from "vue-router";
const auth = useAuthStore();

const route = useRoute();



await auth.fetchUsersByOne();
await auth.fetchUsersByOneComment();

console.log(auth.profile_by_one[0]);

function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}

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
.pcard {
  cursor: pointer;
}
</style>