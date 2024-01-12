<template>
  <!-- .contact__section__end -->


  <!-- contact__form__start -->
  <div class="contact__from__wraper sp_bottom_100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form__inner">
            <div class="contact__form__heading" data-aos="fade-up">
              <h3 class="text-center">{{ $t("profile_idcard") }}</h3>
              <!-- <p>Your email address will not be published. Required fields are marked * </p> -->
            </div>

            <div class="row">

            </div>
            <div class="gridarea__wraper gridarea__wraper__2 gridarea__course__list aos-init aos-animate"
              data-aos="fade-up" id="uploadCard">
              <div class="text-center">
                <h4>{{ $t("profile_idcard_front") }}</h4>
                <div class="frontCardUpload" v-if="store.formcard.idcard_front" style="overflow: hidden;">
                  <img class="cardImg" :src="coverimage(store.formcard.idcard_front)" alt="">
                  <input type="file" ref="fileInputFont" style="display: none;" accept="image/*">
                </div>
                <div class="frontCardUpload" v-else>
                  <img :src="coverimage('static/upload/2023/11/files-vOtznT6img.jpg')"
                   alt="">
                  <input type="file" ref="fileInputFont" style="display: none;">
                </div>
                <button class="btn btn-outline-primary" @click="changeFont" v-if="store.formdetail.verify_account !== 'system_active' ??
                disabled
                " >{{ $t("profile_idcard_front_upload") }}</button>
              </div>
              <div class="text-center">
                <h4>{{ $t("profile_idcard_back") }}</h4>

                <div class="frontCardUpload" v-if="store.formcard.idcard_back" style="overflow: hidden;">
                  <img class="cardImg" :src="coverimage(store.formcard.idcard_back)" alt="">
                  <input type="file" ref="fileInputBack" style="display: none;" accept="image/*">
                </div>
                <div class="frontCardUpload" v-else >
                  <img :src="coverimage('static/upload/2023/11/files-vOtznT6img.jpg')"
                   
                    alt="">
                  <input type="file" ref="fileInputBack" style="display: none;">
                </div>
                <button class="btn btn-outline-primary" @click="changeBack" v-if="store.formdetail.verify_account !== 'system_active' ??
                disabled
                "  >{{ $t("profile_idcard_back_upload") }}</button>
              </div>
            </div>

            <div class="gridarea__list row border-bottom pb-2">
              <button v-if="store.formdetail.verify_account !== 'system_active' ??
                disabled
                " type="button" class="btn btn-primary mt-0" @click="saveimage()">
                {{ $t("profile_idcard_save") }}
              </button>
            </div>


          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'

import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useAuthStore } from '@/stores/auth';
import ApiService from '@/services/api.service';
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { VerifyStore } from "@/stores/verify";
const { locale, setLocale } = useI18n();


const store = useAuthStore();


const router = useRouter();


const { getFormDetails } = storeToRefs(store);

await store.Zipcode();
await store.Country();





const rules = computed(() => {
  return {
    identification_number: {
      required: helpers.withMessage(
        "The Identification number field is required",
        required
      ),
      minLength: minLength(5),
    },
    user_address: {
      required: helpers.withMessage(
        "Adress field is required",
        required
      ),
      minLength: minLength(5),
    },
  };
});
const v$ = useVuelidate(rules, getFormDetails);

function coverimage(i) {
  let result = i.slice(0, 6);
  if (result === "static") {
    let im = ApiService.image(i);
    return im;
  } else {
    return i;
  }
}

onMounted(() => {
  fileInputFont.value.addEventListener('change', changeFileFont);
  fileInputBack.value.addEventListener('change', changeFileBack);
});

const saveimage = async () => {
  await store.savecard();
  await Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Saved successfully",
    showConfirmButton: false,
    timer: 1500,
  });

}
const fileInputFont = ref(null);
const fileInputBack = ref(null);
const changeFont = () => {

  // Trigger a click event on the file input element
  fileInputFont.value.click();
};

const changeBack = () => {
  // Trigger a click event on the file input element
  fileInputBack.value.click();
};
const changeFileBack = async (event) => {
  var input = event.target;
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    // Use FileReader to read the selected image and set it as the source for the <img> tag
    const reader = new FileReader();
    reader.onload = () => {
      //  this.imageUrl = reader.result;
      store.formcard.idcard_back = reader.result;
    };
    store.imagelist_back = input.files[0];
    reader.readAsDataURL(file);
  } else {
    // Reset the image URL if the selected file is not an image
    //   this.imageUrl = null;
    Swal.fire({

      text: 'Upload File Image Only!',
      icon: 'error',

    });
  }
};

const changeFileFont = async (event) => {
  var inputs = event.target;
  const file = event.target.files[0];
  // if (inputs.files) {
  //   console.log(inputs.files);
  //   var reader = new FileReader();
  //   reader.onload = (e) => {
  //     store.formcard.idcard_front = e.target.result;
  //   };
  //   store.imagelist_back = inputs.files[0];
  //   reader.readAsDataURL(inputs.files[0]);
  // }

  if (file && file.type.startsWith('image/')) {
    // Use FileReader to read the selected image and set it as the source for the <img> tag
    const reader = new FileReader();
    reader.onload = () => {
      //  this.imageUrl = reader.result;
      store.formcard.idcard_front = reader.result;
    };
    store.imagelist_font = inputs.files[0];
    reader.readAsDataURL(file);
  } else {

    Swal.fire({

      text: 'Upload File Image Only!',
      icon: 'error',

    });

  }
};

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

.exma {
  background-color: #5f2ded;
  color: white;
}

.send {
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
  background-color: #4CAF50;
  /* Green */
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

.answer-choice {
  background-color: rgb(247, 247, 247);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger {
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

.changeImg {
  position: absolute;
  visibility: hidden;
}

.gridarea__wraper:hover>.changeImg {
  visibility: visible;
}

.frontCardUpload {
  width: 262px;
  height: 192px;
  border: 1px solid rgb(156, 156, 156);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#uploadCard {
  display: flex;
  justify-content: space-evenly;
}

#uploadBtn {
  position: absolute;
}

.cardImg {
  width: 100%;
}</style>
