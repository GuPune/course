<template>
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner">
            <div class="contact__form__heading" data-aos="fade-up">
              <h3 style="text-align:center;">1-Step Verification</h3>
            </div>
            <form id="contact-form" class="contact-form" action="mail.php" method="post">
              <div class="row">
                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <label class="form__label">เลขบัตรประชาชน</label>
                    <input type="text" name="con_name" id="con_name" placeholder="เลขบัตรประชาชน*">

                  </div>
                </div>

                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <label class="form__label">วันเกิด</label>
                    <input type="date" name="con_email" id="con_email" placeholder="Enter Email Address*">
                  </div>
                </div>

                <div class="col-xl-12" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <textarea name="con_message" id="con_message" cols="10" rows="10"
                      placeholder="Enter Your Message here"></textarea>
                    <div class="contact__icon">
                      <i class="icofont-pen-alt-2"></i>
                    </div>
                  </div>
                </div>


                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <label class="form__label">zipcode</label>
                    <select class="form-control">
                      <option v-for="(zipcode, index) in store.zipcode" :key="zipcode.id" :value="zipcode.id">
                        {{ zipcode.zipcode_name }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-xl-6" data-aos="fade-up">
                  <div class="contact__input__wraper">
                    <label class="form__label">country</label>
                    <select class="form-control">
                      <option v-for="(country, x) in store.country" :key="country.country_id" :value="country.country_id">
                        {{ country.country_name_eng }}</option>
                    </select>
                  </div>
                </div>

                  <div class="form-group mb-4 mt-3">
      <label for="exampleFormControlFile1">รูปภาพหน้าข่าว</label> <span class="text-xs text-red-500" style="color:red"
        v-if="store.imageReq == true"> Invalid file selected</span>
      <input type="file" class="form-control-file" id="exampleFormControlFile1"  @change="onFileChange"
        ref="fileupload" accept="image/*">
    </div>
    <div class="border p-2 mt-3">
      <p>แสดงรูปตรงนี้:</p>
      <template  v-if="store.image">
        <div class="row">
          <div id="image-container" class="col-md-3 col-sm-4 col-6" >
            <div class="image-wrapper">
              <img :src="store.image" class="img-fluid" />
              <button @click="removeImage()" class="delete-button"><i class="bi bi-x-lg"></i></button>
            </div>
          </div>
        </div>
      </template>
    </div>



                <div class="col-xl-12" data-aos="fade-up">
                  <div class="contact__button">
                    <button type="submit" value="submit" class="default__button" name="submit">Post a Comment</button>
                    <p class="form-messege"></p>
                  </div>
                </div>



              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { VerifyStore } from '@/stores/verify';
import { useRoute } from 'vue-router'

import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

const router = useRouter();
const store = VerifyStore()



const { Zipcode } = VerifyStore();
const { Country } = VerifyStore();

await store.Zipcode();
await store.Country();


const rules = computed(() => {
  return {
    fname: {
      required: helpers.withMessage('The First name field is required', required),
      minLength: minLength(6),
    },
    lname: {
      required: helpers.withMessage('The Last name field is required', required),
      minLength: minLength(6),
    },
    username: {
      required: helpers.withMessage('The username field is required', required),
      minLength: minLength(6),
    },
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
    tel: {
      required: helpers.withMessage('The tel field is required', required),
      minLength: minLength(6),
    },
    confirmPassword: {
      required: helpers.withMessage('The password confirmation field is required', required),
      sameAs: helpers.withMessage("Passwords don't match", sameAs(formDataregister.password)),
    },
    accp: {
      required: helpers.withMessage('Accept the Terms and Privacy Policy', required),
      sameAs: helpers.withMessage("Passwords don't xxx", sameAs(true)),
    },

  };
});





const register = async () => {



};


const onFileChange = async (event) => {
   var input = event.target;
       if (input.files) {
         var reader = new FileReader();
         reader.onload = (e) => {
           store.image = e.target.result;
         }
         store.imagelist=input.files[0];
         reader.readAsDataURL(input.files[0]);
       }
 }

const removeImage = async () => {
store.image = null;
const input = document.querySelector('input[type="file"]');
  input.value = '';
}





</script>
<style>

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
}
#image-container img{
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
</style>
