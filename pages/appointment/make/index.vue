<template>
  <div style="background-color: var(--dotColor)">
    <div class="container py-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="breadcrumb__content__wraper" data-aos="fade-up">
            <div class="breadcrumb__title">
            
              <span style="font-size: 24px;font-weight: 400;">  {{ $t("page_appoint_make") }}</span>
            </div>
            <div class="breadcrumb__inner">
              <!-- <ul>
                <li>
                  <a href="#">{{ $t("home") }}</a>
                </li>
                <li>{{ $t("page_appoint") }}</li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 

<FormAppoint></FormAppoint>




</template>
<script lang="ts" setup>
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
 import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { AppointmentsStore } from "@/stores/appointment";
import FormAppoint from '@/components/appointment/make/FormAppoint.vue';
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";

import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();



const auth = useAuthStore();
const store = AppointmentsStore();
const router = useRouter();
const { getformapp } = storeToRefs(store);


store.user_id = auth.user_id;
store.form.date_event = 0
store.form.ap_learn_type = 2
store.form.dlt_code = ''


</script>


<style scoped>
.appcontent {
  min-height: 400px;
}
.card {
  margin: 0px 250px 0px 250px;
}
.btn-appi{
  width: 50%;
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

.btn-appi{
  width: 100%;
}
}
</style>