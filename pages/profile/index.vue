




<template>
  <div>
    <div class="coursearea sp_top_100 sp_bottom_100">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="contact__section" data-aos="fade-up">
              <div class="container">
                <div class="row"  v-if="auth.formdetail.verify_account !== 'system_active'">   
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single__contact pcard">
                      <div class="contact__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="58"
                          height="58"
                          fill="#5F2DED"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                      </div>
                      <div class="contact__text" @click="choose('profile')">
                        <h5>{{ $t("account_proFile_User") }}</h5>
                        <!-- <div class="contact__email">
                          <p>{{ auth.formuser.user_email }}</p>
                          <span>{{ auth.formuser.user_phone }}</span>
                        </div> -->
                      </div>
                    </div>
                  </div>
               
                  <div
                    class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    @click="choose('details')"
                  >
                    <div class="single__contact pcard">
                      <div class="contact__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="58"
                          height="58"
                          fill="#5F2DED"
                          class="bi bi-person-lines-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
                          />
                        </svg>
                        <!-- <svg width="46" height="60" viewBox="0 0 46 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M38.8868 48.524C37.0927 47.7314 34.7762 47.0908 32.1029 46.6396C32.883 45.8918 33.6807 45.0921 34.4804 44.2431C37.6741 40.8522 40.2225 37.3879 42.0549 33.9461C44.3712 29.5951 45.5457 25.2656 45.5457 21.0781C45.5457 9.45565 35.3298 0 22.7728 0C10.2159 0 0 9.45565 0 21.0781C0 25.2656 1.17445 29.5951 3.49082 33.9462C5.32315 37.388 7.87156 40.8523 11.0653 44.2432C11.8649 45.0922 12.6627 45.8919 13.4428 46.6397C10.7695 47.0909 8.45303 47.7315 6.65891 48.5241C3.24665 50.0313 2.53032 51.7517 2.53032 52.9295C2.53032 54.4209 3.64479 56.5425 8.95365 58.1805C12.6637 59.3252 17.5714 59.9556 22.7728 59.9556C27.9743 59.9556 32.882 59.3252 36.592 58.1805C41.9009 56.5425 43.0154 54.4209 43.0154 52.9295C43.0154 51.7517 42.299 50.0313 38.8868 48.524V48.524ZM2.53032 21.0781C2.53032 10.747 11.6111 2.34201 22.7728 2.34201C33.9346 2.34201 43.0154 10.747 43.0154 21.0781C43.0154 29.7724 37.3572 37.6156 32.6106 42.6642C28.5331 47.0012 24.4062 50.0812 22.7728 51.236C21.1391 50.0808 17.0122 47.0008 12.9351 42.6644C8.18848 37.6156 2.53032 29.7724 2.53032 21.0781V21.0781ZM35.7918 55.9588C32.333 57.0258 27.7095 57.6135 22.7728 57.6135C17.8362 57.6135 13.2127 57.0258 9.75386 55.9588C6.28973 54.89 5.06063 53.6589 5.06063 52.9295C5.06063 51.713 8.35776 49.6179 15.6671 48.6818C16.7496 49.6341 17.7575 50.463 18.6383 51.157C17.2962 51.5861 16.4471 52.2208 16.4471 52.9295C16.4471 54.2235 19.2797 55.2715 22.7728 55.2715C26.2659 55.2715 29.0986 54.2235 29.0986 52.9295C29.0986 52.2208 28.2495 51.5861 26.9074 51.157C27.7882 50.463 28.7961 49.6341 29.8786 48.6818C37.1879 49.6179 40.4851 51.713 40.4851 52.9295C40.4851 53.6589 39.256 54.89 35.7918 55.9588Z"
                            fill="#5F2DED" />
                          <path
                            d="M40.485 21.0781C40.485 12.0384 32.5393 4.68402 22.7728 4.68402C13.0062 4.68402 5.06055 12.0384 5.06055 21.0781C5.06055 30.1178 13.0062 37.4722 22.7728 37.4722C32.5393 37.4722 40.485 30.1178 40.485 21.0781ZM7.59086 21.0781C7.59086 13.3298 14.4015 7.02603 22.7728 7.02603C31.1441 7.02603 37.9547 13.3298 37.9547 21.0781C37.9547 28.8264 31.1441 35.1302 22.7728 35.1302C14.4015 35.1302 7.59086 28.8264 7.59086 21.0781Z"
                            fill="#5F2DED" />
                          <path
                            d="M24.0389 29.2752C24.0389 29.9219 24.6053 30.4462 25.3041 30.4462H30.3647C31.0635 30.4462 31.6299 29.9219 31.6299 29.2752V23.4202H34.1602C34.6855 23.4202 35.1561 23.1198 35.3427 22.6653C35.5293 22.2109 35.3932 21.6969 35.0006 21.3739L23.6142 12.0059C23.1348 11.6115 22.4126 11.6115 21.9332 12.0059L10.5468 21.3739C10.1542 21.6969 10.0181 22.2109 10.2047 22.6653C10.3913 23.1198 10.862 23.4202 11.3873 23.4202H13.9177V29.2752C13.9177 29.9219 14.4841 30.4462 15.1828 30.4462H20.2435C20.9422 30.4462 21.5086 29.9219 21.5086 29.2752V25.7622H24.0389V29.2752ZM20.2435 23.4202C19.5447 23.4202 18.9783 23.9444 18.9783 24.5912V28.1042H16.448V22.2491C16.448 21.6024 15.8816 21.0781 15.1828 21.0781H14.715L22.7738 14.4478L30.8326 21.0781H30.3647C29.666 21.0781 29.0996 21.6024 29.0996 22.2491V28.1042H26.5692V24.5912C26.5692 23.9444 26.0028 23.4202 25.3041 23.4202H20.2435Z"
                            fill="#5F2DED" />
                        </svg> -->
                      </div>
                      <div class="contact__text">
                        <h5>{{ $t("account_proFile_Info") }}</h5>
                        <!-- <div class="contact__email">
                          <p>Digital Agency Network 2023</p>
                          <span>Eastbourne Terrace</span>
                        </div> -->
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    @click="choose('iden')"
                  >
                    <div class="single__contact pcard">
                      <div class="contact__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="58"
                          height="58"
                          fill="#5F2DED"
                          class="bi bi bi-card-list"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                          />
                          <path
                            d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                          />
                        </svg>
                      </div>
                      <div class="contact__text">
                        <h5>{{ $t("account_proFile_dtl") }}</h5>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                    @click="choose('idcard')"
                  >
                    <div class="single__contact pcard">
                      <div class="contact__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="58"
                          height="58"
                           fill="#5F2DED"
                          class="bi bi-card-heading"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                          />
                          <path
                            d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"
                          />
                        </svg>
                      </div>
                      <div class="contact__text">
                        <h5>{{ $t("profile_idcard") }}</h5>
                      </div>
                    </div>
                  </div>
                </div>



                <div class="row"  v-else>   
                  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single__contact pcard">
                      <div class="contact__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="58"
                          height="58"
                          fill="#5F2DED"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                      </div>
                      <div class="contact__text" @click="choose('profile')">
                        <h5>{{ $t("account_proFile_User") }}</h5>
                        <!-- <div class="contact__email">
                          <p>{{ auth.formuser.user_email }}</p>
                          <span>{{ auth.formuser.user_phone }}</span>
                        </div> -->
                      </div>
                    </div>
                  </div>
               
                  <div
                    class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                    @click="choose('details')"
                  >
                    <div class="single__contact pcard">
                      <div class="contact__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="58"
                          height="58"
                          fill="#5F2DED"
                          class="bi bi-person-lines-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
                          />
                        </svg>
                        <!-- <svg width="46" height="60" viewBox="0 0 46 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M38.8868 48.524C37.0927 47.7314 34.7762 47.0908 32.1029 46.6396C32.883 45.8918 33.6807 45.0921 34.4804 44.2431C37.6741 40.8522 40.2225 37.3879 42.0549 33.9461C44.3712 29.5951 45.5457 25.2656 45.5457 21.0781C45.5457 9.45565 35.3298 0 22.7728 0C10.2159 0 0 9.45565 0 21.0781C0 25.2656 1.17445 29.5951 3.49082 33.9462C5.32315 37.388 7.87156 40.8523 11.0653 44.2432C11.8649 45.0922 12.6627 45.8919 13.4428 46.6397C10.7695 47.0909 8.45303 47.7315 6.65891 48.5241C3.24665 50.0313 2.53032 51.7517 2.53032 52.9295C2.53032 54.4209 3.64479 56.5425 8.95365 58.1805C12.6637 59.3252 17.5714 59.9556 22.7728 59.9556C27.9743 59.9556 32.882 59.3252 36.592 58.1805C41.9009 56.5425 43.0154 54.4209 43.0154 52.9295C43.0154 51.7517 42.299 50.0313 38.8868 48.524V48.524ZM2.53032 21.0781C2.53032 10.747 11.6111 2.34201 22.7728 2.34201C33.9346 2.34201 43.0154 10.747 43.0154 21.0781C43.0154 29.7724 37.3572 37.6156 32.6106 42.6642C28.5331 47.0012 24.4062 50.0812 22.7728 51.236C21.1391 50.0808 17.0122 47.0008 12.9351 42.6644C8.18848 37.6156 2.53032 29.7724 2.53032 21.0781V21.0781ZM35.7918 55.9588C32.333 57.0258 27.7095 57.6135 22.7728 57.6135C17.8362 57.6135 13.2127 57.0258 9.75386 55.9588C6.28973 54.89 5.06063 53.6589 5.06063 52.9295C5.06063 51.713 8.35776 49.6179 15.6671 48.6818C16.7496 49.6341 17.7575 50.463 18.6383 51.157C17.2962 51.5861 16.4471 52.2208 16.4471 52.9295C16.4471 54.2235 19.2797 55.2715 22.7728 55.2715C26.2659 55.2715 29.0986 54.2235 29.0986 52.9295C29.0986 52.2208 28.2495 51.5861 26.9074 51.157C27.7882 50.463 28.7961 49.6341 29.8786 48.6818C37.1879 49.6179 40.4851 51.713 40.4851 52.9295C40.4851 53.6589 39.256 54.89 35.7918 55.9588Z"
                            fill="#5F2DED" />
                          <path
                            d="M40.485 21.0781C40.485 12.0384 32.5393 4.68402 22.7728 4.68402C13.0062 4.68402 5.06055 12.0384 5.06055 21.0781C5.06055 30.1178 13.0062 37.4722 22.7728 37.4722C32.5393 37.4722 40.485 30.1178 40.485 21.0781ZM7.59086 21.0781C7.59086 13.3298 14.4015 7.02603 22.7728 7.02603C31.1441 7.02603 37.9547 13.3298 37.9547 21.0781C37.9547 28.8264 31.1441 35.1302 22.7728 35.1302C14.4015 35.1302 7.59086 28.8264 7.59086 21.0781Z"
                            fill="#5F2DED" />
                          <path
                            d="M24.0389 29.2752C24.0389 29.9219 24.6053 30.4462 25.3041 30.4462H30.3647C31.0635 30.4462 31.6299 29.9219 31.6299 29.2752V23.4202H34.1602C34.6855 23.4202 35.1561 23.1198 35.3427 22.6653C35.5293 22.2109 35.3932 21.6969 35.0006 21.3739L23.6142 12.0059C23.1348 11.6115 22.4126 11.6115 21.9332 12.0059L10.5468 21.3739C10.1542 21.6969 10.0181 22.2109 10.2047 22.6653C10.3913 23.1198 10.862 23.4202 11.3873 23.4202H13.9177V29.2752C13.9177 29.9219 14.4841 30.4462 15.1828 30.4462H20.2435C20.9422 30.4462 21.5086 29.9219 21.5086 29.2752V25.7622H24.0389V29.2752ZM20.2435 23.4202C19.5447 23.4202 18.9783 23.9444 18.9783 24.5912V28.1042H16.448V22.2491C16.448 21.6024 15.8816 21.0781 15.1828 21.0781H14.715L22.7738 14.4478L30.8326 21.0781H30.3647C29.666 21.0781 29.0996 21.6024 29.0996 22.2491V28.1042H26.5692V24.5912C26.5692 23.9444 26.0028 23.4202 25.3041 23.4202H20.2435Z"
                            fill="#5F2DED" />
                        </svg> -->
                      </div>
                      <div class="contact__text">
                        <h5>{{ $t("account_proFile_Info") }}</h5>
                        <!-- <div class="contact__email">
                          <p>Digital Agency Network 2023</p>
                          <span>Eastbourne Terrace</span>
                        </div> -->
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                    @click="choose('iden')"
                  >
                    <div class="single__contact pcard">
                      <div class="contact__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="58"
                          height="58"
                          fill="#5F2DED"
                          class="bi bi bi-card-list"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                          />
                          <path
                            d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                          />
                        </svg>
                      </div>
                      <div class="contact__text">
                        <h5>{{ $t("account_proFile_dtl") }}</h5>
                      </div>
                    </div>
                  </div>

                  
                </div>

              </div>
            </div>

            <Profilelist v-if="auth.selectProfile === 'profile'"></Profilelist>
            <Details v-if="auth.selectProfile === 'details'"></Details>
            <Display v-if="auth.selectProfile === 'iden'"></Display>
            <IDcard v-if="(auth.selectProfile === 'idcard')"  ></IDcard>
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

import Profilelist from "@/components/profile/Profilelist.vue";
import Details from "@/components/profile/Details.vue";
import Display from "@/components/profile/Display.vue";
import IDcard from "@/components/profile/Idcard.vue";
import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { HistoryStore } from "@/stores/history";

import { useRoute } from "vue-router";
const auth = useAuthStore();

const route = useRoute();


await auth.displaycard();
const choose = async (item) => {
  const profile = await auth.SelectProfile(item);
};
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