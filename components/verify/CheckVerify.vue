<template>
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner">
            <div class="contact__form__heading" data-aos="fade-up">
              <h3 style="text-align: center"> Check VRDLS</h3>
            </div>
            <div class="row">
              <div class="col-xl-12" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label"> STUNDENT ID</label>
              
                  <input
                    type="text"
                    name="con_name"
                    id="con_name"
                  
                    placeholder=" STUNDENT ID"
                    maxlength="20"
                    v-model="store.formvrdls.student_id"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.student_id.$error,
                      'border-[#42d392] ': !v$.student_id.$invalid,
                    }"
                    @change="v$.student_id.$touch"
                    @input="filterInputStudentId"
                    autocomplete="off"
                  />
                </div>

                <span v-if="locale == 'la'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.student_id.$error"
                    >{{ $t("form_d_iden") }}</span
                  >
                </span>

                <span v-if="locale == 'en'">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.student_id.$error"
                    >{{ $t("form_d_iden") }}</span
                  >
                </span>
              </div>

              

             

 
              <div class="col-xl-12" data-aos="fade-up">
                <div class="contact__button">
                  <button
                    type="submit"
                    value="submit"
                    class="default__button"
                    name="submit"
                    @click="sendCheckId()"
                  >
                    {{ $t("page_exam_report_del_confirm") }}
                  </button>
                  <p class="form-messege"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { VerifyStore } from "@/stores/verify";
import { useRoute } from "vue-router";
import ApiService  from "../../services/api.service";
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import Swal from "sweetalert2";
import len  from "../../locales/en.json";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();


const router = useRouter();
const store = VerifyStore();
const auth = useAuthStore();
const { getFormStuden } = storeToRefs(store);


store.formvrdls.user_id = auth.user_id;

 await store.ResetFetch();


const rules = computed(() => {
  return {
    student_id: {
      required: helpers.withMessage(
        "The identification Number name field is required",
        required
      ),
      minLength: minLength(1),
    },
  };
});

const v$ = useVuelidate(rules, getFormStuden);



const sendCheckId  = async () => {
 v$.value.$validate();
  if (!v$.value.$error) {
let checkvr = await store.CheckVR();
if(checkvr === false){
  await Swal.fire({
  icon: "error",
  title: "ຂ້ອຍຍັງບໍ່ໄດ້ຢືນຢັນຕົວຕົນຂອງຂ້ອຍເທື່ອ.!",
  showConfirmButton: false,
  timer: 1500
})
}
if(checkvr === true){

}

  }

}




const filterInputStudentId = async (event) => {
  const key = event.data;
      if (event.data === ' ') {
        store.formvrdls.student_id = store.formvrdls.student_id.substring(0, store.formvrdls.student_id.length - 1);
        return;
      }
      store.formvrdls.student_id = event.target.value.replace(/[!@#$%^&*(),.?":{}|<>]/g, '');
};












</script>
<style>
.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
}
#image-container img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}
#image-container .delete-button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border: none;
  padding: 2.5px 5px;
  cursor: pointer;
}
#image-container .image-wrapper {
  position: relative;
  display: inline-block;
  margin: 10px;
  border: 1px solid;
}
#image-container {
  width: fit-content;
  min-width: 200px;
  min-height: 200px;
  max-width: 300px;
  max-height: 300px;
}
#con_email {
  padding-right: 20px;
}

#con_email,
#con_name,
#con_message,
#showimg {
  background-color: white;
}
</style>
