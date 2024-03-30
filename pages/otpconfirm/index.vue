


<template>

    <div id="app">


        <div class="container height-100 d-flex justify-content-center align-items-center">
        
            <div class="position-relative">
                <div class="header" style="background-color: yellow;text-align: center;font-size: 20px;">ລືມລະຫັດຜ່ານ, ຂໍຕັ້ງລະຫັດຜ່ານໃໝ່, ຢືນຢັນ OTP</div>
                <div class="card p-2 text-center">
                    ກະລຸນາໃສ່ລະຫັດ OTP 6 ຕົວເລກ ທີ່ຖືກສົ່ງໄປເບີໂທຂອງທ່ານ 
                    <!-- <h6>{{ $t("page_verify_one_time") }} <br> </h6> -->
                    <div> <span>ໄດ້ສົ່ງໄປທີ່ເບີ</span> <small>{{auth.formuser.user_phone}}</small> </div>
                    <span class="text-xs text-red-500" style="color:red"
        v-if="store.otpisactive == false">{{ $t("page_verify_step3") }}</span>
                    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                         <input
                            class="m-2 text-center form-control rounded" type="text" v-model="store.otp[0]" @input="moveFocus(1)" ref="input1"
                            maxlength="1"  />
                             <input class="m-2 text-center form-control rounded" v-model="store.otp[1]" @input="moveFocus(2)" ref="input2"
                            type="text" id="input2" maxlength="1"  /> 
                            <input class="m-2 text-center form-control rounded"
                           type="text" id="input3" maxlength="1"    v-model="store.otp[2]" @input="moveFocus(3)" ref="input3"/>
                             <input class="m-2 text-center form-control rounded"  type="text" id="input4"  v-model="store.otp[3]" @input="moveFocus(4)" ref="input4" 
                        maxlength="1"  /> 
                        <input class="m-2 text-center form-control rounded"  type="text" id="input5"  v-model="store.otp[4]" @input="moveFocus(5)" ref="input5" 
                        maxlength="1"  /> 
                        <input class="m-2 text-center form-control rounded"  type="text" id="input6"  v-model="store.otp[5]"  ref="input6" 
                        maxlength="1"  /> 
                    </div>
                    
                    <br>

                 <div class="col-12">
                    <button class="btn" style="width: 30%;background-color: aqua;" @click="confirm()"><span style="color: white;">ຢືນຢັນ</span></button>
                                </div>
                                <br>
                 <div class="col-12">
                                    <div class="text-center"  @click="sendotp()">
                                        <p class="mb-0">ບໍ່ໄດ້ຮັບລະຫັດ ? <a href="javascript:void(0);" class="text-warning">ສົ່ງໃໝ່ອີກຄັ້ງ</a></p>
                                    </div>
                                </div>
             
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { VerifyStore } from '@/stores/verify'
import { useRoute } from 'vue-router'
import Swal from "sweetalert2";
import Cookies from 'js-cookie';
  import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
definePageMeta({
    layout: "blank"
});

const auth = useAuthStore()

const value = Cookies.get('user_id')
auth.user_id = value
const router = useRouter();
await auth.getProfile()


const input1 = ref(null);
    const input2 = ref(null);
    const input3 = ref(null);
    const input4 = ref(null);
    const input5 = ref(null);
    const input6 = ref(null);

const store = VerifyStore()
store.user_id = value
const { setOTP } = VerifyStore();
const { verifyOTP } = VerifyStore();



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
     let send = await verifyOTP();
     if(send == true){
let profile = await auth.getProfile()
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
        input2.value.focus();
      } else if (next === 2) {
        input3.value.focus();
      } else if (next === 3) {
        input4.value.focus();
      } else if (next === 4) {
        input5.value.focus();
      } else if (next === 5) {
        input6.value.focus();
      }
};
const sendotp = async () => {

   await auth.getOtp()
};



 
</script>

<style scoped>

body {
    background-color: #6F1667
}

.height-100 {
    height: 100vh
}

.card {
    width: 500px;
    border: none;
    height: 300px;
    /* box-shadow: 0px 5px 20px 0px #bd9aba; */
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center
}

.card h6 {
    color: #b009a2;
    font-size: 20px
}

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

.form-control:focus {
    box-shadow: none;
    border: 2px solid #6F1667
}

.validate {
    border-radius: 20px;
    height: 40px;
    background-color: #6F1667;
    border: 1px solid #6F1667;
    width: 100%
}

.content a {
    color: #D64F4F;
    transition: all 0.5s
}

.content a:hover {
    color: #6F1667
}


</style>