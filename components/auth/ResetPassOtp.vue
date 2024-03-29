<template>

    <div class="col-xl-8 col-md-8 offset-md-2">
      <div class="card">
      <div class="card-header" style="background-color: #FEF301;text-align: center;font-size: 24px;"> ລືມລະຫັດຜ່ານ, ຂໍຕັ້ງລະຫັດຜ່ານໃໝ່, ຢືນຢັນ OTP</div>
      <div class="loginarea__wraper">
        <div class="login__heading">
        
          <p class="login__description">
            ກະລຸນາໃສ່ລະຫັດ OTP 6 ຕົວເລກ ທີ່ຖືກສົ່ງໄປເບີໂທຂອງທ່ານ 
          </p>
        </div>
        <form action="#">
          <div class="login__form">
            <div class="mb-4">
              <!-- <p>Didn't receive the OTP? <a href="#">Resend again</a></p> -->
            </div>
          </div>  
        </form>
        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                     <input
                        class="m-2 text-center form-control rounded" type="text"  ref="input1"  v-model="store.otp[0]" @input="moveFocus(1)"
                        maxlength="1"  />
                         <input class="m-2 text-center form-control rounded"  ref="input2"  v-model="store.otp[1]" @input="moveFocus(2)"
                        type="text" id="input2" maxlength="1"  /> 
                        <input class="m-2 text-center form-control rounded"  v-model="store.otp[2]" @input="moveFocus(3)"
                       type="text" id="input3" maxlength="1"   ref="input3"/>
                         <input class="m-2 text-center form-control rounded"  type="text" id="input4" ref="input4"   v-model="store.otp[3]" @input="moveFocus(4)"
                    maxlength="1"  /> 
                    <input class="m-2 text-center form-control rounded"  type="text" id="input5" ref="input5"   v-model="store.otp[4]" @input="moveFocus(5)"
                    maxlength="1"  /> 
                    <input class="m-2 text-center form-control rounded"  type="text" id="input6"   ref="input6"   v-model="store.otp[5]"  @input="sendotp()"
                    maxlength="1"  /> 
                </div>

          

             <span v-if="!store.otpisactive">
              <span
              class="text-xs text-red-500"
              style="color: red"
           
              >{{ $t("form_reset_pass_otp") }}</span
            >         
            </span>
                <div class="col-12" style="text-align: center">
                <button class="btn" style="width: 30%;background-color: #2AB0E5;" @click="sendotp()"><span style="color: white;">ຢືນຢັນ</span></button>
                            </div>
                            <br>
             <div class="col-12">
                                <div class="text-center"  @click="getotp()">
                                    <p class="mb-0">ບໍ່ໄດ້ຮັບລະຫັດ ? <a href="javascript:void(0);" class="text-warning">ສົ່ງໃໝ່ອີກຄັ້ງ</a></p>
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
import { useRoute } from "vue-router";
import { useLogin } from "@/stores/login";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const router = useRouter();
const store = useLogin()
const { Formreset } = storeToRefs(store);

const input1 = ref(null);
    const input2 = ref(null);
    const input3 = ref(null);
    const input4 = ref(null);
    const input5 = ref(null);
    const input6 = ref(null);

const rules = computed(() => {
  return {
    otp: {
      required: helpers.withMessage("OTP code field is required", required),
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, Formreset);
const reset = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
 
  }
};

const getotp = async () => {
let otp = await store.getOtpResetpassword();
};

const sendotp = async () => {
 
     for (let i = 0; i < store.otp.length; i++) {
        if(store.otp[i] == ''){
            store.otpisactive = false;
            break;
        }
       store.otpisactive = true;
    }
    if(store.otpisactive == true){



        let sendotp = await store.ResetverifyOTP();

      
    if(sendotp == true){
      router.push("/newspassword");
    }else {

      Swal.fire({
      title: "Unsuccessful!",
      text: "Failed to confirm OTP!",
      icon: "error",
    });

    }


    }

  

   // router.push("/newspassword");


};


const confirm = async () => {
    for (let i = 0; i < store.otp.length; i++) {
        if(store.otp[i] == ''){
            store.otpisactive = false;
            break;
        }
       store.otpisactive = true;
    }
    if(store.otpisactive == true){
          Swal.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  });
     let send = await ResetverifyOTP();
     if(send == true){
//let profile = await auth.getProfile()
let updatestatus = await auth.UpdateProfileafterOtp()


 await setTimeout(() => Swal.close(), 500);
await Swal.fire({
    position: "top-end",
    icon: "success",
    title: "ບັນທຶກສຳເລັດແລ້ວ",
    showConfirmButton: false,
    timer: 1500,
  });

  localStorage.removeItem('Userid')

store.otp[0] = '';
store.otp[1] = '';
store.otp[2] = '';
store.otp[3] = '';
store.otp[4] = '';
store.otp[5] = '';
       router.push('/');
     }else {
        store.otpisactive = false;
          setTimeout(() => Swal.close(), 500);
     }
    }
 
}


const moveFocus = (next) => {
      if (next === 1) {
        store.otp[0] = event.target.value.replace(/\D/g, "");
        if(isNaN(parseInt(store.otp[0])) === false){
          input2.value.focus();
        }
      //  input2.value.focus();
      } else if (next === 2) {
        store.otp[1] = event.target.value.replace(/\D/g, "");
        if(isNaN(parseInt(store.otp[1])) === false){
          input3.value.focus();
        }
       
      } else if (next === 3) {
        store.otp[2] = event.target.value.replace(/\D/g, "");
        if(isNaN(parseInt(store.otp[2])) === false){
          input4.value.focus();
        }
      } else if (next === 4) {
     
        store.otp[3] = event.target.value.replace(/\D/g, "");
        if(isNaN(parseInt(store.otp[3])) === false){
          input5.value.focus();
        }
      } else if (next === 5) {
        store.otp[4] = event.target.value.replace(/\D/g, "");
        if(isNaN(parseInt(store.otp[4])) === false){
          input6.value.focus();
        }
      
      }
     
};


const send = () => {
store.otp[5] = event.target.value.replace(/\D/g, "");
        if(isNaN(parseInt(store.otp[5])) === false){
       
       sendotpnumber();
        }

};

const sendotpnumber = async () => {
  for (let i = 0; i < store.otp.length; i++) {
        if(store.otp[i] == ''){
            store.otpisactive = false;
            break;
        }
       store.otpisactive = true;
    }
    if(store.otpisactive == true){
      let send = await store.ResetverifyOTP();

      if(send == true){
        router.push("/changepassword");
      }else {

      }
    }

};




</script>
<style scoped>
.inputs input {
    width: 40px;
    height: 40px
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0
}

</style>
