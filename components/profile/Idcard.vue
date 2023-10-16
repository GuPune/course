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
                <div class="frontCardUpload" v-if="store.formcard.idcard_front">
                  <img class="cardImg" :src="coverimage(store.formcard.idcard_front)" alt="">
                  <input type="file" ref="fileInputFont" style="display: none;" accept="image/*">
                </div>
                <div class="frontCardUpload" v-else>
                  <img class="cardImg"
                    src="data:image/jpeg;base64,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"
                    alt="">
                  <input type="file" ref="fileInputFont" style="display: none;">
                </div>
                <button class="btn btn-outline-primary" @click="changeFont" v-if="store.formdetail.verify_account !== 'system_active' ??
                disabled
                " >{{ $t("profile_idcard_front_upload") }}</button>
              </div>
              <div class="text-center">
                <h4>{{ $t("profile_idcard_back") }}</h4>

                <div class="frontCardUpload" v-if="store.formcard.idcard_back">
                  <img class="cardImg" :src="coverimage(store.formcard.idcard_back)" alt="">
                  <input type="file" ref="fileInputBack" style="display: none;" accept="image/*">
                </div>
                <div class="frontCardUpload" v-else>
                  <img
                    src="data:image/jpeg;base64,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"
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
    title: "บันทึกสำเร็จ",
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
