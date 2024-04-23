<template>
  <div>
   
      <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                  <span style="font-size: 24px;font-weight: 400;">  {{ $t("page_exam_appoint_title") }}</span>
              </div>
              
        
            </div>
          </div>
        </div>
      </div>
    </div>

        <div class="container py-3 py-md-4 py-lg-5 appcontent">
        <div class="row">
         <div class="col-12 col-sm-12 col-lg-9" style="align-self: self-end;">
          <span>{{ $t("page_appoint_current") }}</span>
        </div>
  <div class="col-12 col-sm-12 col-lg-3">
         <button class="btn btn-primary" style="width: 100%;background-color: rgb(42, 176, 229);border-radius: 0px;" @click="goToMenu()">Add New Appointment</button>
        </div>

        </div>

      <article >
      <CurrentApp></CurrentApp>
        <section>
        <br><br>
        <span> {{ $t("page_appoint_pass") }}</span>
       <PassApp></PassApp>
        </section>
      </article>
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
import { AppointmentsStore } from "@/stores/appointment";

import CurrentApp from '@/components/appointment/CurrentApp.vue';
import PassApp from '@/components/appointment/PassApp.vue';
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();


const auth = useAuthStore();
const store = AppointmentsStore();
const router = useRouter();
const profile = await auth.getProfile();



store.user_id = auth.user_id;


await store.fetchApppointRes();
await store.fetchApppointResCalulat();


const goToMenu = async () => {
  router.push('/appointment/make');
};


</script>
<style scoped>
button {
  margin-top: 10px;
}

.nav-search {
  background-color: rgb(242 39 126);
}

.imgcard {
  width: 120px;
  height: 150px;
}

.btnContainer button {
  margin-right: 10px;
  width: 100px;
}

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

.type-image {
  background-color: pink;
  height: 80px;
  width: 120px;
  border-radius: 10px;
  margin-right: 20px;
}

.type-card {
  padding: 20px 20px;
  transition: .4s;
  cursor: pointer;
  border: 1px solid rgb(221, 221, 221);


}

.type-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 8px .2px rgb(221, 221, 221);
}

.type-detail>ul {
  font-size: 12px;
  margin-bottom: 5px;
}

.type-row>.col-lg-6 {
  margin-bottom: 20px;
}

.nav-search {
  z-index: 1;
}

@media (min-width: 701px) {
  .nav-search {
    position: sticky;
    top: 0;
  }

  .main_wrapper {
    overflow: visible !important;
  }
}

@media (max-width: 414px) {
  .nav-item {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}

.dateCard {
  background-color: white;
  border: 1px solid rgb(214, 214, 214);
  /* border-radius: 20px 20px 0px 0px; */
  transition: .2s;
}

.dateCard:hover {
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, .5);
  border-radius: 5px;
  transform: translateY(-5px)
}

.scrollContainer {
  /* Set initial overflow-x to hidden to hide horizontal scrollbar */
  overflow-x: scroll;
}

.scrollContainer::-webkit-scrollbar {
  height: 6px;
}

.scrollContainer::-webkit-scrollbar-track {
  border-radius: 10px;
}

.scrollContainer::-webkit-scrollbar-thumb {
  background-color: rgb(242 39 126);
  border-radius: 100px;
}
</style>