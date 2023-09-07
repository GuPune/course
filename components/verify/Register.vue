<template>
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner">
            <div class="contact__form__heading" data-aos="fade-up">
              <h3 style="text-align: center">1-Step Verification</h3>
            </div>
            <div class="row">
              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label">เลขบัตรประชาชน</label>
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.identification_number.$error"
                    >{{ v$.identification_number.$errors[0].$message }}</span
                  >
                  <input
                    type="text"
                    name="con_name"
                    id="con_name"
                    placeholder="เลขบัตรประชาชน*"
                    maxlength="13"
                    v-model="store.formdetail.identification_number"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.identification_number.$error,
                      'border-[#42d392] ': !v$.identification_number.$invalid,
                    }"
                    @change="v$.identification_number.$touch"
                    autocomplete="off"
                  />
                </div>
              </div>

              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label">วันเกิด</label>
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_birthday.$error"
                    >{{ v$.user_birthday.$errors[0].$message }}</span
                  >
                  <input
                    type="date"
                    name="con_email"
                    id="con_email"
                    placeholder="Enter Email Address*"
                    v-model="store.formdetail.user_birthday"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.user_birthday.$error,
                      'border-[#42d392] ': !v$.user_birthday.$invalid,
                    }"
                    @change="v$.user_birthday.$touch"
                    autocomplete="off"
                  />
                </div>
              </div>

              <div class="col-xl-12 mb-3" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <span
                    class="text-xs text-red-500"
                    style="color: red"
                    v-if="v$.user_address.$error"
                    >{{ v$.user_address.$errors[0].$message }}</span
                  >
                  <textarea
                    name="con_message"
                    id="con_message"
                    cols="10"
                    rows="10"
                    placeholder="ที่อยู่"
                    v-model="store.formdetail.user_address"
                    :class="{
                      'border-red-500 focus:border-red-500':
                        v$.user_address.$error,
                      'border-[#42d392] ': !v$.user_address.$invalid,
                    }"
                    @change="v$.user_address.$touch"
                    autocomplete="off"
                  ></textarea>
                  <div class="contact__icon">
                    <i class="icofont-pen-alt-2"></i>
                  </div>
                </div>
              </div>

              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label">zipcode</label>
                  <select
                    class="form-control"
                    v-model="store.formdetail.location_id"
                  >
                    <option
                      v-for="(zipcode, index) in store.zipcode"
                      :key="zipcode.id"
                      :value="zipcode.id"
                    >
                      {{ zipcode.zipcode_name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-xl-6" data-aos="fade-up">
                <div class="contact__input__wraper">
                  <label class="form__label">country</label>
                  <select
                    class="form-control"
                    v-model="store.formdetail.country_id"
                  >
                    <option
                      v-for="(country, x) in store.country"
                      :key="country.country_id"
                      :value="country.country_id"
                    >
                      {{ country.country_name_eng }}
                    </option>
                  </select>
                </div>
              </div>

              <span
                class="text-xs text-red-500"
                style="color: red"
                v-if="v$.user_img.$error"
                >{{ v$.user_img.$errors[0].$message }}</span
              >
              <div class="form-group mb-4 mt-3">
                <label for="exampleFormControlFile1">รูปโปรไฟล์</label>
                <span
                  class="text-xs text-red-500"
                  style="color: red"
                  v-if="store.imageReq == true"
                >
                  Invalid file selected</span
                >
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  @change="onFileChange"
                  ref="fileupload"
                  accept="image/*"
                />
              </div>
              <div>
                <div class="border rounded p-2 mt-3" id="showimg">
                  <p>แสดงรูปตรงนี้:</p>
                  <template v-if="store.formdetail.user_img">
                    <div class="row">
                      <div id="image-container" class="col-md-3 col-sm-4 col-6">
                        <div class="image-wrapper">
                          <img
                            :src="store.formdetail.user_img"
                            class="img-fluid"
                          />
                          <button @click="removeImage()" class="delete-button">
                            <i class="bi bi-x-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>

              <div class="col-xl-12" data-aos="fade-up">
                <div class="contact__button">
                  <button
                    type="submit"
                    value="submit"
                    class="default__button"
                    name="submit"
                    @click="sendotp()"
                  >
                    บันทึก
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

import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";

const router = useRouter();
const store = VerifyStore();
const auth = useAuthStore();
const { getForm } = storeToRefs(store);
const { getUser_id } = storeToRefs(store);
const { Zipcode } = VerifyStore();
const { Country } = VerifyStore();
const { SendOtp } = VerifyStore();

store.formdetail.user_id = auth.user_id;
await store.Zipcode();
await store.Country();

const rules = computed(() => {
  return {
    identification_number: {
      required: helpers.withMessage(
        "The identification Number name field is required",
        required
      ),
      minLength: minLength(1),
    },
    user_birthday: {
      required: helpers.withMessage("The Birthday field is required", required),
      minLength: minLength(1),
    },
    user_address: {
      required: helpers.withMessage("The Address field is required", required),
      minLength: minLength(1),
    },
    user_img: {
      required: helpers.withMessage(
        "The Image Profile field is required",
        required
      ),
      minLength: minLength(1),
    },
  };
});

const v$ = useVuelidate(rules, getForm);

const sendotp = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    const sendotp = await SendOtp();
    if (sendotp == true) {
      router.push("/otpconfirm");
    }
  }
};

const onFileChange = async (event) => {
  var input = event.target;
  if (input.files) {
    var reader = new FileReader();
    reader.onload = (e) => {
      store.formdetail.user_img = e.target.result;
    };
    store.imagelist = input.files[0];
    reader.readAsDataURL(input.files[0]);
  }
};

const removeImage = async () => {
  store.formdetail.user_img = null;
  const input = document.querySelector('input[type="file"]');
  input.value = "";
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
